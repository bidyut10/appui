"use client";

import Link from "next/link";
import { ArrowUpRight, LayoutGrid, MousePointerClick } from "lucide-react";

import type { DashboardStats } from "@/lib/analytics/types";
import { cn } from "@/lib/cn";

import { seriesFromRanks, Sparkline } from "../dashboard-visuals";

function pctOf(part: number, whole: number) {
  return whole > 0 ? Math.round((part / whole) * 100) : 0;
}

const card = "rounded-xl border border-white/[0.03] bg-neutral-900/30";

type Props = Readonly<{ stats: DashboardStats }>;

export function ComponentsSection({ stats }: Props) {
  const totalClicks = stats.topComponents.reduce((s, r) => s + r.clicks, 0);
  const rate =
    stats.pageViews > 0
      ? `${Math.round((totalClicks / stats.pageViews) * 100)}%`
      : "0%";
  const series = seriesFromRanks(
    stats.topComponents.map((r) => r.clicks).reverse(),
  );

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      <article
        id="summary"
        className={cn(card, "col-span-2 p-5 md:col-span-3")}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-xs text-neutral-500">Total clicks</p>
            <p className="mt-1 font-sans text-3xl font-semibold tabular-nums text-neutral-400">
              {totalClicks.toLocaleString()}
            </p>
          </div>
          <MousePointerClick
            size={16}
            className="text-rose-700/70"
            aria-hidden
          />
        </div>
        <Sparkline values={series} tone="dark" className="mt-4 h-12 w-full" />
      </article>

      <article className={cn(card, "col-span-1 p-4 md:col-span-1")}>
        <p className="font-sans text-xs text-neutral-500">Click / view</p>
        <p className="mt-2 font-sans text-2xl font-semibold text-neutral-400">
          {rate}
        </p>
      </article>

      <article className={cn(card, "col-span-1 p-4 md:col-span-2")}>
        <div className="flex items-center gap-2">
          <LayoutGrid size={14} className="text-rose-700/60" aria-hidden />
          <p className="font-sans text-xs text-neutral-500">In catalog</p>
        </div>
        <p className="mt-2 font-sans text-2xl font-semibold tabular-nums text-neutral-400">
          {stats.totalComponents}
        </p>
      </article>

      <article
        id="ranking"
        className={cn(card, "col-span-2 overflow-hidden md:col-span-4")}
      >
        <header className="px-5 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-400">
            Most opened
          </h3>
        </header>
        <ul className="border-t border-white/[0.04]">
          {stats.topComponents.map((row, i) => (
            <li
              key={row.slug}
              className="border-b border-white/[0.03] last:border-0"
            >
              <Link
                href={`/components/${row.slug}`}
                className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-white/[0.03]"
              >
                <span
                  className={cn(
                    "w-5 font-sans text-[11px] tabular-nums",
                    i === 0 ? "text-neutral-400" : "text-neutral-600",
                  )}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1 truncate font-sans text-sm text-neutral-400">
                  {row.slug}
                </span>
                <span className="font-sans text-xs text-neutral-500 tabular-nums">
                  {pctOf(row.clicks, totalClicks)}%
                </span>
                <span className="font-sans text-sm tabular-nums text-neutral-400">
                  {row.clicks}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-neutral-600"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          {stats.topComponents.length === 0 ? (
            <li className="px-5 py-10 text-center text-sm text-neutral-500">
              No component clicks in this period.
            </li>
          ) : null}
        </ul>
      </article>

      <article
        id="distribution"
        className={cn(card, "col-span-2 p-5 md:col-span-2")}
      >
        <h3 className="font-sans text-sm font-medium text-neutral-400">Share</h3>
        <ul className="mt-4 space-y-3">
          {stats.topComponents.slice(0, 6).map((row, i) => (
            <li key={row.slug}>
              <div className="mb-1 flex justify-between gap-2 text-xs">
                <span className="truncate text-neutral-400">{row.slug}</span>
                <span className="text-neutral-500 tabular-nums">
                  {row.clicks} · {pctOf(row.clicks, totalClicks)}%
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded bg-rose-800/8">
                <div
                  className={cn(
                    "h-full rounded",
                    i === 0 ? "bg-rose-800/45" : "bg-rose-700/40",
                  )}
                  style={{
                    width: `${pctOf(row.clicks, totalClicks)}%`,
                  }}
                />
              </div>
            </li>
          ))}
          {stats.topComponents.length === 0 ? (
            <li className="py-4 text-center text-sm text-neutral-500">No data</li>
          ) : null}
        </ul>
      </article>
    </div>
  );
}
