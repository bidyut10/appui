"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Clock } from "lucide-react";

/** Monthly activity calendar — highlight active days and a selected date. */
const WEEKDAY_HEADERS = [
  { id: "sun", label: "S" },
  { id: "mon", label: "M" },
  { id: "tue", label: "T" },
  { id: "wed", label: "W" },
  { id: "thu", label: "T" },
  { id: "fri", label: "F" },
  { id: "sat", label: "S" },
] as const;

// Empty cells before the 1st — grid slots 0..3 when the month starts on a Friday
const MONTH_START_EMPTY_SLOTS = [0, 1, 2, 3] as const;

// month, year — header label; activeDays — emerald dots; highlightDay — orange selected day
export type DailyActivityCalendarWidgetProps = Readonly<
  {
    month?: string;
    year?: number;
    activeDays?: number[];
    highlightDay?: number;
  } & ComponentPropsWithoutRef<"div">
>;

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
    const daysInMonth = 31;

    return (
      <div
        ref={ref}
        data-slot="daily-activity-calendar-widget"
        data-year={year}
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
          <span className="text-[10px] text-neutral-400">{month}</span>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-0.5 text-center text-[8px] text-neutral-500">
          {WEEKDAY_HEADERS.map(({ id, label }) => (
            <span key={id}>{label}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5 text-center">
          {MONTH_START_EMPTY_SLOTS.map((slot) => (
            <span key={`start-${slot}`} />
          ))}
          {Array.from(
            { length: daysInMonth },
            (_, dayIndex) => dayIndex + 1,
          ).map((day) => {
            const isActive = activeDays.includes(day);
            const isHighlight = day === highlightDay;
            const isIdle = !isActive && !isHighlight;

            return (
              <span
                key={day}
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[9px]",
                  isActive && "bg-emerald-500 font-semibold text-white",
                  isHighlight && "bg-orange-500 font-semibold text-white",
                  isIdle && "text-neutral-400",
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
