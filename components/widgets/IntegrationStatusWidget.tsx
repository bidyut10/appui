"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Alert } from "@/icons/Alert";

export type Integration = {
  id: string;
  name: string;
  icon: ReactNode;
  status: "connected" | "warning" | "disconnected";
  lastSync?: string;
};

/**
 * Connected apps / integration health dashboard widget.
 *
 * Replace the demo integrations with your own connected services.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type IntegrationStatusWidgetProps = {
  title?: string;
  integrations?: Integration[];
  onToggle?: (id: string, connected: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultIntegrations: Integration[] = [
  {
    id: "stripe",
    name: "Stripe",
    icon: <span className="text-[11px] font-bold text-indigo-600">S</span>,
    status: "connected",
    lastSync: "2 min ago",
  },
  {
    id: "slack",
    name: "Slack",
    icon: <span className="text-[11px] font-bold text-[#4A154B]">#</span>,
    status: "connected",
    lastSync: "5 min ago",
  },
  {
    id: "github",
    name: "GitHub",
    icon: <span className="text-[11px] font-bold text-neutral-800">GH</span>,
    status: "warning",
    lastSync: "1 hr ago",
  },
  {
    id: "notion",
    name: "Notion",
    icon: <span className="text-[11px] font-bold text-neutral-600">N</span>,
    status: "disconnected",
  },
];

const statusStyles = {
  connected: {
    dot: "bg-emerald-500",
    label: "Connected",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  warning: {
    dot: "bg-amber-400",
    label: "Needs attention",
    text: "text-amber-700",
    bg: "bg-amber-50",
  },
  disconnected: {
    dot: "bg-neutral-300",
    label: "Disconnected",
    text: "text-neutral-500",
    bg: "bg-neutral-50",
  },
};

export const IntegrationStatusWidget = forwardRef<
  HTMLDivElement,
  IntegrationStatusWidgetProps
>(
  (
    {
      className,
      title = "Integrations",
      integrations = defaultIntegrations,
      onToggle,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(integrations);

    const toggle = (id: string) => {
      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== id) return item;
          const connected = item.status !== "connected";
          onToggle?.(id, connected);
          return {
            ...item,
            status: connected ? "connected" : "disconnected",
            lastSync: connected ? "Just now" : undefined,
          };
        }),
      );
    };

    const connectedCount = items.filter((i) => i.status === "connected").length;

    return (
      <div
        ref={ref}
        data-slot="integration-status-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-bold text-neutral-900">{title}</p>
          <span className="text-[10px] font-medium text-neutral-400">
            {connectedCount}/{items.length} active
          </span>
        </div>

        <div className="space-y-2">
          {items.map((item) => {
            const style = statusStyles[item.status];
            return (
              <div
                key={item.id}
                data-slot="integration-status-widget-item"
                className="flex items-center gap-3 rounded-xl border border-neutral-100 px-3 py-2.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-50 ring-1 ring-neutral-100">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-neutral-900">
                    {item.name}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span
                      className={cn("h-1.5 w-1.5 rounded-full", style.dot)}
                    />
                    <span className={cn("text-[10px] font-medium", style.text)}>
                      {style.label}
                    </span>
                    {item.lastSync && (
                      <span className="text-[10px] text-neutral-400">
                        · {item.lastSync}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-label={`Toggle ${item.name}`}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-lg px-2.5 py-1 text-[10px] font-semibold transition-colors",
                    item.status === "connected"
                      ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      : "bg-neutral-900 text-white hover:bg-neutral-800",
                  )}
                >
                  {item.status === "connected" ? "Manage" : "Connect"}
                </button>
              </div>
            );
          })}
        </div>

        {items.some((i) => i.status === "warning") && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2">
            <Alert size={12} className="text-amber-600" />
            <p className="text-[11px] text-amber-800">
              GitHub token expires in 3 days
            </p>
          </div>
        )}
      </div>
    );
  },
);

IntegrationStatusWidget.displayName = "IntegrationStatusWidget";
