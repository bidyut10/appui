"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Edit } from "@/icons/Edit";

/**
 * Premium journal writing card with lined paper and word count.
 *
 * Replace demo content with your own writing flow.
 */
export type JournalWritingCardProps = {
  title?: string;
  date?: string;
  placeholder?: string;
  defaultText?: string;
  onChange?: (text: string) => void;
} & ComponentPropsWithoutRef<"div">;

export const JournalWritingCard = forwardRef<
  HTMLDivElement,
  JournalWritingCardProps
>(
  (
    {
      className,
      title = "Morning pages",
      date = "Saturday, Jun 6",
      placeholder = "Write freely. No edits, no judgment…",
      defaultText = "",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [text, setText] = useState(defaultText);
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;

    return (
      <div
        ref={ref}
        data-slot="journal-writing-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50/80 px-4 py-3">
          <div>
            <p className="text-sm font-bold text-neutral-900">{title}</p>
            <p className="text-[10px] text-neutral-400">{date}</p>
          </div>
          <Edit size={14} className="text-neutral-400" />
        </div>

        <div
          className="relative min-h-[200px] bg-white"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 27px, #f0f0f0 27px, #f0f0f0 28px)",
            backgroundPosition: "0 12px",
          }}
        >
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              onChange?.(e.target.value);
            }}
            placeholder={placeholder}
            aria-label="Journal entry"
            data-slot="journal-writing-card-input"
            className="scroll-hover relative z-10 h-[200px] w-full resize-none bg-transparent px-4 pt-3 pb-2 font-serif text-[14px] leading-7 text-neutral-800 outline-none placeholder:text-neutral-300"
          />
          <div className="absolute top-0 left-6 h-full w-px bg-rose-200/80" />
        </div>

        <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2">
          <span className="text-[10px] text-neutral-400">{words} words</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            Auto-saved
          </span>
        </div>
      </div>
    );
  },
);

JournalWritingCard.displayName = "JournalWritingCard";
