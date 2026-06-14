"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

export type FocusBreathWidgetProps = {
  label?: string;
} & ComponentPropsWithoutRef<"div">;

export const FocusBreathWidget = forwardRef<
  HTMLDivElement,
  FocusBreathWidgetProps
>(({ className, label = "Breathe", ...props }, ref) => {
  const [phase, setPhase] = useState<"inhale" | "exhale">("inhale");
  const [scale, setScale] = useState(0.85);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase((p) => (p === "inhale" ? "exhale" : "inhale"));
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setScale(phase === "inhale" ? 1 : 0.75);
  }, [phase]);

  return (
    <div
      ref={ref}
      data-slot="focus-breath-widget"
      className={cn(
        "flex h-44 w-44 flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 transition-transform duration-[4000ms] ease-in-out"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-100 bg-white">
          <span className="text-[10px] font-semibold tracking-widest text-neutral-500 uppercase">
            {phase}
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-neutral-600">{label}</p>
    </div>
  );
});

FocusBreathWidget.displayName = "FocusBreathWidget";
