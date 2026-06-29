"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  DateRangeFilter,
  buildQueryFromPreset,
} from "@/app/dashboard/_components/date-range-filter";
import {
  RankPanel,
  RankRow,
  StatPanel,
} from "@/app/dashboard/_components/dashboard-panels";
import { PageLoaderOverlay } from "@/components/loaders/page-loader-overlay";
import { formatCountry, formatRegion } from "@/lib/analytics/server/geo";
import type { DashboardStats } from "@/lib/analytics/types";

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
      <p className="max-w-xl font-serif text-sm text-red-600">{error}</p>
    );
  }

  if (!stats) return null;

  return (
    <>
      {refreshing ? <PageLoaderOverlay /> : null}

      <div className="space-y-8">
        <header className="border-b border-neutral-100 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                Analytics
              </p>
              <h1 className="mt-2 font-serif text-2xl font-medium text-neutral-900 md:text-3xl">
                Website overview
              </h1>
              <p className="mt-2 font-mono text-xs text-neutral-500">
                Period · {stats.periodLabel}
              </p>
              {updatedAt ? (
                <p className="mt-1 font-mono text-[11px] text-neutral-400">
                  Updated {formatUpdatedAt(updatedAt)}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={refreshStats}
                disabled={refreshing}
                className="border border-neutral-200 bg-white px-4 py-2 font-mono text-xs text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900 disabled:opacity-60"
              >
                Refresh
              </button>
              <button
                type="button"
                onClick={() => void signOut()}
                className="bg-neutral-900 px-4 py-2 font-mono text-xs text-white transition-colors hover:bg-neutral-800"
              >
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

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatPanel
            label="Live users"
            value={stats.liveUsers}
            hint="Active now"
          />
          <StatPanel label="Page views" value={stats.pageViews} />
          <StatPanel label="Unique visitors" value={stats.uniqueVisitors} />
          <StatPanel
            label="Avg. session"
            value={formatDuration(stats.avgSessionSec)}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <StatPanel label="Sessions" value={stats.totalSessions} />
          <StatPanel label="Components" value={stats.totalComponents} />
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <RankPanel
            title="Top components"
            count={stats.topComponents.length}
            emptyLabel="No component clicks in this period."
          >
            <ul>
              {stats.topComponents.map((row) => (
                <RankRow
                  key={row.slug}
                  label={row.slug}
                  value={row.clicks}
                  href={`/components/${row.slug}`}
                />
              ))}
            </ul>
          </RankPanel>

          <RankPanel
            title="Top pages"
            count={stats.topPages.length}
            emptyLabel="No page views in this period."
          >
            <ul>
              {stats.topPages.map((row) => (
                <RankRow
                  key={row.path}
                  label={row.path}
                  value={row.views}
                  href={row.path}
                />
              ))}
            </ul>
          </RankPanel>

          <RankPanel
            title="Top countries"
            count={stats.topCountries.length}
            emptyLabel="No location data in this period."
          >
            <ul>
              {stats.topCountries.map((row) => (
                <RankRow
                  key={row.country}
                  label={formatCountry(String(row.country))}
                  value={row.visitors}
                />
              ))}
            </ul>
          </RankPanel>

          <RankPanel
            title="Top regions"
            count={stats.topRegions.length}
            emptyLabel="No region data in this period."
          >
            <ul>
              {stats.topRegions.map((row) => (
                <RankRow
                  key={`${row.country}-${row.region}`}
                  label={formatRegion(String(row.country), String(row.region))}
                  value={row.visitors}
                />
              ))}
            </ul>
          </RankPanel>
        </div>
      </div>
    </>
  );
}
