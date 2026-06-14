"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

export type MinimalStopwatchWidgetProps = ComponentPropsWithoutRef<"button">;

export const MinimalStopwatchWidget = forwardRef<
  HTMLButtonElement,
  MinimalStopwatchWidgetProps
>(({ className, ...props }, ref) => {
  const [seconds, setSeconds] = useState(5);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  const fmt = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}:${String(Math.floor((seconds * 10) % 10)).padStart(2, "0")}`;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setRunning(!running)}
      data-slot="minimal-stopwatch-widget"
      className={cn(
        "flex h-40 w-40 max-w-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.75rem] border border-neutral-100 bg-white font-mono shadow-lg transition-transform active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="h-2 w-2 rounded-full bg-red-600" />
      <span className="text-xl font-bold tracking-wider text-neutral-900">
        {fmt}
      </span>
    </button>
  );
});

MinimalStopwatchWidget.displayName = "MinimalStopwatchWidget";
