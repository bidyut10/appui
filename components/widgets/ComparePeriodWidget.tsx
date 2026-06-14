"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Compare Period Widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type ComparePeriodWidgetProps = {
  currentLabel?: string;
  previousLabel?: string;
  currentValue?: string;
  previousValue?: string;
  metric?: string;
  onToggle?: (period: "current" | "previous") => void;
} & ComponentPropsWithoutRef<"div">;

export const ComparePeriodWidget = forwardRef<
  HTMLDivElement,
  ComparePeriodWidgetProps
>(
  (
    {
      className,
      currentLabel = "This month",
      previousLabel = "Last month",
      currentValue = "₹8.4L",
      previousValue = "₹7.1L",
      metric = "Revenue",
      onToggle,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState<"current" | "previous">("current");

    return (
      <div
        ref={ref}
        data-slot="compare-period-widget"
        className={cn(
          "w-full max-w-xs rounded-[1.25rem] border border-neutral-200/80 bg-white p-4 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <p className="text-[11px] font-medium text-neutral-500">{metric}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(
            [
              {
                id: "current" as const,
                label: currentLabel,
                value: currentValue,
              },
              {
                id: "previous" as const,
                label: previousLabel,
                value: previousValue,
              },
            ] as const
          ).map((period) => (
            <button
              key={period.id}
              type="button"
              onClick={() => {
                setActive(period.id);
                onToggle?.(period.id);
              }}
              className={cn(
                "cursor-pointer rounded-xl border p-3 text-left transition-all active:scale-[0.98]",
                active === period.id
                  ? "border-teal-200 bg-teal-50 shadow-sm"
                  : "border-neutral-100 bg-neutral-50/50 hover:border-neutral-200",
              )}
            >
              <p className="text-[10px] text-neutral-400">{period.label}</p>
              <p className="mt-1 text-lg font-bold text-neutral-900 tabular-nums">
                {period.value}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-emerald-50 py-2">
          <span className="text-[11px] font-semibold text-emerald-700">
            +18.3% vs last month
          </span>
        </div>
      </div>
    );
  },
);

ComparePeriodWidget.displayName = "ComparePeriodWidget";
