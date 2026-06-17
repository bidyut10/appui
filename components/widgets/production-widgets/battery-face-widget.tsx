"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Battery } from "@/icons/Battery";

const MASCOT_GOOD = "#A3E635";
const MASCOT_LOW = "#FB923C";
const DIAL = { cx: 88, cy: 84, r: 56 } as const;
const ARC_LENGTH = 2 * Math.PI * DIAL.r * 0.68;

type BatteryMascotProps = Readonly<{
  isLow: boolean;
}>;

// Lime buddy when healthy — droopy eyes when battery is low
function BatteryMascot({ isLow }: BatteryMascotProps) {
  const fill = isLow ? MASCOT_LOW : MASCOT_GOOD;

  return (
    <g aria-hidden>
      <circle cx="88" cy="142" r="58" fill={fill} />
      {isLow ? (
        <>
          <path d="M64 120 Q68 126 72 120" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M104 120 Q108 126 112 120" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="68" cy="122" r="5" fill="white" />
          <circle cx="108" cy="122" r="5" fill="white" />
          <circle cx="69" cy="123" r="2.2" fill="#1C1C1E" />
          <circle cx="109" cy="123" r="2.2" fill="#1C1C1E" />
        </>
      )}
      <path
        d="M76 138 Q88 146 100 138"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

type BatteryRingProps = Readonly<{
  percent: number;
  isLow: boolean;
}>;

function BatteryRing({ percent, isLow }: BatteryRingProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  const progress = (clamped / 100) * ARC_LENGTH;
  const stroke = isLow ? "#FB923C" : "#A3E635";

  return (
    <g aria-hidden>
      <circle
        cx={DIAL.cx}
        cy={DIAL.cy}
        r={DIAL.r}
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <circle
        cx={DIAL.cx}
        cy={DIAL.cy}
        r={DIAL.r}
        fill="none"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${progress} ${2 * Math.PI * DIAL.r}`}
        transform={`rotate(135 ${DIAL.cx} ${DIAL.cy})`}
        opacity="0.85"
      />
    </g>
  );
}

// percent — charge level shown on the dial
export type BatteryFaceWidgetProps = Readonly<
  {
    percent?: number;
    hoursLeft?: string;
  } & ComponentPropsWithoutRef<"div">
>;

export const BatteryFaceWidget = forwardRef<
  HTMLDivElement,
  BatteryFaceWidgetProps
>(({ className, percent = 57, hoursLeft = "~5h left", ...props }, ref) => {
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const isLow = clampedPercent <= 20;

  return (
    <div
      ref={ref}
      data-slot="battery-face-widget"
      className={cn(
        "relative h-44 w-44 max-w-full overflow-hidden rounded-[1.75rem] bg-black font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      {...props}
    >
      <svg
        viewBox="0 0 176 176"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <rect width="176" height="176" fill="#000" />
        <BatteryMascot isLow={isLow} />
        <BatteryRing percent={clampedPercent} isLow={isLow} />
      </svg>

      <span className="absolute top-3.5 right-3.5 z-10" aria-hidden>
        <Battery size={14} color={isLow ? MASCOT_LOW : MASCOT_GOOD} />
      </span>

      <div className="absolute inset-x-0 top-[30%] z-10 text-center">
        <p
          className={cn(
            "text-xl font-semibold leading-none tabular-nums",
            isLow ? "text-orange-300" : "text-white",
          )}
        >
          {clampedPercent}
          <span className="text-xs font-medium text-white/45">%</span>
        </p>
        <p className="mt-1 text-[9px] font-medium text-white/45">{hoursLeft}</p>
      </div>
    </div>
  );
});

BatteryFaceWidget.displayName = "BatteryFaceWidget";
