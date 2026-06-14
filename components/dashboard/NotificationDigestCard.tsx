import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Notification digest card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo digest categories, counts, and highlights with your own data.
 */
export type DigestItem = {
  category: string;
  count: number;
  highlight?: string;
};

export type NotificationDigestCardProps = {
  title?: string;
  date?: string;
  items?: DigestItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: DigestItem[] = [
  { category: "Mentions", count: 3, highlight: "@you in Design thread" },
  { category: "Approvals", count: 2, highlight: "Invoice #884 pending" },
  { category: "Updates", count: 5, highlight: "3 deploy notifications" },
];

export const NotificationDigestCard = forwardRef<
  HTMLDivElement,
  NotificationDigestCardProps
>(
  (
    {
      className,
      title = "Your digest",
      date = "Today",
      items = defaultItems,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="notification-digest-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
        <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-500">
          {date}
        </span>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {(items ?? []).map((item) => (
          <div
            key={item.category}
            className="flex items-start gap-3 rounded-xl border border-neutral-100 p-3 transition-colors hover:border-neutral-200"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[12px] font-bold text-teal-700 tabular-nums">
              {item.count.toLocaleString()}
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-neutral-800">
                {item.category}
              </p>
              {item.highlight && (
                <p className="mt-0.5 truncate text-[11px] text-neutral-500">
                  {item.highlight}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

NotificationDigestCard.displayName = "NotificationDigestCard";
