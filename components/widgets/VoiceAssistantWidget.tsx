"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { Sound } from "@/icons/Sound";

export type VoiceAssistantWidgetProps = {
  label?: string;
} & ComponentPropsWithoutRef<"div">;

export const VoiceAssistantWidget = forwardRef<
  HTMLDivElement,
  VoiceAssistantWidgetProps
>(({ className, label = "Listening…", ...props }, ref) => {
  const [active, setActive] = useState(false);
  const [levels, setLevels] = useState<number[]>(Array(16).fill(20));

  useEffect(() => {
    if (!active) {
      setLevels(Array(16).fill(12));
      return;
    }
    const timer = window.setInterval(() => {
      setLevels(Array.from({ length: 16 }, () => 15 + Math.random() * 55));
    }, 100);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div
      ref={ref}
      data-slot="voice-assistant-widget"
      className={cn(
        "flex h-44 w-44 flex-col items-center justify-between overflow-hidden rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        Voice AI
      </p>

      <div className="flex h-10 items-end justify-center gap-0.5">
        {levels.map((h, i) => (
          <span
            key={i}
            className={cn(
              "w-1 rounded-full transition-all duration-100",
              active ? "bg-neutral-900" : "bg-neutral-200",
            )}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setActive(!active)}
        aria-label={active ? "Stop listening" : "Start listening"}
        className={cn(
          "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-colors active:scale-95",
          active ? "bg-red-500 text-white" : "bg-neutral-900 text-white",
        )}
      >
        <Sound size={18} />
      </button>

      <p className="text-[11px] font-medium text-neutral-600">
        {active ? label : "Tap to speak"}
      </p>
    </div>
  );
});

VoiceAssistantWidget.displayName = "VoiceAssistantWidget";
