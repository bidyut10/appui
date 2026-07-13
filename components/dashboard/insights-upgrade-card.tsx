"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import { ArrowUpRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/cn";

export type InsightsUpgradeCardProps = Readonly<
  {
    badge?: string;
    title?: string;
    href?: string;
  } & ComponentPropsWithoutRef<"article">
>;

// Insights upgrade card — compact PRO upsell tile for dashboard sidebars.
export const InsightsUpgradeCard = forwardRef<HTMLElement, InsightsUpgradeCardProps>(
  (
    {
      className,
      badge = "PRO",
      title = "Switch to AI Insights Professional today!",
      href = "#",
      ...props
    },
    ref,
  ) => {
    const content = (
      <>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-wide text-rose-700 uppercase">
          <Sparkles size={11} aria-hidden />
          {badge}
        </span>

        <p className="mt-4 max-w-[14rem] text-sm leading-snug font-semibold text-white">
          {title}
        </p>

        <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-neutral-950 text-white">
          <ArrowUpRight size={15} aria-hidden />
        </span>
      </>
    );

    return (
      <article
        ref={ref}
        data-slot="insights-upgrade-card"
        className={cn(
          "relative w-sm overflow-hidden rounded-3xl bg-rose-400 p-5 font-sans shadow-lg shadow-black/10",
          className,
        )}
        {...props}
      >
        {href && href !== "#" ? (
          <Link href={href} className="block">
            {content}
          </Link>
        ) : (
          <button type="button" className="block w-full text-left">
            {content}
          </button>
        )}
      </article>
    );
  },
);

InsightsUpgradeCard.displayName = "InsightsUpgradeCard";
