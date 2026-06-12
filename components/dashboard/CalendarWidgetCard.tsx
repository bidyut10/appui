"use client";

import React, { forwardRef, ComponentPropsWithoutRef, useState } from "react";

import { cn } from "@/lib/utils";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export interface CalendarEvent {
  title: string;
  time: string;
}

export interface CalendarWidgetCardProps extends ComponentPropsWithoutRef<"div"> {
  month?: string;
  year?: string;
  dates?: number[];
  defaultSelected?: number;
  highlightedDate?: number;
  event?: CalendarEvent;
}

export const CalendarWidgetCard = forwardRef<
  HTMLDivElement,
  CalendarWidgetCardProps
>(
  (
    {
      className,

      month = "June",
      year = "2026",

      dates = Array.from({ length: 30 }, (_, i) => i + 1),

      defaultSelected = 14,

      highlightedDate = 6,

      event = {
        title: "Team Standup",
        time: "10:00 AM · 30 min",
      },

      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(defaultSelected);

    return (
      <div
        ref={ref}
        data-slot="calendar-widget-card"
        className={cn(
          "w-80 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          data-slot="calendar-widget-header"
          className="mb-3 flex items-center justify-between"
        >
          <h4 className="text-sm font-semibold text-neutral-900">
            {month} {year}
          </h4>

          <div className="flex gap-1">
            <button
              type="button"
              aria-label="Previous month"
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-xs text-neutral-400 hover:bg-neutral-100"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next month"
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-xs text-neutral-400 hover:bg-neutral-100"
            >
              ›
            </button>
          </div>
        </div>

        {/* Week Days */}
        <div
          data-slot="calendar-weekdays"
          className="mb-1 grid grid-cols-7 gap-0.5"
        >
          {DAYS.map((day) => (
            <span
              key={day}
              className="py-1 text-center font-mono text-[9px] text-neutral-400"
            >
              {day}
            </span>
          ))}
        </div>

        {/* Dates */}
        <div data-slot="calendar-dates" className="grid grid-cols-7 gap-0.5">
          {dates.map((date) => (
            <button
              key={date}
              type="button"
              onClick={() => setSelected(date)}
              aria-pressed={selected === date}
              className={cn(
                "h-7 w-7 cursor-pointer rounded-lg text-[11px] font-medium transition-colors",
                selected === date
                  ? "bg-neutral-900 text-white"
                  : date === highlightedDate
                    ? "bg-teal-50 text-teal-700"
                    : "text-neutral-700 hover:bg-neutral-100",
              )}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Event */}
        <div
          data-slot="calendar-event"
          className="mt-3 border-t border-neutral-100 pt-3"
        >
          <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
            Today
          </p>

          <div className="flex items-center gap-2 rounded-lg bg-teal-50 p-2">
            <div className="h-8 w-1 rounded-full bg-teal-500" />

            <div>
              <p className="text-xs font-medium text-neutral-900">
                {event.title}
              </p>

              <p className="text-[10px] text-neutral-500">{event.time}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

CalendarWidgetCard.displayName = "CalendarWidgetCard";
