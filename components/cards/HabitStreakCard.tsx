import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type HabitStreakDay = {
  label: string;
  completed: boolean;
  isToday?: boolean;
};

export type HabitStreakCardProps = {
  habitName?: string;
  streakCount?: number;
  weekDays?: HabitStreakDay[];
  motivation?: string;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultWeekDays: HabitStreakDay[] = [
  { label: "M", completed: true },
  { label: "T", completed: true },
  { label: "W", completed: true },
  { label: "T", completed: true },
  { label: "F", completed: true },
  { label: "S", completed: false, isToday: true },
  { label: "S", completed: false },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const HabitStreakCard = forwardRef<
  HTMLDivElement,
  HabitStreakCardProps
>(
  (
    {
      className,
      habitName = "Ship one component",
      streakCount = 12,
      weekDays = defaultWeekDays,
      motivation = "5-day streak — keep going",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="habit-streak-card"
      className={cn(
        "w-full max-w-xs rounded-3xl border border-orange-100 bg-linear-to-b from-orange-50 to-white p-5 font-sans shadow-lg shadow-orange-100/50",
        className,
      )}
      {...props}
    >
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
          <p className="text-2xl font-black text-orange-500">{streakCount}</p>
          <p className="text-[9px] font-medium text-orange-400 uppercase">
            day streak
          </p>
        </div>
      </div>

      <div
        data-slot="habit-streak-card-week"
        className="mb-3 grid grid-cols-7 gap-1.5"
      >
        {weekDays.map((day, index) => (
          <div key={`${day.label}-${index}`} className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-medium text-neutral-400">
              {day.label}
            </span>
            <div
              className={cn(
                "flex aspect-square w-full max-w-8 items-center justify-center rounded-full text-[10px] font-bold transition-colors",
                day.completed
                  ? "bg-orange-500 text-white shadow-sm shadow-orange-300"
                  : day.isToday
                    ? "border-2 border-dashed border-orange-300 bg-orange-50 text-orange-400"
                    : "bg-neutral-100 text-neutral-300",
              )}
            >
              {day.completed ? <Check size={10} /> : null}
            </div>
          </div>
        ))}
      </div>

      <p
        data-slot="habit-streak-card-motivation"
        className="text-center text-[11px] font-medium text-orange-600/80"
      >
        {motivation}
      </p>
    </div>
  ),
);

HabitStreakCard.displayName = "HabitStreakCard";
