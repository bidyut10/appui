"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type MinimalTimezoneWidgetProps = {
  day?: string;
  timezone?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalTimezoneWidget = forwardRef<
  HTMLDivElement,
  MinimalTimezoneWidgetProps
>(({ className, day = "TUESDAY", timezone = "GMT+1", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-timezone-widget"
    className={cn(
      "flex h-44 w-44 flex-col justify-center rounded-[2rem] border border-neutral-100 bg-white p-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <p className="text-[9px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
      {day}
    </p>
    <p className="mt-2 font-mono text-4xl font-black tracking-wider text-neutral-900">
      {timezone}
    </p>
  </div>
));

MinimalTimezoneWidget.displayName = "MinimalTimezoneWidget";
