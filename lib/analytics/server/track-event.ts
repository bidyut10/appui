/**
 * Writes analytics events to MongoDB and keeps session documents in sync.
 *
 * Sessions are upserted on every event so "live users" can query lastActiveAt.
 * Heartbeats are throttled server-side so tabs polling every 3 min don't spam writes.
 */
import {
  COMPONENT_CLICKS,
  HEARTBEAT_SERVER_SKIP_MS,
  PAGE_VIEWS,
  SESSIONS,
} from "@/lib/analytics/constants";
import { getAnalyticsDb } from "@/lib/analytics/server/connection/db";
import type { GeoLocation, TrackPayload } from "@/lib/analytics/types";

async function touchSession(
  payload: TrackPayload,
  geo: GeoLocation,
  pageDelta = 0,
  durationSec?: number,
): Promise<void> {
  const db = await getAnalyticsDb();
  if (!db) return;

  const now = new Date();
  const setFields: Record<string, unknown> = {
    visitorId: payload.visitorId,
    lastActiveAt: now,
    country: geo.country,
    region: geo.region,
    city: geo.city,
    lastPath: payload.path,
  };

  if (durationSec !== undefined) {
    setFields.durationSec = durationSec;
    setFields.endedAt = now;
  }

  await db.collection(SESSIONS).updateOne(
    { sessionId: payload.sessionId },
    {
      $set: setFields,
      $setOnInsert: {
        sessionId: payload.sessionId,
        startedAt: now,
      },
      $inc: pageDelta > 0 ? { pageCount: pageDelta } : {},
    },
    { upsert: true },
  );
}

async function shouldSkipHeartbeat(sessionId: string): Promise<boolean> {
  const db = await getAnalyticsDb();
  if (!db) return true;

  const session = await db
    .collection(SESSIONS)
    .findOne({ sessionId }, { projection: { lastActiveAt: 1 } });

  if (!session?.lastActiveAt) return false;

  const lastActiveAt =
    session.lastActiveAt instanceof Date
      ? session.lastActiveAt.getTime()
      : new Date(String(session.lastActiveAt)).getTime();

  return Date.now() - lastActiveAt < HEARTBEAT_SERVER_SKIP_MS;
}

export async function trackEvent(
  payload: TrackPayload,
  geo: GeoLocation,
): Promise<void> {
  const db = await getAnalyticsDb();
  if (!db) return;

  const now = new Date();

  switch (payload.type) {
    case "pageview": {
      await touchSession(payload, geo, 1);
      await db.collection(PAGE_VIEWS).insertOne({
        path: payload.path,
        sessionId: payload.sessionId,
        visitorId: payload.visitorId,
        timestamp: now,
        country: geo.country,
        region: geo.region,
        city: geo.city,
      });
      break;
    }
    case "component_click": {
      await touchSession(payload, geo);
      await db.collection(COMPONENT_CLICKS).insertOne({
        slug: payload.slug,
        path: payload.path,
        sessionId: payload.sessionId,
        visitorId: payload.visitorId,
        timestamp: now,
        country: geo.country,
        region: geo.region,
        city: geo.city,
      });
      break;
    }
    case "heartbeat": {
      if (await shouldSkipHeartbeat(payload.sessionId)) return;
      await touchSession(payload, geo);
      break;
    }
    case "leave": {
      await touchSession(payload, geo, 0, payload.durationSec);
      break;
    }
  }
}

export async function trackEvents(
  payloads: TrackPayload[],
  geo: GeoLocation,
): Promise<void> {
  for (const payload of payloads) {
    await trackEvent(payload, geo);
  }
}
