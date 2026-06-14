import {
  forwardRef,
  useMemo,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Analytics mini card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo visitor count, chart values, and labels with your own analytics data.
 */
export type AnalyticsMiniCardProps = {
  title?: string;
  value?: string | number;
  statusLabel?: string;
  startLabel?: string;
  endLabel?: string;
  chartData?: number[];
} & ComponentPropsWithoutRef<"div">;

const defaultChartData = [
  30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 95, 85, 70, 60, 75, 90, 100, 85,
  95, 80, 90, 95, 100,
];

export const AnalyticsMiniCard = forwardRef<
  HTMLDivElement,
  AnalyticsMiniCardProps
>(
  (
    {
      className,
      title = "Live Visitors",
      value = 847,
      statusLabel = "Live",
      startLabel = "12am",
      endLabel = "Now",
      chartData = defaultChartData,
      ...props
    },
    ref,
  ) => {
    const safeChartData = useMemo(
      () =>
        (chartData ?? []).map((barHeight) =>
          Math.max(0, Math.min(100, barHeight)),
        ),
      [chartData],
    );

    const formattedValue =
      typeof value === "number" ? value.toLocaleString() : value;

    return (
      <div
        ref={ref}
        data-slot="analytics-mini-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 font-sans",
          className,
        )}
        {...props}
      >
                <div
          data-slot="analytics-mini-header"
          className="mb-3 flex items-center justify-between"
        >
          <p
            data-slot="analytics-mini-title"
            className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase"
          >
            {title}
          </p>

          <span
            data-slot="analytics-mini-status"
            className="flex items-center gap-1 text-[10px] text-emerald-400"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {statusLabel}
          </span>
        </div>

        {/* Value */}
        <p
          data-slot="analytics-mini-value"
          className="text-3xl font-light tracking-tight text-white"
        >
          {formattedValue}
        </p>

                <div
          data-slot="analytics-mini-chart"
          className="mt-3 flex h-8 items-end gap-px"
        >
          {safeChartData.map((height, index) => (
            <div
              key={`${index}-${height}`}
              data-slot="analytics-mini-bar"
              className="flex-1 rounded-sm bg-emerald-500/60"
              style={{
                height: `${height}%`,
                opacity:
                  index >= safeChartData.length - 4
                    ? 1
                    : 0.3 + (index / safeChartData.length) * 0.7,
              }}
            />
          ))}
        </div>

                <div
          data-slot="analytics-mini-footer"
          className="mt-2 flex justify-between"
        >
          <span className="font-mono text-[9px] text-neutral-600">
            {startLabel}
          </span>

          <span className="font-mono text-[9px] text-neutral-600">
            {endLabel}
          </span>
        </div>
      </div>
    );
  },
);

AnalyticsMiniCard.displayName = "AnalyticsMiniCard";
