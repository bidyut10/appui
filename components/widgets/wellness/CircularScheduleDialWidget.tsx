"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

/** Same 12 ticks as the other analog clocks — uniform width throughout. */
const CLOCK_TICKS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180;
  const inner = i % 3 === 0 ? 38 : 40;
  const outer = 44;
  const f = (n: number) => n.toFixed(2);
  return {
    major: i % 3 === 0,
    x1: f(50 + inner * Math.sin(angle)),
    y1: f(50 - inner * Math.cos(angle)),
    x2: f(50 + outer * Math.sin(angle)),
    y2: f(50 - outer * Math.cos(angle)),
  };
});

const SCHEDULE_LABELS = [
  { text: "12", x: "50.00", y: "18.00" },
  { text: "3", x: "82.00", y: "50.00" },
  { text: "6", x: "50.00", y: "82.00" },
  { text: "9", x: "18.00", y: "50.00" },
];

type ScheduleDialFaceProps = {
  hours: number;
  minutes: number;
  seconds?: number;
  className?: string;
};

export function ScheduleDialFace({
  hours,
  minutes,
  seconds = 0,
  className,
}: ScheduleDialFaceProps) {
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="1"
      />

      {CLOCK_TICKS.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="#d4d4d4"
          strokeWidth={tick.major ? 1.5 : 1}
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
          className="fill-neutral-500 text-[6px] font-medium"
        >
          {text}
        </text>
      ))}

      <line
        x1="50"
        y1="50"
        x2="50"
        y2="28"
        stroke="#171717"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${hourDeg} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="22"
        stroke="#525252"
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${minuteDeg} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="20"
        stroke="#ef4444"
        strokeWidth="1"
        strokeLinecap="round"
        transform={`rotate(${secondDeg} 50 50)`}
      />
      <circle cx="50" cy="50" r="2" fill="#171717" />
    </svg>
  );
}

export type CircularScheduleDialWidgetProps = ComponentPropsWithoutRef<"div">;

export const CircularScheduleDialWidget = forwardRef<
  HTMLDivElement,
  CircularScheduleDialWidgetProps
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
      data-slot="circular-schedule-dial-widget"
      className={cn(
        "flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {now ? (
        <ScheduleDialFace
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      ) : (
        <div
          className="h-full w-full rounded-full bg-neutral-100"
          aria-hidden
        />
      )}
    </div>
  );
});

CircularScheduleDialWidget.displayName = "CircularScheduleDialWidget";
