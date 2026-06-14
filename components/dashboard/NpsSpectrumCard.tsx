import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * NPS spectrum card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo NPS score, segment percentages, and response count with your own data.
 */
export type NpsSpectrumCardProps = {
  title?: string;
  score?: number;
  promoters?: number;
  passives?: number;
  detractors?: number;
  responses?: number;
  responsesLabel?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultSegments = [
  {
    label: "Promoters",
    key: "promoters" as const,
    color: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  {
    label: "Passives",
    key: "passives" as const,
    color: "text-amber-600",
    dot: "bg-amber-300",
  },
  {
    label: "Detractors",
    key: "detractors" as const,
    color: "text-rose-600",
    dot: "bg-rose-400",
  },
];

export const NpsSpectrumCard = forwardRef<HTMLDivElement, NpsSpectrumCardProps>(
  (
    {
      className,
      title = "Net Promoter Score",
      score = 62,
      promoters = 58,
      passives = 24,
      detractors = 18,
      responses = 384,
      responsesLabel = "Responses",
      ...props
    },
    ref,
  ) => {
    const safePromoters = Math.max(0, Math.min(100, promoters));
    const safePassives = Math.max(0, Math.min(100, passives));
    const safeDetractors = Math.max(0, Math.min(100, detractors));

    const segmentValues = {
      promoters: safePromoters,
      passives: safePassives,
      detractors: safeDetractors,
    };

    return (
      <div
        ref={ref}
        data-slot="nps-spectrum-card"
        className={cn(
          "w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-medium text-neutral-500">{title}</p>
            <p className="mt-1 text-[3rem] leading-none font-light tracking-tighter text-neutral-900 tabular-nums">
              {score.toLocaleString()}
            </p>
          </div>
          <div className="rounded-xl bg-neutral-50 px-3 py-2 text-right">
            <p className="text-[10px] text-neutral-400">{responsesLabel}</p>
            <p className="text-sm font-bold text-neutral-800 tabular-nums">
              {responses.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Spectrum bar */}
        <div className="mt-5 flex h-3 overflow-hidden rounded-full">
          <div
            className="bg-emerald-400"
            style={{ width: `${safePromoters}%` }}
          />
          <div className="bg-amber-300" style={{ width: `${safePassives}%` }} />
          <div
            className="bg-rose-400"
            style={{ width: `${safeDetractors}%` }}
          />
        </div>

        {/* Segments */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {defaultSegments.map((seg) => (
            <div key={seg.label} className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className={cn("h-1.5 w-1.5 rounded-full", seg.dot)} />
                <span className="text-[10px] text-neutral-500">
                  {seg.label}
                </span>
              </div>
              <p
                className={cn(
                  "mt-0.5 text-sm font-bold tabular-nums",
                  seg.color,
                )}
              >
                {segmentValues[seg.key]}%
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

NpsSpectrumCard.displayName = "NpsSpectrumCard";
