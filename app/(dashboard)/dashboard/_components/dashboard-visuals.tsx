"use client";

import { cn } from "@/lib/cn";

/** Quiet SVG visuals for dashboard cards — no chart library. */

export type VisualTone = "neutral" | "dark" | "rose" | "teal" | "emerald" | "red";

const TONE = {
  neutral: {
    line: "text-neutral-800",
    fill: "text-neutral-100",
    bar: "bg-neutral-800",
    ring: "text-neutral-800",
    track: "text-neutral-100",
  },
  dark: {
    line: "text-rose-700/60",
    fill: "text-rose-800/8",
    bar: "bg-rose-800/45",
    ring: "text-rose-700/60",
    track: "text-white/10",
  },
  rose: {
    line: "text-rose-700/70",
    fill: "text-rose-800/10",
    bar: "bg-rose-800/45",
    ring: "text-rose-700/70",
    track: "text-rose-800/8",
  },
  teal: {
    line: "text-rose-700/60",
    fill: "text-rose-800/8",
    bar: "bg-rose-700/40",
    ring: "text-rose-700/60",
    track: "text-rose-800/8",
  },
  emerald: {
    line: "text-rose-700/70",
    fill: "text-rose-800/8",
    bar: "bg-rose-800/45",
    ring: "text-rose-700/70",
    track: "text-rose-800/8",
  },
  red: {
    line: "text-rose-700/70",
    fill: "text-rose-800/10",
    bar: "bg-rose-800/45",
    ring: "text-rose-700/70",
    track: "text-rose-800/8",
  },
} as const;

type SparklineProps = Readonly<{
  values: number[];
  tone?: VisualTone;
  className?: string;
}>;

/** Soft area sparkline from a list of values. */
export function Sparkline({
  values,
  tone = "neutral",
  className,
}: SparklineProps) {
  const colors = TONE[tone];
  const w = 120;
  const h = 36;
  const max = Math.max(1, ...values);
  const min = Math.min(0, ...values);
  const range = Math.max(1, max - min);
  const pts = values.map((v, i) => {
    const x = values.length <= 1 ? 0 : (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x},${y}`;
  });
  const line = pts.join(" ");
  const area = `0,${h} ${line} ${w},${h}`;

  if (values.length < 2) {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden>
        <line
          x1="0"
          y1={h / 2}
          x2={w}
          y2={h / 2}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-neutral-200"
        />
      </svg>
    );
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden>
      <polyline
        fill="currentColor"
        points={area}
        className={colors.fill}
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={line}
        className={colors.line}
      />
    </svg>
  );
}

type ColumnBarsProps = Readonly<{
  values: number[];
  tone?: VisualTone;
  className?: string;
}>;

/** Vertical column bars. */
export function ColumnBars({
  values,
  tone = "neutral",
  className,
}: ColumnBarsProps) {
  const colors = TONE[tone];
  const max = Math.max(1, ...values);
  return (
    <div className={className} aria-hidden>
      <div className="flex h-16 items-end gap-1">
        {values.map((v, i) => (
          <div
            key={i}
            className={cn(
              "min-w-0 flex-1 rounded-sm",
              i % 2 === 0 ? colors.bar : cn(colors.bar, "opacity-60"),
            )}
            style={{ height: `${Math.max(8, Math.round((v / max) * 100))}%` }}
          />
        ))}
      </div>
    </div>
  );
}

type ShareRingProps = Readonly<{
  percent: number;
  size?: number;
  tone?: VisualTone;
  className?: string;
}>;

/** Thin donut ring. */
export function ShareRingVisual({
  percent,
  size = 72,
  tone = "neutral",
  className,
}: ShareRingProps) {
  const colors = TONE[tone];
  const pct = Math.min(100, Math.max(0, percent));
  const r = 28;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      className={className}
      aria-hidden
    >
      <g transform="rotate(-90 36 36)">
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className={colors.track}
        />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className={colors.ring}
        />
      </g>
    </svg>
  );
}

/** Progress bar fill class for ranked lists. */
export function barFillClass(tone: VisualTone = "neutral"): string {
  return TONE[tone].bar;
}

/** Derive a small visual series from ranked counts (stable, no extra API). */
export function seriesFromRanks(values: number[], pads = 8): number[] {
  if (values.length === 0) return Array.from({ length: pads }, () => 2);
  const sliced = values.slice(0, pads);
  while (sliced.length < pads) sliced.unshift(Math.max(1, sliced[0] ?? 1));
  return sliced;
}
