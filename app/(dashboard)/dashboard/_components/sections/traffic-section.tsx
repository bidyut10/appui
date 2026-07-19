"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3, Eye, Users, Waypoints } from "lucide-react";

import type { DashboardStats } from "@/lib/analytics/types";
import { cn } from "@/lib/cn";

import { ColumnBars, seriesFromRanks, Sparkline } from "../dashboard-visuals";

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

function pctOf(part: number, whole: number) {
  return whole > 0 ? Math.round((part / whole) * 100) : 0;
}

const card = "rounded-xl border border-neutral-200 bg-white";

type Props = Readonly<{ stats: DashboardStats }>;

export function TrafficSection({ stats }: Props) {
  const series = seriesFromRanks(stats.topPages.map((r) => r.views).reverse());

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      <article
        id="summary"
        className={cn(card, "col-span-2 p-5 md:col-span-2")}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-xs text-neutral-500">Page views</p>
            <p className="mt-1 font-sans text-3xl font-semibold tabular-nums text-neutral-900">
              {stats.pageViews.toLocaleString()}
            </p>
          </div>
          <Eye size={16} className="text-rose-600" aria-hidden />
        </div>
        <Sparkline values={series} tone="rose" className="mt-4 h-12 w-full" />
      </article>

      <article className={cn(card, "p-4")}>
        <Users size={14} className="text-rose-600" aria-hidden />
        <p className="mt-3 font-sans text-xs text-neutral-500">Visitors</p>
        <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-neutral-900">
          {stats.uniqueVisitors.toLocaleString()}
        </p>
      </article>

      <article className={cn(card, "p-4")}>
        <Waypoints size={14} className="text-rose-700" aria-hidden />
        <p className="mt-3 font-sans text-xs text-neutral-500">Sessions</p>
        <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-neutral-900">
          {stats.totalSessions.toLocaleString()}
        </p>
        <ColumnBars
          tone="rose"
          values={seriesFromRanks(
            [stats.totalSessions, stats.uniqueVisitors, stats.pageViews],
            5,
          )}
          className="mt-3"
        />
      </article>

      <article
        className={cn(
          card,
          "col-span-2 flex items-center gap-4 px-5 py-4 md:col-span-4",
        )}
      >
        <Clock3 size={18} className="shrink-0 text-rose-700" aria-hidden />
        <div>
          <p className="font-sans text-xs text-neutral-500">Average session</p>
          <p className="font-sans text-lg font-semibold text-neutral-900 tabular-nums">
            {formatDuration(stats.avgSessionSec)}
          </p>
        </div>
      </article>

      <article
        id="pages"
        className={cn(card, "col-span-2 overflow-hidden md:col-span-4")}
      >
        <header className="px-5 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-800">
            Paths by views
          </h3>
        </header>
        <ul className="border-t border-neutral-200">
          {stats.topPages.map((row, i) => (
            <li
              key={row.path}
              className="border-b border-neutral-200 last:border-0"
            >
              <Link
                href={row.path}
                className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-neutral-50"
              >
                <span
                  className={cn(
                    "w-5 font-sans text-[11px] tabular-nums",
                    i === 0 ? "text-neutral-800" : "text-neutral-400",
                  )}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-sans text-sm text-neutral-800">
                    {row.path}
                  </p>
                  <div className="mt-1.5 h-1 overflow-hidden rounded bg-rose-100">
                    <div
                      className="h-full rounded bg-rose-600"
                      style={{
                        width: `${pctOf(row.views, stats.pageViews)}%`,
                      }}
                    />
                  </div>
                </div>
                <span className="font-sans text-[11px] text-neutral-500 tabular-nums">
                  {pctOf(row.views, stats.pageViews)}%
                </span>
                <span className="font-sans text-sm tabular-nums text-neutral-900">
                  {row.views}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-neutral-400"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          {stats.topPages.length === 0 ? (
            <li className="px-5 py-10 text-center text-sm text-neutral-500">
              No page views in this period.
            </li>
          ) : null}
        </ul>
      </article>
    </div>
  );
}
