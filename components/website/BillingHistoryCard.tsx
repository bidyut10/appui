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
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-900">Billing History</h4>
      <span className="text-[10px] font-mono text-neutral-400">Pro Plan</span>
    </div>
    <div className="divide-y divide-neutral-50">
      {invoices.map((inv) => (
        <div key={inv.id} className="flex items-center justify-between px-4 py-3 hover:bg-neutral-50/50 transition-colors cursor-pointer">
          <div>
            <p className="text-xs font-mono font-medium text-neutral-800">{inv.id}</p>
            <p className="text-[10px] text-neutral-400 mt-0.5">{inv.date}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-neutral-900">{inv.amount}</p>
            <span className="text-[10px] font-medium text-emerald-600">{inv.status}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-neutral-100 text-center">
      <button className="text-[11px] font-medium text-violet-600 hover:underline cursor-pointer">Download all invoices</button>
    </div>
  </div>
));
BillingHistoryCard.displayName = "BillingHistoryCard";
