"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { PlaneTakeoff } from "@/icons/PlaneTakeoff";

export type FlightArrivalWidgetProps = {
  arrivalMinutes?: number;
  departure?: { time: string; code: string; city: string };
  arrival?: { time: string; code: string; city: string };
} & ComponentPropsWithoutRef<"div">;

export const FlightArrivalWidget = forwardRef<
  HTMLDivElement,
  FlightArrivalWidgetProps
>(
  (
    {
      className,
      arrivalMinutes = 53,
      departure = { time: "14:30", code: "LHR", city: "London" },
      arrival = { time: "16:30", code: "IST", city: "India" },
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="flight-arrival-widget"
      className={cn(
        "flex h-44 w-44 flex-col justify-between rounded-3xl bg-neutral-900 p-4 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div>
        <p className="text-[11px] text-neutral-400">Arrival in</p>
        <p className="text-2xl font-bold">{arrivalMinutes}min</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px]">
          <div>
            <p className="font-semibold">{departure.time}</p>
            <p className="text-neutral-400">
              {departure.code} {departure.city}
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{arrival.time}</p>
            <p className="text-neutral-400">
              {arrival.code} {arrival.city}
            </p>
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="h-1 flex-1 rounded-full bg-orange-500" />
          <div className="absolute left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-neutral-800">
            <PlaneTakeoff size={12} className="text-orange-400" />
          </div>
          <div className="h-1 flex-1 rounded-full border border-dashed border-neutral-600 bg-transparent" />
        </div>
      </div>
    </div>
  ),
);

FlightArrivalWidget.displayName = "FlightArrivalWidget";
