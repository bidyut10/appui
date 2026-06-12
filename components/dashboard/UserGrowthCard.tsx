import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { UserGroup } from "@/icons/UserGroup";
import { cn } from "@/lib/utils";

/*
| User growth card built with React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo user metrics
| and growth statistics with your
| own analytics data.
|
| Visual design remains exactly the same.
*/

export type UserGrowthMetric = {
  label: string;
  value: string;
  percentage: number;
  color?: string;
};

export type UserGrowthCardProps = {
  title?: string;
  totalUsers?: string | number;
  icon?: React.ReactNode;
  metrics?: UserGrowthMetric[];
} & ComponentPropsWithoutRef<"div">;

const defaultMetrics: UserGrowthMetric[] = [
  {
    label: "New signups",
    value: "+342",
    percentage: 72,
    color: "bg-blue-500",
  },
  {
    label: "Returning",
    value: "+128",
    percentage: 45,
    color: "bg-teal-500",
  },
  {
    label: "Churned",
    value: "-24",
    percentage: 12,
    color: "bg-red-400",
  },
];

export const UserGrowthCard = forwardRef<HTMLDivElement, UserGrowthCardProps>(
  (
    {
      className,

      title = "Active Users",
      totalUsers = "12,847",

      icon,

      metrics = defaultMetrics,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="user-growth-card"
      className={cn(
        "w-64 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div
        data-slot="user-growth-header"
        className="mb-4 flex items-center gap-3"
      >
        <div
          data-slot="user-growth-icon-container"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50"
        >
          {icon ?? <UserGroup size={18} className="text-neutral-600" />}
        </div>

        <div>
          <p
            data-slot="user-growth-title"
            className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase"
          >
            {title}
          </p>

          <p
            data-slot="user-growth-total"
            className="text-xl font-semibold text-neutral-900"
          >
            {totalUsers}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div data-slot="user-growth-metrics" className="space-y-2">
        {metrics.map(({ label, value, percentage, color = "bg-blue-500" }) => {
          const safePercentage = Math.max(0, Math.min(100, percentage));

          const isNegative = value.startsWith("-");

          return (
            <div key={label} data-slot="user-growth-metric">
              <div
                data-slot="user-growth-metric-header"
                className="mb-1 flex justify-between text-[11px]"
              >
                <span className="text-neutral-600">{label}</span>

                <span
                  className={cn(
                    "font-medium",
                    isNegative ? "text-red-500" : "text-emerald-600",
                  )}
                >
                  {value}
                </span>
              </div>

              <div
                data-slot="user-growth-progress-track"
                className="h-1.5 overflow-hidden rounded-full bg-neutral-100"
              >
                <div
                  data-slot="user-growth-progress-fill"
                  className={cn("h-full rounded-full", color)}
                  style={{
                    width: `${safePercentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

UserGrowthCard.displayName = "UserGrowthCard";
