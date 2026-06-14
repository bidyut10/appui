"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { AnalogClockFace } from "@/components/widgets/shared/AnalogClockFace";

export type MinimalAnalogClockWidgetProps = ComponentPropsWithoutRef<"div">;

export const MinimalAnalogClockWidget = forwardRef<
  HTMLDivElement,
  MinimalAnalogClockWidgetProps
>(({ className, ...props }, ref) => {
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

  return (
    <div
      ref={ref}
      data-slot="minimal-analog-clock-widget"
      className={cn(
        "flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-lg",
        className,
      )}
      {...props}
    >
      {now ? (
        <AnalogClockFace
          variant="dot"
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      ) : (
        <div className="h-full w-full rounded-full bg-neutral-100" aria-hidden />
      )}
    </div>
  );
});

MinimalAnalogClockWidget.displayName = "MinimalAnalogClockWidget";
