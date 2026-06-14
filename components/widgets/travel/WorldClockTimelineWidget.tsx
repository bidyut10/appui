"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

export type WorldClockTimelineWidgetProps = {
  city?: string;
  timezone?: string;
  offset?: string;
  variant?: "light" | "dark";
} & ComponentPropsWithoutRef<"div">;

export const WorldClockTimelineWidget = forwardRef<
  HTMLDivElement,
  WorldClockTimelineWidgetProps
>(
  (
    {
      className,
      city = "Shibuya, Tokyo",
      timezone = "GMT +9 · Aug 12",
      offset = "-4H",
      variant = "light",
      ...props
    },
    ref,
  ) => {
    const [now, setNow] = useState<Date | null>(null);
    const dark = variant === "dark";

    useEffect(() => {
      const update = () => setNow(new Date());
      update();
      const timer = window.setInterval(update, 1000);
      return () => window.clearInterval(timer);
    }, []);

    const hours = now ? now.getHours() : 0;
    const minutes = now ? now.getMinutes() : 0;
    const ampm = hours >= 12 ? "PM" : "AM";
    const h12 = hours % 12 || 12;
    const timeStr = `${ampm} ${String(h12).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    return (
      <div
        ref={ref}
        data-slot="world-clock-timeline-widget"
        className={cn(
          "flex h-44 w-44 flex-col justify-between rounded-3xl p-4 font-sans shadow-lg",
          dark
            ? "bg-neutral-900 text-white"
            : "border border-neutral-100 bg-white text-neutral-900",
          className,
        )}
        {...props}
      >
        <div>
          <p className="text-xs font-semibold">{city}</p>
          <p
            className={cn(
              "text-[10px]",
              dark ? "text-neutral-400" : "text-neutral-500",
            )}
          >
            {timezone}
          </p>
        </div>

        <div className="relative py-2">
          <div
            className={cn(
              "h-0.5 w-full rounded-full",
              dark ? "bg-neutral-700" : "bg-neutral-200",
            )}
          />
          <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full",
                dark ? "bg-neutral-600" : "bg-neutral-300",
              )}
              style={{ left: `${i * 25}%` }}
            />
          ))}
        </div>

        <div className="flex items-end justify-between">
          <p className="text-lg font-bold">{timeStr}</p>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-bold",
              dark
                ? "bg-red-500/20 text-red-400"
                : "bg-emerald-100 text-emerald-700",
            )}
          >
            {offset}
          </span>
        </div>
      </div>
    );
  },
);

WorldClockTimelineWidget.displayName = "WorldClockTimelineWidget";
