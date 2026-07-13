"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import { ChevronRight, Trophy } from "lucide-react";

import { cn } from "@/lib/cn";

export type RankingListItem = Readonly<{
  id: string;
  label: string;
  value: string | number;
  href?: string;
}>;

export type RankingListPanelProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    items?: readonly RankingListItem[];
    emptyLabel?: string;
  } & ComponentPropsWithoutRef<"section">
>;

const DEFAULT_ITEMS: readonly RankingListItem[] = [
  { id: "1", label: "Analytics dashboard", value: "4,281", href: "#" },
  { id: "2", label: "Billing settings", value: "3,104", href: "#" },
  { id: "3", label: "Team members", value: "2,876" },
  { id: "4", label: "API keys", value: "1,992" },
  { id: "5", label: "Export reports", value: "1,540", href: "#" },
];

function RankingRow({
  item,
  rank,
}: Readonly<{ item: RankingListItem; rank: number }>) {
  const content = (
    <>
      <span className="w-5 shrink-0 font-mono text-[10px] text-neutral-400 tabular-nums">
        {rank}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm text-neutral-700">
        {item.label}
      </span>
      <span className="shrink-0 font-mono text-xs text-neutral-900 tabular-nums">
        {item.value}
      </span>
      {item.href ? (
        <ChevronRight size={14} className="shrink-0 text-neutral-300" aria-hidden />
      ) : null}
    </>
  );

  if (item.href && item.href !== "#") {
    return (
      <li>
        <Link
          href={item.href}
          className="flex items-center gap-2 px-2 py-2.5 transition-colors hover:bg-neutral-50"
        >
          {content}
        </Link>
      </li>
    );
  }

  if (item.href === "#") {
    return (
      <li>
        <button
          type="button"
          className="flex w-full items-center gap-2 px-2 py-2.5 text-left transition-colors hover:bg-neutral-50"
        >
          {content}
        </button>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 px-2 py-2.5">{content}</li>
  );
}

// Ranking list panel — top pages, products, or regions for analytics dashboards.
export const RankingListPanel = forwardRef<HTMLElement, RankingListPanelProps>(
  (
    {
      className,
      title = "Top pages",
      subtitle = "Most visited this month",
      items = DEFAULT_ITEMS,
      emptyLabel = "No ranking data yet.",
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      data-slot="ranking-list-panel"
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden border border-neutral-200 bg-white font-sans",
        className,
      )}
      {...props}
    >
      <header className="flex items-center gap-2.5 border-b border-neutral-100 px-4 py-3.5">
        <div className="flex size-8 shrink-0 items-center justify-center bg-neutral-50 text-neutral-600">
          <Trophy size={15} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
          <p className="font-mono text-[10px] text-neutral-400">{subtitle}</p>
        </div>
        <span className="bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500 tabular-nums">
          {items.length}
        </span>
      </header>

      {items.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-neutral-500">
          {emptyLabel}
        </p>
      ) : (
        <ol className="max-h-80 overflow-y-auto px-2 py-1">
          {items.map((item, index) => (
            <RankingRow key={item.id} item={item} rank={index + 1} />
          ))}
        </ol>
      )}
    </section>
  ),
);

RankingListPanel.displayName = "RankingListPanel";
