import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type NpsSpectrumCardProps = {
  score?: number;
  promoters?: number;
  passives?: number;
  detractors?: number;
  responses?: number;
} & ComponentPropsWithoutRef<"div">;

export const NpsSpectrumCard = forwardRef<
  HTMLDivElement,
  NpsSpectrumCardProps
>(
  (
    {
      className,
      score = 62,
      promoters = 58,
      passives = 24,
      detractors = 18,
      responses = 384,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="nps-spectrum-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium text-neutral-500">Net Promoter Score</p>
          <p className="mt-1 text-[3rem] leading-none font-light tracking-tighter text-neutral-900 tabular-nums">
            {score}
          </p>
        </div>
        <div className="rounded-xl bg-neutral-50 px-3 py-2 text-right">
          <p className="text-[10px] text-neutral-400">Responses</p>
          <p className="text-sm font-bold text-neutral-800 tabular-nums">
            {responses}
          </p>
        </div>
      </div>

      <div className="mt-5 flex h-3 overflow-hidden rounded-full">
        <div
          className="bg-emerald-400"
          style={{ width: `${promoters}%` }}
        />
        <div
          className="bg-amber-300"
          style={{ width: `${passives}%` }}
        />
        <div
          className="bg-rose-400"
          style={{ width: `${detractors}%` }}
        />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "Promoters", pct: promoters, color: "text-emerald-600", dot: "bg-emerald-400" },
          { label: "Passives", pct: passives, color: "text-amber-600", dot: "bg-amber-300" },
          { label: "Detractors", pct: detractors, color: "text-rose-600", dot: "bg-rose-400" },
        ].map((seg) => (
          <div key={seg.label} className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className={cn("h-1.5 w-1.5 rounded-full", seg.dot)} />
              <span className="text-[10px] text-neutral-500">{seg.label}</span>
            </div>
            <p className={cn("mt-0.5 text-sm font-bold tabular-nums", seg.color)}>
              {seg.pct}%
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
);

NpsSpectrumCard.displayName = "NpsSpectrumCard";
