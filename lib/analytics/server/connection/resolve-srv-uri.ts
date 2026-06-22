/**
 * Resolves mongodb+srv:// URIs when the system DNS cannot handle SRV lookups.
 *
 * On some Windows setups the Node driver throws querySrv ECONNREFUSED because the
 * OS resolver refuses SRV queries. We fall back to a dedicated public-DNS resolver,
 * read Atlas SRV + TXT records, and build a standard mongodb:// connection string.
 */
import dns from "node:dns";
import { Resolver } from "node:dns/promises";

const SRV_PREFIX = "mongodb+srv://";
const MONGO_SCHEME = "mongodb://";
const SRV_SERVICE = "_mongodb._tcp.";

function ipv4(a: number, b: number, c: number, d: number): string {
  return `${a}.${b}.${c}.${d}`;
}

let publicDnsResolver: Resolver | undefined;

function getPublicDnsResolver(): Resolver {
  if (!publicDnsResolver) {
    publicDnsResolver = new Resolver();
    // Google + Cloudflare public recursive DNS — only used for Atlas SRV fallback.
    publicDnsResolver.setServers([
      ipv4(8, 8, 8, 8),
      ipv4(1, 1, 1, 1),
      ipv4(8, 8, 4, 4),
    ]);
  }
  return publicDnsResolver;
}

function resolveSrvRecords(host: string, resolver: Resolver) {
  return resolver.resolveSrv(`${SRV_SERVICE}${host}`);
}

function resolveTxtRecords(host: string, resolver: Resolver) {
  return resolver.resolveTxt(host);
}

// Pulls the cluster hostname from a mongodb+srv connection string.
function extractSrvHost(uri: string): string {
  const withoutScheme = uri.slice(SRV_PREFIX.length);
  const hostStart = withoutScheme.lastIndexOf("@") + 1;
  const hostPart = hostStart > 0 ? withoutScheme.slice(hostStart) : withoutScheme;
  const end = hostPart.search(/[/?]/);
  return end === -1 ? hostPart : hostPart.slice(0, end);
}

// Splits mongodb+srv://user:pass@host/db?opts into connectable parts.
function parseSrvUri(uri: string): {
  credentials: string;
  host: string;
  pathname: string;
  search: string;
} {
  const withoutScheme = uri.slice(SRV_PREFIX.length);
  const slashIndex = withoutScheme.indexOf("/");
  const authority =
    slashIndex === -1 ? withoutScheme : withoutScheme.slice(0, slashIndex);
  const pathAndQuery =
    slashIndex === -1 ? "" : withoutScheme.slice(slashIndex);

  const atIndex = authority.lastIndexOf("@");
  const credentials = atIndex >= 0 ? authority.slice(0, atIndex) : "";
  const host = atIndex >= 0 ? authority.slice(atIndex + 1) : authority;

  const queryIndex = pathAndQuery.indexOf("?");
  const pathname =
    queryIndex === -1 ? pathAndQuery : pathAndQuery.slice(0, queryIndex);
  const search = queryIndex === -1 ? "" : pathAndQuery.slice(queryIndex + 1);

  return { credentials, host, pathname, search };
}

function mergeQueryParams(
  existing: string,
  txtRecord: string,
): URLSearchParams {
  const params = new URLSearchParams(existing);

  for (const part of txtRecord.split("&")) {
    const [key, value] = part.split("=");
    if (key && value && !params.has(key)) {
      params.set(key, value);
    }
  }

  if (!params.has("ssl") && !params.has("tls")) {
    params.set("ssl", "true");
  }

  return params;
}

function buildMongoStandardUri(
  credentials: string,
  hosts: string,
  pathname: string,
  query: string,
): string {
  const auth = credentials ? `${credentials}@` : "";
  const dbPath = pathname || "";
  const querySuffix = query.length > 0 ? `?${query}` : "";
  return `${MONGO_SCHEME}${auth}${hosts}${dbPath}${querySuffix}`;
}

// Converts mongodb+srv://… to mongodb://… using SRV + TXT records from public DNS.
export async function srvToStandardUri(srvUri: string): Promise<string> {
  const { credentials, host, pathname, search } = parseSrvUri(srvUri);
  const resolver = getPublicDnsResolver();

  const srvRecords = await resolveSrvRecords(host, resolver);
  if (srvRecords.length === 0) {
    throw new Error(`No SRV records found for ${host}`);
  }

  const hosts = srvRecords
    .map((record) => `${record.name}:${record.port}`)
    .join(",");

  let txtValue = "";
  try {
    const txtRecords = await resolveTxtRecords(host, resolver);
    txtValue = txtRecords.map((parts) => parts.join("")).join("&");
  } catch {
    // TXT is optional — Atlas usually provides it but connection may still work.
  }

  const query = mergeQueryParams(search, txtValue).toString();
  return buildMongoStandardUri(credentials, hosts, pathname, query);
}

/**
 * Returns a URI the driver can connect with. SRV strings are resolved via public DNS
 * when the local resolver fails (querySrv ECONNREFUSED on Windows, etc.).
 */
export async function resolveMongoUri(uri: string): Promise<string> {
  if (!uri.startsWith(SRV_PREFIX)) {
    return uri;
  }

  const host = extractSrvHost(uri);

  try {
    await dns.promises.resolveSrv(`${SRV_SERVICE}${host}`);
    return uri;
  } catch {
    return srvToStandardUri(uri);
  }
}

export function isSrvResolutionError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const err = error as { code?: string; syscall?: string };
  return err.code === "ECONNREFUSED" && err.syscall === "querySrv";
}
