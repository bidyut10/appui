/** 
 * TypeScript shapes shared between the tracker, API routes, and dashboard.
 */

export type AnalyticsEventType =
  | "pageview"
  | "component_click"
  | "heartbeat"
  | "leave";

// Country / region / city attached to each stored event. No IPs saved.
export type GeoLocation = {
  country: string;
  region: string;
  city: string;
};

// Body the browser posts to POST /api/analytics/track
export type TrackPayload = {
  type: AnalyticsEventType;
  sessionId: string;
  visitorId: string;
  path: string;
  slug?: string;
  durationSec?: number;
};

// JSON returned by GET /api/analytics/dashboard
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
