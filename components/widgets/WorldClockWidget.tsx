"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

export type WorldClockCity = {
  id: string;
  city: string;
  timezone: string;
  offset: string;
};

/**
 * World clock strip showing multiple cities with live times.
 *
 * Replace demo cities with your own timezone list.
 */
export type WorldClockWidgetProps = {
  title?: string;
  cities?: WorldClockCity[];
} & ComponentPropsWithoutRef<"div">;

const defaultCities: WorldClockCity[] = [
  { id: "1", city: "Kolkata", timezone: "Asia/Kolkata", offset: "GMT+5:30" },
  { id: "2", city: "London", timezone: "Europe/London", offset: "GMT+1" },
  { id: "3", city: "New York", timezone: "America/New_York", offset: "GMT-4" },
  { id: "4", city: "Tokyo", timezone: "Asia/Tokyo", offset: "GMT+9" },
];

function formatTime(timezone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export const WorldClockWidget = forwardRef<
  HTMLDivElement,
  WorldClockWidgetProps
>(
  (
    { className, title = "World clock", cities = defaultCities, ...props },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false);
    const [, setTick] = useState(0);

    useEffect(() => {
      setMounted(true);
      const timer = window.setInterval(() => setTick((t) => t + 1), 1000);
      return () => window.clearInterval(timer);
    }, []);

    return (
      <div
        ref={ref}
        data-slot="world-clock-widget"
        className={cn(
          "w-64 rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>

        <div className="space-y-2">
          {cities.map((city, index) => (
            <div
              key={city.id}
              data-slot="world-clock-widget-city"
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors",
                index === 0 ? "bg-neutral-900 text-white" : "bg-neutral-50",
              )}
            >
              <div>
                <p
                  className={cn(
                    "text-[13px] font-semibold",
                    index === 0 ? "text-white" : "text-neutral-900",
                  )}
                >
                  {city.city}
                </p>
                <p
                  className={cn(
                    "text-[10px]",
                    index === 0 ? "text-white/60" : "text-neutral-400",
                  )}
                >
                  {city.offset}
                </p>
              </div>
              <p
                className={cn(
                  "font-mono text-lg font-light tabular-nums",
                  index === 0 ? "text-white" : "text-neutral-900",
                )}
              >
                {mounted ? formatTime(city.timezone) : "--:--"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

WorldClockWidget.displayName = "WorldClockWidget";
