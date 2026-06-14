import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Support queue card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo ticket queue, priorities, and wait times with your own support data.
 */
export type SupportTicket = {
  id: string;
  subject: string;
  priority: "low" | "medium" | "high";
  wait: string;
};

export type SupportQueueCardProps = {
  title?: string;
  openCount?: number;
  openLabel?: string;
  tickets?: SupportTicket[];
} & ComponentPropsWithoutRef<"div">;

const priorityStyles = {
  low: "bg-neutral-100 text-neutral-600",
  medium: "bg-amber-50 text-amber-700",
  high: "bg-rose-50 text-rose-700",
};

const defaultTickets: SupportTicket[] = [
  {
    id: "#4821",
    subject: "Export failing on Safari",
    priority: "high",
    wait: "12m",
  },
  {
    id: "#4819",
    subject: "Billing invoice mismatch",
    priority: "medium",
    wait: "2h",
  },
  {
    id: "#4814",
    subject: "Dark mode toggle request",
    priority: "low",
    wait: "5h",
  },
];

export const SupportQueueCard = forwardRef<
  HTMLDivElement,
  SupportQueueCardProps
>(
  (
    {
      className,
      title = "Support queue",
      openCount = 14,
      openLabel = "open",
      tickets = defaultTickets,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="support-queue-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3.5">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-700 tabular-nums">
          {openCount.toLocaleString()} {openLabel}
        </span>
      </div>

      {/* Tickets */}
      <div className="divide-y divide-neutral-50">
        {(tickets ?? []).map((ticket) => (
          <div
            key={ticket.id}
            className="flex items-start gap-3 px-5 py-3 transition-colors hover:bg-neutral-50/80"
          >
            <span className="shrink-0 font-mono text-[10px] font-medium text-neutral-400">
              {ticket.id}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-neutral-800">
                {ticket.subject}
              </p>
              <span
                className={cn(
                  "mt-1 inline-block rounded px-1.5 py-px text-[9px] font-bold uppercase",
                  priorityStyles[ticket.priority],
                )}
              >
                {ticket.priority}
              </span>
            </div>
            <span className="shrink-0 text-[10px] text-neutral-400 tabular-nums">
              {ticket.wait}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

SupportQueueCard.displayName = "SupportQueueCard";
