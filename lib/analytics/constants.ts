/**
 * Shared numbers and collection names used across client + server.
 * Tweak intervals here if you want fewer DB writes or a wider "live user" window.
*/

// How far back we count someone as "live" on the dashboard.
export const ACTIVE_WINDOW_MS = 5 * 60 * 1000;

// How often the browser sends a heartbeat (kept sparse on purpose).
export const HEARTBEAT_INTERVAL_MS = 3 * 60 * 1000;

// Server ignores heartbeats if the session was already touched within this window.
export const HEARTBEAT_SERVER_SKIP_MS = 2 * 60 * 1000;

// Max rows shown in each dashboard ranking list.
export const TOP_LIST_LIMIT = 50;

// Max events accepted in a single batched track request.
export const MAX_BATCH_EVENTS = 8;

// MongoDB collection names — one place so typos don't slip in.
export const SESSIONS = "analytics_sessions";
export const PAGE_VIEWS = "analytics_page_views";
export const COMPONENT_CLICKS = "analytics_component_clicks";

// HttpOnly cookie that gates /dashboard after password login.
export const AUTH_COOKIE = "oui_analytics_auth";

// Stored when we can't resolve country (local dev, missing Vercel geo).
export const LOCAL_GEO = {
  country: "LOCAL",
  region: "—",
  city: "—",
} as const;
