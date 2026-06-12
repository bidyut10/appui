import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type RibbonStat = {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
};

export type StatsRibbonWidgetProps = {
  stats?: RibbonStat[];
} & ComponentPropsWithoutRef<"div">;

const defaultStats: RibbonStat[] = [
  { label: "Revenue", value: "₹8.4L", change: "+12%", positive: true },
  { label: "Orders", value: "1,284", change: "+8%", positive: true },
  { label: "AOV", value: "₹654", change: "-2%", positive: false },
  { label: "Refund rate", value: "1.2%", change: "-0.3%", positive: true },
];

export const StatsRibbonWidget = forwardRef<
  HTMLDivElement,
  StatsRibbonWidgetProps
>(({ className, stats = defaultStats, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="stats-ribbon-widget"
    className={cn(
      "flex w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-sm",
      className,
    )}
    {...props}
  >
    {stats.map((stat, i) => (
      <div
        key={stat.label}
        className={cn(
          "flex flex-1 flex-col items-center px-4 py-3",
          i > 0 && "border-l border-neutral-100",
        )}
      >
        <p className="text-[10px] font-medium text-neutral-400">{stat.label}</p>
        <p className="mt-0.5 text-lg font-bold text-neutral-900 tabular-nums">
          {stat.value}
        </p>
        {stat.change && (
          <span
            className={cn(
              "mt-0.5 text-[10px] font-semibold tabular-nums",
              stat.positive ? "text-emerald-600" : "text-rose-600",
            )}
          >
            {stat.change}
          </span>
        )}
      </div>
    ))}
  </div>
));

StatsRibbonWidget.displayName = "StatsRibbonWidget";
