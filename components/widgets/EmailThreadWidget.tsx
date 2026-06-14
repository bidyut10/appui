"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Mail } from "@/icons/Mail";
import { Star } from "@/icons/Star";

export type EmailThreadMessage = {
  id: string;
  from: string;
  preview: string;
  time: string;
  unread?: boolean;
};

/**
 * Email thread list widget — conversation-style inbox view.
 *
 * Replace demo threads with your own mail data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type EmailThreadWidgetProps = {
  account?: string;
  threads?: EmailThreadMessage[];
  onSelect?: (thread: EmailThreadMessage) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultThreads: EmailThreadMessage[] = [
  {
    id: "1",
    from: "Sarah Chen",
    preview: "Re: Design review — looks great, merge when ready.",
    time: "10:42 AM",
    unread: true,
  },
  {
    id: "2",
    from: "GitHub",
    preview: "[opensourceui] PR #142 approved by marcus-webb",
    time: "9:15 AM",
    unread: true,
  },
  {
    id: "3",
    from: "Notion Team",
    preview: "Your weekly workspace digest is ready.",
    time: "Yesterday",
  },
];

export const EmailThreadWidget = forwardRef<
  HTMLDivElement,
  EmailThreadWidgetProps
>(
  (
    {
      className,
      account = "Inbox · 2 unread",
      threads = defaultThreads,
      onSelect,
      ...props
    },
    ref,
  ) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [starred, setStarred] = useState<Record<string, boolean>>({});

    return (
      <div
        ref={ref}
        data-slot="email-thread-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
          <Mail size={16} className="text-neutral-600" />
          <p className="text-sm font-bold text-neutral-900">Mail threads</p>
          <span className="ml-auto text-[10px] text-neutral-400">{account}</span>
        </div>

        <div className="divide-y divide-neutral-50">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className={cn(
                "flex gap-2 px-4 py-3 transition-colors hover:bg-neutral-50",
                thread.unread && "bg-sky-50/30",
                activeId === thread.id && "bg-teal-50/50",
              )}
            >
              <button
                type="button"
                aria-label={starred[thread.id] ? "Unstar" : "Star thread"}
                onClick={() =>
                  setStarred((prev) => ({
                    ...prev,
                    [thread.id]: !prev[thread.id],
                  }))
                }
                className="mt-0.5 shrink-0 cursor-pointer text-neutral-300 hover:text-amber-400"
              >
                <Star
                  size={14}
                  className={
                    starred[thread.id] ? "fill-amber-400 text-amber-400" : ""
                  }
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveId(thread.id);
                  onSelect?.(thread);
                }}
                className="min-w-0 flex-1 cursor-pointer text-left"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className={cn(
                      "truncate text-[13px]",
                      thread.unread
                        ? "font-semibold text-neutral-900"
                        : "font-medium text-neutral-700",
                    )}
                  >
                    {thread.from}
                  </span>
                  <span className="shrink-0 text-[10px] text-neutral-400">
                    {thread.time}
                  </span>
                </div>
                <p className="truncate text-[11px] text-neutral-500">
                  {thread.preview}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

EmailThreadWidget.displayName = "EmailThreadWidget";
