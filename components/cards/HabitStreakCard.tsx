"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/**
 * Habit streak tracker with tappable day toggles and live streak count.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type HabitStreakDay = {
  label: string;
  completed: boolean;
  isToday?: boolean;
};

export type HabitStreakCardProps = {
  habitName?: string;
  initialStreakCount?: number;
  weekDays?: HabitStreakDay[];
  motivation?: string;
  onDayToggle?: (index: number, completed: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultWeekDays: HabitStreakDay[] = [
  { label: "M", completed: true },
  { label: "T", completed: true },
  { label: "W", completed: true },
  { label: "T", completed: true },
  { label: "F", completed: true },
  { label: "S", completed: false, isToday: true },
  { label: "S", completed: false },
];

export const HabitStreakCard = forwardRef<
  HTMLDivElement,
  HabitStreakCardProps
>(
  (
    {
      className,
      habitName = "Ship one component",
      initialStreakCount = 12,
      weekDays = defaultWeekDays,
      motivation = "5-day streak — keep going",
      onDayToggle,
      ...props
    },
    ref,
  ) => {
    const [days, setDays] = useState(weekDays);

    const streakCount = useMemo(() => {
      let count = initialStreakCount;
      const todayIndex = days.findIndex((day) => day.isToday);
      if (todayIndex >= 0 && days[todayIndex].completed) {
        count += 1;
      }
      return count;
    }, [days, initialStreakCount]);

    const completedThisWeek = days.filter((day) => day.completed).length;

    const toggleDay = (index: number) => {
      setDays((prev) => {
        const next = prev.map((day, i) =>
          i === index ? { ...day, completed: !day.completed } : day,
        );
        onDayToggle?.(index, next[index].completed);
        return next;
      });
    };

    return (
      <div
        ref={ref}
        data-slot="habit-streak-card"
        className={cn(
          "w-full max-w-xs rounded-3xl border border-orange-100 bg-linear-to-b from-orange-50 to-white p-5 font-sans shadow-lg shadow-orange-100/50",
          className,
        )}
        {...props}
      >
        <style>{`
          @keyframes habit-pop {
            0% { transform: scale(0.85); }
            60% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
        `}</style>

        <div
          data-slot="habit-streak-card-header"
          className="mb-4 flex items-start justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-widest text-orange-400 uppercase">
              Daily habit
            </p>
            <h4 className="mt-0.5 text-base font-bold text-neutral-900">
              {habitName}
            </h4>
          </div>
          <div className="text-right">
            <p
              key={streakCount}
              className="text-2xl font-black text-orange-500 transition-transform"
              style={{ animation: "habit-pop 0.35s ease-out" }}
            >
              {streakCount}
            </p>
            <p className="text-[9px] font-medium text-orange-400 uppercase">
              day streak
            </p>
          </div>
        </div>

        <div
          data-slot="habit-streak-card-week"
          className="mb-3 grid grid-cols-7 gap-1.5"
        >
          {days.map((day, index) => (
            <div
              key={`${day.label}-${index}`}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-[9px] font-medium text-neutral-400">
                {day.label}
              </span>
              <button
                type="button"
                aria-label={`Toggle ${day.label}`}
                aria-pressed={day.completed}
                onClick={() => toggleDay(index)}
                data-slot="habit-streak-card-day"
                className={cn(
                  "flex aspect-square w-full max-w-8 cursor-pointer items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 active:scale-90",
                  day.completed
                    ? "bg-orange-500 text-white shadow-sm shadow-orange-300"
                    : day.isToday
                      ? "border-2 border-dashed border-orange-300 bg-orange-50 text-orange-400 hover:bg-orange-100"
                      : "bg-neutral-100 text-neutral-300 hover:bg-neutral-200",
                )}
              >
                {day.completed ? <Check size={10} /> : null}
              </button>
            </div>
          ))}
        </div>

        <p
          data-slot="habit-streak-card-motivation"
          className="text-center text-[11px] font-medium text-orange-600/80"
        >
          {completedThisWeek >= 5
            ? `${completedThisWeek}/7 days done — on fire`
            : motivation}
        </p>
      </div>
    );
  },
);

HabitStreakCard.displayName = "HabitStreakCard";
