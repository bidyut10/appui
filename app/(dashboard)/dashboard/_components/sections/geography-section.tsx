"use client";

import { Globe2, MapPin } from "lucide-react";

import { formatCountry, formatRegion } from "@/lib/analytics/server/geo";
import type { DashboardStats } from "@/lib/analytics/types";
import { cn } from "@/lib/cn";

import { ShareRingVisual } from "../dashboard-visuals";

function pctOf(part: number, whole: number) {
  return whole > 0 ? Math.round((part / whole) * 100) : 0;
}

const card = "rounded-xl border border-neutral-200 bg-white";

type Props = Readonly<{ stats: DashboardStats }>;

export function GeographySection({ stats }: Props) {
  const top = stats.topCountries[0];
  const pct = pctOf(top?.visitors ?? 0, stats.uniqueVisitors);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
      <article
        id="leader"
        className={cn(
          card,
          "col-span-2 flex items-center gap-5 p-5 md:col-span-3",
        )}
      >
        <div className="relative shrink-0">
          <ShareRingVisual percent={pct} size={80} tone="rose" />
          <span className="absolute inset-0 grid place-items-center font-sans text-sm font-semibold tabular-nums text-neutral-900">
            {pct || "—"}
            {pct ? "%" : null}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-sans text-xs text-neutral-500">Leading market</p>
          <p className="mt-1 font-sans text-lg font-semibold text-neutral-900">
            {top ? formatCountry(String(top.country)) : "No geo data"}
          </p>
          {top ? (
            <p className="mt-1 font-sans text-sm text-neutral-500 tabular-nums">
              {top.visitors.toLocaleString()} visitors
            </p>
          ) : null}
        </div>
      </article>

      <article className={cn(card, "col-span-1 p-4 md:col-span-1")}>
        <Globe2 size={14} className="text-rose-700" aria-hidden />
        <p className="mt-3 font-sans text-xs text-neutral-500">Countries</p>
        <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-neutral-900">
          {stats.topCountries.length}
        </p>
      </article>

      <article className={cn(card, "col-span-1 p-4 md:col-span-2")}>
        <MapPin size={14} className="text-rose-600" aria-hidden />
        <p className="mt-3 font-sans text-xs text-neutral-500">Regions</p>
        <p className="mt-1 font-sans text-2xl font-semibold tabular-nums text-neutral-900">
          {stats.topRegions.length}
        </p>
      </article>

      <article
        id="countries"
        className={cn(card, "col-span-2 md:col-span-3")}
      >
        <header className="px-4 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-800">
            Countries
          </h3>
        </header>
        <ul className="border-t border-neutral-200">
          {stats.topCountries.map((row, i) => {
            const share = pctOf(row.visitors, stats.uniqueVisitors);
            return (
              <li
                key={row.country}
                className="flex items-center gap-3 border-b border-neutral-200 px-4 py-2.5 last:border-0"
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
                  {formatCountry(String(row.country))}
                </span>
                <span className="hidden h-1 w-14 overflow-hidden rounded bg-rose-100 md:block">
                  <span
                    className={cn(
                      "block h-full rounded",
                      i === 0 ? "bg-rose-600" : "bg-rose-500",
                    )}
                    style={{ width: `${share}%` }}
                  />
                </span>
                <span className="font-sans text-xs tabular-nums text-neutral-900">
                  {row.visitors}
                </span>
              </li>
            );
          })}
          {stats.topCountries.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-neutral-500">
              No location data.
            </li>
          ) : null}
        </ul>
      </article>

      <article id="regions" className={cn(card, "col-span-2 md:col-span-3")}>
        <header className="px-4 py-3">
          <h3 className="font-sans text-sm font-medium text-neutral-800">
            Regions
          </h3>
        </header>
        <ul className="border-t border-neutral-200">
          {stats.topRegions.map((row, i) => {
            const share = pctOf(row.visitors, stats.uniqueVisitors);
            return (
              <li
                key={`${row.country}-${row.region}`}
                className="flex items-center gap-3 border-b border-neutral-200 px-4 py-2.5 last:border-0"
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
                  {formatRegion(String(row.country), String(row.region))}
                </span>
                <span className="hidden h-1 w-14 overflow-hidden rounded bg-rose-100 md:block">
                  <span
                    className={cn(
                      "block h-full rounded",
                      i === 0 ? "bg-rose-600" : "bg-rose-500",
                    )}
                    style={{ width: `${share}%` }}
                  />
                </span>
                <span className="font-sans text-xs tabular-nums text-neutral-900">
                  {row.visitors}
                </span>
              </li>
            );
          })}
          {stats.topRegions.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-neutral-500">
              No region data.
            </li>
          ) : null}
        </ul>
      </article>
    </div>
  );
}
