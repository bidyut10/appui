"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const dotFont = "font-mono tracking-widest";

export type DotMatrixStepWidgetProps = {
  steps?: number;
  streak?: number;
} & ComponentPropsWithoutRef<"div">;

export const DotMatrixStepWidget = forwardRef<
  HTMLDivElement,
  DotMatrixStepWidgetProps
>(({ className, steps = 5543, streak = 3, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="dot-matrix-step-widget"
    className={cn(
      "flex h-44 w-44 flex-col justify-between rounded-[2rem] border border-neutral-100 bg-white p-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <p className="text-[9px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
      Total Steps
    </p>
    <p className={cn("text-3xl font-black text-neutral-900", dotFont)}>
      {steps.toLocaleString()}
    </p>
    <p className="text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
      Streak {streak} Days
    </p>
  </div>
));

DotMatrixStepWidget.displayName = "DotMatrixStepWidget";
