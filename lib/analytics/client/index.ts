// Client-only exports — safe to import from React components.
export { HEARTBEAT_INTERVAL_MS as analyticsHeartbeatMs } from "@/lib/analytics/constants";
export {
  getSessionId,
  getVisitorId,
  trackComponentClick,
  trackHeartbeat,
  trackLeave,
  trackPageView,
} from "./send-events";
