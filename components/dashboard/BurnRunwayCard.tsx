import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Burn runway card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo cash balance, monthly burn, and runway months with your own financial data.
 */
export type BurnRunwayCardProps = {
  cashBalance?: string;
  cashBalanceLabel?: string;
  monthlyBurn?: string;
  monthlyBurnLabel?: string;
  runwayMonths?: number;
  runwayLabel?: string;
  runwayUnit?: string;
  maxRunwayMonths?: number;
} & ComponentPropsWithoutRef<"div">;

export const BurnRunwayCard = forwardRef<HTMLDivElement, BurnRunwayCardProps>(
  (
    {
      className,
      cashBalance = "₹42.8L",
      cashBalanceLabel = "Cash balance",
      monthlyBurn = "₹3.2L",
      monthlyBurnLabel = "Monthly burn",
      runwayMonths = 13,
      runwayLabel = "Runway at current burn",
      runwayUnit = "mo",
      maxRunwayMonths = 18,
      ...props
    },
    ref,
  ) => {
    const safeRunway = Math.max(0, runwayMonths);
    const progressWidth = Math.min(
      100,
      maxRunwayMonths > 0 ? (safeRunway / maxRunwayMonths) * 100 : 0,
    );

    return (
      <div
        ref={ref}
        data-slot="burn-runway-card"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        {/* Cash balance */}
        <div className="border-b border-neutral-100 bg-neutral-50/50 px-5 py-4">
          <p className="text-[11px] font-medium text-neutral-500">
            {cashBalanceLabel}
          </p>
          <p className="text-2xl font-semibold tracking-tight text-neutral-900 tabular-nums">
            {cashBalance}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 divide-x divide-neutral-100">
          <div className="px-5 py-4">
            <p className="text-[10px] font-medium text-neutral-400 uppercase">
              {monthlyBurnLabel}
            </p>
            <p className="mt-1 text-lg font-semibold text-neutral-800 tabular-nums">
              {monthlyBurn}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-[10px] font-medium text-neutral-400 uppercase">
              Runway
            </p>
            <p className="mt-1 text-lg font-semibold text-teal-700 tabular-nums">
              {safeRunway.toLocaleString()} {runwayUnit}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="px-5 pb-4">
          <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-linear-to-r from-teal-400 to-teal-600"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">{runwayLabel}</p>
        </div>
      </div>
    );
  },
);

BurnRunwayCard.displayName = "BurnRunwayCard";
