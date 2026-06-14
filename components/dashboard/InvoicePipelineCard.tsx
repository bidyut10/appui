import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Invoice pipeline card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo invoice stages, counts, and amounts with your own billing data.
 */
export type PipelineStage = {
  label: string;
  count: number;
  amount: string;
  color: string;
};

export type InvoicePipelineCardProps = {
  title?: string;
  stages?: PipelineStage[];
} & ComponentPropsWithoutRef<"div">;

const defaultStages: PipelineStage[] = [
  { label: "Draft", count: 4, amount: "₹18K", color: "bg-neutral-300" },
  { label: "Sent", count: 12, amount: "₹1.2L", color: "bg-sky-400" },
  { label: "Paid", count: 28, amount: "₹4.8L", color: "bg-teal-500" },
  { label: "Overdue", count: 3, amount: "₹42K", color: "bg-rose-400" },
];

export const InvoicePipelineCard = forwardRef<
  HTMLDivElement,
  InvoicePipelineCardProps
>(
  (
    { className, title = "Invoice pipeline", stages = defaultStages, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="invoice-pipeline-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>

      {/* Stages */}
      <div className="flex gap-2">
        {(stages ?? []).map((stage, index) => (
          <div key={stage.label} className="flex flex-1 flex-col items-center">
            <div
              className={cn(
                "flex w-full flex-col items-center justify-end rounded-t-lg px-1 pt-2",
                stage.color,
              )}
              style={{ height: `${48 + index * 16}px` }}
            >
              <span className="text-lg font-bold text-white tabular-nums">
                {stage.count.toLocaleString()}
              </span>
            </div>
            <div className="w-full rounded-b-lg border border-t-0 border-neutral-200 bg-neutral-50 px-1 py-2 text-center">
              <p className="text-[10px] font-semibold text-neutral-700">
                {stage.label}
              </p>
              <p className="text-[9px] text-neutral-400 tabular-nums">
                {stage.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
);

InvoicePipelineCard.displayName = "InvoicePipelineCard";
