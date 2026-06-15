"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Send } from "@/icons/Send";
import { Discord } from "@/icons/Discord";

export type DiscordMessage = {
  id: string;
  author: string;
  avatar?: string;
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
    avatar: "/boy.png",
    content: "The new GitHub repo card looks clean — shipping tonight?",
    time: "10:41 AM",
    roleColor: "text-violet-400",
  },
  {
    id: "2",
    author: "Marcus",
    avatar: "/boy.png",
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
          avatar: "/boy.png",
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
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2.5 border-b border-neutral-100 px-4 py-3">
          <Discord size={15} color="#5865F2" className="shrink-0" />
          <p className="min-w-0 flex-1 truncate text-sm text-neutral-800">
            <span className="text-neutral-300">·</span>
            <span className="text-[11px] text-neutral-400">{server}</span>
          </p>
        </div>

        <div className="max-h-40 [scrollbar-width:none] space-y-3 overflow-y-auto px-3 py-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {items.map((msg) => (
            <div key={msg.id} className="flex items-start gap-2.5">
              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                <Image
                  src={msg.avatar ?? "/boy.png"}
                  alt={msg.author}
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span
                    className={cn(
                      "text-[12px] font-semibold",
                      msg.roleColor ?? "text-neutral-800",
                    )}
                  >
                    {msg.author}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {msg.time}
                  </span>
                </div>
                <p className="mt-0.5 text-[12px] leading-relaxed text-neutral-700">
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
