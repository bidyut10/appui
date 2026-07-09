"use client";

/**
 * Browser-side tracking helpers.
 *
 * We keep IDs anonymous (visitorId in localStorage, sessionId per tab) and
 * prefer sendBeacon so navigation never waits on analytics.
 */

import {
  capturePostHogComponentClick,
  capturePostHogPageView,
  identifyPostHogVisitor,
  initPostHog,
  isPostHogEnabled,
} from "./posthog";

const VISITOR_KEY = "oui_vid";
const SESSION_KEY = "oui_sid";
const PAGEVIEW_DEBOUNCE_MS = 800;

function randomId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 11)}`;
}

// Same person returning later — used for unique visitor counts.
export function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = randomId();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

// One browsing session per tab — resets when the tab closes.
export function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = randomId();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

type TrackBody = {
  type: "pageview" | "component_click" | "heartbeat" | "leave";
  sessionId: string;
  visitorId: string;
  path: string;
  slug?: string;
  durationSec?: number;
};

let lastPageViewPath = "";
let lastPageViewAt = 0;

function postEvents(events: TrackBody[]): void {
  if (events.length === 0) return;

  const payload = JSON.stringify(
    events.length === 1 ? events[0] : { events },
  );

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    if (navigator.sendBeacon("/api/analytics/track", blob)) return;
  }

  void fetch("/api/analytics/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => undefined);
}

function sendAnalyticsEvent(body: TrackBody): void {
  if (!isSelfHostedAnalyticsEnabled()) return;
  postEvents([body]);
}

function isSelfHostedAnalyticsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SELF_HOSTED_ANALYTICS !== "false";
}

export function trackPageView(path: string): void {
  const now = Date.now();
  if (path === lastPageViewPath && now - lastPageViewAt < PAGEVIEW_DEBOUNCE_MS) {
    return;
  }

  lastPageViewPath = path;
  lastPageViewAt = now;

  const visitorId = getVisitorId();
  initPostHog();
  identifyPostHogVisitor(visitorId);
  capturePostHogPageView(path);

  sendAnalyticsEvent({
    type: "pageview",
    sessionId: getSessionId(),
    visitorId,
    path,
  });
}

export function trackComponentClick(path: string, slug: string): void {
  capturePostHogComponentClick(path, slug);

  sendAnalyticsEvent({
    type: "component_click",
    sessionId: getSessionId(),
    visitorId: getVisitorId(),
    path,
    slug,
  });
}

export function trackHeartbeat(path: string): void {
  sendAnalyticsEvent({
    type: "heartbeat",
    sessionId: getSessionId(),
    visitorId: getVisitorId(),
    path,
  });
}

export function trackLeave(path: string, durationSec: number): void {
  sendAnalyticsEvent({
    type: "leave",
    sessionId: getSessionId(),
    visitorId: getVisitorId(),
    path,
    durationSec,
  });
}