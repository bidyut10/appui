"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Heart } from "@/icons/Heart";

export type PeriodTrackerWidgetProps = {
  title?: string;
  subtitle?: string;
  value?: number;
} & ComponentPropsWithoutRef<"div">;

export const PeriodTrackerWidget = forwardRef<
  HTMLDivElement,
  PeriodTrackerWidgetProps
>(
  (
    {
      className,
      title = "Period Tracker",
      subtitle = "Select Your Segment Preferences",
      value = 55,
      ...props
    },
    ref,
  ) => {
    const [val, setVal] = useState(value);

    return (
      <div
        ref={ref}
        data-slot="period-tracker-widget"
        className={cn(
          "w-64 rounded-xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="text-sm font-bold text-neutral-900">{title}</p>
        <p className="mb-4 text-[11px] text-neutral-500">{subtitle}</p>

        <div className="relative h-2 rounded-full bg-neutral-100">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[#D9F26D]"
            style={{ width: `${val}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
          <span
            className="absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#F9D6F0] shadow"
            style={{ left: `calc(${val}% - 14px)` }}
          >
            <Heart size={12} className="text-neutral-800" />
          </span>
        </div>
      </div>
    );
  },
);

PeriodTrackerWidget.displayName = "PeriodTrackerWidget";
