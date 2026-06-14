"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

import { Star } from "@/icons/Star";
import { Gmail } from "@/icons/Gmail";

export type GmailMessage = {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  starred?: boolean;
  avatar?: StaticImageData | string;
};

export type GmailInboxWidgetProps = {
  accountLabel?: string;
  accountAvatar?: StaticImageData | string;
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
  },
  {
    id: "2",
    sender: "GitHub",
    subject: "[appui] PR #48 ready for review",
    preview: "bidyut-kundu requested your review on feat/widgets…",
    time: "11:02 AM",
    unread: true,
    starred: true,
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

const BRAND_AVATARS: Record<string, { bg: string; text: string }> = {
  Figma: { bg: "bg-[#7B61FF]", text: "text-white" },
  GitHub: { bg: "bg-[#24292F]", text: "text-white" },
  Notion: { bg: "bg-stone-500", text: "text-white" },
};

const AVATAR_PALETTE = [
  { bg: "bg-rose-500", text: "text-white" },
  { bg: "bg-orange-500", text: "text-white" },
  { bg: "bg-emerald-500", text: "text-white" },
  { bg: "bg-sky-500", text: "text-white" },
  { bg: "bg-violet-500", text: "text-white" },
  { bg: "bg-fuchsia-500", text: "text-white" },
];

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
      <div className="mt-0.5 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-neutral-100">
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
        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
        colors.bg,
        colors.text,
      )}
    >
      {sender.charAt(0).toUpperCase()}
    </div>
  );
}

export const GmailInboxWidget = forwardRef<
  HTMLDivElement,
  GmailInboxWidgetProps
>(
  (
    {
      className,
      accountLabel = "bidyut.kundu@gmail.com",
      accountAvatar = profileImage,
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
          "w-sm overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3">
          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100">
            <Image
              src={accountAvatar}
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <Gmail size={14} className="shrink-0 text-[#EA4335]" />
              <p className="text-sm font-semibold text-neutral-900">Inbox</p>
              {unreadCount > 0 && (
                <span className="rounded-full bg-neutral-100 px-1.5 py-px text-[10px] font-medium tabular-nums text-neutral-500">
                  {unreadCount}
                </span>
              )}
            </div>
            <p className="mt-0.5 truncate text-[10px] text-neutral-400">
              {accountLabel}
            </p>
          </div>
        </div>

        <div
          data-slot="gmail-inbox-widget-list"
          className="divide-y divide-neutral-100 px-4 py-1"
        >
          {items.map((msg) => (
            <div
              key={msg.id}
              data-slot="gmail-inbox-widget-item"
              className="grid grid-cols-[2rem_1fr_auto] items-start gap-x-3 py-2.5 transition-colors hover:bg-neutral-50/80"
            >
              <SenderAvatar sender={msg.sender} avatar={msg.avatar} />

              <button
                type="button"
                onClick={() => onMessageClick?.(msg)}
                className="min-w-0 cursor-pointer text-left"
              >
                <p
                  className={cn(
                    "truncate text-[13px] leading-4",
                    msg.unread
                      ? "font-semibold text-neutral-900"
                      : "font-medium text-neutral-600",
                  )}
                >
                  {msg.sender}
                </p>
                <p
                  className={cn(
                    "mt-0.5 truncate text-[12px] leading-4",
                    msg.unread
                      ? "font-medium text-neutral-800"
                      : "text-neutral-500",
                  )}
                >
                  {msg.subject}
                </p>
                <p className="mt-0.5 truncate text-[11px] leading-4 text-neutral-400">
                  {msg.preview}
                </p>
              </button>

              <div className="flex w-10 shrink-0 flex-col items-end gap-1.5 pt-0.5">
                <span className="text-[10px] leading-none tabular-nums text-neutral-400">
                  {msg.time}
                </span>
                <button
                  type="button"
                  aria-label={msg.starred ? "Unstar" : "Star"}
                  onClick={() => toggleStar(msg.id)}
                  className="cursor-pointer text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <Star
                    size={14}
                    className={
                      msg.starred ? "fill-amber-400 text-amber-400" : undefined
                    }
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

GmailInboxWidget.displayName = "GmailInboxWidget";
