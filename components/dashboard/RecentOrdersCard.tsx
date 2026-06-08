import React, { forwardRef } from "react";

const orders = [
  {
    id: "#2847",
    customer: "Sarah Chen",
    amount: "$89.00",
    status: "Completed",
    statusColor: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "#2846",
    customer: "Mike Ross",
    amount: "$149.00",
    status: "Processing",
    statusColor: "bg-amber-50 text-amber-700",
  },
  {
    id: "#2845",
    customer: "Alex Kim",
    amount: "$29.00",
    status: "Completed",
    statusColor: "bg-emerald-50 text-emerald-700",
  },
  {
    id: "#2844",
    customer: "Emma Wilson",
    amount: "$299.00",
    status: "Pending",
    statusColor: "bg-neutral-100 text-neutral-600",
  },
];

export const RecentOrdersCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">Recent Orders</h4>
      <button className="cursor-pointer text-[10px] font-medium text-violet-600 hover:underline">
        View all
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-neutral-50">
            {["Order", "Customer", "Amount", "Status"].map((h) => (
              <th
                key={h}
                className="px-4 py-2 font-mono text-[10px] font-normal tracking-wider text-neutral-400 uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr
              key={o.id}
              className="border-b border-neutral-50 transition-colors hover:bg-neutral-50/50"
            >
              <td className="px-4 py-2.5 font-mono text-xs text-neutral-600">
                {o.id}
              </td>
              <td className="px-4 py-2.5 text-xs text-neutral-800">
                {o.customer}
              </td>
              <td className="px-4 py-2.5 text-xs font-medium text-neutral-900">
                {o.amount}
              </td>
              <td className="px-4 py-2.5">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${o.statusColor}`}
                >
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));
RecentOrdersCard.displayName = "RecentOrdersCard";
