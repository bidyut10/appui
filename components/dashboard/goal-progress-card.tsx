"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const BAR_WIDTH_CLASSES = [
  "w-0",
  "w-[5%]",
  "w-[10%]",
  "w-[15%]",
  "w-1/5",
  "w-1/4",
  "w-[30%]",
  "w-[35%]",
  "w-2/5",
  "w-[45%]",
  "w-1/2",
  "w-[55%]",
  "w-3/5",
  "w-[65%]",
  "w-2/3",
  "w-[70%]",
  "w-[75%]",
  "w-4/5",
  "w-[85%]",
  "w-[90%]",
  "w-[95%]",
  "w-full",
] as const;

function barWidthClass(percent: number): string {
  const index = Math.min(
    BAR_WIDTH_CLASSES.length - 1,
    Math.max(0, Math.round(percent / 5)),
  );
  return BAR_WIDTH_CLASSES[index];
}

export type GoalProgressCardProps = Readonly<
  {
    label?: string;
    current?: number;
    goal?: number;
    unit?: string;
    hint?: string;
  } & ComponentPropsWithoutRef<"article">
>;

// Goal progress card — current vs target with a clean progress bar for dashboards.
export const GoalProgressCard = forwardRef<HTMLElement, GoalProgressCardProps>(
  (
    {
      className,
      label = "Monthly target",
      current = 72_400,
      goal = 100_000,
      unit = "USD",
      hint = "On track to finish before month end",
      ...props
    },
    ref,
  ) => {
    const safeGoal = goal > 0 ? goal : 1;
    const percent = Math.min(100, Math.round((current / safeGoal) * 100));

    return (
      <article
        ref={ref}
        data-slot="goal-progress-card"
        className={cn(
          "w-full min-w-0 border border-neutral-200 bg-white p-4 font-sans md:p-5",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
            {label}
          </p>
          <span className="font-mono text-[10px] text-neutral-400 tabular-nums">
            {percent}%
          </span>
        </div>

        <p className="mt-2 font-serif text-2xl leading-none tracking-tight text-neutral-950 tabular-nums">
          {current.toLocaleString()}
          <span className="ml-1 font-sans text-sm font-normal text-neutral-500">
            / {goal.toLocaleString()} {unit}
          </span>
        </p>

        <div
          className="mt-4 h-1.5 w-full overflow-hidden bg-neutral-100"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={goal}
          aria-label={label}
        >
          <div
            className={cn("h-full bg-neutral-900 transition-all", barWidthClass(percent))}
          />
        </div>

        {hint ? (
          <p className="mt-3 text-xs leading-relaxed text-neutral-500">{hint}</p>
        ) : null}
      </article>
    );
  },
);

GoalProgressCard.displayName = "GoalProgressCard";
