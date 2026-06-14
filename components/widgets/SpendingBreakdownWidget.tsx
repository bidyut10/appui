"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type SpendingCategory = {
  id: string;
  label: string;
  amount: number;
  budget: number;
  color: string;
};

/**
 * Spending breakdown widget — personal finance / SaaS budget tracker.
 *
 * Replace the demo categories with your own spending data.
 */
export type SpendingBreakdownWidgetProps = {
  title?: string;
  period?: string;
  totalSpent?: number;
  totalBudget?: number;
  categories?: SpendingCategory[];
  onCategoryClick?: (category: SpendingCategory) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultCategories: SpendingCategory[] = [
  {
    id: "1",
    label: "Software",
    amount: 842,
    budget: 1000,
    color: "bg-blue-500",
  },
  {
    id: "2",
    label: "Marketing",
    amount: 1240,
    budget: 1500,
    color: "bg-violet-500",
  },
  {
    id: "3",
    label: "Payroll",
    amount: 8200,
    budget: 8500,
    color: "bg-emerald-500",
  },
  { id: "4", label: "Office", amount: 320, budget: 500, color: "bg-amber-500" },
];

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export const SpendingBreakdownWidget = forwardRef<
  HTMLDivElement,
  SpendingBreakdownWidgetProps
>(
  (
    {
      className,
      title = "Spending",
      period = "June 2026",
      totalSpent = 10602,
      totalBudget = 11500,
      categories = defaultCategories,
      onCategoryClick,
      ...props
    },
    ref,
  ) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const percent = Math.round((totalSpent / totalBudget) * 100);

    return (
      <div
        ref={ref}
        data-slot="spending-breakdown-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-1 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-neutral-900">{title}</p>
            <p className="text-[11px] text-neutral-400">{period}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-neutral-900">
              {formatCurrency(totalSpent)}
            </p>
            <p className="text-[10px] text-neutral-400">
              of {formatCurrency(totalBudget)}
            </p>
          </div>
        </div>

        <div className="mt-3 mb-4">
          <div className="mb-1 flex justify-between text-[10px] text-neutral-400">
            <span>Budget used</span>
            <span>{percent}%</span>
          </div>
          <div className="flex h-2 overflow-hidden rounded-full bg-neutral-100">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={cn(
                  "h-full transition-opacity",
                  cat.color,
                  activeId && activeId !== cat.id && "opacity-30",
                )}
                style={{ width: `${(cat.amount / totalSpent) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {categories.map((cat) => {
            const used = Math.round((cat.amount / cat.budget) * 100);
            const over = used > 90;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveId(cat.id === activeId ? null : cat.id);
                  onCategoryClick?.(cat);
                }}
                data-slot="spending-breakdown-widget-category"
                className={cn(
                  "flex w-full cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-neutral-50",
                  activeId === cat.id &&
                    "bg-neutral-50 ring-1 ring-neutral-200",
                )}
              >
                <span
                  className={cn("h-2.5 w-2.5 shrink-0 rounded-full", cat.color)}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-neutral-800">
                      {cat.label}
                    </span>
                    <span className="text-[12px] font-semibold text-neutral-900">
                      {formatCurrency(cat.amount)}
                    </span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        cat.color,
                        over && "bg-rose-500",
                      )}
                      style={{ width: `${Math.min(100, used)}%` }}
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "shrink-0 text-[10px] font-medium",
                    over ? "text-rose-600" : "text-neutral-400",
                  )}
                >
                  {used}%
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

SpendingBreakdownWidget.displayName = "SpendingBreakdownWidget";
