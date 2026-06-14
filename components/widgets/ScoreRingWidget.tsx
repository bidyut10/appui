import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Score Ring Widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ScoreRingWidgetProps = {
  score?: number;
  maxScore?: number;
  label?: string;
  grade?: string;
  subtitle?: string;
} & ComponentPropsWithoutRef<"div">;

export const ScoreRingWidget = forwardRef<HTMLDivElement, ScoreRingWidgetProps>(
  (
    {
      className,
      score = 87,
      maxScore = 100,
      label = "Health score",
      grade = "Excellent",
      subtitle = "Based on 12 metrics",
      ...props
    },
    ref,
  ) => {
    const pct = (score / maxScore) * 100;
    const r = 40;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (pct / 100) * circumference;

    return (
      <div
        ref={ref}
        data-slot="score-ring-widget"
        className={cn(
          "flex w-[200px] flex-col items-center rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <div className="relative">
          <svg viewBox="0 0 96 96" className="h-24 w-24 -rotate-90">
            <circle
              cx="48"
              cy="48"
              r={r}
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="6"
            />
            <circle
              cx="48"
              cy="48"
              r={r}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-neutral-900 tabular-nums">
              {score}
            </span>
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-neutral-900">{label}</p>
        <span className="mt-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-700">
          {grade}
        </span>
        <p className="mt-1 text-[10px] text-neutral-400">{subtitle}</p>
      </div>
    );
  },
);

ScoreRingWidget.displayName = "ScoreRingWidget";
