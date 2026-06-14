"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/**
 * Event countdown widget with live ticking timer.
 *
 * Replace the demo event details with your own.
 */
export type CountdownEventWidgetProps = {
  eventName?: string;
  eventDate?: string;
  location?: string;
  onComplete?: () => void;
} & ComponentPropsWithoutRef<"div">;

function parseTarget(dateStr: string) {
  return new Date(dateStr).getTime();
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export const CountdownEventWidget = forwardRef<
  HTMLDivElement,
  CountdownEventWidgetProps
>(
  (
    {
      className,
      eventName = "Product Launch",
      eventDate = "2026-07-01T09:00:00",
      location = "San Francisco, CA",
      onComplete,
      ...props
    },
    ref,
  ) => {
    const target = parseTarget(eventDate);
    const [remaining, setRemaining] = useState<number | null>(null);

    useEffect(() => {
      const update = () => {
        const next = Math.max(0, target - Date.now());
        setRemaining(next);
        if (next === 0) onComplete?.();
      };

      update();
      const timer = window.setInterval(update, 1000);
      return () => window.clearInterval(timer);
    }, [target, onComplete]);

    const totalSec = Math.floor((remaining ?? 0) / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const units = [
      { label: "Days", value: days },
      { label: "Hours", value: hours },
      { label: "Mins", value: mins },
      { label: "Secs", value: secs },
    ];

    return (
      <div
        ref={ref}
        data-slot="countdown-event-widget"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="text-[10px] font-semibold tracking-widest text-teal-600 uppercase">
          Countdown
        </p>
        <h3 className="mt-1 text-base font-bold text-neutral-900">
          {eventName}
        </h3>
        <p className="mt-0.5 text-[11px] text-neutral-400">{location}</p>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {units.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-neutral-100 bg-neutral-50 py-2.5 text-center"
            >
              <p className="font-mono text-xl font-bold text-neutral-900 tabular-nums">
                {pad(value)}
              </p>
              <p className="mt-0.5 text-[9px] font-medium text-neutral-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-teal-500 to-cyan-500 transition-all duration-1000"
            style={{ width: `${Math.min(100, (secs / 60) * 100)}%` }}
          />
        </div>
      </div>
    );
  },
);

CountdownEventWidget.displayName = "CountdownEventWidget";
