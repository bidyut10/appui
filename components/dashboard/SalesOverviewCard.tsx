"use client";

import {
  forwardRef,
  useId,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { ChevronUp } from "@/icons/ChevronUp";
import { ChevronDown } from "@/icons/ChevronDown";
import { cn } from "@/lib/utils";

/**
 * Sales overview card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo sales metrics, months, chart values, and years with your own analytics data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type SalesOverviewCardProps = {
  title?: string;
  description?: string;
  months?: string[];
  values?: number[];
  years?: string[];
  defaultYear?: string;
  totalSales?: string;
  totalSalesLabel?: string;
  averageOrder?: string;
  averageOrderLabel?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const defaultValues = [40, 55, 45, 70, 60, 85];
const defaultYears = ["2026", "2025", "2024", "2023", "2022"];

export const SalesOverviewCard = forwardRef<
  HTMLDivElement,
  SalesOverviewCardProps
>(
  (
    {
      className,
      title = "Sales Overview",
      description = "Monthly performance",
      months = defaultMonths,
      values = defaultValues,
      years = defaultYears,
      defaultYear = "2026",
      totalSales = "$142,580",
      totalSalesLabel = "Total Sales",
      averageOrder = "$89",
      averageOrderLabel = "Avg. Order",
      ...props
    },
    ref,
  ) => {
    const [year, setYear] = useState(defaultYear);
    const [open, setOpen] = useState(false);

    const gradientId = useId();

    const safeValues = useMemo(
      () => (values ?? []).map((value) => Math.max(0, Math.min(100, value))),
      [values],
    );

    const { points, areaPath } = useMemo(() => {
      if (safeValues.length === 0) {
        return { points: "", areaPath: "M0,100 L240,100 L0,100 Z" };
      }

      const denominator = Math.max(safeValues.length - 1, 1);

      const chartPoints = safeValues
        .map((value, index) => `${(index / denominator) * 240},${100 - value}`)
        .join(" ");

      const path = `M0,${100 - safeValues[0]} ${safeValues
        .map((value, index) => `L${(index / denominator) * 240},${100 - value}`)
        .join(" ")} L240,100 L0,100 Z`;

      return { points: chartPoints, areaPath: path };
    }, [safeValues]);

    return (
      <div
        ref={ref}
        data-slot="sales-overview-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="sales-overview-header"
          className="mb-4 flex items-center justify-between"
        >
          <div>
            <h4
              data-slot="sales-overview-title"
              className="text-sm font-semibold text-neutral-900"
            >
              {title}
            </h4>

            <p
              data-slot="sales-overview-description"
              className="mt-0.5 text-[11px] text-neutral-400"
            >
              {description}
            </p>
          </div>

          {/* Year selector */}
          <div data-slot="sales-overview-year-selector" className="relative">
            <button
              type="button"
              aria-label={`Select year, currently ${year}`}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              <span>{year}</span>

              {open ? (
                <ChevronUp size={12} className="text-neutral-400" />
              ) : (
                <ChevronDown size={12} className="text-neutral-400" />
              )}
            </button>

            {open && (
              <div
                data-slot="sales-overview-year-menu"
                className="absolute top-full right-0 z-50 mt-2 w-24 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl"
              >
                {(years ?? []).map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-label={`Select year ${item}`}
                    onClick={() => {
                      setYear(item);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full cursor-pointer px-3 py-2.5 text-left text-[10px] font-medium transition-colors",
                      year === item
                        ? "bg-neutral-100 text-neutral-900"
                        : "text-neutral-600 hover:bg-neutral-50",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          data-slot="sales-overview-chart"
          className="relative flex h-32 items-end gap-2"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 240 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path d={areaPath} fill={`url(#${gradientId})`} />

            <polyline
              points={points}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Labels */}
        <div
          data-slot="sales-overview-months"
          className="mt-2 flex justify-between"
        >
          {(months ?? []).map((month) => (
            <span key={month} className="font-mono text-[9px] text-neutral-400">
              {month}
            </span>
          ))}
        </div>

        {/* Footer stats */}
        <div
          data-slot="sales-overview-footer"
          className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3"
        >
          <div>
            <p className="text-[10px] text-neutral-400">{totalSalesLabel}</p>

            <p className="text-sm font-semibold text-neutral-900">
              {totalSales}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-neutral-400">{averageOrderLabel}</p>

            <p className="text-sm font-semibold text-neutral-900">
              {averageOrder}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

SalesOverviewCard.displayName = "SalesOverviewCard";
