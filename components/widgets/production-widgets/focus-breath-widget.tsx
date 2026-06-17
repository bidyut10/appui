"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

// label — title shown below the breathing circle (defaults to "Breathe")
export type FocusBreathWidgetProps = {
  label?: string;
} & ComponentPropsWithoutRef<"div">;

// Guided breathing widget — circle grows on inhale and shrinks on exhale
export const FocusBreathWidget = forwardRef<
  HTMLDivElement,
  FocusBreathWidgetProps
>(({ className, label = "Breathe", ...props }, ref) => {
  // Alternates every 4 seconds between inhale and exhale
  const [phase, setPhase] = useState<"inhale" | "exhale">("inhale");
  // Circle scale: larger on inhale, smaller on exhale
  const [scale, setScale] = useState(0.85);

  // Flip inhale ↔ exhale on a fixed 4s rhythm
  useEffect(() => {
    const timer = globalThis.setInterval(() => {
      setPhase((p) => (p === "inhale" ? "exhale" : "inhale"));
    }, 4000);
    return () => globalThis.clearInterval(timer);
  }, []);

  // Resize the outer ring whenever the phase changes
  useEffect(() => {
    setScale(phase === "inhale" ? 1 : 0.75);
  }, [phase]);

  // Outer ring scales with the breathe cycle; inner circle shows inhale/exhale label
  return (
    <div
      ref={ref}
      data-slot="focus-breath-widget"
      className={cn(
        "flex h-44 w-44 flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      {...props}
    >
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 transition-transform duration-4000 ease-in-out"
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
