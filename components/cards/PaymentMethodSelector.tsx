"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { Check } from "@/icons/Check";

import { cn } from "@/lib/utils";

/**
 * Payment method selector card built with Next.js,
 * React, TypeScript and Tailwind CSS.
 *
 * Replace the demo payment methods with your own
 * checkout providers.
 *
 * Supports custom methods, amount and default
 * selected payment method.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type PaymentMethod = {
  id: string;
  label: string;

  last4?: string;
  brand?: string;

  email?: string;
  device?: string;
};

export type PaymentMethodSelectorProps = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  description?: string;

  total?: string;

  methods?: PaymentMethod[];
  defaultSelected?: string;
};

const defaultMethods: PaymentMethod[] = [
  {
    id: "card",
    label: "Credit Card",
    last4: "7891",
    brand: "Visa",
  },
  {
    id: "paypal",
    label: "PayPal",
    email: "john@example.com",
  },
  {
    id: "apple",
    label: "Apple Pay",
    device: "iPhone 15",
  },
];

export const PaymentMethodSelector = forwardRef<
  HTMLDivElement,
  PaymentMethodSelectorProps
>(
  (
    {
      className,

      title = "Payment Method",

      description = "Select how you'd like to pay",

      total = "$29.00/mo",

      methods = defaultMethods,
      defaultSelected = "card",

      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(defaultSelected);

    return (
      <div
        ref={ref}
        data-slot="payment-method-selector"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="payment-method-selector-header"
          className="border-b border-neutral-100 px-4 py-3"
        >
          <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

          <p className="mt-0.5 text-[11px] text-neutral-400">{description}</p>
        </div>

        {/* Methods */}
        <div
          data-slot="payment-method-selector-methods"
          className="space-y-2 p-3"
        >
          {methods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelected(method.id)}
              className={cn(
                "flex w-full cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
                selected === method.id
                  ? "border-neutral-300 bg-neutral-50/50"
                  : "border-neutral-100 hover:border-neutral-200",
              )}
            >
              {/* Radio */}
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                  selected === method.id
                    ? "border-neutral-800 bg-neutral-800"
                    : "border-neutral-300",
                )}
              >
                {selected === method.id && (
                  <Check size={10} className="text-white" />
                )}
              </div>

              <div className="flex-1 text-left">
                <p className="text-xs font-semibold text-neutral-900">
                  {method.label}
                </p>

                <p className="mt-0.5 text-[10px] text-neutral-400">
                  {method.last4 && `•••• ${method.last4}`}
                  {method.email}
                  {method.device}
                </p>
              </div>

              {/* Brand */}
              {method.brand && (
                <span className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                  {method.brand}
                </span>
              )}
            </button>
          ))}
        </div>

        <div
          data-slot="payment-method-selector-footer"
          className="flex items-center justify-between border-t border-neutral-100 px-4 py-3"
        >
          <span className="text-xs text-neutral-500">Total</span>

          <span className="text-sm font-semibold text-neutral-900">
            {total}
          </span>
        </div>
      </div>
    );
  },
);

PaymentMethodSelector.displayName = "PaymentMethodSelector";
