"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Eye,
  LayoutGrid,
  MousePointerClick,
  Radio,
  Users,
  Waypoints,
} from "lucide-react";

import { formatCountry } from "@/lib/analytics/server/geo";
import type { DashboardStats } from "@/lib/analytics/types";
import { cn } from "@/lib/cn";

import { ShareRingVisual } from "../dashboard-visuals";

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

function safeRatio(n: number, d: number) {
  return d > 0 ? n / d : 0;
}

function pctOf(part: number, whole: number) {
  return whole > 0 ? Math.round((part / whole) * 100) : 0;
}

const card = "rounded-xl border border-neutral-200 bg-white";

type Props = Readonly<{ stats: DashboardStats }>;

/**
 * Light overview — white cards, neutral borders, dark titles.
 * Icons use muted rose; no filled icon backgrounds.
 */
export function OverviewSection({ stats }: Props) {
  const topCountry = stats.topCountries[0];
  const topPage = stats.topPages[0];
  const topComponent = stats.topComponents[0];
  const totalClicks = stats.topComponents.reduce((s, r) => s + r.clicks, 0);
  const countryPct = pctOf(topCountry?.visitors ?? 0, stats.uniqueVisitors);
  const topPageShare = pctOf(topPage?.views ?? 0, stats.pageViews);
  const topClickShare = pctOf(topComponent?.clicks ?? 0, totalClicks);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      {/* Live — stronger presence card */}
      <article
        id="live"
        className={cn(
          card,
          "col-span-2 relative overflow-hidden p-5 md:col-span-2",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-200 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-rose-700 uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-rose-600/40" />
              <span className="relative size-1.5 rounded-full bg-rose-600" />
            </span>
            Live
          </span>
          <Radio size={18} className="text-rose-600" aria-hidden />
        </div>

        <p className="mt-6 font-sans text-5xl font-semibold tracking-tight text-neutral-900 tabular-nums">
          {stats.liveUsers}
        </p>
        <p className="mt-1 font-sans text-sm text-neutral-500">
          {stats.liveUsers === 1 ? "user online" : "users online"}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
          <p className="font-sans text-[11px] text-neutral-500">
            Heartbeats · last 5 minutes
          </p>
          <span className="font-mono text-[10px] text-neutral-400 tabular-nums">
            realtime
          </span>
        </div>
      </article>

      {/* Hero traffic */}
      <article
        id="traffic-pulse"
        className={cn(
          card,
          "col-span-2 flex flex-col p-5 md:col-span-2 md:row-span-2",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-xs text-neutral-500">Page views</p>
            <p className="mt-1 font-sans text-4xl font-semibold tracking-tight text-neutral-900 tabular-nums md:text-5xl">
              {stats.pageViews.toLocaleString()}
            </p>
            <p className="mt-2 font-sans text-[11px] text-neutral-500">
              {stats.periodLabel}
            </p>
          </div>
          <Eye size={18} className="text-rose-600" aria-hidden />
        </div>

        <div className="mt-6 space-y-3 border-t border-neutral-200 pt-4">
          <MetaRow
            icon={Users}
            iconClass="text-rose-600"
            label="Visitors"
            value={stats.uniqueVisitors.toLocaleString()}
          />
          <MetaRow
            icon={Waypoints}
            iconClass="text-rose-700"
            label="Sessions"
            value={stats.totalSessions.toLocaleString()}
          />
          <MetaRow
            icon={Clock3}
            iconClass="text-rose-600"
            label="Avg session"
            value={formatDuration(stats.avgSessionSec)}
          />
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-neutral-200 pt-4">
          <MiniStat
            label="Views / visitor"
            value={safeRatio(stats.pageViews, stats.uniqueVisitors).toFixed(1)}
          />
          <MiniStat
            label="Views / session"
            value={safeRatio(stats.pageViews, stats.totalSessions).toFixed(1)}
          />
        </div>
      </article>

      {/* Engagement side stack */}
      <div className="col-span-2 grid grid-cols-2 gap-3 md:col-span-2 md:row-span-2 md:grid-cols-1 md:gap-4">
        <article className={cn(card, "flex flex-col justify-between p-4")}>
          <div className="flex items-center justify-between gap-2">
            <p className="font-sans text-xs text-neutral-500">
              Sessions / visitor
            </p>
            <Waypoints size={14} className="text-rose-700" aria-hidden />
          </div>
          <p className="mt-3 font-sans text-3xl font-semibold tabular-nums text-neutral-900">
            {safeRatio(stats.totalSessions, stats.uniqueVisitors).toFixed(2)}
          </p>
          <div className="h-1.5 overflow-hidden rounded bg-rose-100">
            <div
              className="h-full rounded bg-rose-600"
              style={{
                width: `${Math.min(
                  100,
                  Math.round(
                    safeRatio(stats.totalSessions, stats.uniqueVisitors) * 40,
                  ),
                )}%`,
              }}
            />
          </div>
          <p className="mt-2 font-sans text-[11px] text-neutral-500">
            How often people return in this period
          </p>
        </article>

        <article className={cn(card, "flex flex-col justify-between p-4")}>
          <div className="flex items-center justify-between gap-2">
            <p className="font-sans text-xs text-neutral-500">Click rate</p>
            <MousePointerClick size={14} className="text-rose-700" aria-hidden />
          </div>
          <p className="mt-3 font-sans text-3xl font-semibold tabular-nums text-neutral-900">
            {(safeRatio(totalClicks, stats.pageViews) * 100).toFixed(0)}
            <span className="text-lg text-neutral-500">%</span>
          </p>
          <div className="h-1.5 overflow-hidden rounded bg-rose-100">
            <div
              className="h-full rounded bg-rose-600"
              style={{
                width: `${Math.min(
                  100,
                  Math.round(safeRatio(totalClicks, stats.pageViews) * 100),
                )}%`,
              }}
            />
          </div>
          <p className="mt-2 font-sans text-[11px] text-neutral-500 tabular-nums">
            {totalClicks.toLocaleString()} clicks · {stats.totalComponents} in
            catalog
          </p>
        </article>
      </div>

      {/* Catalog — icon only, no fill background */}
      <article
        className={cn(
          card,
          "col-span-2 flex items-center gap-4 px-5 py-4 md:col-span-2",
        )}
      >
        <LayoutGrid size={20} className="shrink-0 text-rose-600" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-sans text-xs text-neutral-500">Catalog size</p>
          <p className="font-sans text-2xl font-semibold tabular-nums text-neutral-900">
            {stats.totalComponents}
          </p>
        </div>
        <p className="shrink-0 font-sans text-[11px] text-neutral-500">
          Published
        </p>
      </article>

      {/* Spotlight: top page */}
      <article
        id="highlights"
        className={cn(card, "col-span-2 flex flex-col p-5 md:col-span-3")}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="font-sans text-xs text-neutral-500">Top page</p>
          <Eye size={14} className="text-rose-600" aria-hidden />
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-sans text-lg font-semibold text-neutral-900">
              {topPage?.path ?? "—"}
            </p>
            <p className="mt-1 font-sans text-sm text-neutral-500 tabular-nums">
              {(topPage?.views ?? 0).toLocaleString()} views
              {topPage && stats.pageViews > 0
                ? ` · ${topPageShare}% of traffic`
                : null}
            </p>
          </div>
          {topPage ? (
            <Link
              href={topPage.path}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-800"
              aria-label="Open top page"
            >
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          ) : null}
        </div>
        <div className="mt-auto pt-5">
          <div className="h-2 overflow-hidden rounded bg-rose-100">
            <div
              className="h-full rounded bg-rose-600"
              style={{ width: `${topPageShare}%` }}
            />
          </div>
        </div>
      </article>

      {/* Spotlight: top component */}
      <article className={cn(card, "col-span-2 flex flex-col p-5 md:col-span-3")}>
        <div className="flex items-center justify-between gap-2">
          <p className="font-sans text-xs text-neutral-500">Top component</p>
          <MousePointerClick size={14} className="text-rose-700" aria-hidden />
        </div>
        <p className="mt-3 truncate font-sans text-lg font-semibold text-neutral-900">
          {topComponent?.slug ?? "—"}
        </p>
        <p className="mt-2 font-sans text-sm text-neutral-500 tabular-nums">
          {(topComponent?.clicks ?? 0).toLocaleString()} clicks
          {topComponent && totalClicks > 0
            ? ` · ${topClickShare}% of clicks`
            : null}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="h-2 min-w-0 flex-1 overflow-hidden rounded bg-rose-100">
            <div
              className="h-full rounded bg-rose-600"
              style={{ width: `${topClickShare}%` }}
            />
          </div>
          {topComponent ? (
            <Link
              href={`/components/${topComponent.slug}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 font-sans text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              Open
              <ArrowUpRight size={12} aria-hidden />
            </Link>
          ) : null}
        </div>
      </article>

      {/* Geography */}
      <article
        className={cn(
          card,
          "col-span-2 flex items-center gap-5 p-5 md:col-span-2",
        )}
      >
        <div className="relative shrink-0">
          <ShareRingVisual percent={countryPct} size={80} tone="rose" />
          <span className="absolute inset-0 grid place-items-center font-sans text-sm font-semibold tabular-nums text-neutral-900">
            {countryPct || "—"}
            {countryPct ? "%" : null}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-sans text-xs text-neutral-500">Leading market</p>
          <p className="mt-1 truncate font-sans text-base font-semibold text-neutral-900">
            {topCountry
              ? formatCountry(String(topCountry.country))
              : "No geo data"}
          </p>
          {topCountry ? (
            <p className="mt-1 font-sans text-[11px] text-neutral-500 tabular-nums">
              {topCountry.visitors.toLocaleString()} of{" "}
              {stats.uniqueVisitors.toLocaleString()} visitors
            </p>
          ) : null}
        </div>
      </article>

      {/* Country ranking */}
      <article className={cn(card, "col-span-2 md:col-span-4")}>
        <header className="px-4 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-800">
            Visitors by country
          </h3>
        </header>
        <ul className="border-t border-neutral-200 px-4 py-3 space-y-2.5">
          {stats.topCountries.slice(0, 5).map((row, i) => {
            const pct = pctOf(row.visitors, stats.uniqueVisitors);
            return (
              <li key={row.country}>
                <div className="mb-1 flex justify-between gap-2">
                  <span className="truncate font-sans text-xs text-neutral-800">
                    {formatCountry(String(row.country))}
                  </span>
                  <span className="font-sans text-[11px] text-neutral-500 tabular-nums">
                    {row.visitors.toLocaleString()} · {pct}%
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded bg-rose-100">
                  <div
                    className={cn(
                      "h-full rounded",
                      i === 0 ? "bg-rose-600" : "bg-rose-500",
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
          {stats.topCountries.length === 0 ? (
            <li className="py-6 text-center font-sans text-sm text-neutral-500">
              No location data yet.
            </li>
          ) : null}
        </ul>
      </article>

      {/* Pages ranking */}
      <article id="pages" className={cn(card, "col-span-2 md:col-span-3")}>
        <header className="flex items-center justify-between px-4 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-800">
            Top pages
          </h3>
          <span className="font-sans text-[11px] text-neutral-500">
            {stats.topPages.length} paths
          </span>
        </header>
        <ul className="border-t border-neutral-200">
          {stats.topPages.slice(0, 6).map((row, i) => (
            <li
              key={row.path}
              className="border-b border-neutral-200 last:border-0"
            >
              <Link
                href={row.path}
                className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50"
              >
                <span
                  className={cn(
                    "w-4 font-sans text-[11px] tabular-nums",
                    i === 0 ? "text-neutral-800" : "text-neutral-400",
                  )}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 truncate font-sans text-sm text-neutral-800">
                  {row.path}
                </span>
                <span className="font-sans text-[11px] text-neutral-500 tabular-nums">
                  {pctOf(row.views, stats.pageViews)}%
                </span>
                <span className="font-sans text-xs font-medium text-neutral-900 tabular-nums">
                  {row.views}
                </span>
              </Link>
            </li>
          ))}
          {stats.topPages.length === 0 ? (
            <li className="px-4 py-8 text-center font-sans text-sm text-neutral-500">
              No page views yet.
            </li>
          ) : null}
        </ul>
      </article>

      {/* Component clicks */}
      <article id="components" className={cn(card, "col-span-2 md:col-span-3")}>
        <header className="flex items-center justify-between px-4 py-3">
          <div>
            <h3 className="font-sans text-sm font-medium text-neutral-800">
              Component clicks
            </h3>
            <p className="mt-0.5 font-sans text-[11px] text-neutral-500">
              {totalClicks.toLocaleString()} total
            </p>
          </div>
          <MousePointerClick size={14} className="text-rose-700" aria-hidden />
        </header>
        <ul className="border-t border-neutral-200 px-4 py-3 space-y-3">
          {stats.topComponents.slice(0, 6).map((row, i) => (
            <li key={row.slug}>
              <div className="mb-1 flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={cn(
                      "w-3 font-sans text-[10px] tabular-nums",
                      i === 0 ? "text-neutral-800" : "text-neutral-400",
                    )}
                  >
                    {i + 1}
                  </span>
                  <Link
                    href={`/components/${row.slug}`}
                    className="truncate font-sans text-xs text-neutral-800 hover:text-neutral-900"
                  >
                    {row.slug}
                  </Link>
                </div>
                <span className="shrink-0 font-sans text-[11px] text-neutral-500 tabular-nums">
                  {row.clicks} · {pctOf(row.clicks, totalClicks)}%
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded bg-rose-100">
                <div
                  className={cn(
                    "h-full rounded",
                    i === 0 ? "bg-rose-600" : "bg-rose-500",
                  )}
                  style={{ width: `${pctOf(row.clicks, totalClicks)}%` }}
                />
              </div>
            </li>
          ))}
          {stats.topComponents.length === 0 ? (
            <li className="py-4 text-center font-sans text-sm text-neutral-500">
              No clicks yet.
            </li>
          ) : null}
        </ul>
      </article>
    </div>
  );
}

function MetaRow({
  icon: Icon,
  iconClass,
  label,
  value,
}: Readonly<{
  icon: typeof Eye;
  iconClass?: string;
  label: string;
  value: string;
}>) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="inline-flex items-center gap-1.5 font-sans text-xs text-neutral-500">
        <Icon size={12} className={iconClass} aria-hidden />
        {label}
      </span>
      <span className="font-sans text-xs font-medium text-neutral-900 tabular-nums">
        {value}
      </span>
    </div>
  );
}

function MiniStat({
  label,
  value,
}: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <p className="font-sans text-[11px] text-neutral-500">{label}</p>
      <p className="mt-0.5 font-sans text-lg font-semibold text-neutral-900 tabular-nums">
        {value}
      </p>
    </div>
  );
}
