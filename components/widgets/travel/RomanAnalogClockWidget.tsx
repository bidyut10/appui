"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

/** Precomputed tick coords — avoids SSR/client float drift on SVG attributes. */
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

const ROMAN_LABELS = [
  { deg: 0, label: "XII", x: "50.00", y: "18.00" },
  { deg: 90, label: "III", x: "82.00", y: "50.00" },
  { deg: 180, label: "VI", x: "50.00", y: "82.00" },
  { deg: 270, label: "IX", x: "18.00", y: "50.00" },
];

type AnalogClockFaceProps = {
  hours: number;
  minutes: number;
  seconds?: number;
  variant?: "roman" | "minimal" | "dot";
  showSeconds?: boolean;
  className?: string;
};

function AnalogClockFace({
  hours,
  minutes,
  seconds = 0,
  variant = "minimal",
  showSeconds = true,
  className,
}: AnalogClockFaceProps) {
  const hourDeg = hours * 30 + minutes * 0.5;
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
        stroke={variant === "dot" ? "#e5e5e5" : "#f0f0f0"}
        strokeWidth="1"
      />

      {CLOCK_TICKS.map((tick, i) => (
        <line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={variant === "dot" ? "#a3a3a3" : "#d4d4d4"}
          strokeWidth={tick.major ? 1.5 : 1}
          strokeLinecap="round"
        />
      ))}

      {variant === "roman" &&
        ROMAN_LABELS.map(({ deg, label, x, y }) => (
          <text
            key={deg}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-neutral-500 text-[6px] font-medium"
          >
            {label}
          </text>
        ))}

      <line
        x1="50"
        y1="50"
        x2="50"
        y2="28"
        stroke={variant === "dot" ? "#000" : "#171717"}
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${hourDeg} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="22"
        stroke={variant === "dot" ? "#525252" : "#404040"}
        strokeWidth="1.5"
        strokeLinecap="round"
        transform={`rotate(${minuteDeg} 50 50)`}
      />
      {showSeconds && (
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
      )}
      <circle
        cx="50"
        cy="50"
        r="2"
        fill={variant === "dot" ? "#000" : "#171717"}
      />
    </svg>
  );
}


export type RomanAnalogClockWidgetProps = ComponentPropsWithoutRef<"div">;

export const RomanAnalogClockWidget = forwardRef<
  HTMLDivElement,
  RomanAnalogClockWidgetProps
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
      data-slot="roman-analog-clock-widget"
      className={cn(
        "flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {now ? (
        <AnalogClockFace
          variant="roman"
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

RomanAnalogClockWidget.displayName = "RomanAnalogClockWidget";
