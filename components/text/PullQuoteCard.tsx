import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Pull Quote Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type PullQuoteCardProps = {
  quote?: string;
  source?: string;
  page?: string;
} & ComponentPropsWithoutRef<"div">;

export const PullQuoteCard = forwardRef<HTMLDivElement, PullQuoteCardProps>(
  (
    {
      className,
      quote = "Typography is the craft of endowing human language with a durable visual form.",
      source = "Robert Bringhurst",
      page = "p. 17",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="pull-quote-card"
      className={cn(
        "w-sm bg-white px-5 py-6 font-serif sm:px-6",
        className,
      )}
      {...props}
    >
      <div className="flex gap-4">
        <div className="w-1 shrink-0 bg-teal-600" />
        <blockquote className="text-xl leading-snug font-medium text-neutral-800 italic sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
        <cite className="font-sans text-sm font-semibold text-neutral-900 not-italic">
          — {source}
        </cite>
        <span className="font-mono text-[10px] text-neutral-400">{page}</span>
      </div>
    </div>
  ),
);

PullQuoteCard.displayName = "PullQuoteCard";
