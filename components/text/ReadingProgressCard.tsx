import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Clock } from "@/icons/Clock";

/**
 * Reading Progress Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ReadingProgressCardProps = {
  category?: string;
  title?: string;
  excerpt?: string;
  progress?: number;
  readTime?: string;
  chapter?: string;
} & ComponentPropsWithoutRef<"div">;

export const ReadingProgressCard = forwardRef<
  HTMLDivElement,
  ReadingProgressCardProps
>(
  (
    {
      className,
      category = "Essay",
      title = "The case for opinionated components",
      excerpt = "Most UI libraries converge on the same card. The best ones have a point of view baked into every pixel.",
      progress = 62,
      readTime = "8 min left",
      chapter = "Ch. 3 of 7",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="reading-progress-card"
      className={cn(
        "w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-neutral-600 uppercase">
          {category}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-neutral-400">
          <Clock size={11} />
          {readTime}
        </span>
      </div>

      <h3 className="text-base font-bold leading-snug text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
        {excerpt}
      </p>

      <div className="mt-5">
        <div className="mb-1.5 flex justify-between text-[10px] font-medium text-neutral-500">
          <span>{chapter}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-teal-500 transition-all"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>
    </div>
  ),
);

ReadingProgressCard.displayName = "ReadingProgressCard";
