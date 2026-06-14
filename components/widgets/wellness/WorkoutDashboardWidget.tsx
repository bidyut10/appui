"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Bike } from "@/icons/Bike";
import { Pin } from "@/icons/Pin";
import { Clock } from "@/icons/Clock";
import { MapPinned } from "@/icons/MapPinned";
import { Pause } from "@/icons/Pause";
import { Play } from "@/icons/Play";

const STATS = [
  { icon: Bike, label: "Kilometers", value: "8.5" },
  { icon: Pin, label: "Avg. Pace", value: "15" },
  { icon: Clock, label: "Time", value: "1 hour" },
  { icon: MapPinned, label: "Elevation", value: "0 m" },
];

export type WorkoutDashboardWidgetProps = ComponentPropsWithoutRef<"div">;

export const WorkoutDashboardWidget = forwardRef<
  HTMLDivElement,
  WorkoutDashboardWidgetProps
>(({ className, ...props }, ref) => {
  const [running, setRunning] = useState(true);

  return (
    <div
      ref={ref}
      data-slot="workout-dashboard-widget"
      className={cn(
        "w-64 rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          onClick={() => setRunning(false)}
          aria-label="Stop workout"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#F9D6F0] transition-transform active:scale-95"
        >
          <span className="h-3 w-3 rounded-sm bg-neutral-900" />
        </button>
        <button
          type="button"
          onClick={() => setRunning(!running)}
          aria-label={running ? "Pause workout" : "Resume workout"}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[#D9F26D] transition-transform active:scale-95"
        >
          {running ? <Pause size={14} /> : <Play size={14} />}
        </button>
        {running && (
          <span className="ml-auto self-center text-[10px] font-medium text-emerald-600">
            Live
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl bg-neutral-50 p-2.5">
            <s.icon size={14} className="text-neutral-600" />
            <p className="text-sm font-bold text-neutral-900">{s.value}</p>
            <p className="text-[9px] text-neutral-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

WorkoutDashboardWidget.displayName = "WorkoutDashboardWidget";
