"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";

import { AnnotatedText } from "@/components/underlines/AnnotatedText";
import { PageLoaderOverlay } from "@/components/system/loaders";
import { formatCountry, formatRegion } from "@/lib/analytics/server/geo";
import type { DashboardStats } from "@/lib/analytics/types";

import {
  DateRangeFilter,
  buildQueryFromPreset,
} from "./date-range-filter";
import {
  RankPanel,
  RankRow,
  StatPanel,
} from "./dashboard-panels";

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

function formatUpdatedAt(date: Date): string {
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function maxOf(values: number[]) {
  return values.length > 0 ? Math.max(...values) : 0;
}

async function signOut(): Promise<void> {
  await fetch("/api/analytics/auth", { method: "DELETE" });
  globalThis.location.reload();
}

async function fetchDashboardStats(
  nextQuery: string,
): Promise<DashboardStats> {
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

export function DashboardView() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

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
      setUpdatedAt(new Date());
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
        setUpdatedAt(new Date());
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

  function refreshStats() {
    setRefreshing(true);
    void loadStats(query);
  }

  function applyPreset(nextPreset: string) {
    setPreset(nextPreset);
    const nextQuery = buildQueryFromPreset(nextPreset, from, to);
    if (hasDataRef.current) setRefreshing(true);
    setQuery(nextQuery);
  }

  function applyCustomRange() {
    setPreset("custom");
    if (hasDataRef.current) setRefreshing(true);
    setQuery(buildQueryFromPreset("custom", from, to));
  }

  if (loading && !stats) {
    return <PageLoaderOverlay />;
  }

  if (error && !stats) {
    return (
      <div className="rounded-xl border border-red-100 bg-red-50/50 px-4 py-6">
        <p className="font-sans text-sm text-red-700">{error}</p>
      </div>
    );
  }

  if (!stats) return null;

  const topComponentMax = maxOf(stats.topComponents.map((row) => row.clicks));
  const topPageMax = maxOf(stats.topPages.map((row) => row.views));
  const topCountryMax = maxOf(stats.topCountries.map((row) => row.visitors));
  const topRegionMax = maxOf(stats.topRegions.map((row) => row.visitors));

  return (
    <>
      {refreshing ? <PageLoaderOverlay /> : null}

      <div className="space-y-8">
        <header>
          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
            Dashboard / Analytics
          </p>

          <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="font-serif text-2xl text-neutral-900 md:text-3xl">
                Website{" "}
                <AnnotatedText variant="wavy" color="text-rose-200">
                  overview
                </AnnotatedText>
              </h1>
              <p className="mt-3 font-sans text-sm text-neutral-500">
                Period ·{" "}
                <span className="font-medium text-neutral-700">
                  {stats.periodLabel}
                </span>
              </p>
              {updatedAt ? (
                <p className="mt-1 font-mono text-[11px] text-neutral-400">
                  Last updated {formatUpdatedAt(updatedAt)}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={refreshStats}
                disabled={refreshing}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-2 font-sans text-sm text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 disabled:opacity-60"
              >
                <RefreshCw size={14} aria-hidden />
                Refresh
              </button>
              <button
                type="button"
                onClick={() => void signOut()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-2 font-sans text-sm text-white transition-colors hover:bg-neutral-800"
              >
                <LogOut size={14} aria-hidden />
                Sign out
              </button>
            </div>
          </div>
        </header>

        <DateRangeFilter
          preset={preset}
          from={from}
          to={to}
          onPresetChange={applyPreset}
          onFromChange={setFrom}
          onToChange={setTo}
          onApply={applyCustomRange}
        />

        <section className="space-y-3">
          <div>
            <h2 className="font-sans text-sm font-medium text-neutral-900">
              Live metrics
            </h2>
            <p className="mt-1 font-sans text-xs text-neutral-500">
              Real-time traffic and engagement for the selected period.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <StatPanel
              label="Live users"
              value={stats.liveUsers}
              hint="Active right now"
              tone="live"
            />
            <StatPanel
              label="Page views"
              value={stats.pageViews}
              tone="views"
            />
            <StatPanel
              label="Unique visitors"
              value={stats.uniqueVisitors}
              tone="visitors"
            />
            <StatPanel
              label="Avg. session"
              value={formatDuration(stats.avgSessionSec)}
              tone="session"
            />
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <h2 className="font-sans text-sm font-medium text-neutral-900">
              Library snapshot
            </h2>
            <p className="mt-1 font-sans text-xs text-neutral-500">
              Sessions recorded and components available in the catalog.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <StatPanel
              label="Sessions"
              value={stats.totalSessions}
              tone="sessions"
            />
            <StatPanel
              label="Components"
              value={stats.totalComponents}
              hint="In showcase catalog"
              tone="components"
            />
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <h2 className="font-sans text-sm font-medium text-neutral-900">
              Rankings
            </h2>
            <p className="mt-1 font-sans text-xs text-neutral-500">
              Most opened components, pages, and visitor locations.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <RankPanel
              title="Top components"
              count={stats.topComponents.length}
              emptyLabel="No component clicks in this period."
              kind="components"
            >
              <ul>
                {stats.topComponents.map((row, index) => (
                  <RankRow
                    key={row.slug}
                    rank={index + 1}
                    label={row.slug}
                    value={row.clicks}
                    href={`/components/${row.slug}`}
                    maxValue={topComponentMax}
                  />
                ))}
              </ul>
            </RankPanel>

            <RankPanel
              title="Top pages"
              count={stats.topPages.length}
              emptyLabel="No page views in this period."
              kind="pages"
            >
              <ul>
                {stats.topPages.map((row, index) => (
                  <RankRow
                    key={row.path}
                    rank={index + 1}
                    label={row.path}
                    value={row.views}
                    href={row.path}
                    maxValue={topPageMax}
                  />
                ))}
              </ul>
            </RankPanel>

            <RankPanel
              title="Top countries"
              count={stats.topCountries.length}
              emptyLabel="No location data in this period."
              kind="countries"
            >
              <ul>
                {stats.topCountries.map((row, index) => (
                  <RankRow
                    key={row.country}
                    rank={index + 1}
                    label={formatCountry(String(row.country))}
                    value={row.visitors}
                    maxValue={topCountryMax}
                  />
                ))}
              </ul>
            </RankPanel>

            <RankPanel
              title="Top regions"
              count={stats.topRegions.length}
              emptyLabel="No region data in this period."
              kind="regions"
            >
              <ul>
                {stats.topRegions.map((row, index) => (
                  <RankRow
                    key={`${row.country}-${row.region}`}
                    rank={index + 1}
                    label={formatRegion(
                      String(row.country),
                      String(row.region),
                    )}
                    value={row.visitors}
                    maxValue={topRegionMax}
                  />
                ))}
              </ul>
            </RankPanel>
          </div>
        </section>
      </div>
    </>
  );
}
