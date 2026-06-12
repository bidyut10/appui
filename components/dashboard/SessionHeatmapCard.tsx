import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type SessionHeatmapCardProps = {
  title?: string;
  peak?: string;
  data?: number[][];
  days?: string[];
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
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="session-heatmap-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium text-neutral-500">{title}</p>
          <p className="mt-0.5 text-sm font-semibold text-neutral-900">{peak}</p>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-neutral-400">
          <span>Low</span>
          <div className="flex gap-0.5">
            {[1, 3, 5, 7, 10].map((v) => (
              <div
                key={v}
                className="h-2.5 w-2.5 rounded-sm"
                style={{
                  backgroundColor:
                    v <= 2
                      ? "#f5f5f5"
                      : v <= 5
                        ? "#99f6e4"
                        : v <= 7
                          ? "#2dd4bf"
                          : "#0d9488",
                }}
              />
            ))}
          </div>
          <span>High</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {data.map((row, dayIndex) =>
          row.map((value, hourIndex) => (
            <div
              key={`${dayIndex}-${hourIndex}`}
              className="aspect-square rounded-[4px]"
              style={{
                backgroundColor:
                  value <= 2
                    ? "#f5f5f5"
                    : value <= 5
                      ? "#ccfbf1"
                      : value <= 7
                        ? "#5eead4"
                        : value <= 9
                          ? "#14b8a6"
                          : "#0f766e",
              }}
              title={`${days[dayIndex]} · intensity ${value}`}
            />
          )),
        )}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1.5 text-center">
        {days.map((d) => (
          <span key={d} className="text-[9px] font-medium text-neutral-400">
            {d}
          </span>
        ))}
      </div>
    </div>
  ),
);

SessionHeatmapCard.displayName = "SessionHeatmapCard";
