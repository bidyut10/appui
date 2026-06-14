"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const COLORS = [
  "bg-[#F9D6F0]",
  "bg-[#D9F26D]",
  "bg-neutral-200",
  "bg-amber-200",
];

export type WeeklyActivityChartWidgetProps = ComponentPropsWithoutRef<"div">;

export const WeeklyActivityChartWidget = forwardRef<
  HTMLDivElement,
  WeeklyActivityChartWidgetProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="weekly-activity-chart-widget"
    className={cn(
      "w-64 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="flex items-end justify-between gap-1">
      {DAYS.map((day, i) => (
        <div
          key={day}
          className={cn(
            "flex flex-col items-center gap-1",
            day === "WED" && "rounded-xl border-2 border-neutral-900 px-1 pb-1",
          )}
        >
          <div className="flex flex-col-reverse gap-0.5">
            {Array.from({ length: 3 + (i % 3) }).map((_, j) => (
              <span
                key={j}
                className={cn(
                  "h-2 w-4 rounded-full",
                  COLORS[j % COLORS.length],
                )}
              />
            ))}
          </div>
          <span className="text-[8px] font-medium text-neutral-500">{day}</span>
        </div>
      ))}
    </div>
  </div>
));

WeeklyActivityChartWidget.displayName = "WeeklyActivityChartWidget";
