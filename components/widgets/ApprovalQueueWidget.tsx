"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Check } from "@/icons/Check";
import { X } from "@/icons/X";
import { Clock } from "@/icons/Clock";

export type ApprovalItem = {
  id: string;
  title: string;
  requester: string;
  amount?: string;
  submittedAt: string;
};

/**
 * Approval queue widget — approve or reject pending requests.
 *
 * Replace the demo items with your own approval workflow data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type ApprovalQueueWidgetProps = {
  title?: string;
  pendingCount?: number;
  items?: ApprovalItem[];
  onApprove?: (item: ApprovalItem) => void;
  onReject?: (item: ApprovalItem) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: ApprovalItem[] = [
  {
    id: "1",
    title: "Vendor invoice — Figma Team",
    requester: "Sarah Chen",
    amount: "$1,440",
    submittedAt: "2h ago",
  },
  {
    id: "2",
    title: "PTO request — Jun 12–14",
    requester: "Marcus Webb",
    submittedAt: "5h ago",
  },
  {
    id: "3",
    title: "New laptop purchase",
    requester: "Priya Nair",
    amount: "$2,199",
    submittedAt: "Yesterday",
  },
];

export const ApprovalQueueWidget = forwardRef<
  HTMLDivElement,
  ApprovalQueueWidgetProps
>(
  (
    {
      className,
      title = "Pending approvals",
      pendingCount = 3,
      items = defaultItems,
      onApprove,
      onReject,
      ...props
    },
    ref,
  ) => {
    const [queue, setQueue] = useState(items);
    const [resolved, setResolved] = useState<
      Record<string, "approved" | "rejected">
    >({});

    const handleApprove = (item: ApprovalItem) => {
      setResolved((prev) => ({ ...prev, [item.id]: "approved" }));
      onApprove?.(item);
      window.setTimeout(() => {
        setQueue((prev) => prev.filter((i) => i.id !== item.id));
      }, 600);
    };

    const handleReject = (item: ApprovalItem) => {
      setResolved((prev) => ({ ...prev, [item.id]: "rejected" }));
      onReject?.(item);
      window.setTimeout(() => {
        setQueue((prev) => prev.filter((i) => i.id !== item.id));
      }, 600);
    };

    return (
      <div
        ref={ref}
        data-slot="approval-queue-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-bold text-neutral-900">{title}</p>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
            {pendingCount} pending
          </span>
        </div>

        <div className="space-y-2">
          {queue.length === 0 ? (
            <p className="py-6 text-center text-[12px] text-neutral-400">
              All caught up — no pending items
            </p>
          ) : (
            queue.map((item) => (
              <div
                key={item.id}
                data-slot="approval-queue-widget-item"
                className={cn(
                  "rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 transition-all duration-300",
                  resolved[item.id] === "approved" &&
                    "border-emerald-200 bg-emerald-50/50",
                  resolved[item.id] === "rejected" &&
                    "border-rose-200 bg-rose-50/50 opacity-60",
                )}
              >
                <p className="text-[13px] font-semibold text-neutral-900">
                  {item.title}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-500">
                  <span>{item.requester}</span>
                  {item.amount && (
                    <>
                      <span>·</span>
                      <span className="font-semibold text-neutral-700">
                        {item.amount}
                      </span>
                    </>
                  )}
                  <span>·</span>
                  <Clock size={10} />
                  <span>{item.submittedAt}</span>
                </div>

                {!resolved[item.id] && (
                  <div className="mt-2.5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleApprove(item)}
                      data-slot="approval-queue-widget-approve"
                      className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg bg-emerald-500 py-1.5 text-[11px] font-semibold text-white transition-transform active:scale-95"
                    >
                      <Check size={12} />
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReject(item)}
                      data-slot="approval-queue-widget-reject"
                      className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-100 bg-white py-1.5 text-[11px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-50"
                    >
                      <X size={12} />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
);

ApprovalQueueWidget.displayName = "ApprovalQueueWidget";
