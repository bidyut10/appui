"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const SCHEDULE_TICKS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  const active = i >= 17 && i <= 21;
  const inner = 36;
  const outer = active ? 42 : 40;
  const f = (n: number) => n.toFixed(2);
  return {
    active,
    x1: f(50 + inner * Math.cos(rad)),
    y1: f(50 + inner * Math.sin(rad)),
    x2: f(50 + outer * Math.cos(rad)),
    y2: f(50 + outer * Math.sin(rad)),
  };
});

const SCHEDULE_LABELS = [
  { text: "12 AM", x: "50.00", y: "22.00" },
  { text: "3 AM", x: "78.00", y: "50.00" },
  { text: "6 PM", x: "50.00", y: "78.00" },
  { text: "9 PM", x: "22.00", y: "50.00" },
];

type ScheduleDialFaceProps = {
  className?: string;
};

export function ScheduleDialFace({ className }: ScheduleDialFaceProps) {
  return (
    <svg viewBox="0 0 100 100" className={cn("h-full w-full", className)} aria-hidden>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#f5f5f5" strokeWidth="1" />

      {SCHEDULE_TICKS.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={tick.active ? "#F9D6F0" : "#e5e5e5"}
          strokeWidth={tick.active ? 2.5 : 1.5}
          strokeLinecap="round"
        />
      ))}

      {SCHEDULE_LABELS.map(({ text, x, y }) => (
        <text
          key={text}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-neutral-500 text-[5px] font-medium"
        >
          {text}
        </text>
      ))}
    </svg>
  );
}

export type CircularScheduleDialWidgetProps = ComponentPropsWithoutRef<"div">;

export const CircularScheduleDialWidget = forwardRef<
  HTMLDivElement,
  CircularScheduleDialWidgetProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="circular-schedule-dial-widget"
    className={cn(
      "flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <ScheduleDialFace />
  </div>
));

CircularScheduleDialWidget.displayName = "CircularScheduleDialWidget";
