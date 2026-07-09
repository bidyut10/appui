/**
 * Analytics module entry — shared types and convenient server re-exports.
 *
 * Browser code should import from @/lib/analytics/client instead.
 * React UI for tracking lives in @/components/system/analytics.
 */

export type { DashboardStats, GeoLocation, TrackPayload } from "./types";
export type { DateRange } from "./server/date-range";
export { parseDateRange, formatPeriodLabel } from "./server/date-range";
export {
  formatCountry,
  formatRegion,
  getAnalyticsDb,
  isAnalyticsConfigured,
} from "./server";
