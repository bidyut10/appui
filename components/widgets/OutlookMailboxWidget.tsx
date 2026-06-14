"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Mail } from "@/icons/Mail";
import { Pin } from "@/icons/Pin";
import { File } from "@/icons/File";

export type OutlookMessage = {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  hasAttachment?: boolean;
  pinned?: boolean;
};

/**
 * Outlook-style mailbox with Focused / Other tabs.
 *
 * Replace the demo messages with your own mailbox data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type OutlookMailboxWidgetProps = {
  accountName?: string;
  focusedMessages?: OutlookMessage[];
  otherMessages?: OutlookMessage[];
  onTabChange?: (tab: "focused" | "other") => void;
  onMessageClick?: (message: OutlookMessage) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultFocused: OutlookMessage[] = [
  {
    id: "1",
    sender: "Microsoft Teams",
    subject: "Meeting notes: Q2 planning",
    preview: "Action items from today's sync are attached…",
    time: "1:45 PM",
    hasAttachment: true,
    pinned: true,
  },
  {
    id: "2",
    sender: "HR Portal",
    subject: "Benefits enrollment opens Monday",
    preview: "Review your health plan options before Jun 15…",
    time: "10:20 AM",
  },
];

const defaultOther: OutlookMessage[] = [
  {
    id: "3",
    sender: "Newsletter",
    subject: "Weekly design inspiration",
    preview: "10 landing pages we loved this week…",
    time: "Yesterday",
  },
];

export const OutlookMailboxWidget = forwardRef<
  HTMLDivElement,
  OutlookMailboxWidgetProps
>(
  (
    {
      className,
      accountName = "Work — Outlook",
      focusedMessages = defaultFocused,
      otherMessages = defaultOther,
      onTabChange,
      onMessageClick,
      ...props
    },
    ref,
  ) => {
    const [tab, setTab] = useState<"focused" | "other">("focused");

    const messages = tab === "focused" ? focusedMessages : otherMessages;

    const switchTab = (next: "focused" | "other") => {
      setTab(next);
      onTabChange?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="outlook-mailbox-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="border-b border-neutral-100 bg-[#0078D4]/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0078D4] text-white">
              <Mail size={15} />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">Outlook</p>
              <p className="text-[10px] text-neutral-500">{accountName}</p>
            </div>
          </div>

          <div className="mt-3 flex gap-1 rounded-lg bg-neutral-100 p-0.5">
            {(["focused", "other"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => switchTab(key)}
                aria-pressed={tab === key}
                data-slot="outlook-mailbox-widget-tab"
                className={cn(
                  "flex-1 cursor-pointer rounded-md py-1.5 text-[11px] font-semibold capitalize transition-all",
                  tab === key
                    ? "bg-white text-[#0078D4] shadow-sm"
                    : "text-neutral-500 hover:text-neutral-700",
                )}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-neutral-50">
          {messages.map((msg) => (
            <button
              key={msg.id}
              type="button"
              onClick={() => onMessageClick?.(msg)}
              data-slot="outlook-mailbox-widget-item"
              className="flex w-full cursor-pointer gap-3 px-4 py-3 text-left transition-colors hover:bg-[#0078D4]/5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0078D4]/10 text-[11px] font-bold text-[#0078D4]">
                {msg.sender.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  {msg.pinned && (
                    <Pin size={10} className="shrink-0 text-[#0078D4]" />
                  )}
                  <span className="truncate text-[13px] font-semibold text-neutral-900">
                    {msg.sender}
                  </span>
                  <span className="ml-auto shrink-0 text-[10px] text-neutral-400">
                    {msg.time}
                  </span>
                </div>
                <p className="truncate text-[12px] font-medium text-neutral-700">
                  {msg.subject}
                </p>
                <p className="truncate text-[11px] text-neutral-400">
                  {msg.preview}
                </p>
              </div>
              {msg.hasAttachment && (
                <File size={12} className="mt-1 shrink-0 text-neutral-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  },
);

OutlookMailboxWidget.displayName = "OutlookMailboxWidget";
