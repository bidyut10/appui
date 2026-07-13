"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowDownRight,
  ArrowUpRight,
  MoreVertical,
  Search,
} from "lucide-react";

import { cn } from "@/lib/cn";

export type RecentTransactionItem = Readonly<{
  id: string;
  merchant: string;
  category: string;
  amount: string;
  time: string;
  income?: boolean;
  logo?: string;
  logoAlt?: string;
}>;

export type RecentTransactionsCardProps = Readonly<
  {
    title?: string;
    items?: readonly RecentTransactionItem[];
    viewAllHref?: string;
    viewAllLabel?: string;
    onSearch?: () => void;
    onItemMenu?: (id: string) => void;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_ITEMS: readonly RecentTransactionItem[] = [
  {
    id: "1",
    merchant: "Spotify",
    category: "Subscription",
    amount: "$50.24",
    time: "07 Feb, 11:18 AM",
    logo: "/profile-picture.png",
  },
  {
    id: "2",
    merchant: "Billa",
    category: "Food & Drinks",
    amount: "$51.68",
    time: "07 Feb, 11:18 AM",
    logo: "/woman.png",
  },
  {
    id: "3",
    merchant: "Starbucks",
    category: "Food & Drinks",
    amount: "$51.68",
    time: "07 Feb, 11:18 AM",
    logo: "/profile-picture.png",
  },
  {
    id: "4",
    merchant: "Upwork",
    category: "Income",
    amount: "$250.00",
    time: "07 Feb, 11:18 AM",
    income: true,
    logo: "/woman.png",
  },
  {
    id: "5",
    merchant: "Netflix",
    category: "Entertainment",
    amount: "$51.68",
    time: "07 Feb, 11:18 AM",
    logo: "/profile-picture.png",
  },
];

function MerchantMark({
  item,
}: Readonly<{ item: RecentTransactionItem }>) {
  const initial = item.merchant.charAt(0).toUpperCase();

  return (
    <div className="relative shrink-0">
      <div className="relative size-10 overflow-hidden rounded-full bg-neutral-100">
        {item.logo ? (
          <Image
            src={item.logo}
            alt={item.logoAlt ?? item.merchant}
            fill
            sizes="40px"
            className="object-cover"
          />
        ) : (
          <span className="flex size-full items-center justify-center text-sm font-semibold text-neutral-600">
            {initial}
          </span>
        )}
      </div>
      <span
        className={cn(
          "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full text-white",
          item.income ? "bg-emerald-500" : "bg-red-500",
        )}
      >
        {item.income ? (
          <ArrowUpRight size={10} aria-hidden />
        ) : (
          <ArrowDownRight size={10} aria-hidden />
        )}
      </span>
    </div>
  );
}

// Recent transactions card — finance feed with categories and income markers.
export const RecentTransactionsCard = forwardRef<
  HTMLElement,
  RecentTransactionsCardProps
>(
  (
    {
      className,
      title = "Recent transactions",
      items = DEFAULT_ITEMS,
      viewAllHref = "#",
      viewAllLabel = "View all",
      onSearch,
      onItemMenu,
      ...props
    },
    ref,
  ) => (
    <article
      ref={ref}
      data-slot="recent-transactions-card"
      className={cn(
        "w-md rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg shadow-black/5",
        className,
      )}
      {...props}
    >
      <header className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search transactions"
            onClick={onSearch}
            className="flex size-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50"
          >
            <Search size={15} aria-hidden />
          </button>
          {viewAllHref && viewAllHref !== "#" ? (
            <Link
              href={viewAllHref}
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              {viewAllLabel}
            </Link>
          ) : (
            <button
              type="button"
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              {viewAllLabel}
            </button>
          )}
        </div>
      </header>

      <ul className="space-y-3">
        {items.length === 0 ? (
          <li className="py-8 text-center text-sm text-neutral-500">
            No transactions yet.
          </li>
        ) : (
          items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-full px-1 py-1 transition-colors hover:bg-neutral-50"
            >
              <MerchantMark item={item} />

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-neutral-900">
                    {item.merchant}
                  </p>
                  <p
                    className={cn(
                      "shrink-0 text-sm font-semibold tabular-nums",
                      item.income ? "text-emerald-600" : "text-neutral-900",
                    )}
                  >
                    {item.income ? item.amount : `− ${item.amount}`}
                  </p>
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] text-neutral-400">
                    {item.time}
                  </span>
                  <span className="shrink-0 rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-500">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                type="button"
                aria-label={`More options for ${item.merchant}`}
                onClick={() => onItemMenu?.(item.id)}
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
              >
                <MoreVertical size={14} aria-hidden />
              </button>
            </li>
          ))
        )}
      </ul>
    </article>
  ),
);

RecentTransactionsCard.displayName = "RecentTransactionsCard";
