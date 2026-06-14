"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";

/**
 * WhatsApp-style chat bubble card with sent / delivered ticks.
 *
 * Replace demo messages with your own conversation.
 */
export type WhatsAppMessage = {
  id: string;
  text: string;
  sent?: boolean;
  time: string;
};

export type WhatsAppChatCardProps = {
  contact?: string;
  status?: string;
  messages?: WhatsAppMessage[];
} & ComponentPropsWithoutRef<"div">;

const defaultMessages: WhatsAppMessage[] = [
  {
    id: "1",
    text: "Hey! Did you see the new component drop?",
    time: "10:30",
  },
  {
    id: "2",
    text: "The GitHub code block card is perfect for docs.",
    sent: true,
    time: "10:31",
  },
  {
    id: "3",
    text: "On it — adding Discord + WhatsApp cards now.",
    sent: true,
    time: "10:32",
  },
];

export const WhatsAppChatCard = forwardRef<
  HTMLDivElement,
  WhatsAppChatCardProps
>(
  (
    {
      className,
      contact = "Design Team",
      status = "online",
      messages = defaultMessages,
      ...props
    },
    ref,
  ) => {
    const [draft, setDraft] = useState("");
    const [items, setItems] = useState(messages);

    const send = () => {
      if (!draft.trim()) return;
      setItems((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          text: draft.trim(),
          sent: true,
          time: "Now",
        },
      ]);
      setDraft("");
    };

    return (
      <div
        ref={ref}
        data-slot="whatsapp-chat-card"
        className={cn(
          "w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="bg-[#075E54] px-4 py-3 text-white">
          <p className="text-sm font-semibold">{contact}</p>
          <p className="text-[10px] text-white/70">{status}</p>
        </div>

        <div
          className="space-y-2 px-3 py-3"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.4'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          {items.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "max-w-[85%] rounded-xl px-3 py-2 shadow-sm",
                msg.sent
                  ? "ml-auto rounded-br-sm bg-[#DCF8C6]"
                  : "rounded-bl-sm bg-white",
              )}
            >
              <p className="text-[12px] leading-relaxed text-neutral-800">
                {msg.text}
              </p>
              <div className="mt-0.5 flex items-center justify-end gap-1">
                <span className="text-[9px] text-neutral-500">{msg.time}</span>
                {msg.sent && <Check size={10} className="text-sky-500" />}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 border-t border-neutral-100 bg-white px-3 py-2">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message"
            aria-label="WhatsApp message"
            className="flex-1 rounded-full bg-neutral-100 px-3 py-2 text-[12px] outline-none"
          />
          <button
            type="button"
            onClick={send}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-sm text-white"
          >
            →
          </button>
        </div>
      </div>
    );
  },
);

WhatsAppChatCard.displayName = "WhatsAppChatCard";
