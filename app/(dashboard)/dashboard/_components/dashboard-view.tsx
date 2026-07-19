"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { PageLoaderOverlay } from "@/components/system/loaders";
import type { DashboardStats } from "@/lib/analytics/types";
import type { InquiryRecord } from "@/lib/inquiries/types";
import { LogoIcon } from "@/app/(marketing)/_components/Logo";

import { DashboardAside } from "./dashboard-aside";
import { buildQueryFromPreset } from "./date-range-filter";
import { DashboardEmailsPanel } from "./dashboard-messages-panel";
import {
  DashboardMenuButton,
  DashboardSidebar,
} from "./dashboard-sidebar";
import { SECTION_META, type DashboardSection } from "./dashboard-types";
import { OverviewSection } from "./sections/overview-section";
import { TrafficSection } from "./sections/traffic-section";
import { ComponentsSection } from "./sections/components-section";
import { GeographySection } from "./sections/geography-section";

async function signOut(): Promise<void> {
  await fetch("/api/analytics/auth", { method: "DELETE" });
  globalThis.location.reload();
}

async function fetchDashboardStats(nextQuery: string): Promise<DashboardStats> {
  const response = await fetch(`/api/analytics/dashboard${nextQuery}`, {
    cache: "no-store",
  });

  if (response.status === 401) {
    globalThis.location.reload();
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      hint?: string;
      error?: string;
    } | null;
    throw new Error(data?.hint ?? data?.error ?? "Could not load analytics.");
  }

  return (await response.json()) as DashboardStats;
}

async function fetchInquiries(): Promise<InquiryRecord[]> {
  const response = await fetch("/api/inquiries/dashboard", {
    cache: "no-store",
  });

  if (response.status === 401) {
    globalThis.location.reload();
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    throw new Error(data?.error ?? "Could not load messages.");
  }

  const data = (await response.json()) as { inquiries: InquiryRecord[] };
  return data.inquiries;
}

export function DashboardView() {
  const [section, setSection] = useState<DashboardSection>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [messagesError, setMessagesError] = useState("");
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [preset, setPreset] = useState("all");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [query, setQuery] = useState("");
  const hasDataRef = useRef(false);

  const loadStats = useCallback(async (nextQuery: string) => {
    try {
      const data = await fetchDashboardStats(nextQuery);
      setStats(data);
      hasDataRef.current = true;
      setError("");
    } catch (err) {
      if (err instanceof Error && err.message === "Unauthorized") return;
      setError(
        err instanceof Error ? err.message : "Could not load analytics.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const data = await fetchDashboardStats(query);
        if (cancelled) return;
        setStats(data);
        hasDataRef.current = true;
        setError("");
      } catch (err) {
        if (cancelled) return;
        if (err instanceof Error && err.message === "Unauthorized") return;
        setError(
          err instanceof Error ? err.message : "Could not load analytics.",
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query]);

  const loadInquiries = useCallback(async () => {
    try {
      const data = await fetchInquiries();
      setInquiries(data);
      setMessagesError("");
    } catch (err) {
      if (err instanceof Error && err.message === "Unauthorized") return;
      setMessagesError(
        err instanceof Error ? err.message : "Could not load messages.",
      );
    } finally {
      setMessagesLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const data = await fetchInquiries();
        if (cancelled) return;
        setInquiries(data);
        setMessagesError("");
      } catch (err) {
        if (cancelled) return;
        if (err instanceof Error && err.message === "Unauthorized") return;
        setMessagesError(
          err instanceof Error ? err.message : "Could not load messages.",
        );
      } finally {
        if (!cancelled) setMessagesLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSidebarOpen(false);
    }
    globalThis.addEventListener("keydown", onKeyDown);
    return () => globalThis.removeEventListener("keydown", onKeyDown);
  }, [sidebarOpen]);

  function refreshAll() {
    setRefreshing(true);
    void loadStats(query);
    void loadInquiries();
  }

  function applyPreset(nextPreset: string) {
    setPreset(nextPreset);
    if (nextPreset === "custom") return;
    setFrom("");
    setTo("");
    const nextQuery = buildQueryFromPreset(nextPreset, "", "");
    if (hasDataRef.current) setRefreshing(true);
    setQuery(nextQuery);
  }

  function applyCustomRange(nextFrom: string, nextTo: string) {
    setPreset("custom");
    setFrom(nextFrom);
    setTo(nextTo);
    if (hasDataRef.current) setRefreshing(true);
    setQuery(buildQueryFromPreset("custom", nextFrom, nextTo));
  }

  if (loading && !stats) {
    return (
      <div className="flex h-dvh items-center justify-center bg-white">
        <PageLoaderOverlay variant="light" />
      </div>
    );
  }

  if (error && !stats) {
    return (
      <div className="flex h-dvh items-center justify-center bg-neutral-50 p-6">
        <div className="max-w-md rounded-2xl border border-red-200 bg-red-50 px-4 py-6">
          <p className="font-sans text-sm text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  const meta = SECTION_META[section];
  const showPeriod = section !== "emails";

  return (
    <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-neutral-50 selection:bg-neutral-900 selection:text-white">
      {refreshing ? <PageLoaderOverlay variant="light" /> : null}

      {/* Mobile-only bar — desktop uses sidebars */}
      <header className="z-20 flex h-14 shrink-0 items-center gap-3 border-b border-neutral-200 bg-white px-4 md:hidden">
        <DashboardMenuButton onClick={() => setSidebarOpen(true)} />
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <LogoIcon
            className="w-5 shrink-0 text-neutral-900"
            fill="currentColor"
          />
          <p className="truncate font-sans text-sm font-semibold text-neutral-900">
            {meta.title}
          </p>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <DashboardSidebar
          section={section}
          onSectionChange={setSection}
          inboxCount={inquiries.length}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSignOut={() => void signOut()}
          onRefresh={refreshAll}
          refreshing={refreshing}
        />

        <div className="flex min-h-0 min-w-0 flex-1">
          {section === "emails" ? (
            <div className="min-h-0 min-w-0 flex-1 overflow-hidden">
              <DashboardEmailsPanel
                inquiries={inquiries}
                loading={messagesLoading}
                error={messagesError}
              />
            </div>
          ) : (
            <>
              <main
                data-dashboard-scroll
                className="scrollbar-hover min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto"
              >
                <article className="px-4 py-6 md:px-8 md:py-8">
                  {section === "overview" ? (
                    <OverviewSection stats={stats} />
                  ) : null}
                  {section === "traffic" ? (
                    <TrafficSection stats={stats} />
                  ) : null}
                  {section === "components" ? (
                    <ComponentsSection stats={stats} />
                  ) : null}
                  {section === "geography" ? (
                    <GeographySection stats={stats} />
                  ) : null}
                </article>
              </main>

              {showPeriod ? (
                <DashboardAside
                  preset={preset}
                  from={from}
                  to={to}
                  onPresetChange={applyPreset}
                  onCustomRange={applyCustomRange}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
