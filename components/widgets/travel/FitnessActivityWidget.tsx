"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type FitnessActivityWidgetProps = {
  distance?: string;
  ringValue?: string;
  ringPercent?: number;
  duration?: string;
  avgSpeed?: string;
  calories?: string;
} & ComponentPropsWithoutRef<"div">;

export const FitnessActivityWidget = forwardRef<
  HTMLDivElement,
  FitnessActivityWidgetProps
>(
  (
    {
      className,
      distance = "2.8 km",
      ringValue = "64 km",
      ringPercent = 64,
      duration = "08:21",
      avgSpeed = "18.4 km/h",
      calories = "134 kcal",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="fitness-activity-widget"
      className={cn(
        "w-72 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <p className="text-3xl font-bold tracking-tight text-neutral-900">
          {distance}
        </p>
        <div className="relative flex h-14 w-14 items-center justify-center">
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
              stroke="#f97316"
              strokeWidth="3"
              strokeDasharray={`${ringPercent} 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-[9px] font-bold text-neutral-700">
            {ringValue}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-neutral-100 pt-3">
        <div>
          <p className="text-[10px] text-neutral-400">Duration</p>
          <p className="text-xs font-semibold text-neutral-900">{duration}</p>
        </div>
        <div>
          <p className="text-[10px] text-neutral-400">Avg. speed</p>
          <p className="text-xs font-semibold text-neutral-900">{avgSpeed}</p>
        </div>
        <div>
          <p className="text-[10px] text-neutral-400">Calories</p>
          <p className="text-xs font-semibold text-neutral-900">{calories}</p>
        </div>
      </div>
    </div>
  ),
);

FitnessActivityWidget.displayName = "FitnessActivityWidget";
