/**
 * MongoDB connection for analytics — one shared client in serverless.
 *
 * Uses a global promise so Vercel warm invocations reuse the same socket.
 * Indexes are created once on first successful connect.
 */
import { MongoClient, type Db } from "mongodb";

import {
  COMPONENT_CLICKS,
  PAGE_VIEWS,
  SESSIONS,
} from "@/lib/analytics/constants";
import { INQUIRIES } from "@/lib/inquiries/constants";
import {
  isSrvResolutionError,
  resolveMongoUri,
  srvToStandardUri,
} from "@/lib/analytics/server/connection/resolve-srv-uri";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const CLIENT_OPTIONS = {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
};

function getMongoUri(): string | undefined {
  return process.env.MONGODB_URI?.trim() || undefined;
}

function maskUri(uri: string): string {
  return uri.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@");
}

async function connectWithUri(uri: string): Promise<MongoClient> {
  const client = new MongoClient(uri, CLIENT_OPTIONS);
  await client.connect();
  return client;
}

async function connectClient(): Promise<MongoClient> {
  const rawUri = getMongoUri();
  if (!rawUri) {
    throw new Error("Missing MONGODB_URI");
  }

  const resolvedUri = await resolveMongoUri(rawUri);

  try {
    const client = await connectWithUri(resolvedUri);

    if (process.env.NODE_ENV === "development") {
      const via =
        resolvedUri === rawUri && rawUri.startsWith("mongodb+srv://")
          ? "SRV"
          : "resolved";
      console.info(
        `[analytics] MongoDB connected (${via}) — ${maskUri(rawUri)}`,
      );
    }

    return client;
  } catch (error) {
    // Driver SRV lookup failed — resolve hosts via public DNS and retry once.
    if (rawUri.startsWith("mongodb+srv://") && isSrvResolutionError(error)) {
      const standardUri = await srvToStandardUri(rawUri);
      const client = await connectWithUri(standardUri);

      if (process.env.NODE_ENV === "development") {
        console.info(
          `[analytics] MongoDB connected (SRV resolved via public DNS) — ${maskUri(rawUri)}`,
        );
      }

      return client;
    }

    throw error;
  }
}

function getClientPromise(): Promise<MongoClient> | null {
  if (!getMongoUri()) return null;

  if (!globalThis._mongoClientPromise) {
    globalThis._mongoClientPromise = connectClient().catch((error) => {
      globalThis._mongoClientPromise = undefined;
      throw error;
    });
  }

  return globalThis._mongoClientPromise;
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
    db
      .collection(INQUIRIES)
      .createIndexes([
        { key: { createdAt: -1 } },
        { key: { email: 1, createdAt: -1 } },
        { key: { type: 1 } },
      ]),
  ]);

  indexesReady = true;
}

export function getMongoConnectionHint(): string {
  return "Check MONGODB_URI credentials, Atlas IP allowlist (0.0.0.0/0 for Vercel), and that your cluster is running.";
}

export async function getAnalyticsDb(): Promise<Db | null> {
  const clientPromise = getClientPromise();
  if (clientPromise === null) return null;

  try {
    const client = await clientPromise;
    const db = client.db();
    await ensureIndexes(db);
    return db;
  } catch (error) {
    globalThis._mongoClientPromise = undefined;

    if (process.env.NODE_ENV === "development") {
      console.error("[analytics] MongoDB connection failed:", error);
      console.error(`[analytics] Hint: ${getMongoConnectionHint()}`);
    }

    return null;
  }
}

// True when both Mongo URI and dashboard password are set in env.
export function isAnalyticsConfigured(): boolean {
  return Boolean(getMongoUri() && process.env.ANALYTICS_DASHBOARD_SECRET);
}
