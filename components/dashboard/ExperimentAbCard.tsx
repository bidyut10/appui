import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Experiment A/B card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo variant results, confidence score, and status with your own experiment data.
 */
export type VariantResult = {
  name: string;
  conversion: number;
  visitors: string;
  winner?: boolean;
};

export type ExperimentAbCardProps = {
  title?: string;
  status?: string;
  badgeLabel?: string;
  variants?: VariantResult[];
  confidence?: number;
  confidenceLabel?: string;
  winnerLabel?: string;
  visitorsLabel?: string;
  maxConversion?: number;
} & ComponentPropsWithoutRef<"div">;

const defaultVariants: VariantResult[] = [
  { name: "Control", conversion: 3.2, visitors: "12.4K" },
  { name: "Variant B", conversion: 4.8, visitors: "12.1K", winner: true },
];

export const ExperimentAbCard = forwardRef<
  HTMLDivElement,
  ExperimentAbCardProps
>(
  (
    {
      className,
      title = "Checkout CTA color",
      status = "Running · Day 6",
      badgeLabel = "A/B",
      variants = defaultVariants,
      confidence = 94,
      confidenceLabel = "Statistical confidence",
      winnerLabel = "Winner",
      visitorsLabel = "visitors",
      maxConversion = 6,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="experiment-ab-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
            <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <p className="mt-0.5 text-[11px] text-neutral-400">{status}</p>
        </div>
        <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
          {badgeLabel}
        </span>
      </div>

      {/* Variants */}
      <div className="space-y-3">
        {(variants ?? []).map((v) => {
          const safeConversion = Math.max(0, Math.min(maxConversion, v.conversion));
          const barWidth =
            maxConversion > 0 ? (safeConversion / maxConversion) * 100 : 0;

          return (
            <div
              key={v.name}
              className={cn(
                "rounded-xl border p-3",
                v.winner
                  ? "border-teal-200 bg-teal-50/50"
                  : "border-neutral-100 bg-neutral-50/50",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      v.winner ? "bg-teal-500" : "bg-neutral-300",
                    )}
                  />
                  <span className="text-[13px] font-semibold text-neutral-800">
                    {v.name}
                  </span>
                  {v.winner && (
                    <span className="rounded bg-teal-600 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase">
                      {winnerLabel}
                    </span>
                  )}
                </div>
                <span className="text-[13px] font-bold text-neutral-900 tabular-nums">
                  {safeConversion}%
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200/80">
                <div
                  className={cn(
                    "h-full rounded-full",
                    v.winner ? "bg-teal-500" : "bg-neutral-400",
                  )}
                  style={{ width: `${Math.max(0, Math.min(100, barWidth))}%` }}
                />
              </div>
              <p className="mt-1.5 text-[10px] text-neutral-400">
                {v.visitors} {visitorsLabel}
              </p>
            </div>
          );
        })}
      </div>

      {/* Confidence */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2">
        <span className="text-[11px] text-neutral-500">{confidenceLabel}</span>
        <span className="text-[13px] font-bold text-emerald-600 tabular-nums">
          {Math.max(0, Math.min(100, confidence))}%
        </span>
      </div>
    </div>
  ),
);

ExperimentAbCard.displayName = "ExperimentAbCard";
