import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Mail } from "@/icons/Mail";
import { Star } from "@/icons/Star";
import { File } from "@/icons/File";

/**
 * Inbox Summary Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type InboxCategory = {
  label: string;
  count: number;
  icon: ReactNode;
  color: string;
};

export type InboxSummaryCardProps = {
  title?: string;
  totalUnread?: number;
  categories?: InboxCategory[];
} & ComponentPropsWithoutRef<"div">;

const defaultCategories: InboxCategory[] = [
  {
    label: "Primary",
    count: 12,
    icon: <Mail size={14} />,
    color: "bg-sky-500",
  },
  {
    label: "Starred",
    count: 4,
    icon: <Star size={14} />,
    color: "bg-amber-500",
  },
  {
    label: "Drafts",
    count: 2,
    icon: <File size={14} />,
    color: "bg-neutral-400",
  },
];

export const InboxSummaryCard = forwardRef<
  HTMLDivElement,
  InboxSummaryCardProps
>(
  (
    {
      className,
      title = "Inbox",
      totalUnread = 12,
      categories = defaultCategories,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="inbox-summary-card"
      className={cn(
        "w-xs rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-base font-bold text-neutral-900">{title}</h4>
        <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-700">
          {totalUnread} unread
        </span>
      </div>
      <div className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex cursor-default items-center gap-3 rounded-xl border border-neutral-100 px-3 py-2.5 transition-colors hover:bg-neutral-50"
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white",
                cat.color,
              )}
            >
              {cat.icon}
            </div>
            <span className="flex-1 text-[13px] font-medium text-neutral-800">
              {cat.label}
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-600">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

InboxSummaryCard.displayName = "InboxSummaryCard";
