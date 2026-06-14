import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Deal pipeline card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo pipeline stages and deal values with your own sales data.
 */
export type PipelineDeal = {
  name: string;
  value: string;
  stage: string;
};

export type DealPipelineCardProps = {
  title?: string;
  stages?: string[];
  deals?: PipelineDeal[];
} & ComponentPropsWithoutRef<"div">;

const defaultStages = ["Lead", "Qualified", "Proposal", "Won"];
const defaultDeals: PipelineDeal[] = [
  { name: "Acme Corp", value: "₹2.4L", stage: "Proposal" },
  { name: "Nova Labs", value: "₹1.1L", stage: "Qualified" },
  { name: "Pixel Co.", value: "₹85K", stage: "Lead" },
  { name: "Orbit Inc", value: "₹3.2L", stage: "Won" },
];

const stageColors: Record<string, string> = {
  Lead: "border-t-sky-400",
  Qualified: "border-t-amber-400",
  Proposal: "border-t-teal-500",
  Won: "border-t-emerald-500",
};

export const DealPipelineCard = forwardRef<
  HTMLDivElement,
  DealPipelineCardProps
>(
  (
    {
      className,
      title = "Deal pipeline",
      stages = defaultStages,
      deals = defaultDeals,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="deal-pipeline-card"
      className={cn(
        "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-4 text-[11px] font-medium text-neutral-500">{title}</p>

      {/* Stages */}
      <div className="grid grid-cols-4 gap-2">
        {(stages ?? []).map((stage) => {
          const stageDeals = (deals ?? []).filter((d) => d.stage === stage);

          return (
            <div
              key={stage}
              className={cn(
                "rounded-lg border border-t-[3px] border-neutral-100 bg-neutral-50/80 p-2",
                stageColors[stage],
              )}
            >
              <p className="text-[9px] font-bold tracking-wide text-neutral-500 uppercase">
                {stage}
              </p>
              <div className="mt-2 space-y-1.5">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.name}
                    className="rounded-md bg-white px-2 py-1.5 shadow-sm"
                  >
                    <p className="truncate text-[10px] font-semibold text-neutral-800">
                      {deal.name}
                    </p>
                    <p className="text-[9px] text-teal-600 tabular-nums">
                      {deal.value}
                    </p>
                  </div>
                ))}
                {stageDeals.length === 0 && (
                  <div className="h-8 rounded-md border border-dashed border-neutral-200" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

DealPipelineCard.displayName = "DealPipelineCard";
