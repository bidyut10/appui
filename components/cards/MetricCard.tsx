import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  useMemo,
} from "react";

import { cn } from "@/lib/utils";

import { ArrowRight } from "@/icons/ArrowRight";
import { UserGroup } from "@/icons/UserGroup";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type MetricCardProps = {
  label?: string;

  value?: string;

  change?: string;
  changePositive?: boolean;
  showChange?: boolean;

  period?: string;

  chartData?: number[];

  footerLabel?: string;

  icon?: ReactNode;

  actionLabel?: string;
  onActionClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,

      label = "Active Users",

      value = "2,847",

      change = "+12.5%",
      changePositive = true,
      showChange = true,

      period = "This week",

      chartData = [40, 65, 45, 80, 55, 90, 70],

      footerLabel = "Mon — Sun",

      icon,

      actionLabel = "View report",
      onActionClick,

      ...props
    },
    ref,
  ) => {
    /* ------------------------------------------------------------------------ */
    /*                              Chart Helpers                               */
    /* ------------------------------------------------------------------------ */

    const normalizedChartData = useMemo(
      () => chartData.map((value) => Math.min(100, Math.max(0, value))),
      [chartData],
    );

    const highestValue = useMemo(
      () => Math.max(...normalizedChartData),
      [normalizedChartData],
    );

    return (
      <div
        ref={ref}
        data-slot="metric-card"
        className={cn(
          "group w-60 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* -------------------------------------------------------------------------- */}
        {/*                                   Header                                   */}
        {/* -------------------------------------------------------------------------- */}

        <div
          data-slot="metric-card-header"
          className="mb-4 flex items-center justify-between"
        >
          <div
            data-slot="metric-card-icon"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-50"
          >
            {icon ?? <UserGroup size={16} className="text-neutral-600" />}
          </div>

          <span
            data-slot="metric-card-period"
            className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase"
          >
            {period}
          </span>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/*                                   Metric                                   */}
        {/* -------------------------------------------------------------------------- */}

        <p
          data-slot="metric-card-label"
          className="mb-1 text-[10px] font-medium tracking-wider text-neutral-400 uppercase"
        >
          {label}
        </p>

        <div
          data-slot="metric-card-value"
          className="mb-4 flex items-end gap-2"
        >
          <span className="text-3xl font-light tracking-tight text-neutral-900">
            {value}
          </span>

          {showChange && (
            <span
              data-slot="metric-card-change"
              className={cn(
                "mb-1 rounded-full px-1.5 py-0.5 text-xs font-medium",
                changePositive
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600",
              )}
            >
              {change}
            </span>
          )}
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/*                                    Chart                                   */}
        {/* -------------------------------------------------------------------------- */}

        <div
          data-slot="metric-card-chart"
          className="mb-3 flex h-10 items-end gap-1"
        >
          {normalizedChartData.map((height, index) => (
            <div
              key={`${height}-${index}`}
              data-slot="metric-card-chart-bar"
              className={cn(
                "flex-1 rounded-sm transition-all duration-300",
                height === highestValue
                  ? "bg-blue-500"
                  : "bg-neutral-100 group-hover:bg-blue-100",
              )}
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/*                                   Footer                                   */}
        {/* -------------------------------------------------------------------------- */}

        <div
          data-slot="metric-card-footer"
          className="flex items-center justify-between text-[10px] text-neutral-400"
        >
          <span>{footerLabel}</span>

          <button
            data-slot="metric-card-action"
            type="button"
            aria-label={actionLabel}
            onClick={onActionClick}
            className="flex cursor-pointer items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900"
          >
            {actionLabel}
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
    );
  },
);

MetricCard.displayName = "MetricCard";
