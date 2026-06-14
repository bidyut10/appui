"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Send } from "@/icons/Send";
import { X } from "@/icons/X";
import { File } from "@/icons/File";

/**
 * Floating email compose widget — To, Subject, body, and send.
 *
 * Replace the demo fields with your own compose logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type EmailComposeWidgetProps = {
  defaultTo?: string;
  defaultSubject?: string;
  defaultBody?: string;
  sendLabel?: string;
  onSend?: (payload: { to: string; subject: string; body: string }) => void;
  onDiscard?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const EmailComposeWidget = forwardRef<
  HTMLDivElement,
  EmailComposeWidgetProps
>(
  (
    {
      className,
      defaultTo = "",
      defaultSubject = "",
      defaultBody = "",
      sendLabel = "Send",
      onSend,
      onDiscard,
      ...props
    },
    ref,
  ) => {
    const [to, setTo] = useState(defaultTo);
    const [subject, setSubject] = useState(defaultSubject);
    const [body, setBody] = useState(defaultBody);
    const [sent, setSent] = useState(false);

    const handleSend = () => {
      if (!to.trim() || !body.trim()) return;
      onSend?.({ to, subject, body });
      setSent(true);
      window.setTimeout(() => setSent(false), 2000);
    };

    return (
      <div
        ref={ref}
        data-slot="email-compose-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <p className="text-sm font-semibold text-neutral-900">New message</p>
          <button
            type="button"
            aria-label="Discard draft"
            onClick={onDiscard}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-600"
          >
            <X size={14} />
          </button>
        </div>

        <div className="space-y-0 divide-y divide-neutral-100 px-4">
          <div className="flex items-center gap-2 py-2">
            <span className="w-14 shrink-0 text-[11px] font-medium text-neutral-400">
              To
            </span>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="recipient@email.com"
              aria-label="Recipient email"
              data-slot="email-compose-widget-to"
              className="flex-1 bg-transparent text-[13px] text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </div>
          <div className="flex items-center gap-2 py-2">
            <span className="w-14 shrink-0 text-[11px] font-medium text-neutral-400">
              Subject
            </span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
              aria-label="Email subject"
              data-slot="email-compose-widget-subject"
              className="flex-1 bg-transparent text-[13px] text-neutral-900 outline-none placeholder:text-neutral-300"
            />
          </div>
        </div>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message…"
          aria-label="Email body"
          rows={5}
          data-slot="email-compose-widget-body"
          className="scroll-hover w-full resize-none border-0 bg-white px-4 py-3 text-[13px] leading-relaxed text-neutral-800 outline-none placeholder:text-neutral-300"
        />

        <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2.5">
          <button
            type="button"
            aria-label="Attach file"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100"
          >
            <File size={16} />
          </button>

          <button
            type="button"
            onClick={handleSend}
            disabled={!to.trim() || !body.trim()}
            data-slot="email-compose-widget-send"
            className={cn(
              "flex cursor-pointer items-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-semibold transition-all active:scale-95",
              sent
                ? "bg-emerald-500 text-white"
                : "bg-neutral-900 text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40",
            )}
          >
            <Send size={12} />
            {sent ? "Sent!" : sendLabel}
          </button>
        </div>
      </div>
    );
  },
);

EmailComposeWidget.displayName = "EmailComposeWidget";
