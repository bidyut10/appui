"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type MinimalCalendarDayWidgetProps = {
  day?: number;
} & ComponentPropsWithoutRef<"div">;

export const MinimalCalendarDayWidget = forwardRef<
  HTMLDivElement,
  MinimalCalendarDayWidgetProps
>(({ className, day = 29, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-calendar-day-widget"
    className={cn(
      "flex h-44 w-44 items-center justify-center rounded-[2rem] border border-neutral-100 bg-white font-serif shadow-lg",
      className,
    )}
    {...props}
  >
    <span className="text-7xl font-light text-neutral-900">{day}</span>
  </div>
));

MinimalCalendarDayWidget.displayName = "MinimalCalendarDayWidget";
