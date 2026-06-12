import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/*
| Traffic sources card built with React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo traffic data,
| visit count, and source breakdown
| with your own analytics data.
|
| Visual design remains exactly the same.
*/

export type TrafficSource = {
  name: string;
  percentage: number;
  color?: string;
  strokeColor?: string;
};

export type TrafficSourcesCardProps = {
  title?: string;
  description?: string;

  totalVisits?: string;

  sources?: TrafficSource[];
} & ComponentPropsWithoutRef<"div">;

const defaultSources: TrafficSource[] = [
  {
    name: "Organic Search",
    percentage: 42,
    color: "bg-blue-500",
    strokeColor: "#3b82f6",
  },
  {
    name: "Direct",
    percentage: 28,
    color: "bg-violet-500",
    strokeColor: "#8b5cf6",
  },
  {
    name: "Social Media",
    percentage: 18,
    color: "bg-fuchsia-500",
    strokeColor: "#d946ef",
  },
  {
    name: "Referral",
    percentage: 12,
    color: "bg-amber-500",
    strokeColor: "#f59e0b",
  },
];

export const TrafficSourcesCard = forwardRef<
  HTMLDivElement,
  TrafficSourcesCardProps
>(
  (
    {
      className,

      title = "Traffic Sources",
      description = "Last 30 days · 24,580 visits",

      totalVisits = "24K",

      sources = defaultSources,

      ...props
    },
    ref,
  ) => {
    const chartId = useId();

    const safeSources = sources.map((source) => ({
      ...source,
      percentage: Math.max(0, Math.min(100, source.percentage)),
    }));

    let accumulatedOffset = 0;

    return (
      <div
        ref={ref}
        data-slot="traffic-sources-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div data-slot="traffic-sources-header">
          <h4
            data-slot="traffic-sources-title"
            className="mb-1 text-sm font-semibold text-neutral-900"
          >
            {title}
          </h4>

          <p
            data-slot="traffic-sources-description"
            className="mb-4 text-[11px] text-neutral-400"
          >
            {description}
          </p>
        </div>

        {/* Chart */}
        <div
          data-slot="traffic-sources-chart"
          className="mb-4 flex items-center justify-center"
        >
          <div className="relative h-24 w-24">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              {safeSources.map((source, index) => {
                const currentOffset = accumulatedOffset;

                accumulatedOffset += source.percentage;

                return (
                  <circle
                    key={`${chartId}-${source.name}-${index}`}
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    strokeWidth="3"
                    stroke={
                      source.strokeColor ??
                      ["#3b82f6", "#8b5cf6", "#d946ef", "#f59e0b"][index % 4]
                    }
                    strokeDasharray={`${source.percentage} ${
                      100 - source.percentage
                    }`}
                    strokeDashoffset={-currentOffset}
                  />
                );
              })}
            </svg>

            <div
              data-slot="traffic-sources-center"
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="text-lg font-semibold text-neutral-900">
                {totalVisits}
              </span>

              <span className="text-[8px] text-neutral-400">visits</span>
            </div>
          </div>
        </div>

        {/* Sources List */}
        <div data-slot="traffic-sources-list" className="space-y-2">
          {safeSources.map((source) => (
            <div
              key={source.name}
              data-slot="traffic-sources-item"
              className="flex items-center gap-2"
            >
              <div
                data-slot="traffic-sources-indicator"
                className={cn(
                  "h-2 w-2 rounded-full",
                  source.color ?? "bg-blue-500",
                )}
              />

              <span className="flex-1 text-[11px] text-neutral-600">
                {source.name}
              </span>

              <span className="font-mono text-[11px] text-neutral-500">
                {source.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

TrafficSourcesCard.displayName = "TrafficSourcesCard";
