"use client";

import { forwardRef, useMemo, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * KPI sparkline grid built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo KPI labels, values, changes, and sparkline data with your own metrics.
 */
export type KpiItem = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  sparkline: number[];
};

export type KpiSparklineGridProps = {
  items?: KpiItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: KpiItem[] = [
  {
    label: "Signups",
    value: "1,284",
    change: "+8%",
    positive: true,
    sparkline: [30, 45, 40, 55, 50, 65, 60, 72],
  },
  {
    label: "Activation",
    value: "64%",
    change: "+2%",
    positive: true,
    sparkline: [50, 52, 55, 54, 58, 60, 62, 64],
  },
  {
    label: "Churn",
    value: "2.1%",
    change: "-0.4%",
    positive: true,
    sparkline: [4, 3.5, 3.2, 3, 2.8, 2.5, 2.3, 2.1],
  },
  {
    label: "ARPU",
    value: "₹840",
    change: "-1%",
    positive: false,
    sparkline: [90, 88, 87, 86, 85, 84, 83, 82],
  },
];

function MiniSparkline({
  data,
  positive,
}: {
  data: number[];
  positive: boolean;
}) {
  const points = useMemo(() => {
    const chartData = data ?? [];
    if (chartData.length === 0) return "";

    const max = Math.max(...chartData);
    const min = Math.min(...chartData);
    const range = max - min || 1;
    const denominator = Math.max(chartData.length - 1, 1);

    return chartData
      .map((v, i) => {
        const x = (i / denominator) * 48;
        const y = 16 - ((v - min) / range) * 12;
        return `${x},${y}`;
      })
      .join(" ");
  }, [data]);

  return (
    <svg viewBox="0 0 48 18" className="h-4 w-12" aria-hidden>
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#14b8a6" : "#f43f5e"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const KpiSparklineGrid = forwardRef<
  HTMLDivElement,
  KpiSparklineGridProps
>(({ className, items = defaultItems, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="kpi-sparkline-grid"
    className={cn(
      "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-4 font-sans shadow-lg ring-1 ring-black/[0.03]",
      className,
    )}
    {...props}
  >
    {/* Grid */}
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-neutral-100">
      {(items ?? []).map((item) => (
        <div
          key={item.label}
          className="bg-white p-3.5 first:rounded-tl-xl last:rounded-br-xl [&:nth-child(2)]:rounded-tr-xl [&:nth-child(3)]:rounded-bl-xl"
        >
          <p className="text-[10px] font-medium text-neutral-400">
            {item.label}
          </p>
          <p className="mt-0.5 text-lg font-semibold text-neutral-900 tabular-nums">
            {item.value}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span
              className={cn(
                "text-[10px] font-semibold tabular-nums",
                item.positive ? "text-emerald-600" : "text-rose-600",
              )}
            >
              {item.change}
            </span>
            <MiniSparkline data={item.sparkline} positive={item.positive} />
          </div>
        </div>
      ))}
    </div>
  </div>
));

KpiSparklineGrid.displayName = "KpiSparklineGrid";
