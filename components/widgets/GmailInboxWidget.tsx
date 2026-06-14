"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Star } from "@/icons/Star";
import { Mail } from "@/icons/Mail";

export type GmailMessage = {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  starred?: boolean;
  label?: string;
};

/**
 * Gmail-style inbox list widget with star and read toggles.
 *
 * Replace the demo messages with your own inbox data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GmailInboxWidgetProps = {
  accountLabel?: string;
  unreadCount?: number;
  messages?: GmailMessage[];
  onStarToggle?: (id: string, starred: boolean) => void;
  onMessageClick?: (message: GmailMessage) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMessages: GmailMessage[] = [
  {
    id: "1",
    sender: "Figma",
    subject: "Your team file was updated",
    preview: "Sarah edited the Design System file 2 hours ago…",
    time: "2:14 PM",
    unread: true,
    label: "Updates",
  },
  {
    id: "2",
    sender: "GitHub",
    subject: "[appui] PR #48 ready for review",
    preview: "bidyut-kundu requested your review on feat/widgets…",
    time: "11:02 AM",
    unread: true,
    starred: true,
    label: "Dev",
  },
  {
    id: "3",
    sender: "Notion",
    subject: "Weekly digest — 6 pages changed",
    preview: "See what your team updated this week in Product…",
    time: "Yesterday",
    unread: false,
  },
];

export const GmailInboxWidget = forwardRef<
  HTMLDivElement,
  GmailInboxWidgetProps
>(
  (
    {
      className,
      accountLabel = "bidyut.kundu@gmail.com",
      unreadCount = 2,
      messages = defaultMessages,
      onStarToggle,
      onMessageClick,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(messages);

    const toggleStar = (id: string) => {
      setItems((prev) =>
        prev.map((msg) => {
          if (msg.id !== id) return msg;
          const starred = !msg.starred;
          onStarToggle?.(id, starred);
          return { ...msg, starred };
        }),
      );
    };

    return (
      <div
        ref={ref}
        data-slot="gmail-inbox-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-neutral-200">
            <Mail size={16} className="text-red-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-neutral-900">Gmail</p>
            <p className="truncate text-[10px] text-neutral-400">
              {accountLabel}
            </p>
          </div>
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
            {unreadCount} new
          </span>
        </div>

        <div
          data-slot="gmail-inbox-widget-list"
          className="divide-y divide-neutral-50"
        >
          {items.map((msg) => (
            <div
              key={msg.id}
              data-slot="gmail-inbox-widget-item"
              className={cn(
                "flex gap-2 px-4 py-3 transition-colors hover:bg-neutral-50",
                msg.unread && "bg-blue-50/40",
              )}
            >
              <button
                type="button"
                aria-label={msg.starred ? "Unstar" : "Star"}
                onClick={() => toggleStar(msg.id)}
                className="mt-0.5 shrink-0 cursor-pointer text-neutral-300 transition-colors hover:text-amber-400"
              >
                <Star
                  size={14}
                  className={msg.starred ? "fill-amber-400 text-amber-400" : ""}
                />
              </button>

              <button
                type="button"
                onClick={() => onMessageClick?.(msg)}
                className="flex min-w-0 flex-1 cursor-pointer gap-2 text-left"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={cn(
                        "truncate text-[13px]",
                        msg.unread
                          ? "font-semibold text-neutral-900"
                          : "font-medium text-neutral-700",
                      )}
                    >
                      {msg.sender}
                    </span>
                    <span className="shrink-0 text-[10px] text-neutral-400">
                      {msg.time}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "truncate text-[12px]",
                      msg.unread
                        ? "font-medium text-neutral-800"
                        : "text-neutral-600",
                    )}
                  >
                    {msg.subject}
                  </p>
                  <p className="truncate text-[11px] text-neutral-400">
                    {msg.preview}
                  </p>
                  {msg.label && (
                    <span className="mt-1 inline-block rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-medium text-blue-700">
                      {msg.label}
                    </span>
                  )}
                </div>

                {msg.unread && (
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

GmailInboxWidget.displayName = "GmailInboxWidget";
