"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";

/**
 * Interactive date picker widget with month navigation.
 *
 * Replace demo labels with your own scheduling logic.
 */
export type DatePickerWidgetProps = {
  title?: string;
  defaultMonth?: number;
  defaultYear?: number;
  selectedDay?: number;
  highlightedDays?: number[];
  onDateSelect?: (day: number, month: number, year: number) => void;
} & ComponentPropsWithoutRef<"div">;

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

export const DatePickerWidget = forwardRef<
  HTMLDivElement,
  DatePickerWidgetProps
>(
  (
    {
      className,
      title = "Pick a date",
      defaultMonth = 5,
      defaultYear = 2026,
      selectedDay: initialDay = 6,
      highlightedDays = [12, 18, 24],
      onDateSelect,
      ...props
    },
    ref,
  ) => {
    const [month, setMonth] = useState(defaultMonth);
    const [year, setYear] = useState(defaultYear);
    const [selected, setSelected] = useState(initialDay);

    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);

    const cells = useMemo(() => {
      const blanks = Array.from({ length: firstDay }, () => null);
      const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      return [...blanks, ...days];
    }, [daysInMonth, firstDay]);

    const prevMonth = () => {
      if (month === 0) {
        setMonth(11);
        setYear((y) => y - 1);
      } else setMonth((m) => m - 1);
    };

    const nextMonth = () => {
      if (month === 11) {
        setMonth(0);
        setYear((y) => y + 1);
      } else setMonth((m) => m + 1);
    };

    const pick = (day: number) => {
      setSelected(day);
      onDateSelect?.(day, month, year);
    };

    return (
      <div
        ref={ref}
        data-slot="date-picker-widget"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>

        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous month"
            onClick={prevMonth}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-[13px] font-semibold text-neutral-900">
            {MONTHS[month]} {year}
          </span>
          <button
            type="button"
            aria-label="Next month"
            onClick={nextMonth}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mb-1 grid grid-cols-7 gap-0.5">
          {WEEKDAYS.map((d) => (
            <span
              key={d}
              className="py-1 text-center text-[10px] font-semibold text-neutral-400"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {cells.map((day, i) =>
            day === null ? (
              <span key={`blank-${i}`} />
            ) : (
              <button
                key={day}
                type="button"
                onClick={() => pick(day)}
                aria-label={`Select ${MONTHS[month]} ${day}`}
                aria-pressed={selected === day}
                className={cn(
                  "flex aspect-square cursor-pointer items-center justify-center rounded-lg text-[12px] font-medium transition-all",
                  selected === day
                    ? "bg-neutral-900 text-white shadow-lg"
                    : highlightedDays.includes(day)
                      ? "bg-teal-50 text-teal-700 ring-1 ring-teal-200"
                      : "text-neutral-700 hover:bg-neutral-100",
                )}
              >
                {day}
              </button>
            ),
          )}
        </div>

        <p className="mt-3 text-center text-[11px] text-neutral-400">
          Selected:{" "}
          <span className="font-medium text-neutral-700">
            {MONTHS[month]} {selected}, {year}
          </span>
        </p>
      </div>
    );
  },
);

DatePickerWidget.displayName = "DatePickerWidget";
