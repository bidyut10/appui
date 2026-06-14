"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { Wifi } from "@/icons/Wifi";

export type WiFiToggleWidgetProps = {
  networkName?: string;
  defaultOn?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const WiFiToggleWidget = forwardRef<
  HTMLDivElement,
  WiFiToggleWidgetProps
>(
  (
    { className, networkName = "Studio-5G", defaultOn = true, ...props },
    ref,
  ) => {
    const [on, setOn] = useState(defaultOn);

    return (
      <div
        ref={ref}
        data-slot="wifi-toggle-widget"
        className={cn(
          "flex h-44 w-44 flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
            Wi-Fi
          </p>
          <span
            aria-hidden
            className={cn(
              "h-2 w-2 shrink-0 rounded-full transition-colors",
              on ? "bg-emerald-500" : "bg-neutral-300",
            )}
          />
          <span className="sr-only">{on ? "Connected" : "Off"}</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-1 py-2">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
              on ? "bg-neutral-100" : "bg-neutral-50",
            )}
          >
            <Wifi
              size={22}
              className={cn(
                "transition-colors",
                on ? "text-neutral-900" : "text-neutral-300",
              )}
            />
          </div>
          <p
            className={cn(
              "max-w-full truncate text-xs font-semibold",
              on ? "text-neutral-900" : "text-neutral-400",
            )}
          >
            {on ? networkName : "No network"}
          </p>
          <p className="text-[10px] text-neutral-400">
            {on ? "WPA3 · 5 GHz" : "Tap to connect"}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            aria-label="Toggle Wi-Fi"
            aria-pressed={on}
            onClick={() => setOn(!on)}
            className={cn(
              "flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors",
              on ? "bg-emerald-400" : "bg-neutral-200",
            )}
          >
            <span
              className={cn(
                "h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
                on ? "translate-x-5" : "translate-x-0",
              )}
            />
          </button>
        </div>
      </div>
    );
  },
);

WiFiToggleWidget.displayName = "WiFiToggleWidget";
