import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type TypographicPosterCardProps = {
  line1?: string;
  line2?: string;
  subtitle?: string;
  edition?: string;
} & ComponentPropsWithoutRef<"div">;

export const TypographicPosterCard = forwardRef<
  HTMLDivElement,
  TypographicPosterCardProps
>(
  (
    {
      className,
      line1 = "CRAFT",
      line2 = "UI",
      subtitle = "Components built with intention",
      edition = "Vol. 02 — 2026",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="typographic-poster-card"
      className={cn(
        "w-full max-w-xs border-2 border-neutral-900 bg-[#f7f4ef] px-5 py-6 font-sans sm:px-6 sm:py-8",
        className,
      )}
      {...props}
    >
      <p className="mb-6 font-mono text-[9px] tracking-[0.35em] text-neutral-500 uppercase">
        {edition}
      </p>
      <h2 className="text-[3.5rem] leading-[0.85] font-black tracking-tighter text-neutral-900 sm:text-[4rem]">
        {line1}
      </h2>
      <h2 className="-mt-1 text-[3.5rem] leading-[0.85] font-black tracking-tighter text-neutral-900/20 sm:text-[4rem]">
        {line2}
      </h2>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-neutral-900" />
        <p className="max-w-[140px] text-right text-[11px] leading-snug font-medium text-neutral-600">
          {subtitle}
        </p>
      </div>
    </div>
  ),
);

TypographicPosterCard.displayName = "TypographicPosterCard";
