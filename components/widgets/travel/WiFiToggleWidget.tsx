"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Wifi } from "@/icons/Wifi";
import { ArrowRight } from "@/icons/ArrowRight";

export type WiFiToggleWidgetProps = {
  networkName?: string;
  defaultOn?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const WiFiToggleWidget = forwardRef<
  HTMLDivElement,
  WiFiToggleWidgetProps
>(
  (
    { className, networkName = "kawsar's_wifi", defaultOn = true, ...props },
    ref,
  ) => {
    const [on, setOn] = useState(defaultOn);

    return (
      <div
        ref={ref}
        data-slot="wifi-toggle-widget"
        className={cn(
          "flex h-44 w-44 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
            <Wifi size={16} />
          </div>
          <ArrowRight size={14} className="text-neutral-400" />
        </div>

        <div>
          <p className="text-sm font-bold text-neutral-900">WiFi</p>
          <p className="text-[11px] text-neutral-500">
            {on ? "On" : "Off"} · {networkName}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            aria-pressed={on}
            onClick={() => setOn(!on)}
            className={cn(
              "relative h-8 w-14 rounded-full transition-colors",
              on ? "bg-emerald-400" : "bg-neutral-200",
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform",
                on ? "left-7" : "left-1",
              )}
            />
          </button>
        </div>
      </div>
    );
  },
);

WiFiToggleWidget.displayName = "WiFiToggleWidget";
