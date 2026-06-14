import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Quick stats row built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo analytics metrics with your own dashboard data.
 */
export type QuickStat = {
  label: string;
  value: string;
  change: string;
  up?: boolean;
};

export type QuickStatsRowProps = {
  stats?: QuickStat[];
} & ComponentPropsWithoutRef<"div">;

const defaultStats: QuickStat[] = [
  {
    label: "Page Views",
    value: "48.2K",
    change: "+12%",
    up: true,
  },
  {
    label: "Bounce Rate",
    value: "32.4%",
    change: "-3%",
    up: false,
  },
  {
    label: "Avg. Session",
    value: "4m 12s",
    change: "+8%",
    up: true,
  },
  {
    label: "Conversion",
    value: "3.8%",
    change: "+0.4%",
    up: true,
  },
];

export const QuickStatsRow = forwardRef<HTMLDivElement, QuickStatsRowProps>(
  ({ className, stats = defaultStats, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="quick-stats-row"
      className={cn("grid w-72 grid-cols-2 gap-2 font-sans", className)}
      {...props}
    >
      {(stats ?? []).map(({ label, value, change, up = true }) => (
        <div
          key={label}
          data-slot="quick-stat-card"
          className="rounded-xl border border-neutral-100 bg-white p-3 shadow-lg"
        >
          {/* Label */}
          <p
            data-slot="quick-stat-label"
            className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase"
          >
            {label}
          </p>

          {/* Value */}
          <p
            data-slot="quick-stat-value"
            className="mt-0.5 text-lg font-semibold text-neutral-900"
          >
            {value}
          </p>

          {/* Change */}
          <span
            data-slot="quick-stat-change"
            data-direction={up ? "up" : "down"}
            className={cn(
              "text-[10px] font-medium",
              up ? "text-emerald-600" : "text-red-500",
            )}
          >
            {change}
          </span>
        </div>
      ))}
    </div>
  ),
);

QuickStatsRow.displayName = "QuickStatsRow";
