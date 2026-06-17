"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

// roman = XII/III/VI/IX labels, minimal = tick marks only,  numeric = 12/3/6/9 labels 
export type AnalogClockFaceVariant = "roman" | "minimal" | "numeric";

// Hour positions (0–11) with fixed SVG coords so server and client render the same lines.
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
  { id: "xii", label: "XII", x: "50.00", y: "18.00" },
  { id: "iii", label: "III", x: "82.00", y: "50.00" },
  { id: "vi", label: "VI", x: "50.00", y: "82.00" },
  { id: "ix", label: "IX", x: "18.00", y: "50.00" },
];

const NUMERIC_LABELS = [
  { id: "12", label: "12", x: "50.00", y: "18.00" },
  { id: "3", label: "3", x: "82.00", y: "50.00" },
  { id: "6", label: "6", x: "50.00", y: "82.00" },
  { id: "9", label: "9", x: "18.00", y: "50.00" },
];

type AnalogClockFaceProps = Readonly<{
  hours: number;
  minutes: number;
  seconds?: number;
  variant: AnalogClockFaceVariant;
  showSeconds?: boolean;
  className?: string;
}>;

function AnalogClockFace({
  hours,
  minutes,
  seconds = 0,
  variant,
  showSeconds = true,
  className,
}: AnalogClockFaceProps) {

  // Each hand rotates from the center (50, 50) in the 100×100 viewBox.
  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  const labels = variant === "roman" ? ROMAN_LABELS : NUMERIC_LABELS;

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
        labels.map(({ id, label, x, y }) => (
          <text
            key={id}
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
        stroke="#525252"
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
      <circle cx="50" cy="50" r="2" fill="#171717" />
    </svg>
  );
}

export type AnalogClockWidgetProps = Readonly<
  {
    //Face style: roman numerals, minimal ticks, or hour numbers.
    variant?: AnalogClockFaceVariant;
    showSeconds?: boolean;
  } & ComponentPropsWithoutRef<"div">
>;

export const AnalogClockWidget = forwardRef<
  HTMLDivElement,
  AnalogClockWidgetProps
>(
  (
    { className, variant = "minimal", showSeconds = true, ...props },
    ref,
  ) => {
    // Start as null so the first paint matches SSR; then tick every second on the client.
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

    return (
      <div
        ref={ref}
        data-slot="analog-clock-widget"
        data-variant={variant}
        className={cn(
          "flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-5 shadow-lg shadow-black/5 select-none",
          variant !== "minimal" && "font-sans",
          className,
        )}
        {...props}
      >
        {now ? (
          <AnalogClockFace
            variant={variant}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            showSeconds={showSeconds}
          />
        ) : (
          <div
            className="h-full w-full rounded-full bg-neutral-100"
            aria-hidden
          />
        )}
      </div>
    );
  },
);

AnalogClockWidget.displayName = "AnalogClockWidget";
