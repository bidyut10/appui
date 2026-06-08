"use client";
import React, { useState } from "react";
import { Check } from "@/icons/Check";

export const TogglePricingCards = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: yearly ? 0 : 0,
      features: ["10 components", "Community support"],
    },
    {
      name: "Pro",
      price: yearly ? 24 : 29,
      popular: true,
      features: ["50+ components", "Priority support", "Custom themes"],
    },
    {
      name: "Team",
      price: yearly ? 79 : 99,
      features: ["Unlimited", "SSO", "Dedicated support"],
    },
  ];

  return (
    <div className="w-96 font-sans">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span
          className={`text-xs font-medium ${!yearly ? "text-neutral-900" : "text-neutral-400"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors ${yearly ? "bg-neutral-800" : "bg-neutral-200"}`}
        >
          <div
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${yearly ? "translate-x-5.5" : "translate-x-0.5"}`}
          />
        </button>
        <span
          className={`text-xs font-medium ${yearly ? "text-neutral-900" : "text-neutral-400"}`}
        >
          Yearly
          <span className="ml-1 text-[10px] font-semibold text-emerald-600">
            -20%
          </span>
        </span>
      </div>

      <div className="flex gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 rounded-xl border p-3 transition-all ${
              plan.popular
                ? "border-neutral-900 bg-neutral-900 text-white shadow-lg"
                : "border-neutral-100 bg-white"
            }`}
          >
            {plan.popular && (
              <span className="font-mono text-[8px] tracking-wider text-violet-300 uppercase">
                Popular
              </span>
            )}
            <p
              className={`mt-1 text-[10px] font-medium ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}
            >
              {plan.name}
            </p>
            <p className="mt-1 text-lg font-light tracking-tight">
              ${plan.price}
              <span
                className={`text-[10px] ${plan.popular ? "text-neutral-500" : "text-neutral-400"}`}
              >
                /mo
              </span>
            </p>
            <ul className="mt-2 space-y-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`flex items-center gap-1 text-[9px] ${plan.popular ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  <Check
                    size={8}
                    className={
                      plan.popular ? "text-violet-400" : "text-emerald-500"
                    }
                  />
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
