"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

function startOfWeek(date: Date) {
  const copy = new Date(date);
  const day = copy.getDay();
  copy.setDate(copy.getDate() - day);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export type WeekStripCalendarProps = Readonly<
  {
    onSelect?: (date: Date) => void;
  } & ComponentPropsWithoutRef<"div">
>;

// Week strip — swipe weeks with arrows, tap a day to select it.
export const WeekStripCalendar = forwardRef<HTMLDivElement, WeekStripCalendarProps>(
  ({ className, onSelect, ...props }, ref) => {
    const today = useMemo(() => new Date(), []);
    const [weekStart, setWeekStart] = useState(() => startOfWeek(today));
    const [selected, setSelected] = useState(today);
    const [slideDirection, setSlideDirection] = useState(0);

    const days = useMemo(
      () => Array.from({ length: 7 }, (_, index) => addDays(weekStart, index)),
      [weekStart],
    );

    const rangeLabel = `${days[0]?.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${days[6]?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

    const selectDay = (date: Date) => {
      setSelected(date);
      onSelect?.(date);
    };

    return (
      <div
        ref={ref}
        data-slot="week-strip-calendar"
        className={cn(
          "w-80 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 font-sans shadow-lg shadow-black/5 select-none",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous week"
            onClick={() => {
              setSlideDirection(-1);
              setWeekStart((prev) => addDays(prev, -7));
            }}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95"
          >
            <ChevronLeft size={15} strokeWidth={2} />
          </button>

          <p
            key={rangeLabel}
            className="text-xs font-medium text-neutral-500 opacity-100 starting:opacity-0 transition-opacity duration-300 ease-out"
          >
            {rangeLabel}
          </p>

          <button
            type="button"
            aria-label="Next week"
            onClick={() => {
              setSlideDirection(1);
              setWeekStart((prev) => addDays(prev, 7));
            }}
            className="flex size-7 cursor-pointer items-center justify-center rounded-md text-neutral-500 transition-all duration-200 ease-out hover:bg-neutral-100 active:scale-95"
          >
            <ChevronRight size={15} strokeWidth={2} />
          </button>
        </div>

        <div
          key={weekStart.toISOString()}
          className={cn(
            "grid grid-cols-7 gap-1 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] starting:opacity-0",
            slideDirection >= 0
              ? "starting:translate-x-2"
              : "starting:-translate-x-2",
          )}
        >
          {days.map((date) => {
            const isSelected = isSameDate(date, selected);
            const isToday = isSameDate(date, today);

            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => selectDay(date)}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-1 rounded-md py-2 transition-all duration-200 ease-out active:scale-95",
                  isSelected
                    ? "scale-100 bg-neutral-900 text-white"
                    : "hover:bg-neutral-50",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-medium uppercase transition-colors duration-200",
                    isSelected ? "text-white/70" : "text-neutral-400",
                  )}
                >
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold tabular-nums",
                    isToday && !isSelected && "text-sky-600",
                  )}
                >
                  {date.getDate()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

WeekStripCalendar.displayName = "WeekStripCalendar";
