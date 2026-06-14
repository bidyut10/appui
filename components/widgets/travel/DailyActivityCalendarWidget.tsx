"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Clock } from "@/icons/Clock";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export type DailyActivityCalendarWidgetProps = {
  month?: string;
  year?: number;
  activeDays?: number[];
  highlightDay?: number;
} & ComponentPropsWithoutRef<"div">;

export const DailyActivityCalendarWidget = forwardRef<
  HTMLDivElement,
  DailyActivityCalendarWidgetProps
>(
  (
    {
      className,
      month = "August 2024",
      year = 2024,
      activeDays = [2, 3, 4, 5, 6, 7],
      highlightDay = 8,
      ...props
    },
    ref,
  ) => {
    const [selectedMonth] = useState(month);
    const daysInMonth = 31;
    const startOffset = 4;

    return (
      <div
        ref={ref}
        data-slot="daily-activity-calendar-widget"
        className={cn(
          "flex h-44 w-44 flex-col overflow-hidden rounded-3xl bg-neutral-900 p-3 font-sans text-white shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold">Daily Activity</p>
          <Clock size={14} className="text-neutral-400" />
        </div>

        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-neutral-700 px-2 py-0.5 text-[9px]">
            Nov
          </span>
          <span className="text-[10px] text-neutral-400">{selectedMonth}</span>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-0.5 text-center text-[8px] text-neutral-500">
          {DAYS.map((d, i) => (
            <span key={`${d}-${i}`}>{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5 text-center">
          {Array.from({ length: startOffset }).map((_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const isActive = activeDays.includes(day);
            const isHighlight = day === highlightDay;
            return (
              <span
                key={day}
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[9px]",
                  isActive && "bg-emerald-500 font-semibold text-white",
                  isHighlight && "bg-orange-500 font-semibold text-white",
                  !isActive && !isHighlight && "text-neutral-400",
                )}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
    );
  },
);

DailyActivityCalendarWidget.displayName = "DailyActivityCalendarWidget";
