import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Stat Editorial Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type StatEditorialCardProps = {
  value?: string;
  unit?: string;
  context?: string;
  source?: string;
} & ComponentPropsWithoutRef<"div">;

export const StatEditorialCard = forwardRef<
  HTMLDivElement,
  StatEditorialCardProps
>(
  (
    {
      className,
      value = "94",
      unit = "%",
      context = "of users complete onboarding in under 3 minutes when using guided flows",
      source = "AppUI Analytics · Q2 2026",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="stat-editorial-card"
      className={cn("w-sm bg-white px-6 py-8 font-sans", className)}
      {...props}
    >
      <div className="flex items-start gap-1">
        <span className="text-[4.5rem] leading-none font-light tracking-tighter text-neutral-900 tabular-nums sm:text-[5rem]">
          {value}
        </span>
        <span className="mt-2 text-2xl font-light text-teal-600">{unit}</span>
      </div>
      <p className="mt-4 max-w-[280px] text-[15px] leading-relaxed text-neutral-600">
        {context}
      </p>
      <p className="mt-4 font-mono text-[10px] tracking-wide text-neutral-400 uppercase">
        {source}
      </p>
    </div>
  ),
);

StatEditorialCard.displayName = "StatEditorialCard";
