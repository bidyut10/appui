"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { Check, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/cn";

export type PaymentScheduleItem = Readonly<{
  id: string;
  month: string;
  day: string;
  label: string;
  amount: string;
  paid?: boolean;
  upcoming?: boolean;
}>;

export type PaymentScheduleCardProps = Readonly<
  {
    title?: string;
    items?: readonly PaymentScheduleItem[];
    onToggleItem?: (id: string, paid: boolean) => void;
    onMenu?: () => void;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_ITEMS: readonly PaymentScheduleItem[] = [
  {
    id: "1",
    month: "Feb",
    day: "16",
    label: "Bills",
    amount: "$281.17",
    paid: true,
  },
  {
    id: "2",
    month: "Feb",
    day: "16",
    label: "Spotify",
    amount: "$181.36",
    paid: true,
  },
  {
    id: "3",
    month: "Feb",
    day: "18",
    label: "Framer",
    amount: "$21.58",
    upcoming: true,
  },
  {
    id: "4",
    month: "Feb",
    day: "21",
    label: "Adobe",
    amount: "$59.25",
    upcoming: true,
  },
];

// Payment schedule card — due dates with paid and upcoming states.
export const PaymentScheduleCard = forwardRef<
  HTMLElement,
  PaymentScheduleCardProps
>(
  (
    {
      className,
      title = "Payment schedule",
      items = DEFAULT_ITEMS,
      onToggleItem,
      onMenu,
      ...props
    },
    ref,
  ) => {
    const [rows, setRows] = useState(items);

    const toggle = (id: string) => {
      setRows((current) =>
        current.map((item) =>
          item.id === id ? { ...item, paid: !item.paid, upcoming: false } : item,
        ),
      );
      const target = rows.find((item) => item.id === id);
      if (target) onToggleItem?.(id, !target.paid);
    };

    return (
      <article
        ref={ref}
        data-slot="payment-schedule-card"
        className={cn(
          "w-sm rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg shadow-black/5",
          className,
        )}
        {...props}
      >
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
          <button
            type="button"
            aria-label="More options"
            onClick={onMenu}
            className="flex size-9 items-center justify-center text-neutral-600"
          >
            <MoreHorizontal size={16} aria-hidden />
          </button>
        </header>

        <ul className="space-y-3">
          {rows.length === 0 ? (
            <li className="py-6 text-center text-sm text-neutral-500">
              No scheduled payments.
            </li>
          ) : (
            rows.map((item) => {
              const muted = item.paid;

              return (
                <li key={item.id} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex w-12 shrink-0 flex-col items-center justify-center rounded-xl py-2 text-center",
                      item.upcoming ? "bg-amber-100" : "bg-neutral-100",
                    )}
                  >
                    <span className="text-[10px] font-medium text-neutral-500 uppercase">
                      {item.month}
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 tabular-nums">
                      {item.day}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={cn(
                          "truncate text-sm font-medium",
                          muted ? "text-neutral-400" : "text-neutral-900",
                        )}
                      >
                        {item.label}
                      </p>
                      <p
                        className={cn(
                          "shrink-0 text-sm font-medium tabular-nums",
                          muted ? "text-neutral-400" : "text-neutral-900",
                        )}
                      >
                        {item.amount}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Mark ${item.label} as ${item.paid ? "unpaid" : "paid"}`}
                    aria-pressed={Boolean(item.paid)}
                    onClick={() => toggle(item.id)}
                    className={cn(
                      "flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                      item.paid
                        ? "border-sky-500 bg-sky-500 text-white"
                        : "border-neutral-300 bg-white",
                    )}
                  >
                    {item.paid ? <Check size={12} aria-hidden /> : null}
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </article>
    );
  },
);

PaymentScheduleCard.displayName = "PaymentScheduleCard";
