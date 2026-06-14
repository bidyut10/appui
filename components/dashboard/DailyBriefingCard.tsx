import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Daily briefing card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo briefing date, greeting, and headline items with your own updates.
 */
export type BriefingItem = {
  time: string;
  headline: string;
  detail: string;
  tag?: string;
};

export type DailyBriefingCardProps = {
  date?: string;
  greeting?: string;
  items?: BriefingItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: BriefingItem[] = [
  {
    time: "09:12",
    headline: "Revenue crossed ₹10L MRR",
    detail: "Driven by 14 new Team plan upgrades overnight.",
    tag: "Milestone",
  },
  {
    time: "11:40",
    headline: "API latency spike resolved",
    detail: "p95 dropped from 420ms to 89ms after cache warm-up.",
    tag: "Ops",
  },
  {
    time: "14:05",
    headline: "3 enterprise trials expiring",
    detail: "Acme, Nova Labs, and Pixel Co. need follow-up today.",
    tag: "Sales",
  },
];

export const DailyBriefingCard = forwardRef<
  HTMLDivElement,
  DailyBriefingCardProps
>(
  (
    {
      className,
      date = "Saturday, Jun 6",
      greeting = "Morning briefing",
      items = defaultItems,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="daily-briefing-card"
      className={cn(
        "w-sm border-l-4 border-l-teal-500 bg-white py-5 pr-5 pl-5 font-sans",
        className,
      )}
      {...props}
    >
      <p className="font-serif text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
        {date}
      </p>
      <h3 className="mt-1 font-serif text-xl font-medium text-neutral-900">
        {greeting}
      </h3>

      {/* Items */}
      <div className="mt-5 space-y-4">
        {(items ?? []).map((item) => (
          <div key={item.headline} className="group">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-neutral-400 tabular-nums">
                {item.time}
              </span>
              {item.tag && (
                <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] font-semibold text-neutral-500">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="mt-1 text-[14px] leading-snug font-semibold text-neutral-900">
              {item.headline}
            </p>
            <p className="mt-0.5 text-[12px] leading-relaxed text-neutral-500">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
);

DailyBriefingCard.displayName = "DailyBriefingCard";
