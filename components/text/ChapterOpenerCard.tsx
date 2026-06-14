import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Chapter Opener Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ChapterOpenerCardProps = {
  chapter?: string;
  title?: string;
  subtitle?: string;
} & ComponentPropsWithoutRef<"div">;

export const ChapterOpenerCard = forwardRef<
  HTMLDivElement,
  ChapterOpenerCardProps
>(
  (
    {
      className,
      chapter = "Chapter IV",
      title = "On craft and constraint",
      subtitle = "Why limits make better interfaces",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="chapter-opener-card"
      className={cn(
        "w-sm border-y border-neutral-100 bg-white py-8 text-center font-serif",
        className,
      )}
      {...props}
    >
      <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
        {chapter}
      </p>
      <h2 className="mx-auto mt-4 max-w-[280px] text-2xl leading-tight font-medium text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-3">
        <div className="h-px w-8 bg-neutral-300" />
        <p className="font-sans text-[12px] text-neutral-500">{subtitle}</p>
        <div className="h-px w-8 bg-neutral-300" />
      </div>
    </div>
  ),
);

ChapterOpenerCard.displayName = "ChapterOpenerCard";
