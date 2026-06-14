"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

import { Send } from "@/icons/Send";

export type SlackMessage = {
  id: string;
  author: string;
  avatar?: StaticImageData | string;
  text: string;
  time: string;
};

/**
 * Slack channel preview widget with quick reply.
 *
 * Replace the demo channel and messages with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type SlackChannelWidgetProps = {
  channelName?: string;
  memberCount?: number;
  messages?: SlackMessage[];
  onSend?: (text: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMessages: SlackMessage[] = [
  {
    id: "1",
    author: "Sarah",
    avatar: profileImage,
    text: "Shipped the new inbox widgets — ready for review",
    time: "10:42 AM",
  },
  {
    id: "2",
    author: "Marcus",
    avatar: profileImage,
    text: "Nice! I'll add them to the showcase page today.",
    time: "10:45 AM",
  },
];

export const SlackChannelWidget = forwardRef<
  HTMLDivElement,
  SlackChannelWidgetProps
>(
  (
    {
      className,
      channelName = "design-system",
      memberCount = 12,
      messages = defaultMessages,
      onSend,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(messages);
    const [draft, setDraft] = useState("");

    const send = () => {
      if (!draft.trim()) return;
      const msg: SlackMessage = {
        id: String(Date.now()),
        author: "You",
        avatar: profileImage,
        text: draft.trim(),
        time: "Now",
      };
      setItems((prev) => [...prev, msg]);
      onSend?.(draft.trim());
      setDraft("");
    };

    return (
      <div
        ref={ref}
        data-slot="slack-channel-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-[#4A154B]/5 px-4 py-2.5">
          <span className="text-base font-bold text-[#4A154B]">#</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-neutral-900">{channelName}</p>
            <p className="text-[10px] text-neutral-400">{memberCount} members</p>
          </div>
        </div>

        <div
          data-slot="slack-channel-widget-messages"
          className="max-h-40 space-y-3 scroll-hover overflow-y-auto px-4 py-3"
        >
          {items.map((msg) => (
            <div key={msg.id} className="flex gap-2">
              <Image
                src={msg.avatar ?? profileImage}
                alt={msg.author}
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 rounded-lg object-cover"
              />
              <div>
                <span className="text-[12px] font-bold text-neutral-900">
                  {msg.author}
                </span>
                <span className="ml-2 text-[10px] text-neutral-400">
                  {msg.time}
                </span>
                <p className="text-[12px] leading-relaxed text-neutral-600">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-neutral-100 px-3 py-2">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={`Message #${channelName}`}
            aria-label="Slack message"
            data-slot="slack-channel-widget-input"
            className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[12px] outline-none focus:border-[#4A154B]/30 focus:bg-white"
          />
          <button
            type="button"
            onClick={send}
            aria-label="Send message"
            disabled={!draft.trim()}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#4A154B] text-white disabled:opacity-40"
          >
            <Send size={12} />
          </button>
        </div>
      </div>
    );
  },
);

SlackChannelWidget.displayName = "SlackChannelWidget";
