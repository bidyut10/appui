/** Shared analytics constants — collection names, intervals, and limits. */
export const ACTIVE_WINDOW_MS = 5 * 60 * 1000;
export const HEARTBEAT_INTERVAL_MS = 3 * 60 * 1000;
export const HEARTBEAT_SERVER_SKIP_MS = 2 * 60 * 1000;
export const TOP_LIST_LIMIT = 50;
export const MAX_BATCH_EVENTS = 8;

export const SESSIONS = "analytics_sessions";
export const PAGE_VIEWS = "analytics_page_views";
export const COMPONENT_CLICKS = "analytics_component_clicks";
export const AUTH_COOKIE = "oui_analytics_auth";

export const LOCAL_GEO = {
  country: "LOCAL",
  region: "—",
  city: "—",
} as const;
