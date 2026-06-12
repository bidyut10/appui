import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type BridgeStep = {
  label: string;
  value: number;
  type: "start" | "add" | "subtract" | "end";
};

export type RevenueBridgeCardProps = {
  title?: string;
  steps?: BridgeStep[];
} & ComponentPropsWithoutRef<"div">;

const defaultSteps: BridgeStep[] = [
  { label: "Jan MRR", value: 72, type: "start" },
  { label: "New", value: 18, type: "add" },
  { label: "Expansion", value: 8, type: "add" },
  { label: "Churn", value: -12, type: "subtract" },
  { label: "Feb MRR", value: 86, type: "end" },
];

export const RevenueBridgeCard = forwardRef<
  HTMLDivElement,
  RevenueBridgeCardProps
>(
  (
    {
      className,
      title = "MRR bridge · Feb 2026",
      steps = defaultSteps,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="revenue-bridge-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <p className="mb-5 text-[11px] font-medium text-neutral-500">{title}</p>
      <div className="flex items-end justify-between gap-1">
        {steps.map((step, i) => {
          const height =
            step.type === "end" || step.type === "start"
              ? step.value
              : Math.abs(step.value) * 2.5;
          const isNeg = step.type === "subtract";

          return (
            <div
              key={step.label}
              className="flex flex-1 flex-col items-center"
            >
              {step.type === "add" || step.type === "subtract" ? (
                <span
                  className={cn(
                    "mb-1 text-[10px] font-bold tabular-nums",
                    isNeg ? "text-rose-500" : "text-emerald-600",
                  )}
                >
                  {isNeg ? "" : "+"}
                  {step.value}
                </span>
              ) : (
                <span className="mb-1 text-[10px] font-bold text-neutral-700 tabular-nums">
                  {step.value}%
                </span>
              )}
              <div
                className={cn(
                  "w-full rounded-t-md",
                  step.type === "start" && "bg-neutral-300",
                  step.type === "end" && "bg-teal-500",
                  step.type === "add" && "bg-emerald-400",
                  step.type === "subtract" && "bg-rose-400",
                  (step.type === "add" || step.type === "subtract") &&
                    "border-x border-dashed border-neutral-200",
                )}
                style={{ height: `${height}px` }}
              />
              <p
                className={cn(
                  "mt-2 text-center text-[9px] leading-tight font-medium",
                  step.type === "end" ? "text-teal-700" : "text-neutral-500",
                )}
              >
                {step.label}
              </p>
              {i < steps.length - 1 && step.type !== "end" && (
                <span className="absolute hidden" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  ),
);

RevenueBridgeCard.displayName = "RevenueBridgeCard";
