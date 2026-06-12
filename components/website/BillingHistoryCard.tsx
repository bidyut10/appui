"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type BillingInvoice = {
  id: string;
  date: string;
  amount: string;
  status: string;
};

export type BillingHistoryCardProps = {
  title?: string;

  planLabel?: string;

  invoices?: BillingInvoice[];

  downloadLabel?: string;

  onDownloadAll?: () => void;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultInvoices: BillingInvoice[] = [
  {
    id: "INV-0042",
    date: "Jun 1, 2026",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-0041",
    date: "May 1, 2026",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-0040",
    date: "Apr 1, 2026",
    amount: "$29.00",
    status: "Paid",
  },
];

/* -------------------------------------------------------------------------- */
/*                           Billing History Card                             */
/* -------------------------------------------------------------------------- */

export const BillingHistoryCard = forwardRef<
  HTMLDivElement,
  BillingHistoryCardProps
>(
  (
    {
      className,

      title = "Billing History",

      planLabel = "Pro Plan",

      invoices = defaultInvoices,

      downloadLabel = "Download all invoices",

      onDownloadAll,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="billing-history-card"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* ---------------------------------------------------------------------- */}
      {/* Header                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="billing-history-card-header"
        className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
      >
        <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

        <span className="font-mono text-[10px] text-neutral-400">
          {planLabel}
        </span>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Invoice List                                                           */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="billing-history-card-list"
        className="divide-y divide-neutral-50"
      >
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            data-slot="billing-history-card-item"
            className="flex cursor-pointer items-center justify-between px-4 py-3 transition-colors hover:bg-neutral-50/50"
          >
            <div>
              <p className="font-mono text-xs font-medium text-neutral-800">
                {invoice.id}
              </p>

              <p className="mt-0.5 text-[10px] text-neutral-400">
                {invoice.date}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-neutral-900">
                {invoice.amount}
              </p>

              <span className="text-[10px] font-medium text-emerald-600">
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* Footer                                                                 */}
      {/* ---------------------------------------------------------------------- */}

      <div
        data-slot="billing-history-card-footer"
        className="border-t border-neutral-100 px-4 py-2.5 text-center"
      >
        <button
          type="button"
          onClick={onDownloadAll}
          data-slot="billing-history-card-download"
          className="cursor-pointer text-[11px] font-medium text-neutral-800 hover:underline"
        >
          {downloadLabel}
        </button>
      </div>
    </div>
  ),
);

BillingHistoryCard.displayName = "BillingHistoryCard";
