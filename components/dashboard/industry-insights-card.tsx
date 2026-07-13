"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import { ArrowUpRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/cn";

export type InsightSource = Readonly<{
  id: string;
  label: string;
  active?: boolean;
}>;

export type IndustryInsightsCardProps = Readonly<
  {
    title?: string;
    highlight?: string;
    beforeText?: string;
    afterText?: string;
    sources?: readonly InsightSource[];
    href?: string;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_SOURCES: readonly InsightSource[] = [
  { id: "bloomberg", label: "B" },
  { id: "cnbc", label: "CNBC", active: true },
  { id: "mw", label: "MW" },
  { id: "reuters", label: "R" },
  { id: "ft", label: "FT" },
];

// Industry insights card — dark AI summary with source selector pills.
export const IndustryInsightsCard = forwardRef<
  HTMLElement,
  IndustryInsightsCardProps
>(
  (
    {
      className,
      title = "Industry Insights",
      highlight = "retail spending increased 4.2%",
      beforeText = "CNBC data shows",
      afterText = "in January as holiday demand extended into early 2025.",
      sources = DEFAULT_SOURCES,
      href = "#",
      ...props
    },
    ref,
  ) => {
    const actionClassName =
      "flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-neutral-200 transition-colors hover:bg-neutral-700";

    return (
      <article
        ref={ref}
        data-slot="industry-insights-card"
        className={cn(
          "w-sm rounded-3xl border border-neutral-800 bg-neutral-900 p-5 font-sans text-white shadow-lg shadow-black/10",
          className,
        )}
        {...props}
      >
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles size={14} aria-hidden className="text-neutral-400" />
            <h2 className="text-sm font-medium text-neutral-300">{title}</h2>
          </div>
          {href && href !== "#" ? (
            <Link href={href} aria-label="Open insight" className={actionClassName}>
              <ArrowUpRight size={15} aria-hidden />
            </Link>
          ) : (
            <button type="button" aria-label="Open insight" className={actionClassName}>
              <ArrowUpRight size={15} aria-hidden />
            </button>
          )}
        </header>

        <p className="mt-5 text-sm leading-relaxed text-neutral-300">
          {beforeText}{" "}
          <span className="font-semibold text-white">{highlight}</span> {afterText}
        </p>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-neutral-950 px-2 py-1.5">
            {sources.map((source) => (
              <span
                key={source.id}
                className={cn(
                  "flex size-8 items-center justify-center rounded-full text-[10px] font-semibold",
                  source.active
                    ? "bg-white text-neutral-900"
                    : "bg-neutral-800 text-neutral-400",
                )}
              >
                {source.label}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  },
);

IndustryInsightsCard.displayName = "IndustryInsightsCard";
