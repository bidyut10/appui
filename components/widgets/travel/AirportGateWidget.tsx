"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { ArrowRight } from "@/icons/ArrowRight";

export type AirportGateWidgetProps = {
  gate?: string;
  status?: string;
  departureIn?: string;
} & ComponentPropsWithoutRef<"div">;

export const AirportGateWidget = forwardRef<
  HTMLDivElement,
  AirportGateWidgetProps
>(
  (
    {
      className,
      gate = "B18",
      status = "Gate Open",
      departureIn = "Gate departure in 26 min",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="airport-gate-widget"
      className={cn(
        "flex h-44 w-44 flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="flex justify-end">
        <ArrowRight size={16} className="text-neutral-400" />
      </div>

      <p className="text-5xl font-bold tracking-tight text-neutral-900">
        {gate}
      </p>

      <div>
        <p className="text-sm font-bold text-neutral-900">{status}</p>
        <p className="text-[11px] text-neutral-500">{departureIn}</p>
      </div>
    </div>
  ),
);

AirportGateWidget.displayName = "AirportGateWidget";
