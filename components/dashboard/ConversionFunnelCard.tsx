import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Conversion funnel card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo funnel stages, counts, and conversion metrics
 * with your own analytics data.
 */
export type ConversionStage = {
  stage: string;
  count: string;
  percentage: number;
  color?: string;
};

export type ConversionFunnelCardProps = {
  title?: string;
  description?: string;
  overallConversion?: string;
  overallConversionLabel?: string;
  stages?: ConversionStage[];
} & ComponentPropsWithoutRef<"div">;

const defaultStages: ConversionStage[] = [
  {
    stage: "Visitors",
    count: "24,580",
    percentage: 100,
    color: "bg-blue-500",
  },
  {
    stage: "Signups",
    count: "3,842",
    percentage: 65,
    color: "bg-teal-500",
  },
  {
    stage: "Trials",
    count: "1,204",
    percentage: 40,
    color: "bg-cyan-500",
  },
  {
    stage: "Paid",
    count: "487",
    percentage: 20,
    color: "bg-emerald-500",
  },
];

export const ConversionFunnelCard = forwardRef<
  HTMLDivElement,
  ConversionFunnelCardProps
>(
  (
    {
      className,
      title = "Conversion Funnel",
      description = "Visitor → Customer journey",
      overallConversion = "1.98%",
      overallConversionLabel = "Overall conversion:",
      stages = defaultStages,
      ...props
    },
    ref,
  ) => {
    const safeStages = (stages ?? []).map((stage) => ({
      ...stage,
      percentage: Math.max(0, Math.min(100, stage.percentage)),
    }));

    const firstStage = safeStages[0];
    const lastStage = safeStages[safeStages.length - 1];

    const parseCount = (value: string) => Number(value.replace(/,/g, ""));

    const baseCount = firstStage ? parseCount(firstStage.count) : 1;
    const finalCount = lastStage ? parseCount(lastStage.count) : 0;

    const calculatedConversion =
      baseCount > 0 ? ((finalCount / baseCount) * 100).toFixed(2) : "0.00";

    return (
      <div
        ref={ref}
        data-slot="conversion-funnel-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
                <div data-slot="conversion-funnel-header">
          <h4
            data-slot="conversion-funnel-title"
            className="mb-1 text-sm font-semibold text-neutral-900"
          >
            {title}
          </h4>

          <p
            data-slot="conversion-funnel-description"
            className="mb-4 text-[11px] text-neutral-400"
          >
            {description}
          </p>
        </div>

        {/* Funnel stages */}
        <div data-slot="conversion-funnel-stages" className="space-y-2">
          {safeStages.map(
            ({ stage, count, percentage, color = "bg-blue-500" }) => {
              const stageConversion =
                baseCount > 0
                  ? Math.round((parseCount(count) / baseCount) * 100)
                  : 0;

              return (
                <div key={stage} data-slot="conversion-funnel-stage">
                  <div
                    data-slot="conversion-funnel-stage-header"
                    className="mb-1 flex justify-between text-[11px]"
                  >
                    <span className="font-medium text-neutral-700">
                      {stage}
                    </span>

                    <span className="text-neutral-500">{count}</span>
                  </div>

                  <div
                    data-slot="conversion-funnel-track"
                    className="h-6 overflow-hidden rounded-lg bg-neutral-100"
                  >
                    <div
                      data-slot="conversion-funnel-fill"
                      className={cn(
                        "flex h-full items-center justify-end rounded-lg pr-2",
                        color,
                      )}
                      style={{
                        width: `${percentage}%`,
                      }}
                    >
                      <span className="font-mono text-[9px] font-medium text-white">
                        {stageConversion}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>

                <p
          data-slot="conversion-funnel-footer"
          className="mt-3 text-center text-[10px] text-neutral-400"
        >
          {overallConversionLabel}{" "}
          <span className="font-semibold text-emerald-600">
            {overallConversion ?? `${calculatedConversion}%`}
          </span>
        </p>
      </div>
    );
  },
);

ConversionFunnelCard.displayName = "ConversionFunnelCard";
