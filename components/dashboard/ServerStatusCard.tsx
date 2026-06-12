import React, { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface Server {
  name: string;
  status: string;
  uptime: string;
  color: string;
}

export interface ServerStatusCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  statusLabel?: string;
  statusColor?: string;
  servers?: Server[];
}

const defaultServers: Server[] = [
  {
    name: "API Server",
    status: "Operational",
    uptime: "99.99%",
    color: "bg-emerald-500",
  },
  {
    name: "Database",
    status: "Operational",
    uptime: "99.97%",
    color: "bg-emerald-500",
  },
  {
    name: "CDN",
    status: "Degraded",
    uptime: "98.42%",
    color: "bg-amber-500",
  },
  {
    name: "Auth Service",
    status: "Operational",
    uptime: "100%",
    color: "bg-emerald-500",
  },
];

export const ServerStatusCard = forwardRef<
  HTMLDivElement,
  ServerStatusCardProps
>(
  (
    {
      className,
      title = "System Status",
      statusLabel = "All systems",
      statusColor = "bg-emerald-500",
      servers = defaultServers,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="server-status-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          data-slot="server-status-card-header"
          className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
        >
          <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

          <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
            <span
              className={cn(
                "h-1.5 w-1.5 animate-pulse rounded-full",
                statusColor,
              )}
            />
            {statusLabel}
          </span>
        </div>

        {/* Servers */}
        <div
          data-slot="server-status-card-list"
          className="divide-y divide-neutral-50"
        >
          {servers.map((server) => (
            <div
              key={server.name}
              data-slot="server-status-card-item"
              className="flex items-center gap-3 px-4 py-3"
            >
              <div
                className={cn("h-2 w-2 shrink-0 rounded-full", server.color)}
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-neutral-800">
                  {server.name}
                </p>

                <p className="text-[10px] text-neutral-400">
                  {server.uptime} uptime
                </p>
              </div>

              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium",
                  server.status === "Operational"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700",
                )}
              >
                {server.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

ServerStatusCard.displayName = "ServerStatusCard";
