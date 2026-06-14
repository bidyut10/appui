import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Goal progress card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo OKR quarter, goals, and progress percentages with your own targets.
 */
export type OkrGoal = {
  title: string;
  progress: number;
  target: string;
};

export type GoalProgressCardProps = {
  quarter?: string;
  goals?: OkrGoal[];
} & ComponentPropsWithoutRef<"div">;

const defaultGoals: OkrGoal[] = [
  { title: "Ship 50 new components", progress: 72, target: "36/50" },
  { title: "Reduce bundle size 20%", progress: 45, target: "9% done" },
  { title: "NPS above 60", progress: 88, target: "58 NPS" },
];

export const GoalProgressCard = forwardRef<
  HTMLDivElement,
  GoalProgressCardProps
>(
  (
    {
      className,
      quarter = "Q2 2026 OKRs",
      goals = defaultGoals,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="goal-progress-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
            <p className="mb-4 text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
        {quarter}
      </p>

      {/* Goals */}
      <div className="space-y-4">
        {(goals ?? []).map((goal) => {
          const safeProgress = Math.max(0, Math.min(100, goal.progress));
          const circumference = 2 * Math.PI * 14;

          return (
            <div key={goal.title} className="flex gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#f5f5f5"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      circumference - (safeProgress / 100) * circumference
                    }
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-neutral-700 tabular-nums">
                  {safeProgress}%
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold leading-snug text-neutral-900">
                  {goal.title}
                </p>
                <p className="mt-0.5 text-[11px] text-neutral-400">
                  {goal.target}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

GoalProgressCard.displayName = "GoalProgressCard";
