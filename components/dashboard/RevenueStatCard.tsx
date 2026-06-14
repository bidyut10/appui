import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { ArrowRight } from "@/icons/ArrowRight";
import { cn } from "@/lib/utils";

/**
 * Revenue stat card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo revenue values, growth percentage, and chart data
 * with your own analytics data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type RevenueStatCardProps = {
  title?: string;
  revenue?: string;
  comparisonText?: string;
  growth?: string;
  chartData?: number[];
  actionLabel?: string;
  onActionClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultChartData = [35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100];

export const RevenueStatCard = forwardRef<HTMLDivElement, RevenueStatCardProps>(
  (
    {
      className,
      title = "Total Revenue",
      revenue = "$84,254",
      comparisonText = "vs $71,320 last month",
      growth = "+18.2%",
      chartData = defaultChartData,
      actionLabel = "View report",
      onActionClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="revenue-stat-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div
        data-slot="revenue-stat-header"
        className="mb-3 flex items-center justify-between"
      >
        <p
          data-slot="revenue-stat-title"
          className="text-[11px] font-medium text-neutral-500"
        >
          {title}
        </p>

        <span
          data-slot="revenue-stat-growth"
          className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700 tabular-nums"
        >
          {growth}
        </span>
      </div>

      {/* Revenue */}
      <p
        data-slot="revenue-stat-value"
        className="text-[2rem] leading-none font-semibold tracking-tight text-neutral-900 tabular-nums"
      >
        {revenue}
      </p>

      <p
        data-slot="revenue-stat-comparison"
        className="mt-1 text-[11px] text-neutral-400"
      >
        {comparisonText}
      </p>

      <div
        data-slot="revenue-stat-chart"
        className="mt-4 flex h-12 items-end gap-1"
      >
        {(chartData ?? []).map((height, index) => (
          <div
            key={`${index}-${height}`}
            data-slot="revenue-stat-bar"
            className={cn(
              "flex-1 rounded-sm",
              index >= chartData.length - 2
                ? "bg-emerald-500"
                : "bg-neutral-100",
            )}
            style={{
              height: `${Math.max(0, Math.min(100, height))}%`,
            }}
          />
        ))}
      </div>

      <button
        type="button"
        data-slot="revenue-stat-action"
        aria-label={actionLabel}
        onClick={onActionClick}
        className="mt-3 flex cursor-pointer items-center gap-1 text-[11px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
      >
        {actionLabel}
        <ArrowRight size={10} />
      </button>
    </div>
  ),
);

RevenueStatCard.displayName = "RevenueStatCard";
