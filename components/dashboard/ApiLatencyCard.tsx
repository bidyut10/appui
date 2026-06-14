import { forwardRef, useMemo, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * API latency card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo endpoint, latency metrics, and sparkline data with your own API monitoring data.
 */
export type LatencyMetric = {
  label: string;
  value: string;
  status: "good" | "warn" | "critical";
};

export type ApiLatencyCardProps = {
  title?: string;
  endpoint?: string;
  metrics?: LatencyMetric[];
  sparkline?: number[];
} & ComponentPropsWithoutRef<"div">;

const defaultMetrics: LatencyMetric[] = [
  { label: "p50", value: "42ms", status: "good" },
  { label: "p95", value: "128ms", status: "warn" },
  { label: "p99", value: "310ms", status: "critical" },
];

const defaultSparkline = [40, 55, 48, 62, 58, 72, 65, 80, 68, 90, 75, 85];

const statusColors = {
  good: "text-emerald-600 bg-emerald-50",
  warn: "text-amber-700 bg-amber-50",
  critical: "text-rose-700 bg-rose-50",
};

export const ApiLatencyCard = forwardRef<HTMLDivElement, ApiLatencyCardProps>(
  (
    {
      className,
      title = "API latency",
      endpoint = "GET /api/v2/components",
      metrics = defaultMetrics,
      sparkline = defaultSparkline,
      ...props
    },
    ref,
  ) => {
    const points = useMemo(() => {
      const chartData = sparkline ?? [];
      if (chartData.length === 0) return "";

      const max = Math.max(...chartData);
      const min = Math.min(...chartData);
      const range = max - min || 1;
      const denominator = Math.max(chartData.length - 1, 1);

      return chartData
        .map((v, i) => {
          const x = (i / denominator) * 100;
          const y = 100 - ((v - min) / range) * 80 - 10;
          return `${x},${y}`;
        })
        .join(" ");
    }, [sparkline]);

    return (
      <div
        ref={ref}
        data-slot="api-latency-card"
        className={cn(
          "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <p className="text-[11px] font-medium text-neutral-500">{title}</p>
        <p className="mt-0.5 truncate font-mono text-[12px] text-neutral-700">
          {endpoint}
        </p>

        {/* Sparkline */}
        <svg
          viewBox="0 0 100 40"
          className="mt-4 h-10 w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polyline
            points={points}
            fill="none"
            stroke="#14b8a6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Metrics */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {(metrics ?? []).map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-neutral-100 bg-neutral-50/80 px-3 py-2.5 text-center"
            >
              <p className="font-mono text-[10px] font-medium text-neutral-400 uppercase">
                {m.label}
              </p>
              <p className="mt-0.5 text-lg font-semibold tracking-tight text-neutral-900 tabular-nums">
                {m.value}
              </p>
              <span
                className={cn(
                  "mt-1 inline-block rounded px-1.5 py-px text-[9px] font-semibold uppercase",
                  statusColors[m.status],
                )}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

ApiLatencyCard.displayName = "ApiLatencyCard";
