import React, { forwardRef } from "react";

const products = [
  { name: "Pro Plan", sales: 284, revenue: "$8,236", trend: "+12%" },
  { name: "Starter Kit", sales: 192, revenue: "$3,840", trend: "+8%" },
  { name: "Enterprise", sales: 47, revenue: "$14,100", trend: "+24%" },
  { name: "Add-ons", sales: 156, revenue: "$1,560", trend: "+3%" },
];

export const TopProductsCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">Top Products</h4>
      <span className="font-mono text-[10px] text-neutral-400">This month</span>
    </div>
    <div className="divide-y divide-neutral-50">
      {products.map((p, i) => (
        <div
          key={p.name}
          className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-neutral-50/50"
        >
          <span className="w-4 font-mono text-[10px] text-neutral-400">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-neutral-800">{p.name}</p>
            <p className="text-[10px] text-neutral-400">{p.sales} sales</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-neutral-900">
              {p.revenue}
            </p>
            <p className="text-[10px] text-emerald-600">{p.trend}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
));
TopProductsCard.displayName = "TopProductsCard";
