import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Radial multi gauge card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo infrastructure load metrics and status message with your own system data.
 */
export type GaugeMetric = {
  label: string;
  value: number;
  color: string;
};

export type RadialMultiGaugeCardProps = {
  title?: string;
  metrics?: GaugeMetric[];
  statusMessage?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultMetrics: GaugeMetric[] = [
  { label: "CPU", value: 42, color: "#14b8a6" },
  { label: "Memory", value: 67, color: "#0ea5e9" },
  { label: "Disk I/O", value: 28, color: "#f59e0b" },
];

function ArcGauge({
  value,
  color,
  label,
}: {
  value: number;
  color: string;
  label: string;
}) {
  const safeValue = Math.max(0, Math.min(100, value));
  const r = 28;
  const circumference = Math.PI * r;
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 72 44" className="h-12 w-16">
        <path
          d="M 8 40 A 28 28 0 0 1 64 40"
          fill="none"
          stroke="#f5f5f5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 8 40 A 28 28 0 0 1 64 40"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x="36"
          y="36"
          textAnchor="middle"
          className="fill-neutral-800 text-[11px] font-bold"
          style={{ fontSize: "11px", fontWeight: 700 }}
        >
          {safeValue}%
        </text>
      </svg>
      <span className="text-[10px] font-medium text-neutral-500">{label}</span>
    </div>
  );
}

export const RadialMultiGaugeCard = forwardRef<
  HTMLDivElement,
  RadialMultiGaugeCardProps
>(
  (
    {
      className,
      title = "Infrastructure load",
      metrics = defaultMetrics,
      statusMessage = "All systems nominal",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="radial-multi-gauge-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>

      {/* Gauges */}
      <div className="flex justify-around">
        {(metrics ?? []).map((m) => (
          <ArcGauge
            key={m.label}
            value={m.value}
            color={m.color}
            label={m.label}
          />
        ))}
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-50 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-medium text-emerald-700">
          {statusMessage}
        </span>
      </div>
    </div>
  ),
);

RadialMultiGaugeCard.displayName = "RadialMultiGaugeCard";
