"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

import { Send } from "@/icons/Send";

/*
| Modern chat widget card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo messages, avatar and title
| with your own support agent, AI assistant, SaaS chat,
| customer support, or community chat experience.
*/

export type ChatMessage = {
  from: "user" | "bot";
  text: string;
};

export type ChatWidgetProps = {
  title?: string;
  subtitle?: string;

  avatar?: string;
  messages?: ChatMessage[];

  placeholder?: string;
} & ComponentPropsWithoutRef<"div">;

export const ChatWidget = forwardRef<HTMLDivElement, ChatWidgetProps>(
  (
    {
      className,

      title = "Support Assistant",
      subtitle = "Typically replies instantly",

      messages = [
        {
          from: "bot",
          text: "Hey! How can I help you today?",
        },
        {
          from: "user",
          text: "Can you show me the pricing plans?",
        },
        {
          from: "bot",
          text: "We offer Free, Pro, and Enterprise plans.",
        },
      ],

      placeholder = "Type a message...",

      ...props
    },
    ref,
  ) => {
    const [input, setInput] = useState("");

    return (
      <div
        ref={ref}
        data-slot="chat-widget"
        className={cn(
          "group flex w-80 flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          data-slot="chat-widget-header"
          className="relative overflow-hidden border-b border-neutral-100 bg-neutral-950 px-4 py-4"
        >
          <div className="absolute inset-0 bg-neutral-900" />

          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
                <Image
                  src={profileImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-neutral-950 bg-emerald-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">{title}</p>

              <p className="mt-0.5 text-[11px] text-neutral-400">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          data-slot="chat-widget-messages"
          className="flex h-72 flex-1 flex-col gap-3 overflow-y-auto bg-linear-to-b from-neutral-50 to-white p-4"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                message.from === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed transition-all",
                  message.from === "user"
                    ? "rounded-br-md bg-amber-400 text-black"
                    : "rounded-bl-md border border-neutral-200 bg-white text-neutral-700",
                )}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Typing */}
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-3 py-2">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400"
                  style={{
                    animationDelay: `${dot * 150}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div
          data-slot="chat-widget-input"
          className="border-t border-neutral-100 bg-white p-3"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="h-10 flex-1 bg-transparent px-3 text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
            />

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-neutral-800 text-white transition-all hover:scale-105 hover:bg-black active:scale-95"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

ChatWidget.displayName = "ChatWidget";
