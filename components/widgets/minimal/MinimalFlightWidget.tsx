"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { PlaneTakeoff } from "@/icons/PlaneTakeoff";

export type MinimalFlightWidgetProps = {
  airline?: string;
  route?: string;
  countdown?: string;
  departure?: string;
  arrival?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalFlightWidget = forwardRef<
  HTMLDivElement,
  MinimalFlightWidgetProps
>(
  (
    {
      className,
      airline = "RYANAIR FLIGHT",
      route = "LDN TO BER",
      countdown = "IN 19 MIN",
      departure = "16:45",
      arrival = "20:15",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="minimal-flight-widget"
      className={cn(
        "w-72 rounded-[2rem] bg-black p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
          {airline}
        </p>
        <PlaneTakeoff size={14} className="text-neutral-400" />
      </div>

      <p className="font-mono text-xl font-black tracking-wider">{route}</p>
      <p className="mt-1 font-mono text-sm font-bold text-red-500">{countdown}</p>

      <div className="mt-4 flex justify-between border-t border-neutral-800 pt-3 text-xs">
        <div>
          <p className="text-neutral-500">Departure</p>
          <p className="font-bold">{departure}</p>
        </div>
        <div className="text-right">
          <p className="text-neutral-500">Arrival</p>
          <p className="font-bold">{arrival}</p>
        </div>
      </div>
    </div>
  ),
);

MinimalFlightWidget.displayName = "MinimalFlightWidget";
