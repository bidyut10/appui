"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

// roman = XII labels, minimal = ticks only, numeric = 12/3/6/9 labels.
export type AnalogClockFaceVariant = "roman" | "minimal" | "numeric";

const CLOCK_TICKS = Array.from({ length: 12 }, (_, hour) => {
  const angle = (hour * 30 * Math.PI) / 180;
  const inner = hour % 3 === 0 ? 38 : 40;
  const outer = 44;
  const f = (n: number) => n.toFixed(2);
  return {
    hour,
    major: hour % 3 === 0,
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
] as const;

const NUMERIC_LABELS = [
  { deg: 0, label: "12", x: "50.00", y: "18.00" },
  { deg: 90, label: "3", x: "82.00", y: "50.00" },
  { deg: 180, label: "6", x: "50.00", y: "82.00" },
  { deg: 270, label: "9", x: "18.00", y: "50.00" },
] as const;

type AnalogClockFaceProps = Readonly<{
  hours: number;
  minutes: number;
  seconds: number;
  variant: AnalogClockFaceVariant;
}>;

function AnalogClockFace({
  hours,
  minutes,
  seconds,
  variant,
}: AnalogClockFaceProps) {
  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;
  const labels = variant === "roman" ? ROMAN_LABELS : NUMERIC_LABELS;

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="#f0f0f0"
        strokeWidth="1"
      />

      {CLOCK_TICKS.map((tick) => (
        <line
          key={tick.hour}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="#d4d4d4"
          strokeWidth={tick.major ? 1.5 : 1}
          strokeLinecap="round"
        />
      ))}

      {variant !== "minimal" &&
        labels.map(({ deg, label, x, y }) => (
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
        stroke="#404040"
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

export type AnalogClockWidgetProps = Readonly<
  {
    // Face style — roman numerals, plain ticks, or numeric hour labels.
    variant?: AnalogClockFaceVariant;
  } & ComponentPropsWithoutRef<"div">
>;

// Compact iOS-style analog clock — live hands with three dial variants.
export const AnalogClockWidget = forwardRef<
  HTMLDivElement,
  AnalogClockWidgetProps
>(({ className, variant = "minimal", ...props }, ref) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = globalThis.setInterval(update, 1000);
    return () => globalThis.clearInterval(timer);
  }, []);

  const hours = now ? now.getHours() % 12 : 0;
  const minutes = now ? now.getMinutes() : 0;
  const seconds = now ? now.getSeconds() : 0;

  const digital = now
    ? now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "--:--";

  return (
    <div
      ref={ref}
      data-slot="analog-clock-widget"
      className={cn(
        "flex h-44 w-44 flex-col items-center justify-between rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg shadow-black/5 select-none",
        className,
      )}
      {...props}
    >
      <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
        Clock
      </p>

      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border border-neutral-100" />
        {now && (
          <div className="absolute inset-1.5">
            <AnalogClockFace
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              variant={variant}
            />
          </div>
        )}
      </div>

      <p className="font-mono text-sm font-light text-neutral-900 tabular-nums">
        {digital}
      </p>
    </div>
  );
});

AnalogClockWidget.displayName = "AnalogClockWidget";
