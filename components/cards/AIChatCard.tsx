"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";
import { ClaudeAI } from "@/icons/ClaudeAI";
import { Send } from "@/icons/Send";

const REPLY =
  "I can help you build a folder card with drag-and-drop, file previews, and storage quota. Want me to scaffold the component structure?";

export type AIChatCardProps = {
  title?: string;
  prompt?: string;
} & ComponentPropsWithoutRef<"div">;

export const AIChatCard = forwardRef<HTMLDivElement, AIChatCardProps>(
  (
    {
      className,
      title = "Assistant",
      prompt = "Design a file manager UI with folders and previews",
      ...props
    },
    ref,
  ) => {
    const [reply, setReply] = useState("");
    const [typing, setTyping] = useState(false);

    useEffect(() => {
      setTyping(true);
      setReply("");
      let i = 0;
      const timer = window.setInterval(() => {
        i += 1;
        setReply(REPLY.slice(0, i));
        if (i >= REPLY.length) {
          setTyping(false);
          window.clearInterval(timer);
        }
      }, 18);
      return () => window.clearInterval(timer);
    }, []);

    return (
      <div
        ref={ref}
        data-slot="ai-chat-card"
        className={cn(
          "flex h-80 w-64 flex-col rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
            <ClaudeAI size={16} />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">{title}</p>
            <p className="text-[10px] text-emerald-600">Online</p>
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-hidden p-4">
          <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-neutral-900 px-3 py-2 text-[11px] leading-relaxed text-white">
            {prompt}
          </div>
          <div className="max-w-[95%] rounded-2xl rounded-bl-sm bg-neutral-50 px-3 py-2 text-[11px] leading-relaxed text-neutral-700">
            {reply}
            {typing && <span className="ml-0.5 inline-block h-3 w-0.5 animate-pulse bg-neutral-400" />}
          </div>
        </div>

        <div className="border-t border-neutral-100 p-3">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2">
            <input
              type="text"
              placeholder="Ask anything..."
              className="min-w-0 flex-1 bg-transparent text-xs text-neutral-800 outline-none placeholder:text-neutral-400"
            />
            <button type="button" className="text-neutral-700">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

AIChatCard.displayName = "AIChatCard";
