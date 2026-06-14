"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { AnalogClockFace } from "@/components/widgets/shared/AnalogClockFace";

/**
 * Premium analog clock widget with live time and white face.
 *
 * Replace the demo timezone label with your own.
 */
export type AnalogClockWidgetProps = {
  label?: string;
  timezone?: string;
  showSeconds?: boolean;
} & ComponentPropsWithoutRef<"div">;

export const AnalogClockWidget = forwardRef<HTMLDivElement, AnalogClockWidgetProps>(
  (
    {
      className,
      label = "Local time",
      timezone = "Asia/Kolkata",
      showSeconds = true,
      ...props
    },
    ref,
  ) => {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
      const update = () => setNow(new Date());
      update();
      const timer = window.setInterval(update, 1000);
      return () => window.clearInterval(timer);
    }, []);

    const hours = now ? now.getHours() % 12 : 0;
    const minutes = now ? now.getMinutes() : 0;
    const seconds = now ? now.getSeconds() : 0;

    const digital = now
      ? now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          ...(showSeconds ? { second: "2-digit" } : {}),
          hour12: true,
        })
      : "--:--:--";

    const dateStr = now
      ? now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })
      : "Loading…";

    return (
      <div
        ref={ref}
        data-slot="analog-clock-widget"
        className={cn(
          "w-64 rounded-2xl border border-neutral-200 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-900">{label}</p>
            <p className="text-[10px] text-neutral-400">{timezone}</p>
          </div>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600">
            LIVE
          </span>
        </div>

        <div className="relative mx-auto h-36 w-36 overflow-hidden">
          <div className="absolute inset-0 rounded-full border border-neutral-200 bg-linear-to-b from-neutral-50 to-white shadow-inner" />
          {now && (
            <div className="absolute inset-2">
              <AnalogClockFace
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                showSeconds={showSeconds}
                variant="minimal"
              />
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="font-mono text-2xl font-light tracking-tight text-neutral-900 tabular-nums">
            {digital}
          </p>
          <p className="mt-0.5 text-[11px] text-neutral-400">{dateStr}</p>
        </div>
      </div>
    );
  },
);

AnalogClockWidget.displayName = "AnalogClockWidget";
