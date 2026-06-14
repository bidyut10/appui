import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * MRR breakdown card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo MRR total, change label, and segment breakdown with your own revenue data.
 */
export type MrrSegment = {
  label: string;
  amount: string;
  pct: number;
  color: string;
};

export type MrrBreakdownCardProps = {
  title?: string;
  total?: string;
  change?: string;
  segments?: MrrSegment[];
} & ComponentPropsWithoutRef<"div">;

const defaultSegments: MrrSegment[] = [
  { label: "Pro", amount: "₹4.2L", pct: 52, color: "bg-teal-500" },
  { label: "Team", amount: "₹2.8L", pct: 34, color: "bg-sky-500" },
  { label: "Enterprise", amount: "₹1.1L", pct: 14, color: "bg-amber-500" },
];

export const MrrBreakdownCard = forwardRef<
  HTMLDivElement,
  MrrBreakdownCardProps
>(
  (
    {
      className,
      title = "Monthly recurring revenue",
      total = "₹8.1L",
      change = "+14.2% vs last month",
      segments = defaultSegments,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="mrr-breakdown-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="text-[11px] font-medium tracking-wide text-neutral-500">
        {title}
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-[2rem] leading-none font-semibold tracking-tight text-neutral-900 tabular-nums">
          {total}
        </p>
        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700">
          {change}
        </span>
      </div>

      {/* Bar */}
      <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-neutral-100">
        {(segments ?? []).map((seg) => (
          <div
            key={seg.label}
            className={cn(
              "h-full first:rounded-l-full last:rounded-r-full",
              seg.color,
            )}
            style={{ width: `${Math.max(0, Math.min(100, seg.pct))}%` }}
          />
        ))}
      </div>

      {/* Segments */}
      <div className="mt-4 space-y-2.5">
        {(segments ?? []).map((seg) => (
          <div key={seg.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={cn("h-2 w-2 rounded-full", seg.color)} />
              <span className="text-[13px] text-neutral-700">{seg.label}</span>
            </div>
            <div className="text-right">
              <span className="text-[13px] font-semibold text-neutral-900 tabular-nums">
                {seg.amount}
              </span>
              <span className="ml-2 text-[11px] text-neutral-400 tabular-nums">
                {Math.max(0, Math.min(100, seg.pct))}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

MrrBreakdownCard.displayName = "MrrBreakdownCard";
