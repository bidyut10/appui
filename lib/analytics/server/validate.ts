/**
 * Validates incoming track payloads before they touch the database.
 *
 * We reject malformed IDs, paths outside the public site, and oversized batches
 * so the track endpoint can't be abused as a generic write sink.
 */
import type { TrackPayload } from "@/lib/analytics/types";
import { MAX_BATCH_EVENTS } from "@/lib/analytics/constants";

const ID_RE = /^[a-f0-9-]{16,64}$/i;
const SLUG_RE = /^[a-z0-9-]{1,80}$/;

export function sanitizePath(path: unknown): string | null {
  if (typeof path !== "string" || !path.startsWith("/")) return null;
  if (path.length > 200) return null;
  if (path.startsWith("/dashboard") || path.startsWith("/api/")) return null;
  return path;
}

export function parseTrackPayload(body: unknown): TrackPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const type = data.type;

  if (
    type !== "pageview" &&
    type !== "component_click" &&
    type !== "heartbeat" &&
    type !== "leave"
  ) {
    return null;
  }

  const sessionId =
    typeof data.sessionId === "string" ? data.sessionId.trim() : "";
  const visitorId =
    typeof data.visitorId === "string" ? data.visitorId.trim() : "";
  const path = sanitizePath(data.path);

  if (!ID_RE.test(sessionId) || !ID_RE.test(visitorId) || !path) {
    return null;
  }

  const payload: TrackPayload = { type, sessionId, visitorId, path };

  if (type === "component_click") {
    const slug = typeof data.slug === "string" ? data.slug.trim() : "";
    if (!SLUG_RE.test(slug)) return null;
    payload.slug = slug;
  }

  if (type === "leave") {
    const durationSec = Number(data.durationSec);
    if (
      !Number.isFinite(durationSec) ||
      durationSec < 0 ||
      durationSec > 86400
    ) {
      return null;
    }
    payload.durationSec = Math.round(durationSec);
  }

  return payload;
}

// Accepts a single event or { events: [...] } from sendBeacon batches.
export function parseTrackPayloads(body: unknown): TrackPayload[] {
  if (!body || typeof body !== "object") return [];

  const data = body as Record<string, unknown>;

  if (Array.isArray(data.events)) {
    return data.events
      .map((item) => parseTrackPayload(item))
      .filter((item): item is TrackPayload => item !== null)
      .slice(0, MAX_BATCH_EVENTS);
  }

  const single = parseTrackPayload(body);
  return single ? [single] : [];
}
