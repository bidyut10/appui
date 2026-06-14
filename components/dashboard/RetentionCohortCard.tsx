import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Retention cohort card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo cohort weeks and retention percentages with your own analytics data.
 */
export type CohortRow = {
  week: string;
  values: number[];
};

export type RetentionCohortCardProps = {
  title?: string;
  rows?: CohortRow[];
  lowLabel?: string;
  highLabel?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultRows: CohortRow[] = [
  { week: "W1", values: [100, 68, 52, 41, 35] },
  { week: "W2", values: [100, 72, 58, 44] },
  { week: "W3", values: [100, 65, 49] },
  { week: "W4", values: [100, 71] },
];

const legendColors = [
  "bg-neutral-100",
  "bg-sky-200",
  "bg-teal-300",
  "bg-teal-500",
];

function cellColor(value: number) {
  const safeValue = Math.max(0, Math.min(100, value));
  if (safeValue >= 70) return "bg-teal-500 text-white";
  if (safeValue >= 50) return "bg-teal-300 text-teal-900";
  if (safeValue >= 35) return "bg-sky-200 text-sky-900";
  return "bg-neutral-100 text-neutral-500";
}

export const RetentionCohortCard = forwardRef<
  HTMLDivElement,
  RetentionCohortCardProps
>(
  (
    {
      className,
      title = "Weekly retention cohorts",
      rows = defaultRows,
      lowLabel = "Low",
      highLabel = "High",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="retention-cohort-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>

      {/* Cohort grid */}
      <div className="space-y-1">
        {(rows ?? []).map((row) => (
          <div key={row.week} className="flex items-center gap-1.5">
            <span className="w-7 shrink-0 text-[10px] font-semibold text-neutral-400">
              {row.week}
            </span>
            <div className="flex flex-1 gap-1">
              {(row.values ?? []).map((val, i) => (
                <div
                  key={`${row.week}-${i}`}
                  className={cn(
                    "flex h-7 flex-1 items-center justify-center rounded-md text-[10px] font-bold tabular-nums",
                    cellColor(val),
                  )}
                >
                  {Math.max(0, Math.min(100, val))}%
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-end gap-1">
        <span className="text-[9px] text-neutral-400">{lowLabel}</span>
        <div className="flex gap-0.5">
          {legendColors.map((c) => (
            <div key={c} className={cn("h-2 w-4 rounded-sm", c)} />
          ))}
        </div>
        <span className="text-[9px] text-neutral-400">{highLabel}</span>
      </div>
    </div>
  ),
);

RetentionCohortCard.displayName = "RetentionCohortCard";
