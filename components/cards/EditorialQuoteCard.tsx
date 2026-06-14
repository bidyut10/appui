import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { QuoteRight } from "@/icons/QuoteRight";

/**
 * Editorial magazine quote card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type EditorialQuoteCardProps = {
  quote?: string;
  author?: string;
  role?: string;
  issue?: string;
  accentWord?: string;
} & ComponentPropsWithoutRef<"div">;

export const EditorialQuoteCard = forwardRef<
  HTMLDivElement,
  EditorialQuoteCardProps
>(
  (
    {
      className,
      quote = "Good design is as little design as possible — but every pixel must earn its place.",
      author = "Dieter Rams",
      role = "Industrial Designer",
      issue = "Issue 06 · Design",
      accentWord = "pixel",
      ...props
    },
    ref,
  ) => {
    const parts = quote.split(new RegExp(`(${accentWord})`, "i"));

    return (
      <div
        ref={ref}
        data-slot="editorial-quote-card"
        className={cn(
          "w-sm border-2 border-neutral-900 bg-[#f6f2eb] p-5 font-sans sm:p-6",
          className,
        )}
        {...props}
      >
        <div
          data-slot="editorial-quote-card-meta"
          className="mb-4 flex items-center justify-between border-b-2 border-neutral-900 pb-3"
        >
          <span className="font-mono text-[10px] font-bold tracking-widest text-neutral-900 uppercase">
            {issue}
          </span>
          <QuoteRight size={18} className="text-neutral-900" />
        </div>

        <blockquote
          data-slot="editorial-quote-card-quote"
          className="text-lg leading-snug font-black tracking-tight text-neutral-900 sm:text-xl"
        >
          {parts.map((part, index) =>
            part.toLowerCase() === accentWord.toLowerCase() ? (
              <span key={index} className="bg-neutral-900 px-1 text-[#f6f2eb]">
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            ),
          )}
        </blockquote>

        <div
          data-slot="editorial-quote-card-author"
          className="mt-5 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-neutral-900" />
          <div className="text-right">
            <p className="text-sm font-bold text-neutral-900">{author}</p>
            <p className="text-[11px] text-neutral-500">{role}</p>
          </div>
        </div>
      </div>
    );
  },
);

EditorialQuoteCard.displayName = "EditorialQuoteCard";
