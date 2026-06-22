"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import {
  analyticsHeartbeatMs,
  trackHeartbeat,
  trackLeave,
  trackPageView,
} from "@/lib/analytics/client";

/** Paths we never send analytics for. */
function shouldTrack(pathname: string): boolean {
  return (
    !pathname.startsWith("/dashboard") && !pathname.startsWith("/api/")
  );
}

/**
 * Invisible client component mounted in the root layout.
 * Records page views, sparse heartbeats, and session duration on tab close.
 */
export function AnalyticsTracker() {
  const pathname = usePathname();
  const enteredAtRef = useRef(Date.now());
  const lastPathRef = useRef(pathname);

  useEffect(() => {
    if (!shouldTrack(pathname)) return;

    trackPageView(pathname);
    enteredAtRef.current = Date.now();
    lastPathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!shouldTrack(pathname)) return;

    const heartbeat = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      trackHeartbeat(pathname);
    }, analyticsHeartbeatMs);

    const onHide = () => {
      const durationSec = Math.round(
        (Date.now() - enteredAtRef.current) / 1000,
      );
      trackLeave(lastPathRef.current, durationSec);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") onHide();
    };

    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearInterval(heartbeat);
      window.removeEventListener("pagehide", onHide);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pathname]);

  return null;
}
