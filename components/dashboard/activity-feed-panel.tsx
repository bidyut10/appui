"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import {
  CreditCard,
  LogIn,
  Settings,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

type ActivityKind = "signup" | "billing" | "login" | "settings";

const ACTIVITY_ICONS: Record<ActivityKind, LucideIcon> = {
  signup: UserPlus,
  billing: CreditCard,
  login: LogIn,
  settings: Settings,
};

export type ActivityFeedItem = Readonly<{
  id: string;
  title: string;
  detail?: string;
  time: string;
  kind?: ActivityKind;
}>;

export type ActivityFeedPanelProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    items?: readonly ActivityFeedItem[];
    emptyLabel?: string;
  } & ComponentPropsWithoutRef<"section">
>;

const DEFAULT_ITEMS: readonly ActivityFeedItem[] = [
  {
    id: "1",
    title: "New customer signup",
    detail: "Acme Studio joined the Pro plan",
    time: "2m ago",
    kind: "signup",
  },
  {
    id: "2",
    title: "Invoice paid",
    detail: "$249.00 from Northwind Labs",
    time: "18m ago",
    kind: "billing",
  },
  {
    id: "3",
    title: "Admin login",
    detail: "Bidyut Kundu signed in from Kolkata",
    time: "1h ago",
    kind: "login",
  },
  {
    id: "4",
    title: "Workspace settings updated",
    detail: "Notification rules changed",
    time: "3h ago",
    kind: "settings",
  },
];

// Activity feed panel — recent events timeline for admin and SaaS dashboards.
export const ActivityFeedPanel = forwardRef<HTMLElement, ActivityFeedPanelProps>(
  (
    {
      className,
      title = "Recent activity",
      subtitle = "Latest events across your workspace",
      items = DEFAULT_ITEMS,
      emptyLabel = "No activity yet.",
      ...props
    },
    ref,
  ) => (
    <section
      ref={ref}
      data-slot="activity-feed-panel"
      className={cn(
        "w-full min-w-0 border border-neutral-200 bg-white font-sans",
        className,
      )}
      {...props}
    >
      <header className="border-b border-neutral-100 px-4 py-3.5">
        <h2 className="text-sm font-medium text-neutral-900">{title}</h2>
        <p className="font-mono text-[10px] text-neutral-400">{subtitle}</p>
      </header>

      {items.length === 0 ? (
        <p className="px-4 py-10 text-center text-sm text-neutral-500">
          {emptyLabel}
        </p>
      ) : (
        <ul className="divide-y divide-neutral-100">
          {items.map((item) => {
            const Icon = ACTIVITY_ICONS[item.kind ?? "settings"];

            return (
              <li key={item.id} className="flex gap-3 px-4 py-3.5">
                <div className="flex size-8 shrink-0 items-center justify-center bg-neutral-50 text-neutral-600">
                  <Icon size={14} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-neutral-900">{item.title}</p>
                  {item.detail ? (
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
                <time className="shrink-0 font-mono text-[10px] text-neutral-400">
                  {item.time}
                </time>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  ),
);

ActivityFeedPanel.displayName = "ActivityFeedPanel";
