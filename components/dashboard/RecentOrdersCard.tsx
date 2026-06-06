import React, { forwardRef } from "react";

const orders = [
  { id: "#2847", customer: "Sarah Chen", amount: "$89.00", status: "Completed", statusColor: "bg-emerald-50 text-emerald-700" },
  { id: "#2846", customer: "Mike Ross", amount: "$149.00", status: "Processing", statusColor: "bg-amber-50 text-amber-700" },
  { id: "#2845", customer: "Alex Kim", amount: "$29.00", status: "Completed", statusColor: "bg-emerald-50 text-emerald-700" },
  { id: "#2844", customer: "Emma Wilson", amount: "$299.00", status: "Pending", statusColor: "bg-neutral-100 text-neutral-600" },
];

export const RecentOrdersCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-96 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-900">Recent Orders</h4>
      <button className="text-[10px] font-medium text-violet-600 hover:underline cursor-pointer">View all</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-neutral-50">
            {["Order", "Customer", "Amount", "Status"].map((h) => (
              <th key={h} className="px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-normal">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
              <td className="px-4 py-2.5 text-xs font-mono text-neutral-600">{o.id}</td>
              <td className="px-4 py-2.5 text-xs text-neutral-800">{o.customer}</td>
              <td className="px-4 py-2.5 text-xs font-medium text-neutral-900">{o.amount}</td>
              <td className="px-4 py-2.5">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${o.statusColor}`}>{o.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));
RecentOrdersCard.displayName = "RecentOrdersCard";
