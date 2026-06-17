"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Battery } from "@/icons/Battery";

const ARC_RADIUS = 30;
const ARC_CIRCUMFERENCE = 2 * Math.PI * ARC_RADIUS;
const ARC_LENGTH = ARC_CIRCUMFERENCE * 0.68;

// Recent drain intensity — taller bars = heavier usage that day
const DRAIN_MARKERS = [
  { id: "day-mon", height: 6, active: true },
  { id: "day-tue", height: 9, active: true },
  { id: "day-wed", height: 12, active: true },
  { id: "day-thu", height: 8, active: false },
  { id: "day-fri", height: 5, active: false },
] as const;

type BatteryArcProps = Readonly<{
  percent: number;
  isLow: boolean;
}>;

// Clean arc ring — sits above the readout with open space at the bottom
function BatteryArc({ percent, isLow }: BatteryArcProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  const progress = (clamped / 100) * ARC_LENGTH;
  const stroke = isLow ? "#F59E0B" : "#34C759";

  return (
    <svg
      viewBox="0 0 100 72"
      className="h-13 w-18"
      aria-hidden
    >
      <circle
        cx="50"
        cy="38"
        r={ARC_RADIUS}
        fill="none"
        stroke="#F0F0F0"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeDasharray={`${ARC_LENGTH} ${ARC_CIRCUMFERENCE}`}
        transform="rotate(135 50 38)"
      />
      <circle
        cx="50"
        cy="38"
        r={ARC_RADIUS}
        fill="none"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeDasharray={`${progress} ${ARC_CIRCUMFERENCE}`}
        transform="rotate(135 50 38)"
      />
    </svg>
  );
}

// percent — battery level; hoursLeft — estimated time remaining label
export type BatteryUsageWidgetProps = Readonly<
  {
    percent?: number;
    hoursLeft?: string;
  } & ComponentPropsWithoutRef<"div">
>;

export const BatteryUsageWidget = forwardRef<
  HTMLDivElement,
  BatteryUsageWidgetProps
>(({ className, percent = 57, hoursLeft = "~ 5 hours left", ...props }, ref) => {
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const isLow = clampedPercent <= 20;

  return (
    <div
      ref={ref}
      data-slot="battery-usage-widget"
      className={cn(
        "grid h-44 w-44 grid-rows-[auto_1fr_auto] overflow-hidden rounded-3xl border border-neutral-100/80 bg-white p-3.5 font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif',
      }}
      {...props}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
              isLow ? "bg-amber-50" : "bg-neutral-50",
            )}
          >
            <Battery
              size={14}
              className={isLow ? "text-amber-500" : "text-neutral-700"}
            />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold leading-tight text-neutral-900">
              Battery
            </p>
            <p className="mt-0.5 truncate text-[9px] leading-tight text-neutral-400">
              {hoursLeft}
            </p>
          </div>
        </div>
        <span
          aria-hidden
          className={cn(
            "h-2 w-2 shrink-0 rounded-full",
            isLow ? "bg-amber-400" : "bg-[#34C759]",
          )}
        />
        <span className="sr-only">
          {isLow ? "Battery low" : "Battery good"}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-2.5 pt-1">
        <BatteryArc percent={clampedPercent} isLow={isLow} />
        <p className="text-[24px] leading-none font-light tracking-tight text-neutral-900 tabular-nums">
          {clampedPercent}
          <span className="text-[13px] font-normal text-neutral-400">%</span>
        </p>
      </div>

      <div className="flex justify-center pb-0.5 pt-1">
        <div className="flex h-3 items-end gap-1.5">
          {DRAIN_MARKERS.map((marker) => (
            <span
              key={marker.id}
              className={cn(
                "w-2 rounded-xs",
                marker.active
                  ? isLow
                    ? "bg-amber-400/80"
                    : "bg-neutral-800"
                  : "bg-neutral-100",
              )}
              style={{ height: marker.height }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

BatteryUsageWidget.displayName = "BatteryUsageWidget";
