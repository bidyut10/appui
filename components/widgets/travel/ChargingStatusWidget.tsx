"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Battery } from "@/icons/Battery";

export type ChargingStatusWidgetProps = {
  percent?: number;
  minutesLeft?: number;
} & ComponentPropsWithoutRef<"div">;

export const ChargingStatusWidget = forwardRef<
  HTMLDivElement,
  ChargingStatusWidgetProps
>(({ className, percent = 68, minutesLeft = 37, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="charging-status-widget"
    className={cn(
      "flex h-44 w-44 flex-col justify-between rounded-3xl bg-neutral-900 p-4 font-sans text-white shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      <Battery size={16} className="text-emerald-400" />
      <span className="text-sm font-semibold text-emerald-400">
        Charging...
      </span>
    </div>

    <p className="text-lg font-bold">
      {percent}% · {minutesLeft} min left
    </p>

    <div className="relative h-8 overflow-hidden rounded-xl bg-neutral-800">
      <div
        className="absolute inset-y-0 left-0 rounded-xl bg-lime-400"
        style={{ width: `${percent}%` }}
      />
      <div
        className="absolute top-1 bottom-1 w-0.5 bg-white"
        style={{ left: `${percent}%` }}
      />
    </div>
  </div>
));

ChargingStatusWidget.displayName = "ChargingStatusWidget";
