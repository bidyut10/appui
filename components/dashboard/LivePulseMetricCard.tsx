import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type LivePulseMetricCardProps = {
  label?: string;
  value?: string;
  unit?: string;
  delta?: string;
  stream?: string[];
} & ComponentPropsWithoutRef<"div">;

const defaultStream = ["2,841", "2,843", "2,847", "2,852", "2,849", "2,854"];

export const LivePulseMetricCard = forwardRef<
  HTMLDivElement,
  LivePulseMetricCardProps
>(
  (
    {
      className,
      label = "Active sessions",
      value = "2,854",
      unit = "live",
      delta = "+127 in last hour",
      stream = defaultStream,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="live-pulse-metric-card"
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-[1.25rem] bg-neutral-900 p-5 font-sans text-white shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <p className="text-[11px] font-medium text-neutral-400">{label}</p>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-[2.75rem] leading-none font-semibold tracking-tight tabular-nums">
            {value}
          </p>
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-teal-300">
            {unit}
          </span>
        </div>
        <p className="mt-1 text-[12px] text-emerald-400">{delta}</p>

        <div className="mt-5 flex items-end gap-0.5">
          {stream.map((point, i) => (
            <div
              key={`${point}-${i}`}
              className={cn(
                "flex-1 rounded-t-sm",
                i === stream.length - 1 ? "bg-teal-400" : "bg-white/15",
              )}
              style={{ height: `${28 + i * 6}px` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-neutral-500">
          <span>60s ago</span>
          <span>now</span>
        </div>
      </div>
    </div>
  ),
);

LivePulseMetricCard.displayName = "LivePulseMetricCard";
