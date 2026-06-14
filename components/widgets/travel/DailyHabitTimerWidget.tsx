"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Leaf } from "@/icons/Leaf";

export type DailyHabitTimerWidgetProps = {
  habit?: string;
  timeLeft?: string;
  progress?: number;
} & ComponentPropsWithoutRef<"div">;

export const DailyHabitTimerWidget = forwardRef<
  HTMLDivElement,
  DailyHabitTimerWidgetProps
>(
  (
    {
      className,
      habit = "Daily Writing",
      timeLeft = "10m left",
      progress = 72,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="daily-habit-timer-widget"
      className={cn(
        "flex h-44 w-44 flex-col justify-between rounded-3xl bg-neutral-900 p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div>
        <p className="text-[11px] text-neutral-400">Habits</p>
        <p className="text-sm font-semibold">{habit}</p>
      </div>

      <p className="text-lg font-bold text-orange-400">{timeLeft}</p>

      <div className="flex justify-end">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <svg
            className="absolute h-full w-full -rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#404040"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeDasharray={`${progress} 100`}
              strokeLinecap="round"
            />
          </svg>
          <Leaf size={16} className="text-orange-400" />
        </div>
      </div>
    </div>
  ),
);

DailyHabitTimerWidget.displayName = "DailyHabitTimerWidget";
