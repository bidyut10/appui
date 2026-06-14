"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type CircularStatsWidgetProps = {
  value?: number;
  calories?: number;
  time?: number;
  percent?: number;
} & ComponentPropsWithoutRef<"div">;

export const CircularStatsWidget = forwardRef<
  HTMLDivElement,
  CircularStatsWidgetProps
>(
  (
    {
      className,
      value = 176,
      calories = 160,
      time = 16,
      percent = 65,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="circular-stats-widget"
      className={cn(
        "flex w-64 items-center gap-4 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#f5f5f5"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#D9F26D"
            strokeWidth="3"
            strokeDasharray={`${percent} 100`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xl font-bold text-neutral-900">
          {value}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F9D6F0]" />
          <span className="text-xs text-neutral-600">
            <strong>{calories}</strong> Calories
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="text-xs text-neutral-600">
            <strong>{time}</strong> Time
          </span>
        </div>
      </div>
    </div>
  ),
);

CircularStatsWidget.displayName = "CircularStatsWidget";
