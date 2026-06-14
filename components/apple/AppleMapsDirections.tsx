"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Locate } from "@/icons/Locate";
import { MoveDown } from "@/icons/MoveDown";
import { MoveLeft } from "@/icons/MoveLeft";
import { MoveUp } from "@/icons/MoveUp";

/**
 * Apple Maps Directions built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleMapsDirectionStep = {
  icon: ReactNode;
  instruction: string;
  dist?: string;
  active?: boolean;
};

export type AppleMapsDirectionsProps = {
  statusLabel?: string;
  duration?: string;
  arrivalLabel?: string;
  arrivalTime?: string;
  steps?: AppleMapsDirectionStep[];
  onStepClick?: (step: AppleMapsDirectionStep, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultSteps: AppleMapsDirectionStep[] = [
  {
    icon: <MoveUp />,
    instruction: "Head north on Park Street",
    dist: "200 m",
  },
  {
    icon: <MoveLeft />,
    instruction: "Turn left onto Jawaharlal Nehru Rd",
    dist: "1.2 km",
    active: true,
  },
  {
    icon: <MoveDown />,
    instruction: "Turn right onto Strand Road",
    dist: "800 m",
  },
  { icon: <Locate />, instruction: "Arrive at Howrah Bridge" },
];

export const AppleMapsDirections = forwardRef<
  HTMLDivElement,
  AppleMapsDirectionsProps
>(
  (
    {
      className,
      statusLabel = "Navigation Active",
      duration = "12 min",
      arrivalLabel = "Arrival",
      arrivalTime = "2:42 PM",
      steps = defaultSteps,
      onStepClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-maps-directions"
      className={cn(
        "w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-xl shadow-black/10",
        className,
      )}
      {...props}
    >
      <div
        data-slot="apple-maps-directions-header"
        className="flex items-center justify-between bg-[#007AFF] px-4 py-3"
      >
        <div>
          <p className="text-[11px] font-medium text-white/70">{statusLabel}</p>
          <p className="text-lg font-semibold tracking-tight text-white">
            {duration}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-white/70">{arrivalLabel}</p>
          <p className="text-sm font-semibold text-white">{arrivalTime}</p>
        </div>
      </div>

      <div
        data-slot="apple-maps-directions-steps"
        className="divide-y divide-neutral-100"
      >
        {steps.map((step, index) => (
          <div
            key={step.instruction}
            data-slot="apple-maps-directions-step"
            onClick={() => onStepClick?.(step, index)}
            className={cn(
              "flex items-center gap-3 px-4 py-3",
              step.active && "bg-blue-50",
              onStepClick && "cursor-pointer",
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                step.active
                  ? "bg-[#007AFF] text-white"
                  : "bg-[#f2f2f7] text-neutral-600",
              )}
            >
              {step.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "text-[13px] leading-snug",
                  step.active
                    ? "font-semibold text-[#007AFF]"
                    : "text-neutral-800",
                )}
              >
                {step.instruction}
              </p>
            </div>
            {step.dist && (
              <span className="shrink-0 text-[11px] text-neutral-400">
                {step.dist}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  ),
);

AppleMapsDirections.displayName = "AppleMapsDirections";
