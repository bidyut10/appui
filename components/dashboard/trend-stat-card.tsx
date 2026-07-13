"use client";

import { forwardRef, useMemo, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type TrendStatCardProps = Readonly<
  {
    label?: string;
    value?: string | number;
    change?: string;
    changeLabel?: string;
    data?: readonly number[];
    positive?: boolean;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_SERIES = [12, 18, 14, 22, 19, 28, 24, 32, 29, 36, 33, 41] as const;

function buildSparklinePath(
  values: readonly number[],
  width: number,
  height: number,
): string {
  if (values.length === 0) return "";

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((value, index) => {
    const x = (index / Math.max(values.length - 1, 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  });

  return `M ${points.join(" L ")}`;
}

// Trend stat card — KPI value with inline sparkline for dashboard analytics rows.
export const TrendStatCard = forwardRef<HTMLElement, TrendStatCardProps>(
  (
    {
      className,
      label = "Active users",
      value = "2,481",
      change = "+8.2%",
      changeLabel = "last 7 days",
      data = DEFAULT_SERIES,
      positive = true,
      ...props
    },
    ref,
  ) => {
    const path = useMemo(() => buildSparklinePath(data, 120, 36), [data]);

    return (
      <article
        ref={ref}
        data-slot="trend-stat-card"
        className={cn(
          "w-full min-w-0 border border-neutral-200 bg-white p-4 font-sans md:p-5",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
              {label}
            </p>
            <p className="mt-2 font-serif text-2xl leading-none tracking-tight text-neutral-950 tabular-nums">
              {value}
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              <span
                className={cn(
                  "font-medium tabular-nums",
                  positive ? "text-emerald-700" : "text-red-600",
                )}
              >
                {change}
              </span>{" "}
              {changeLabel}
            </p>
          </div>

          <svg
            viewBox="0 0 120 36"
            aria-hidden
            className="h-9 w-28 shrink-0 text-neutral-800"
          >
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </article>
    );
  },
);

TrendStatCard.displayName = "TrendStatCard";
