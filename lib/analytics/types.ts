export type AnalyticsEventType =
  | "pageview"
  | "component_click"
  | "heartbeat"
  | "leave";

export type GeoLocation = {
  country: string;
  region: string;
  city: string;
};

/** Payload sent from the browser tracker to POST /api/analytics/track */
export type TrackPayload = {
  type: AnalyticsEventType;
  sessionId: string;
  visitorId: string;
  path: string;
  slug?: string;
  durationSec?: number;
};

/** Response shape for GET /api/analytics/dashboard */
export type DashboardStats = {
  liveUsers: number;
  pageViews: number;
  uniqueVisitors: number;
  totalSessions: number;
  avgSessionSec: number;
  totalComponents: number;
  periodLabel: string;
  topComponents: Array<{ slug: string; clicks: number }>;
  topPages: Array<{ path: string; views: number }>;
  topCountries: Array<{ country: string; visitors: number }>;
  topRegions: Array<{ country: string; region: string; visitors: number }>;
};
