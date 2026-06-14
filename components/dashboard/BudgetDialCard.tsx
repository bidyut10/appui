import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Budget dial card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo budget, spend, and timeline values with your own financial data.
 */
export type BudgetDialCardProps = {
  title?: string;
  spent?: number;
  budget?: number;
  daysLeft?: number;
  category?: string;
  utilizedLabel?: string;
  spentLabel?: string;
  daysLeftLabel?: string;
  currencyPrefix?: string;
  currencySuffix?: string;
} & ComponentPropsWithoutRef<"div">;

export const BudgetDialCard = forwardRef<HTMLDivElement, BudgetDialCardProps>(
  (
    {
      className,
      title = "Marketing budget",
      spent = 68,
      budget = 100,
      daysLeft = 12,
      category = "Q2 spend",
      utilizedLabel = "utilized",
      spentLabel = "Spent",
      daysLeftLabel = "Days left",
      currencyPrefix = "₹",
      currencySuffix = "L",
      ...props
    },
    ref,
  ) => {
    const safeBudget = budget > 0 ? budget : 1;
    const pct = Math.round(
      Math.max(0, Math.min(100, (spent / safeBudget) * 100)),
    );
    const r = 52;
    const circumference = Math.PI * r;
    const offset = circumference - (pct / 100) * circumference;
    const isWarning = pct > 80;

    return (
      <div
        ref={ref}
        data-slot="budget-dial-card"
        className={cn(
          "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <p className="text-[11px] font-medium text-neutral-500">{title}</p>
        <p className="text-[10px] text-neutral-400">{category}</p>

        {/* Dial */}
        <div className="relative mx-auto mt-2 w-36">
          <svg viewBox="0 0 120 68" className="w-full">
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke={isWarning ? "#f59e0b" : "#14b8a6"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-x-0 bottom-1 text-center">
            <p className="text-3xl font-bold text-neutral-900 tabular-nums">
              {pct}%
            </p>
            <p className="text-[10px] text-neutral-400">{utilizedLabel}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-neutral-50 px-3 py-2 text-center">
            <p className="text-[10px] text-neutral-400">{spentLabel}</p>
            <p className="text-sm font-bold text-neutral-800 tabular-nums">
              {currencyPrefix}
              {spent.toLocaleString()}
              {currencySuffix}
            </p>
          </div>
          <div className="rounded-lg bg-neutral-50 px-3 py-2 text-center">
            <p className="text-[10px] text-neutral-400">{daysLeftLabel}</p>
            <p className="text-sm font-bold text-neutral-800 tabular-nums">
              {daysLeft.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

BudgetDialCard.displayName = "BudgetDialCard";
