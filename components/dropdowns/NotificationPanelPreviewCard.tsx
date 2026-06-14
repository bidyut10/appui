import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Bell } from "@/icons/Bell";

/**
 * Notification Panel Preview Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type NotificationPreviewItem = {
  title: string;
  body: string;
  time: string;
  unread?: boolean;
};

export type NotificationPanelPreviewCardProps = {
  title?: string;
  items?: NotificationPreviewItem[];
  unreadCount?: number;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: NotificationPreviewItem[] = [
  {
    title: "New comment on Design System",
    body: "Sarah left feedback on your PR",
    time: "2m",
    unread: true,
  },
  {
    title: "Deploy succeeded",
    body: "appui.dev is live on production",
    time: "1h",
    unread: true,
  },
  {
    title: "Weekly digest",
    body: "12 new components added this week",
    time: "3h",
  },
];

export const NotificationPanelPreviewCard = forwardRef<
  HTMLDivElement,
  NotificationPanelPreviewCardProps
>(
  (
    {
      className,
      title = "Notifications",
      items = defaultItems,
      unreadCount = 2,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="notification-panel-preview-card"
      className={cn("w-full max-w-[260px] font-sans", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/60">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <Bell size={15} className="text-neutral-600" />
            <span className="text-sm font-semibold text-neutral-900">
              {title}
            </span>
          </div>
          {unreadCount > 0 && (
            <span className="rounded-full bg-teal-500 px-2 py-0.5 text-[10px] font-bold text-white">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="scroll-hover max-h-56 divide-y divide-neutral-50 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className={cn("px-4 py-3", item.unread && "bg-teal-50/40")}
            >
              <div className="flex items-start justify-between gap-2">
                <p
                  className={cn(
                    "text-[13px] leading-snug",
                    item.unread
                      ? "font-semibold text-neutral-900"
                      : "text-neutral-700",
                  )}
                >
                  {item.title}
                </p>
                <span className="shrink-0 text-[10px] text-neutral-400">
                  {item.time}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-neutral-500">{item.body}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="w-full cursor-pointer border-t border-neutral-100 py-2.5 text-center text-[12px] font-medium text-teal-600 hover:bg-neutral-50"
        >
          Mark all as read
        </button>
      </div>
    </div>
  ),
);

NotificationPanelPreviewCard.displayName = "NotificationPanelPreviewCard";
