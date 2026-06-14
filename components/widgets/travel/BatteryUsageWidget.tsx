"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Battery } from "@/icons/Battery";

export type BatteryUsageWidgetProps = {
  percent?: number;
  hoursLeft?: string;
} & ComponentPropsWithoutRef<"div">;

export const BatteryUsageWidget = forwardRef<
  HTMLDivElement,
  BatteryUsageWidgetProps
>(({ className, percent = 57, hoursLeft = "~ 5hours", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="battery-usage-widget"
    className={cn(
      "flex h-44 w-44 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      <Battery size={20} className="text-orange-500" />
      <span className="text-2xl font-bold text-neutral-900">{percent}%</span>
    </div>

    <div className="flex h-16 items-end justify-center gap-1.5">
      {[40, 65, 90, 55, 30].map((h, i) => (
        <span
          key={i}
          className={cn(
            "w-3 rounded-sm",
            i < 3 ? "bg-orange-400" : "bg-neutral-200",
          )}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>

    <p className="text-[11px] text-neutral-500">{hoursLeft}</p>
  </div>
));

BatteryUsageWidget.displayName = "BatteryUsageWidget";
