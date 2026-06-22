/**
 * Server-only analytics exports — API routes and server pages import from here.
 *
 * Client components must NOT import this barrel (it pulls in MongoDB).
 * For dashboard geo labels, use @/lib/analytics/server/geo instead.
 */
export {
  authCookieOptions,
  isValidAuthToken,
  readAuthCookie,
  verifyDashboardPassword,
} from "./auth";
export {
  formatPeriodLabel,
  parseDateRange,
  timestampMatch,
  type DateRange,
} from "./date-range";
export { formatCountry, formatRegion, geoFromRequest } from "./geo";
export { getDashboardStats } from "./get-stats";
export { trackEvent, trackEvents } from "./track-event";
export { parseTrackPayload, parseTrackPayloads, sanitizePath } from "./validate";
export {
  getAnalyticsDb,
  getMongoConnectionHint,
  isAnalyticsConfigured,
} from "./connection/db";
