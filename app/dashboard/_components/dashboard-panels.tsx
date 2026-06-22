"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { CrosshairFrame } from "@/app/crosshair-frame";

type StatPanelProps = Readonly<{
  label: string;
  value: string | number;
  hint?: string;
}>;

export function StatPanel({ label, value, hint }: StatPanelProps) {
  return (
    <CrosshairFrame pattern className="h-full">
      <div className="relative z-10 px-4 py-5">
        <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
          {label}
        </p>
        <p className="mt-2 font-serif text-2xl font-medium tabular-nums text-neutral-900">
          {value}
        </p>
        {hint ? (
          <p className="mt-1 font-mono text-[11px] text-neutral-500">{hint}</p>
        ) : null}
      </div>
    </CrosshairFrame>
  );
}

type RankPanelProps = Readonly<{
  title: string;
  count: number;
  emptyLabel: string;
  children: ReactNode;
}>;

export function RankPanel({ title, count, emptyLabel, children }: RankPanelProps) {
  return (
    <CrosshairFrame pattern className="flex min-h-0 flex-col">
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <h2 className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
            {title}
          </h2>
          <span className="font-mono text-[11px] text-neutral-400">{count}</span>
        </div>
        <div className="dashboard-scroll max-h-72 overflow-y-auto px-4 py-2">
          {count === 0 ? (
            <p className="py-6 font-serif text-sm text-neutral-500">{emptyLabel}</p>
          ) : (
            children
          )}
        </div>
      </div>
    </CrosshairFrame>
  );
}

type RankRowProps = Readonly<{
  label: string;
  value: string | number;
  href?: string;
}>;

export function RankRow({ label, value, href }: RankRowProps) {
  const content = (
    <>
      <span className="min-w-0 truncate font-mono text-xs text-neutral-700">
        {label}
      </span>
      <span className="shrink-0 pl-4 font-serif text-sm tabular-nums text-neutral-900">
        {value}
      </span>
    </>
  );

  if (href) {
    return (
      <li className="border-b border-neutral-50 last:border-0">
        <Link
          href={href}
          className="flex items-center justify-between gap-4 py-3 transition-colors hover:bg-neutral-50/80"
        >
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex items-center justify-between gap-4 border-b border-neutral-50 py-3 last:border-0">
      {content}
    </li>
  );
}
