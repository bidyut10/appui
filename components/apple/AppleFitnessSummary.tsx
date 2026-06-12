import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type AppleFitnessStat = {
  label: string;
  value: string;
};

export type AppleFitnessDay = {
  label: string;
  completed: boolean;
  isToday?: boolean;
};

export type AppleFitnessSummaryProps = {
  title?: string;
  liveLabel?: string;
  workoutLabel?: string;
  workoutTitle?: string;
  workoutDescription?: string;
  stats?: AppleFitnessStat[];
  weekDays?: AppleFitnessDay[];
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultStats: AppleFitnessStat[] = [
  { label: "Calories", value: "186" },
  { label: "Avg HR", value: "142" },
  { label: "Duration", value: "20:14" },
];

const defaultWeekDays: AppleFitnessDay[] = [
  { label: "M", completed: true },
  { label: "T", completed: true },
  { label: "W", completed: true },
  { label: "T", completed: true, isToday: true },
  { label: "F", completed: false },
  { label: "S", completed: false },
  { label: "S", completed: false },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const AppleFitnessSummary = forwardRef<
  HTMLDivElement,
  AppleFitnessSummaryProps
>(
  (
    {
      className,
      title = "Fitness+",
      liveLabel = "● LIVE",
      workoutLabel = "Today's Workout",
      workoutTitle = "HIIT with Jamie-Ray",
      workoutDescription = "20 min · High Intensity",
      stats = defaultStats,
      weekDays = defaultWeekDays,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-fitness-summary"
      className={cn(
        "w-72 rounded-[1.5rem] bg-[#1c1c1e] p-5 font-sans",
        className,
      )}
      {...props}
    >
      <div
        data-slot="apple-fitness-summary-header"
        className="mb-4 flex items-center justify-between"
      >
        <h4 className="text-[17px] font-bold text-white">{title}</h4>
        <span className="text-[11px] font-semibold text-[#FF2D55]">
          {liveLabel}
        </span>
      </div>

      <div
        data-slot="apple-fitness-summary-workout"
        className="mb-3 rounded-2xl bg-neutral-900 p-4"
      >
        <p className="text-[11px] tracking-wider text-neutral-500 uppercase">
          {workoutLabel}
        </p>
        <p className="mt-1 text-lg font-semibold text-white">{workoutTitle}</p>
        <p className="mt-0.5 text-[13px] text-neutral-400">
          {workoutDescription}
        </p>
        <div className="mt-3 flex items-center gap-4">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] text-neutral-500">{label}</p>
              <p className="text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        data-slot="apple-fitness-summary-week"
        className="grid grid-cols-7 gap-1"
      >
        {weekDays.map((day, index) => (
          <div key={`${day.label}-${index}`} className="text-center">
            <p className="mb-1 text-[9px] text-neutral-600">{day.label}</p>
            <div
              className={cn(
                "flex aspect-square w-full items-center justify-center rounded-lg text-[10px] font-bold",
                day.isToday
                  ? "bg-[#FF2D55] text-white"
                  : day.completed
                    ? "bg-[#FF2D55]/30 text-[#FF2D55]"
                    : "bg-neutral-800 text-neutral-600",
              )}
            >
              {day.completed ? "✓" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

AppleFitnessSummary.displayName = "AppleFitnessSummary";
