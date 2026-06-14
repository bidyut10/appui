"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Microsoft } from "@/icons/Microsoft";
import { Pin } from "@/icons/Pin";
import { File } from "@/icons/File";

export type OutlookMessage = {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  hasAttachment?: boolean;
  pinned?: boolean;
  avatar?: StaticImageData | string;
};

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
    unread: true,
    hasAttachment: true,
    pinned: true,
  },
  {
    id: "2",
    sender: "HR Portal",
    subject: "Benefits enrollment opens Monday",
    preview: "Review your health plan options before Jun 15…",
    time: "10:20 AM",
    unread: true,
  },
];

const defaultOther: OutlookMessage[] = [
  {
    id: "3",
    sender: "Newsletter",
    subject: "Weekly design inspiration",
    preview: "10 landing pages we loved this week…",
    time: "Yesterday",
    unread: false,
  },
];

const BRAND_AVATARS: Record<string, { bg: string; text: string }> = {
  "Microsoft Teams": { bg: "bg-[#0078D4]", text: "text-white" },
  "HR Portal": { bg: "bg-emerald-600", text: "text-white" },
  Newsletter: { bg: "bg-stone-500", text: "text-white" },
};

const AVATAR_PALETTE = [
  { bg: "bg-rose-500", text: "text-white" },
  { bg: "bg-orange-500", text: "text-white" },
  { bg: "bg-emerald-500", text: "text-white" },
  { bg: "bg-sky-500", text: "text-white" },
  { bg: "bg-violet-500", text: "text-white" },
  { bg: "bg-fuchsia-500", text: "text-white" },
];

const ROW_SLOT_HEIGHT = "4.625rem";

function getSenderColors(sender: string) {
  if (BRAND_AVATARS[sender]) return BRAND_AVATARS[sender];

  const hash = [...sender].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
}

function SenderAvatar({
  sender,
  avatar,
}: {
  sender: string;
  avatar?: StaticImageData | string;
}) {
  if (avatar) {
    return (
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-md bg-neutral-100">
        <Image
          src={avatar}
          alt={sender}
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const colors = getSenderColors(sender);

  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold",
        colors.bg,
        colors.text,
      )}
    >
      {sender.charAt(0).toUpperCase()}
    </div>
  );
}

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
    const unreadCount = focusedMessages.filter((msg) => msg.unread).length;
    const slotCount = Math.max(focusedMessages.length, otherMessages.length, 1);

    const switchTab = (next: "focused" | "other") => {
      setTab(next);
      onTabChange?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="outlook-mailbox-widget"
        className={cn(
          "w-sm overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0078D4] text-white">
              <Microsoft size={16} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-neutral-900">
                Outlook
              </p>
              <p className="truncate text-[10px] text-neutral-400">
                {accountName}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <span className="shrink-0 text-[11px] font-semibold text-[#0078D4]">
              {unreadCount} new
            </span>
          )}
        </div>

        <div className="flex border-b border-neutral-100 px-4">
          {(["focused", "other"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => switchTab(key)}
              aria-pressed={tab === key}
              data-slot="outlook-mailbox-widget-tab"
              className={cn(
                "cursor-pointer border-b-2 px-3 py-2.5 text-[11px] font-semibold capitalize transition-colors",
                tab === key
                  ? "border-[#0078D4] text-[#0078D4]"
                  : "border-transparent text-neutral-400 hover:text-neutral-600",
              )}
            >
              {key}
            </button>
          ))}
        </div>

        <div
          data-slot="outlook-mailbox-widget-list"
          className="px-3 py-2"
          style={{
            minHeight: `calc(${slotCount} * ${ROW_SLOT_HEIGHT} + 1rem)`,
          }}
        >
          {messages.map((msg) => (
            <button
              key={msg.id}
              type="button"
              onClick={() => onMessageClick?.(msg)}
              data-slot="outlook-mailbox-widget-item"
              style={{ minHeight: ROW_SLOT_HEIGHT }}
              className={cn(
                "flex w-full cursor-pointer items-start gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-[#0078D4]/5",
                msg.unread && "bg-[#0078D4]/[0.03]",
              )}
            >
              <SenderAvatar sender={msg.sender} avatar={msg.avatar} />

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="min-w-0 truncate text-[12px] leading-4">
                    <span
                      className={cn(
                        msg.unread
                          ? "font-semibold text-neutral-900"
                          : "font-medium text-neutral-600",
                      )}
                    >
                      {msg.sender}
                    </span>
                    <span className="mx-1 text-neutral-300">·</span>
                    <span
                      className={cn(
                        msg.unread ? "text-neutral-800" : "text-neutral-500",
                      )}
                    >
                      {msg.subject}
                    </span>
                  </p>
                  <span className="shrink-0 text-[10px] leading-4 tabular-nums text-neutral-400">
                    {msg.time}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="truncate text-[11px] leading-4 text-neutral-400">
                    {msg.preview}
                  </p>
                  <div className="flex shrink-0 items-center gap-1">
                    {msg.pinned && (
                      <Pin size={11} className="text-[#0078D4]" />
                    )}
                    {msg.hasAttachment && (
                      <File size={11} className="text-neutral-300" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  },
);

OutlookMailboxWidget.displayName = "OutlookMailboxWidget";
