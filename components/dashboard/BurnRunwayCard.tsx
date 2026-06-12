import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type BurnRunwayCardProps = {
  cashBalance?: string;
  monthlyBurn?: string;
  runwayMonths?: number;
  runwayLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export const BurnRunwayCard = forwardRef<HTMLDivElement, BurnRunwayCardProps>(
  (
    {
      className,
      cashBalance = "₹42.8L",
      monthlyBurn = "₹3.2L",
      runwayMonths = 13,
      runwayLabel = "Runway at current burn",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="burn-runway-card"
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="border-b border-neutral-100 bg-neutral-50/50 px-5 py-4">
        <p className="text-[11px] font-medium text-neutral-500">Cash balance</p>
        <p className="text-2xl font-semibold tracking-tight text-neutral-900 tabular-nums">
          {cashBalance}
        </p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-100">
        <div className="px-5 py-4">
          <p className="text-[10px] font-medium text-neutral-400 uppercase">
            Monthly burn
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
            {runwayMonths} mo
          </p>
        </div>
      </div>
      <div className="px-5 pb-4">
        <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-teal-400 to-teal-600"
            style={{
              width: `${Math.min(100, (runwayMonths / 18) * 100)}%`,
            }}
          />
        </div>
        <p className="mt-2 text-[11px] text-neutral-400">{runwayLabel}</p>
      </div>
    </div>
  ),
);

BurnRunwayCard.displayName = "BurnRunwayCard";
