"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

type PointOnPath = Readonly<{
  x: number;
  y: number;
  tx: number;
  ty: number;
}>;

// Walks a rounded rectangle path (0–1) and returns a point plus its inward normal.
function pointOnRoundedRect(
  t: number,
  left: number,
  top: number,
  width: number,
  height: number,
  radius: number,
): PointOnPath {
  const sw = width - 2 * radius;
  const sh = height - 2 * radius;
  const arc = (Math.PI / 2) * radius;
  const perim = 2 * sw + 2 * sh + 4 * arc;
  let d = (((t % 1) + 1) % 1) * perim;

  if (d <= sw) {
    return { x: left + radius + d, y: top, tx: 1, ty: 0 };
  }
  d -= sw;

  if (d <= arc) {
    const angle = -Math.PI / 2 + (d / arc) * (Math.PI / 2);
    const ox = left + width - radius;
    const oy = top + radius;
    return {
      x: ox + radius * Math.cos(angle),
      y: oy + radius * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
    };
  }
  d -= arc;

  if (d <= sh) {
    return { x: left + width, y: top + radius + d, tx: 0, ty: 1 };
  }
  d -= sh;

  if (d <= arc) {
    const angle = (d / arc) * (Math.PI / 2);
    const ox = left + width - radius;
    const oy = top + height - radius;
    return {
      x: ox + radius * Math.cos(angle),
      y: oy + radius * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
    };
  }
  d -= arc;

  if (d <= sw) {
    return { x: left + width - radius - d, y: top + height, tx: -1, ty: 0 };
  }
  d -= sw;

  if (d <= arc) {
    const angle = Math.PI / 2 + (d / arc) * (Math.PI / 2);
    const ox = left + radius;
    const oy = top + height - radius;
    return {
      x: ox + radius * Math.cos(angle),
      y: oy + radius * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
    };
  }
  d -= arc;

  if (d <= sh) {
    return { x: left, y: top + height - radius - d, tx: 0, ty: -1 };
  }
  d -= sh;

  const angle = Math.PI + (d / arc) * (Math.PI / 2);
  const ox = left + radius;
  const oy = top + radius;
  return {
    x: ox + radius * Math.cos(angle),
    y: oy + radius * Math.sin(angle),
    tx: -Math.sin(angle),
    ty: Math.cos(angle),
  };
}

// 60 tick marks spaced evenly around the squircle border.
const BORDER_TICKS = Array.from({ length: 60 }, (_, tick) => {
  const { x, y, tx, ty } = pointOnRoundedRect(tick / 60, 2, 2, 96, 96, 18);
  const len = 4.2;
  const f = (n: number) => n.toFixed(2);
  return {
    tick,
    x1: f(x),
    y1: f(y),
    x2: f(x - ty * len),
    y2: f(y + tx * len),
  };
});

type SquircleDigitalFaceProps = Readonly<{
  hours: string;
  minutes: string;
}>;

function SquircleDigitalFace({ hours, minutes }: SquircleDigitalFaceProps) {
  return (
    <div className="relative h-full w-full">
      {/* Tick ring sits behind the centered HH:MM readout. */}
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
        {BORDER_TICKS.map((tick) => (
          <line
            key={tick.tick}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#d4d4d4"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-5xl leading-none font-bold tracking-tight text-neutral-900 tabular-nums">
          {hours}:{minutes}
        </p>
      </div>
    </div>
  );
}

export type IosDigitalClockWidgetProps = Readonly<
  ComponentPropsWithoutRef<"div">
>;

export const IosDigitalClockWidget = forwardRef<
  HTMLDivElement,
  IosDigitalClockWidgetProps
>(({ className, ...props }, ref) => {
  // Start as null so the first paint matches SSR; then refresh every second on the client.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = globalThis.setInterval(update, 1000);
    return () => globalThis.clearInterval(timer);
  }, []);

  const hours = now ? String(now.getHours()).padStart(2, "0") : "00";
  const minutes = now ? String(now.getMinutes()).padStart(2, "0") : "00";

  return (
    <div
      ref={ref}
      data-slot="split-block-digital-clock-widget"
      className={cn(
        "flex h-44 w-44 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-1 font-sans shadow-lg select-none",
        className,
      )}
      {...props}
    >
      {now ? (
        <SquircleDigitalFace hours={hours} minutes={minutes} />
      ) : (
        // Gray bar matches the size of the HH:MM text while time loads.
        <div className="h-9 w-28 rounded-lg bg-neutral-100" aria-hidden />
      )}
    </div>
  );
});

IosDigitalClockWidget.displayName = "IosDigitalClockWidget";
