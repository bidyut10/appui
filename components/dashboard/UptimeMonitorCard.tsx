import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Uptime monitor card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo service uptime percentages and period label with your own monitoring data.
 */
export type ServiceUptime = {
  name: string;
  uptime: number;
};

export type UptimeMonitorCardProps = {
  title?: string;
  period?: string;
  services?: ServiceUptime[];
  rowCount?: number;
} & ComponentPropsWithoutRef<"div">;

const defaultServices: ServiceUptime[] = [
  { name: "API", uptime: 99.99 },
  { name: "Auth", uptime: 100 },
  { name: "CDN", uptime: 99.2 },
  { name: "DB", uptime: 99.97 },
  { name: "Webhooks", uptime: 98.8 },
  { name: "Email", uptime: 99.5 },
];

export const UptimeMonitorCard = forwardRef<
  HTMLDivElement,
  UptimeMonitorCardProps
>(
  (
    {
      className,
      title = "Uptime monitor",
      period = "Last 30 days",
      services = defaultServices,
      rowCount = 5,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="uptime-monitor-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[11px] font-medium text-neutral-500">{title}</p>
        <span className="text-[10px] text-neutral-400">{period}</span>
      </div>

      {/* Services */}
      <div className="grid grid-cols-6 gap-1.5">
        {(services ?? []).map((service) => (
          <div key={service.name} className="text-center">
            <div className="mb-1.5 grid grid-cols-1 gap-0.5">
              {Array.from({ length: rowCount }).map((_, row) => {
                const isDown = service.uptime < 99.5 && row === 4;

                return (
                  <div
                    key={`${service.name}-${row}`}
                    className={cn(
                      "mx-auto h-2 w-full max-w-4 rounded-sm",
                      isDown ? "bg-amber-400" : "bg-emerald-400",
                    )}
                  />
                );
              })}
            </div>
            <p className="truncate text-[9px] font-medium text-neutral-600">
              {service.name}
            </p>
            <p className="text-[8px] text-neutral-400 tabular-nums">
              {service.uptime}%
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
);

UptimeMonitorCard.displayName = "UptimeMonitorCard";
