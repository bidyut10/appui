"use client";
import React, { useState } from "react";
import { Check } from "@/icons/Check";

const methods = [
  { id: "card", label: "Credit Card", last4: "7891", brand: "Visa" },
  { id: "paypal", label: "PayPal", email: "john@example.com" },
  { id: "apple", label: "Apple Pay", device: "iPhone 15" },
];

export const PaymentMethodSelector = () => {
  const [selected, setSelected] = useState("card");

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="border-b border-neutral-100 px-4 py-3">
        <h4 className="text-sm font-semibold text-neutral-900">
          Payment Method
        </h4>
        <p className="mt-0.5 text-[11px] text-neutral-400">
          Select how you&apos;d like to pay
        </p>
      </div>

      <div className="space-y-2 p-3">
        {methods.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m.id)}
            className={`flex w-full cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all ${
              selected === m.id
                ? "border-neutral-300 bg-neutral-50/50"
                : "border-neutral-100 hover:border-neutral-200"
            }`}
          >
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                selected === m.id
                  ? "border-neutral-800 bg-neutral-800"
                  : "border-neutral-300"
              }`}
            >
              {selected === m.id && <Check size={10} className="text-white" />}
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold text-neutral-900">
                {m.label}
              </p>
              <p className="mt-0.5 text-[10px] text-neutral-400">
                {"last4" in m && m.last4 && `•••• ${m.last4}`}
                {"email" in m && m.email}
                {"device" in m && m.device}
              </p>
            </div>
            {"brand" in m && m.brand && (
              <span className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                {m.brand}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3">
        <span className="text-xs text-neutral-500">Total</span>
        <span className="text-sm font-semibold text-neutral-900">
          $29.00/mo
        </span>
      </div>
    </div>
  );
};
