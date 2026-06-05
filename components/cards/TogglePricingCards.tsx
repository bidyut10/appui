"use client";
import React, { useState } from "react";
import { Check } from "@/icons/Check";

export const TogglePricingCards = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    { name: "Starter", price: yearly ? 0 : 0, features: ["10 components", "Community support"] },
    { name: "Pro", price: yearly ? 24 : 29, popular: true, features: ["50+ components", "Priority support", "Custom themes"] },
    { name: "Team", price: yearly ? 79 : 99, features: ["Unlimited", "SSO", "Dedicated support"] },
  ];

  return (
    <div className="w-80 font-sans">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={`text-xs font-medium ${!yearly ? "text-neutral-900" : "text-neutral-400"}`}>Monthly</span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${yearly ? "bg-violet-600" : "bg-neutral-200"}`}
        >
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${yearly ? "translate-x-[22px]" : "translate-x-0.5"}`} />
        </button>
        <span className={`text-xs font-medium ${yearly ? "text-neutral-900" : "text-neutral-400"}`}>
          Yearly
          <span className="ml-1 text-[10px] text-emerald-600 font-semibold">-20%</span>
        </span>
      </div>

      <div className="flex gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-3 rounded-xl border transition-all ${
              plan.popular
                ? "bg-neutral-900 border-neutral-900 text-white shadow-lg"
                : "bg-white border-neutral-100"
            }`}
          >
            {plan.popular && (
              <span className="text-[8px] font-mono uppercase tracking-wider text-violet-300">Popular</span>
            )}
            <p className={`text-[10px] font-medium mt-1 ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}>
              {plan.name}
            </p>
            <p className="text-lg font-light tracking-tight mt-1">
              ${plan.price}
              <span className={`text-[10px] ${plan.popular ? "text-neutral-500" : "text-neutral-400"}`}>/mo</span>
            </p>
            <ul className="mt-2 space-y-1">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-1 text-[9px] ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}>
                  <Check size={8} className={plan.popular ? "text-violet-400" : "text-emerald-500"} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
