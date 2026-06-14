"use client";

import {
  forwardRef,
  useId,
  useMemo,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Trend milestone card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo ARR growth values, chart data, and milestones with your own metrics.
 */
export type Milestone = {
  label: string;
  date: string;
  x: number;
};

export type TrendMilestoneCardProps = {
  title?: string;
  value?: string;
  change?: string;
  data?: number[];
  milestones?: Milestone[];
} & ComponentPropsWithoutRef<"div">;

const defaultData = [20, 35, 30, 48, 42, 65, 58, 82, 75, 95];
const defaultMilestones: Milestone[] = [
  { label: "v2 launch", date: "Mar", x: 35 },
  { label: "Series A", date: "May", x: 72 },
];

export const TrendMilestoneCard = forwardRef<
  HTMLDivElement,
  TrendMilestoneCardProps
>(
  (
    {
      className,
      title = "ARR growth",
      value = "₹1.2Cr",
      change = "+34% YoY",
      data = defaultData,
      milestones = defaultMilestones,
      ...props
    },
    ref,
  ) => {
    const gradientId = useId();

    const points = useMemo(() => {
      const chartData = data ?? [];
      if (chartData.length === 0) return "";

      const max = Math.max(...chartData);
      const min = Math.min(...chartData);
      const range = max - min || 1;
      const denominator = Math.max(chartData.length - 1, 1);

      return chartData
        .map((v, i) => {
          const x = (i / denominator) * 200;
          const y = 60 - ((v - min) / range) * 48;
          return `${x},${y}`;
        })
        .join(" ");
    }, [data]);

    return (
      <div
        ref={ref}
        data-slot="trend-milestone-card"
        className={cn(
          "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium text-neutral-500">{title}</p>
            <p className="mt-0.5 text-2xl font-semibold text-neutral-900 tabular-nums">
              {value}
            </p>
          </div>
          <span className="rounded-md bg-teal-50 px-2 py-1 text-[11px] font-bold text-teal-700">
            {change}
          </span>
        </div>

        <div className="relative mt-4">
          <svg viewBox="0 0 200 70" className="w-full" aria-hidden>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points={`0,70 ${points} 200,70`}
              fill={`url(#${gradientId})`}
            />
            <polyline
              points={points}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {(milestones ?? []).map((m) => (
              <g key={m.label}>
                <line
                  x1={m.x}
                  y1="0"
                  x2={m.x}
                  y2="65"
                  stroke="#e5e5e5"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle cx={m.x} cy="12" r="3" fill="#0ea5e9" />
              </g>
            ))}
          </svg>
          <div className="mt-1 flex justify-between px-1">
            {(milestones ?? []).map((m) => (
              <div
                key={m.label}
                className="text-center"
                style={{ marginLeft: `${(m.x / 200) * 100 - 15}%` }}
              >
                <p className="text-[9px] font-semibold text-sky-600">
                  {m.label}
                </p>
                <p className="text-[8px] text-neutral-400">{m.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

TrendMilestoneCard.displayName = "TrendMilestoneCard";
