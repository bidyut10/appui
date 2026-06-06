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
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-3 border-b border-neutral-100">
        <h4 className="text-sm font-semibold text-neutral-900">Payment Method</h4>
        <p className="text-[11px] text-neutral-400 mt-0.5">Select how you&apos;d like to pay</p>
      </div>

      <div className="p-3 space-y-2">
        {methods.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
              selected === m.id
                ? "border-neutral-300 bg-neutral-50/50"
                : "border-neutral-100 hover:border-neutral-200"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              selected === m.id ? "border-neutral-800 bg-neutral-800" : "border-neutral-300"
            }`}>
              {selected === m.id && <Check size={10} className="text-white" />}
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-semibold text-neutral-900">{m.label}</p>
              <p className="text-[10px] text-neutral-400 mt-0.5">
                {"last4" in m && m.last4 && `•••• ${m.last4}`}
                {"email" in m && m.email}
                {"device" in m && m.device}
              </p>
            </div>
            {"brand" in m && m.brand && (
              <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                {m.brand}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-xs text-neutral-500">Total</span>
        <span className="text-sm font-semibold text-neutral-900">$29.00/mo</span>
      </div>
    </div>
  );
};
