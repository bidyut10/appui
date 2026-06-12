import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/*
| Top products card built with React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo products,
| sales numbers, revenue values,
| and trends with your own data.
|
| Visual design remains exactly the same.
*/

export type TopProduct = {
  name: string;
  sales: number | string;
  revenue: string;
  trend: string;
};

export type TopProductsCardProps = {
  title?: string;
  period?: string;

  products?: TopProduct[];
} & ComponentPropsWithoutRef<"div">;

const defaultProducts: TopProduct[] = [
  {
    name: "Pro Plan",
    sales: 284,
    revenue: "$8,236",
    trend: "+12%",
  },
  {
    name: "Starter Kit",
    sales: 192,
    revenue: "$3,840",
    trend: "+8%",
  },
  {
    name: "Enterprise",
    sales: 47,
    revenue: "$14,100",
    trend: "+24%",
  },
  {
    name: "Add-ons",
    sales: 156,
    revenue: "$1,560",
    trend: "+3%",
  },
];

export const TopProductsCard = forwardRef<HTMLDivElement, TopProductsCardProps>(
  (
    {
      className,

      title = "Top Products",
      period = "This month",

      products = defaultProducts,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="top-products-card"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div
        data-slot="top-products-header"
        className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
      >
        <h4
          data-slot="top-products-title"
          className="text-sm font-semibold text-neutral-900"
        >
          {title}
        </h4>

        <span
          data-slot="top-products-period"
          className="font-mono text-[10px] text-neutral-400"
        >
          {period}
        </span>
      </div>

      {/* Products List */}
      <div data-slot="top-products-list" className="divide-y divide-neutral-50">
        {products.map(({ name, sales, revenue, trend }, index) => {
          const isPositiveTrend = trend.trim().startsWith("+");

          return (
            <div
              key={name}
              data-slot="top-products-item"
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-neutral-50/50"
            >
              <span
                data-slot="top-products-rank"
                className="w-4 font-mono text-[10px] text-neutral-400"
              >
                {index + 1}
              </span>

              <div data-slot="top-products-details" className="min-w-0 flex-1">
                <p className="text-xs font-medium text-neutral-800">{name}</p>

                <p className="text-[10px] text-neutral-400">{sales} sales</p>
              </div>

              <div data-slot="top-products-metrics" className="text-right">
                <p className="text-xs font-semibold text-neutral-900">
                  {revenue}
                </p>

                <p
                  className={cn(
                    "text-[10px]",
                    isPositiveTrend ? "text-emerald-600" : "text-red-500",
                  )}
                >
                  {trend}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
);

TopProductsCard.displayName = "TopProductsCard";
