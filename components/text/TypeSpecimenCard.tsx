import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type TypeScaleItem = {
  label: string;
  sample: string;
  size: string;
  weight: string;
};

export type TypeSpecimenCardProps = {
  family?: string;
  items?: TypeScaleItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: TypeScaleItem[] = [
  { label: "Display", sample: "Aa", size: "2.5rem", weight: "800" },
  { label: "Heading", sample: "Components", size: "1.25rem", weight: "700" },
  { label: "Body", sample: "Readable at every size", size: "0.875rem", weight: "400" },
  { label: "Caption", sample: "LABEL · META", size: "0.625rem", weight: "600" },
];

export const TypeSpecimenCard = forwardRef<
  HTMLDivElement,
  TypeSpecimenCardProps
>(
  (
    {
      className,
      family = "Inter / System UI",
      items = defaultItems,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="type-specimen-card"
      className={cn(
        "w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-5 font-sans",
        className,
      )}
      {...props}
    >
      <p className="mb-4 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
        Type specimen — {family}
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            data-slot="type-specimen-card-row"
            className="flex items-baseline justify-between gap-3 border-b border-neutral-50 pb-3 last:border-0"
          >
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-neutral-400 uppercase">
                {item.label}
              </p>
              <p
                className="truncate text-neutral-900"
                style={{ fontSize: item.size, fontWeight: item.weight }}
              >
                {item.sample}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[9px] text-neutral-300">
              {item.size}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
);

TypeSpecimenCard.displayName = "TypeSpecimenCard";
