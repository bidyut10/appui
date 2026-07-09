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
  Radio,
  Users,
  Waypoints,
} from "lucide-react";

import { cn } from "@/lib/cn";

const STAT_ICON_STYLES = {
  live: "bg-emerald-50 text-emerald-600",
  views: "bg-sky-50 text-sky-600",
  visitors: "bg-violet-50 text-violet-600",
  session: "bg-amber-50 text-amber-600",
  sessions: "bg-cyan-50 text-cyan-600",
  components: "bg-rose-50 text-rose-600",
} as const;

type StatTone = keyof typeof STAT_ICON_STYLES;

const STAT_ICONS: Record<StatTone, LucideIcon> = {
  live: Radio,
  views: Eye,
  visitors: Users,
  session: Clock3,
  sessions: Waypoints,
  components: LayoutGrid,
};

type StatPanelProps = Readonly<{
  label: string;
  value: string | number;
  hint?: string;
  tone: StatTone;
}>;

export function StatPanel({ label, value, hint, tone }: StatPanelProps) {
  const Icon = STAT_ICONS[tone];

  return (
    <article className="rounded-xl border border-neutral-100 bg-white p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
            {label}
          </p>
          <p className="mt-2 font-serif text-2xl text-neutral-900 tabular-nums md:text-3xl">
            {value}
          </p>
          {hint ? (
            <p className="mt-1.5 font-sans text-xs text-neutral-500">{hint}</p>
          ) : null}
        </div>

        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-lg",
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
} as const;

type RankKind = keyof typeof RANK_ICONS;

type RankPanelProps = Readonly<{
  title: string;
  count: number;
  emptyLabel: string;
  kind: RankKind;
  children: ReactNode;
}>;

export function RankPanel({
  title,
  count,
  emptyLabel,
  kind,
  children,
}: RankPanelProps) {
  const Icon = RANK_ICONS[kind];

  return (
    <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white">
      <header className="flex items-center gap-2.5 border-b border-neutral-100 px-4 py-3.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-50 text-neutral-600">
          <Icon size={15} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-sans text-sm font-medium text-neutral-900">
            {title}
          </h2>
          <p className="font-mono text-[10px] text-neutral-400">
            {count === 0 ? "No data yet" : `${count} entries`}
          </p>
        </div>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500">
          {count}
        </span>
      </header>

      <div className="scrollbar-hover max-h-80 overflow-y-auto px-2 py-1">
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
}>;

export function RankRow({ label, value, href, rank, maxValue }: RankRowProps) {
  const numericValue = typeof value === "number" ? value : Number(value);
  const width =
    maxValue > 0
      ? Math.max(8, Math.round((numericValue / maxValue) * 100))
      : 0;

  const content = (
    <>
      <span className="w-5 shrink-0 font-mono text-[10px] text-neutral-300 tabular-nums">
        {rank}
      </span>
      <div className="relative min-w-0 flex-1 py-3">
        <div
          aria-hidden
          className="absolute inset-y-2 left-0 rounded-md bg-neutral-50"
          style={{ width: `${width}%` }}
        />
        <div className="relative flex items-center justify-between gap-3 pr-1">
          <span className="truncate font-sans text-sm text-neutral-700">
            {label}
          </span>
          <span className="shrink-0 font-mono text-xs text-neutral-900 tabular-nums">
            {value}
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
          className="flex items-center gap-2 rounded-lg px-2 transition-colors hover:bg-neutral-50"
        >
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 rounded-lg px-2">{content}</li>
  );
}
