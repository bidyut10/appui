import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Lined Journal Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type LinedJournalCardProps = {
  date?: string;
  lines?: string[];
} & ComponentPropsWithoutRef<"div">;

const defaultLines = [
  "Wireframe the checkout flow",
  "Ship filter dropdown v2",
  "Review typography scale",
];

export const LinedJournalCard = forwardRef<
  HTMLDivElement,
  LinedJournalCardProps
>(({ className, date = "Jun 6", lines = defaultLines, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="lined-journal-card"
    className={cn("w-xs font-sans", className)}
    {...props}
  >
    <div
      className="relative rounded-sm border border-blue-200/60 bg-[#fafcff] px-5 py-4 shadow-md"
      style={{
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 27px, #bfdbfe 27px, #bfdbfe 28px)",
        backgroundPosition: "0 12px",
      }}
    >
      <div className="absolute top-0 bottom-0 left-4 w-px bg-rose-300/70" />
      <p className="relative mb-6 font-mono text-[10px] text-blue-400/80">
        {date}
      </p>
      <ul className="relative space-y-7 pl-6">
        {lines.map((line) => (
          <li
            key={line}
            className="text-[15px] leading-none text-neutral-700"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  </div>
));

LinedJournalCard.displayName = "LinedJournalCard";
