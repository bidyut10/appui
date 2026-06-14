"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const SCALES = [
  { name: "Display", size: "text-2xl", weight: "font-bold", sample: "Aa" },
  { name: "Heading", size: "text-lg", weight: "font-semibold", sample: "Aa" },
  { name: "Body", size: "text-sm", weight: "font-normal", sample: "Aa" },
  { name: "Caption", size: "text-[10px]", weight: "font-medium", sample: "Aa" },
];

export type TypographyShowcaseWidgetProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export const TypographyShowcaseWidget = forwardRef<
  HTMLDivElement,
  TypographyShowcaseWidgetProps
>(({ className, title = "Type scale", ...props }, ref) => {
  const [active, setActive] = useState(0);

  return (
    <div
      ref={ref}
      data-slot="typography-showcase-widget"
      className={cn(
        "w-64 rounded-2xl border border-neutral-200 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>
      <div className="space-y-2">
        {SCALES.map((scale, i) => (
          <button
            key={scale.name}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-colors",
              active === i
                ? "border-neutral-900 bg-neutral-50"
                : "border-neutral-100 hover:border-neutral-200",
            )}
          >
            <div>
              <p className="text-[10px] font-semibold text-neutral-400 uppercase">
                {scale.name}
              </p>
              <p className={cn(scale.size, scale.weight, "text-neutral-900")}>
                {scale.sample}
              </p>
            </div>
            <span className="font-mono text-[9px] text-neutral-400">
              {scale.size.replace("text-", "")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
});

TypographyShowcaseWidget.displayName = "TypographyShowcaseWidget";
