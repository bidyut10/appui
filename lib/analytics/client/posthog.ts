"use client";

import posthog from "posthog-js";

let initialized = false;

function getPostHogKey() {
  return process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim() ?? "";
}

function getPostHogHost() {
  return (
    process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "/ingest"
  );
}

function getPostHogUiHost() {
  return (
    process.env.NEXT_PUBLIC_POSTHOG_UI_HOST?.trim() ||
    "https://us.posthog.com"
  );
}

export function isPostHogEnabled() {
  return Boolean(getPostHogKey());
}

/** Initialize PostHog once in the browser. No-op when the key is missing. */
export function initPostHog() {
  if (typeof window === "undefined" || initialized || !isPostHogEnabled()) {
    return;
  }

  posthog.init(getPostHogKey(), {
    api_host: getPostHogHost(),
    ui_host: getPostHogUiHost(),
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
  });

  initialized = true;
}

function ensurePostHog() {
  if (!initialized) initPostHog();
  return initialized;
}

export function identifyPostHogVisitor(visitorId: string) {
  if (!ensurePostHog()) return;
  posthog.identify(visitorId);
}

export function capturePostHogPageView(path: string) {
  if (!ensurePostHog()) return;

  posthog.capture("$pageview", {
    $current_url: `${window.location.origin}${path}`,
    path,
  });
}

export function capturePostHogComponentClick(path: string, slug: string) {
  if (!ensurePostHog()) return;

  posthog.capture("component_click", {
    path,
    slug,
    component_slug: slug,
  });
}
