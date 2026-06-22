/**
 * Analytics module — server utilities and shared types.
 * Client tracker lives in @/components/analytics/tracker.
 */

export type { DashboardStats, GeoLocation, TrackPayload } from "./types";
export type { DateRange } from "./date-range";
export { parseDateRange, formatPeriodLabel } from "./date-range";
export { isAnalyticsConfigured, getAnalyticsDb } from "./db";
export { formatCountry, formatRegion } from "./geo";
