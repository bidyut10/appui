"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock3,
  Eye,
  Globe2,
  LayoutGrid,
  MapPin,
  MousePointerClick,
  Radio,
  Users,
  Waypoints,
} from "lucide-react";

import { cn } from "@/lib/cn";

const STAT_ICON_STYLES = {
  live: "bg-rose-800/15 text-rose-700/70",
  views: "bg-rose-800/15 text-rose-700/60",
  visitors: "bg-rose-800/15 text-rose-700/60",
  session: "bg-rose-800/15 text-rose-600/55",
  sessions: "bg-rose-800/15 text-rose-700/70",
  components: "bg-rose-800/15 text-rose-700/60",
  clicks: "bg-rose-800/15 text-rose-700/70",
} as const;

type StatTone = keyof typeof STAT_ICON_STYLES;

const STAT_ICONS: Record<StatTone, LucideIcon> = {
  live: Radio,
  views: Eye,
  visitors: Users,
  session: Clock3,
  sessions: Waypoints,
  components: LayoutGrid,
  clicks: MousePointerClick,
};

type StatPanelProps = Readonly<{
  label: string;
  value: string | number;
  hint?: string;
  tone: StatTone;
  icon?: LucideIcon;
  className?: string;
}>;

export function StatPanel({
  label,
  value,
  hint,
  tone,
  icon,
  className,
}: StatPanelProps) {
  const Icon = icon ?? STAT_ICONS[tone];

  return (
    <article
      className={cn(
        "rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-sans text-xs font-medium text-neutral-500">
            {label}
          </p>
          <p className="mt-1.5 font-sans text-2xl font-semibold tracking-tight text-neutral-900 tabular-nums">
            {value}
          </p>
          {hint ? (
            <p className="mt-1 font-sans text-[11px] text-neutral-400">{hint}</p>
          ) : null}
        </div>

        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-xl",
            STAT_ICON_STYLES[tone],
          )}
        >
          <Icon size={16} aria-hidden />
        </div>
      </div>
    </article>
  );
}

const RANK_ICONS = {
  components: LayoutGrid,
  pages: Globe2,
  countries: Globe2,
  regions: MapPin,
  clicks: MousePointerClick,
} as const;

type RankKind = keyof typeof RANK_ICONS;

type RankPanelProps = Readonly<{
  title: string;
  count: number;
  emptyLabel: string;
  kind: RankKind;
  children: ReactNode;
  className?: string;
  fill?: boolean;
}>;

export function RankPanel({
  title,
  count,
  emptyLabel,
  kind,
  children,
  className,
  fill = false,
}: RankPanelProps) {
  const Icon = RANK_ICONS[kind];

  return (
    <article
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        fill && "h-full min-h-72",
        className,
      )}
    >
      <header className="flex shrink-0 items-center gap-2.5 border-b border-neutral-100 px-4 py-3">
        <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
          <Icon size={15} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-sans text-sm font-semibold text-neutral-900">
            {title}
          </h2>
          <p className="font-sans text-[11px] text-neutral-400">
            {count === 0 ? "No data yet" : `${count} entries`}
          </p>
        </div>
      </header>

      <div
        className={cn(
          "scrollbar-hover min-h-0 px-2 py-1",
          fill ? "flex-1 overflow-y-auto" : "max-h-80 overflow-y-auto",
        )}
      >
        {count === 0 ? (
          <p className="px-2 py-8 text-center font-sans text-sm text-neutral-500">
            {emptyLabel}
          </p>
        ) : (
          children
        )}
      </div>
    </article>
  );
}

type RankRowProps = Readonly<{
  label: string;
  value: string | number;
  href?: string;
  rank: number;
  maxValue: number;
  share?: string;
}>;

export function RankRow({
  label,
  value,
  href,
  rank,
  maxValue,
  share,
}: RankRowProps) {
  const numericValue = typeof value === "number" ? value : Number(value);
  const width =
    maxValue > 0 ? Math.max(6, Math.round((numericValue / maxValue) * 100)) : 0;

  const content = (
    <>
      <span className="w-5 shrink-0 font-sans text-[11px] text-neutral-300 tabular-nums">
        {rank}
      </span>
      <div className="relative min-w-0 flex-1 py-2">
        <div
          aria-hidden
          className="absolute inset-y-1 left-0 rounded-lg bg-sky-50"
          style={{ width: `${width}%` }}
        />
        <div className="relative flex items-center justify-between gap-3 pr-1">
          <span className="truncate font-sans text-sm text-neutral-700">
            {label}
          </span>
          <span className="flex shrink-0 items-center gap-2">
            {share ? (
              <span className="font-sans text-[11px] text-neutral-400 tabular-nums">
                {share}
              </span>
            ) : null}
            <span className="font-sans text-xs font-semibold text-neutral-900 tabular-nums">
              {value}
            </span>
          </span>
        </div>
      </div>
      {href ? (
        <ChevronRight
          size={14}
          className="shrink-0 text-neutral-300"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <li>
        <Link
          href={href}
          className="flex items-center gap-2 rounded-xl px-2 transition-colors hover:bg-neutral-50"
        >
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 rounded-xl px-2">{content}</li>
  );
}

type DistributionChartProps = Readonly<{
  title: string;
  items: Array<{ label: string; value: number; tone?: string }>;
  emptyLabel: string;
  className?: string;
}>;

export function DistributionChart({
  title,
  items,
  emptyLabel,
  className,
}: DistributionChartProps) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const max = items.length > 0 ? Math.max(...items.map((i) => i.value)) : 0;

  return (
    <article
      className={cn(
        "flex min-h-0 flex-col rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        className,
      )}
    >
      <h2 className="font-sans text-sm font-semibold text-neutral-900">
        {title}
      </h2>
      {items.length === 0 || total === 0 ? (
        <p className="mt-6 text-center font-sans text-sm text-neutral-500">
          {emptyLabel}
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {items.map((item) => {
            const pct = total > 0 ? Math.round((item.value / total) * 100) : 0;
            const bar = max > 0 ? Math.round((item.value / max) * 100) : 0;
            return (
              <li key={item.label}>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="truncate font-sans text-xs text-neutral-600">
                    {item.label}
                  </span>
                  <span className="shrink-0 font-sans text-[11px] text-neutral-400 tabular-nums">
                    {item.value.toLocaleString()} · {pct}%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className={cn(
                      "h-full rounded-full transition-[width] duration-500",
                      item.tone ?? "bg-sky-500",
                    )}
                    style={{ width: `${bar}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

type ShareRingProps = Readonly<{
  label: string;
  value: number;
  total: number;
  hint?: string;
  accent?: string;
}>;

export function ShareRing({
  label,
  value,
  total,
  hint,
  accent = "text-sky-500",
}: ShareRingProps) {
  const pct = total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <article className="flex items-center gap-4 rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="relative size-[4.5rem] shrink-0">
        <svg viewBox="0 0 88 88" className="size-full -rotate-90" aria-hidden>
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-neutral-100"
          />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn(
              "transition-[stroke-dashoffset] duration-700",
              accent,
            )}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-sans text-sm font-semibold text-neutral-900 tabular-nums">
          {pct}%
        </span>
      </div>
      <div className="min-w-0">
        <p className="font-sans text-xs font-medium text-neutral-500">{label}</p>
        <p className="mt-1 font-sans text-lg font-semibold text-neutral-900 tabular-nums">
          {value.toLocaleString()}
          <span className="ml-1 text-sm font-normal text-neutral-400">
            / {total.toLocaleString()}
          </span>
        </p>
        {hint ? (
          <p className="mt-0.5 font-sans text-[11px] text-neutral-400">{hint}</p>
        ) : null}
      </div>
    </article>
  );
}
