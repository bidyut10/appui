import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Geo visitors card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo country breakdown, visitor counts, and percentages with your own data.
 */
export type GeoVisitor = {
  country: string;
  countryCode?: string;
  visitors: number;
  pct: number;
};

export type GeoVisitorsCardProps = {
  title?: string;
  total?: string;
  countries?: GeoVisitor[];
} & ComponentPropsWithoutRef<"div">;

const defaultCountries: GeoVisitor[] = [
  { country: "India", countryCode: "IN", visitors: 4820, pct: 38 },
  { country: "United States", countryCode: "US", visitors: 2910, pct: 23 },
  { country: "United Kingdom", countryCode: "GB", visitors: 1540, pct: 12 },
  { country: "Germany", countryCode: "DE", visitors: 980, pct: 8 },
];

export const GeoVisitorsCard = forwardRef<
  HTMLDivElement,
  GeoVisitorsCardProps
>(
  (
    {
      className,
      title = "Visitors by country",
      total = "12.6K",
      countries = defaultCountries,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="geo-visitors-card"
      className={cn(
        "w-full max-w-sm rounded-[1.25rem] border border-neutral-200/80 bg-white p-5 font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
            <div className="mb-4 flex items-baseline justify-between">
        <p className="text-[11px] font-medium text-neutral-500">{title}</p>
        <p className="text-xl font-semibold text-neutral-900 tabular-nums">
          {total}
        </p>
      </div>

      {/* Countries */}
      <div className="space-y-3">
        {(countries ?? []).map((c) => {
          const safePct = Math.max(0, Math.min(100, c.pct));

          return (
            <div key={c.country}>
              <div className="mb-1 flex items-center justify-between">
                <span className="flex items-center gap-2 text-[13px] text-neutral-800">
                  {c.countryCode && (
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-neutral-100 text-[9px] font-bold text-neutral-500">
                      {c.countryCode}
                    </span>
                  )}
                  {c.country}
                </span>
                <span className="text-[12px] font-semibold text-neutral-700 tabular-nums">
                  {c.visitors.toLocaleString()}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-sky-500"
                  style={{ width: `${safePct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

GeoVisitorsCard.displayName = "GeoVisitorsCard";
