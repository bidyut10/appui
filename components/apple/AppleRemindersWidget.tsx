"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

/**
 * Apple Reminders Widget built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleReminderList = {
  name: string;
  count: number;
  color: string;
  items?: string[];
};

export type AppleRemindersWidgetProps = {
  title?: string;
  lists?: AppleReminderList[];
  addIcon?: ReactNode;
  onAdd?: () => void;
  onItemClick?: (listName: string, item: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultLists: AppleReminderList[] = [
  {
    name: "Today",
    count: 3,
    color: "bg-[#007AFF]",
    items: [
      "Review design mockups",
      "Ship v2.0 release",
      "Team standup at 10am",
    ],
  },
  { name: "Work", count: 5, color: "bg-[#FF9500]", items: [] },
  { name: "Personal", count: 2, color: "bg-[#34C759]", items: [] },
];

export const AppleRemindersWidget = forwardRef<
  HTMLDivElement,
  AppleRemindersWidgetProps
>(
  (
    {
      className,
      title = "Reminders",
      lists = defaultLists,
      addIcon = "+",
      onAdd,
      onItemClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-reminders-widget"
      className={cn(
        "w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-lg shadow-black/5",
        className,
      )}
      {...props}
    >
      <div
        data-slot="apple-reminders-widget-header"
        className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
      >
        <h4 className="text-[17px] font-bold text-neutral-900">{title}</h4>
        <button
          type="button"
          data-slot="apple-reminders-widget-add"
          onClick={onAdd}
          className="cursor-pointer text-2xl leading-none font-light text-[#007AFF]"
          aria-label="Add reminder"
        >
          {addIcon}
        </button>
      </div>

      <div data-slot="apple-reminders-widget-lists" className="p-2">
        {lists.map((list) => (
          <div key={list.name} data-slot="apple-reminders-widget-list">
            <div className="mb-1 flex items-center gap-2 px-2 py-2">
              <div className={cn("h-3 w-3 rounded-full", list.color)} />
              <span className="text-[15px] font-semibold text-neutral-900">
                {list.name}
              </span>
              <span className="ml-auto text-[13px] text-neutral-400">
                {list.count}
              </span>
            </div>
            {list.items?.map((item) => (
              <div
                key={item}
                data-slot="apple-reminders-widget-item"
                onClick={() => onItemClick?.(list.name, item)}
                className="ml-2 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#f2f2f7]"
              >
                <div className="h-[22px] w-[22px] shrink-0 rounded-full border-2 border-neutral-300" />
                <span className="text-[15px] text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
);

AppleRemindersWidget.displayName = "AppleRemindersWidget";
