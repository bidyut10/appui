/** MongoDB connection singleton for Vercel serverless. */
import dns from "node:dns";

import { MongoClient, type Db } from "mongodb";

import {
  COMPONENT_CLICKS,
  PAGE_VIEWS,
  SESSIONS,
} from "@/lib/analytics/constants";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  // eslint-disable-next-line no-var
  var _mongoConnectedUri: string | undefined;
}

const CLIENT_OPTIONS = {
  serverSelectionTimeoutMS: 8000,
  connectTimeoutMS: 8000,
};

function getConnectionUris(): string[] {
  const srv = process.env.MONGODB_URI?.trim();
  const direct = process.env.MONGODB_URI_DIRECT?.trim();
  const uris: string[] = [];

  if (process.env.NODE_ENV === "development" && direct) {
    uris.push(direct);
  }

  if (srv) uris.push(srv);
  if (direct && direct !== srv) uris.push(direct);

  return [...new Set(uris)];
}

function configureDns(uri: string): void {
  if (!uri.startsWith("mongodb+srv://")) return;

  // Windows/local networks often block SRV on the system DNS — use public resolvers.
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
  dns.setDefaultResultOrder("ipv4first");
}

function maskUri(uri: string): string {
  return uri.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@");
}

async function connectClient(): Promise<MongoClient> {
  const uris = getConnectionUris();
  if (uris.length === 0) {
    throw new Error("Missing MONGODB_URI");
  }

  let lastError: unknown;

  for (const uri of uris) {
    try {
      configureDns(uri);
      const client = new MongoClient(uri, CLIENT_OPTIONS);
      await client.connect();

      if (process.env.NODE_ENV === "development") {
        console.info(
          `[analytics] MongoDB connected via ${uri.startsWith("mongodb+srv://") ? "SRV" : "standard"} URI (${maskUri(uri)})`,
        );
      }

      global._mongoConnectedUri = uri;
      return client;
    } catch (error) {
      lastError = error;

      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[analytics] MongoDB attempt failed (${maskUri(uri)}):`,
          error instanceof Error ? error.message : error,
        );
      }
    }
  }

  throw lastError;
}

function getClientPromise(): Promise<MongoClient> | null {
  if (getConnectionUris().length === 0) return null;

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connectClient().catch((error) => {
      global._mongoClientPromise = undefined;
      global._mongoConnectedUri = undefined;
      throw error;
    });
  }

  return global._mongoClientPromise;
}

let indexesReady = false;

async function ensureIndexes(db: Db): Promise<void> {
  if (indexesReady) return;

  await Promise.all([
    db
      .collection(SESSIONS)
      .createIndexes([
        { key: { sessionId: 1 }, unique: true },
        { key: { visitorId: 1 } },
        { key: { lastActiveAt: -1 } },
        { key: { startedAt: -1 } },
      ]),
    db
      .collection(PAGE_VIEWS)
      .createIndexes([
        { key: { timestamp: -1 } },
        { key: { path: 1 } },
        { key: { sessionId: 1 } },
        { key: { visitorId: 1 } },
      ]),
    db
      .collection(COMPONENT_CLICKS)
      .createIndexes([
        { key: { timestamp: -1 } },
        { key: { slug: 1 } },
        { key: { sessionId: 1 } },
      ]),
  ]);

  indexesReady = true;
}

export function getMongoConnectionHint(): string {
  if (process.env.MONGODB_URI_DIRECT) {
    return "Check MONGODB_URI_DIRECT credentials, Atlas IP allowlist, and that your cluster is running.";
  }

  return "Local Windows often blocks mongodb+srv DNS. In Atlas → Connect → Drivers, copy the standard mongodb:// URI into MONGODB_URI_DIRECT in .env.local, then restart npm run dev.";
}

export async function getAnalyticsDb(): Promise<Db | null> {
  const clientPromise = getClientPromise();
  if (!clientPromise) return null;

  try {
    const client = await clientPromise;
    const db = client.db();
    await ensureIndexes(db);
    return db;
  } catch (error) {
    global._mongoClientPromise = undefined;
    global._mongoConnectedUri = undefined;

    if (process.env.NODE_ENV === "development") {
      console.error("[analytics] MongoDB connection failed:", error);
      console.error(`[analytics] Hint: ${getMongoConnectionHint()}`);
    }

    return null;
  }
}

export function isAnalyticsConfigured(): boolean {
  return Boolean(
    getConnectionUris().length > 0 && process.env.ANALYTICS_DASHBOARD_SECRET,
  );
}
