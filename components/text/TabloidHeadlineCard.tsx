import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Tabloid Headline Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type TabloidHeadlineCardProps = {
  kicker?: string;
  headline?: string;
  subhead?: string;
  date?: string;
} & ComponentPropsWithoutRef<"div">;

export const TabloidHeadlineCard = forwardRef<
  HTMLDivElement,
  TabloidHeadlineCardProps
>(
  (
    {
      className,
      kicker = "Exclusive",
      headline = "DESIGNER BUILDS 200 COMPONENTS IN ONE WEEKEND",
      subhead = "Industry insiders say the library changes how teams ship UI forever",
      date = "Saturday, June 6, 2026",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="tabloid-headline-card"
      className={cn(
        "w-sm overflow-hidden border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="bg-rose-600 px-3 py-1">
        <p className="text-center text-[10px] font-black tracking-[0.2em] text-white uppercase">
          {kicker}
        </p>
      </div>
      <div className="border-b-4 border-neutral-900 px-4 py-3">
        <p className="text-center font-mono text-[9px] text-neutral-500">
          {date}
        </p>
        <h2 className="mt-2 text-center text-xl leading-none font-black tracking-tight text-neutral-900 sm:text-2xl">
          {headline}
        </h2>
        <p className="mt-3 text-center text-xs leading-relaxed text-neutral-600">
          {subhead}
        </p>
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-200 bg-neutral-50 text-center">
        {["Design", "Code", "Ship"].map((label) => (
          <span
            key={label}
            className="py-2 text-[10px] font-bold tracking-wider text-neutral-700 uppercase"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  ),
);

TabloidHeadlineCard.displayName = "TabloidHeadlineCard";
