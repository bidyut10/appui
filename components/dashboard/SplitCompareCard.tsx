import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Split compare card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo mobile and desktop session metrics with your own comparison data.
 */
export type SplitCompareCardProps = {
  leftLabel?: string;
  leftValue?: string;
  leftSub?: string;
  rightLabel?: string;
  rightValue?: string;
  rightSub?: string;
  divider?: string;
} & ComponentPropsWithoutRef<"div">;

export const SplitCompareCard = forwardRef<
  HTMLDivElement,
  SplitCompareCardProps
>(
  (
    {
      className,
      leftLabel = "Mobile",
      leftValue = "64%",
      leftSub = "of sessions",
      rightLabel = "Desktop",
      rightValue = "36%",
      rightSub = "of sessions",
      divider = "vs",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="split-compare-card"
      className={cn(
        "grid w-sm grid-cols-[1fr_auto_1fr] overflow-hidden rounded-[1.25rem] border border-neutral-200/80 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      {/* Left panel */}
      <div className="bg-neutral-900 p-5 text-white">
        <p className="text-[10px] font-medium text-neutral-400">{leftLabel}</p>
        <p className="mt-1 text-[2.5rem] leading-none font-semibold tabular-nums">
          {leftValue}
        </p>
        <p className="mt-1 text-[11px] text-neutral-500">{leftSub}</p>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center bg-white px-2">
        <span className="rounded-full border border-neutral-200 px-2 py-1 text-[10px] font-bold text-neutral-400">
          {divider}
        </span>
      </div>

      {/* Right panel */}
      <div className="bg-teal-50 p-5">
        <p className="text-[10px] font-medium text-teal-600/70">{rightLabel}</p>
        <p className="mt-1 text-[2.5rem] leading-none font-semibold text-teal-900 tabular-nums">
          {rightValue}
        </p>
        <p className="mt-1 text-[11px] text-teal-700/60">{rightSub}</p>
      </div>
    </div>
  ),
);

SplitCompareCard.displayName = "SplitCompareCard";
