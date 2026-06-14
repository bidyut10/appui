"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

import { Send } from "@/icons/Send";

export type DiscordMessage = {
  id: string;
  author: string;
  avatar?: StaticImageData | string;
  content: string;
  time: string;
  roleColor?: string;
};

/**
 * Discord-style chat card with channel header and messages.
 *
 * Replace demo messages with your own.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type DiscordChatCardProps = {
  channel?: string;
  server?: string;
  messages?: DiscordMessage[];
  onSend?: (text: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMessages: DiscordMessage[] = [
  {
    id: "1",
    author: "Sarah",
    avatar: profileImage,
    content: "The new GitHub repo card looks clean — shipping tonight?",
    time: "10:41 AM",
    roleColor: "text-violet-400",
  },
  {
    id: "2",
    author: "Marcus",
    avatar: profileImage,
    content: "Yep, PR is ready. Typewriter widget is my favorite.",
    time: "10:43 AM",
    roleColor: "text-teal-400",
  },
];

export const DiscordChatCard = forwardRef<HTMLDivElement, DiscordChatCardProps>(
  (
    {
      className,
      channel = "design-system",
      server = "OpenSource UI",
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
      setItems((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          author: "You",
          avatar: profileImage,
          content: draft.trim(),
          time: "Now",
          roleColor: "text-blue-400",
        },
      ]);
      onSend?.(draft.trim());
      setDraft("");
    };

    return (
      <div
        ref={ref}
        data-slot="discord-chat-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="border-b border-neutral-100 bg-[#5865F2]/5 px-4 py-2.5">
          <p className="text-[10px] font-medium text-neutral-500">{server}</p>
          <p className="text-sm font-bold text-neutral-900">
            <span className="text-neutral-400"># </span>
            {channel}
          </p>
        </div>

        <div className="scroll-hover max-h-40 space-y-3 overflow-y-auto px-3 py-3">
          {items.map((msg) => (
            <div key={msg.id} className="flex gap-2">
              <Image
                src={msg.avatar ?? profileImage}
                alt={msg.author}
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 rounded-full"
              />
              <div>
                <span
                  className={cn(
                    "text-[12px] font-semibold",
                    msg.roleColor ?? "text-neutral-800",
                  )}
                >
                  {msg.author}
                </span>
                <span className="ml-2 text-[10px] text-neutral-400">
                  {msg.time}
                </span>
                <p className="text-[12px] leading-relaxed text-neutral-700">
                  {msg.content}
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
            placeholder={`Message #${channel}`}
            aria-label="Discord message"
            className="flex-1 rounded-lg bg-neutral-100 px-3 py-2 text-[12px] outline-none focus:bg-neutral-50"
          />
          <button
            type="button"
            onClick={send}
            aria-label="Send"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-[#5865F2] text-white"
          >
            <Send size={12} />
          </button>
        </div>
      </div>
    );
  },
);

DiscordChatCard.displayName = "DiscordChatCard";
