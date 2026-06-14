"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Recent orders card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo orders, customer details, amounts, and statuses with your own data.
 */
export type OrderStatus =
  | "Completed"
  | "Processing"
  | "Pending"
  | "Cancelled"
  | string;

export type RecentOrder = {
  id: string;
  customer: string;
  amount: string;
  status: OrderStatus;
  statusColor?: string;
};

export type RecentOrdersCardProps = {
  title?: string;
  viewAllLabel?: string;
  tableHeaders?: string[];
  orders?: RecentOrder[];
  onViewAll?: () => void;
} & ComponentPropsWithoutRef<"div">;

const defaultOrders: RecentOrder[] = [
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

const defaultTableHeaders = ["Order", "Customer", "Amount", "Status"];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-emerald-50 text-emerald-700";
    case "processing":
      return "bg-amber-50 text-amber-700";
    case "pending":
      return "bg-neutral-100 text-neutral-600";
    case "cancelled":
      return "bg-red-50 text-red-600";
    default:
      return "bg-neutral-100 text-neutral-600";
  }
};

export const RecentOrdersCard = forwardRef<
  HTMLDivElement,
  RecentOrdersCardProps
>(
  (
    {
      className,
      title = "Recent Orders",
      viewAllLabel = "View all",
      tableHeaders = defaultTableHeaders,
      orders = defaultOrders,
      onViewAll,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="recent-orders-card"
      className={cn(
        "w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
            <div
        data-slot="recent-orders-header"
        className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
      >
        <h4
          data-slot="recent-orders-title"
          className="text-sm font-semibold text-neutral-900"
        >
          {title}
        </h4>

        <button
          type="button"
          data-slot="recent-orders-view-all"
          aria-label={viewAllLabel}
          onClick={onViewAll}
          className="cursor-pointer text-[10px] font-medium text-teal-600 hover:underline"
        >
          {viewAllLabel}
        </button>
      </div>

      {/* Table */}
      <div data-slot="recent-orders-table-wrapper" className="scroll-hover overflow-x-auto">
        <table data-slot="recent-orders-table" className="w-full text-left">
          <thead data-slot="recent-orders-table-head">
            <tr className="border-b border-neutral-50">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 font-mono text-[10px] font-normal tracking-wider text-neutral-400 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody data-slot="recent-orders-table-body">
            {(orders ?? []).map((order) => (
              <tr
                key={order.id}
                data-slot="recent-orders-row"
                className="border-b border-neutral-50 transition-colors hover:bg-neutral-50/50"
              >
                <td
                  data-slot="recent-orders-id"
                  className="px-4 py-2.5 font-mono text-xs text-neutral-600"
                >
                  {order.id}
                </td>

                <td
                  data-slot="recent-orders-customer"
                  className="px-4 py-2.5 text-xs text-neutral-800"
                >
                  {order.customer}
                </td>

                <td
                  data-slot="recent-orders-amount"
                  className="px-4 py-2.5 text-xs font-medium text-neutral-900"
                >
                  {order.amount}
                </td>

                <td data-slot="recent-orders-status" className="px-4 py-2.5">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-medium",
                      order.statusColor ?? getStatusColor(order.status),
                    )}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
);

RecentOrdersCard.displayName = "RecentOrdersCard";
