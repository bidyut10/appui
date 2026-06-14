import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Typographic poster card — display type specimen with a single headline line.
 *
 * Replace the demo content with your own data.
 */
export type TypographicPosterCardProps = {
  title?: string;
  label?: string;
  size?: string;
  weight?: string;
} & ComponentPropsWithoutRef<"div">;

export const TypographicPosterCard = forwardRef<
  HTMLDivElement,
  TypographicPosterCardProps
>(
  (
    {
      className,
      title = "opensource ui",
      label = "Display",
      size = "2.125rem",
      weight = "900",
      ...props
    },
    ref,
  ) => {
    const words = title.trim().split(/\s+/);
    const last = words.pop() ?? "";
    const lead = words.join(" ");

    return (
      <div
        ref={ref}
        data-slot="typographic-poster-card"
        className={cn("w-72 font-sans", className)}
        {...props}
      >
        <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
          {label} · {size} · {weight}
        </p>

        <h2 className="text-[2.125rem] leading-none font-black tracking-[-0.04em] whitespace-nowrap text-neutral-900 lowercase">
          <span>{lead ? `${lead} ` : ""}</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px #171717" }}
          >
            {last}
          </span>
        </h2>

        <div className="mt-4 flex items-center gap-3 font-mono text-[9px] text-neutral-300">
          <span className="tracking-widest uppercase">Sans</span>
          <span className="h-px flex-1 bg-neutral-200" />
          <span>-0.04em</span>
        </div>
      </div>
    );
  },
);

TypographicPosterCard.displayName = "TypographicPosterCard";
