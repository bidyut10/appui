import React, { forwardRef } from "react";

const invoices = [
  { id: "INV-0042", date: "Jun 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-0041", date: "May 1, 2026", amount: "$29.00", status: "Paid" },
  { id: "INV-0040", date: "Apr 1, 2026", amount: "$29.00", status: "Paid" },
];

export const BillingHistoryCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">
        Billing History
      </h4>
      <span className="font-mono text-[10px] text-neutral-400">Pro Plan</span>
    </div>
    <div className="divide-y divide-neutral-50">
      {invoices.map((inv) => (
        <div
          key={inv.id}
          className="flex cursor-pointer items-center justify-between px-4 py-3 transition-colors hover:bg-neutral-50/50"
        >
          <div>
            <p className="font-mono text-xs font-medium text-neutral-800">
              {inv.id}
            </p>
            <p className="mt-0.5 text-[10px] text-neutral-400">{inv.date}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-neutral-900">
              {inv.amount}
            </p>
            <span className="text-[10px] font-medium text-emerald-600">
              {inv.status}
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="border-t border-neutral-100 px-4 py-2.5 text-center">
      <button className="cursor-pointer text-[11px] font-medium text-neutral-800 hover:underline">
        Download all invoices
      </button>
    </div>
  </div>
));
BillingHistoryCard.displayName = "BillingHistoryCard";
