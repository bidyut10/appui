import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Session heatmap card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo activity grid, peak label, and day labels with your own session data.
 */
export type SessionHeatmapCardProps = {
  title?: string;
  peak?: string;
  data?: number[][];
  days?: string[];
  lowLabel?: string;
  highLabel?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const defaultData = [
  [2, 4, 6, 8, 5, 3, 1],
  [3, 6, 9, 10, 7, 4, 2],
  [1, 5, 8, 9, 6, 3, 1],
  [4, 7, 10, 10, 8, 5, 2],
  [2, 5, 7, 8, 6, 4, 1],
  [1, 3, 5, 6, 4, 2, 1],
  [0, 2, 4, 5, 3, 2, 0],
];

function heatmapColor(value: number) {
  if (value <= 2) return "#f5f5f5";
  if (value <= 5) return "#ccfbf1";
  if (value <= 7) return "#5eead4";
  if (value <= 9) return "#14b8a6";
  return "#0f766e";
}

function legendColor(value: number) {
  if (value <= 2) return "#f5f5f5";
  if (value <= 5) return "#99f6e4";
  if (value <= 7) return "#2dd4bf";
  return "#0d9488";
}

export const SessionHeatmapCard = forwardRef<
  HTMLDivElement,
  SessionHeatmapCardProps
>(
  (
    {
      className,
      title = "Session activity",
      peak = "Peak Thu 2–4 PM",
      data = defaultData,
      days = defaultDays,
      lowLabel = "Low",
      highLabel = "High",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="session-heatmap-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium text-neutral-500">{title}</p>
          <p className="mt-0.5 text-sm font-semibold text-neutral-900">
            {peak}
          </p>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-neutral-400">
          <span>{lowLabel}</span>
          <div className="flex gap-0.5">
            {[1, 3, 5, 7, 10].map((v) => (
              <div
                key={v}
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: legendColor(v) }}
              />
            ))}
          </div>
          <span>{highLabel}</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-1.5">
        {(data ?? []).map((row, dayIndex) =>
          (row ?? []).map((value, hourIndex) => (
            <div
              key={`${dayIndex}-${hourIndex}`}
              className="aspect-square rounded-[4px]"
              style={{ backgroundColor: heatmapColor(value) }}
              title={`${days[dayIndex] ?? ""} · intensity ${value}`}
            />
          )),
        )}
      </div>

      {/* Day labels */}
      <div className="mt-2 grid grid-cols-7 gap-1.5 text-center">
        {(days ?? []).map((d) => (
          <span key={d} className="text-[9px] font-medium text-neutral-400">
            {d}
          </span>
        ))}
      </div>
    </div>
  ),
);

SessionHeatmapCard.displayName = "SessionHeatmapCard";
