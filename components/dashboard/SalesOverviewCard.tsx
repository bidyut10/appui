"use client";

import React, { forwardRef, useState } from "react";
import { ChevronUp } from "@/icons/ChevronUp";
import { ChevronDown } from "@/icons/ChevronDown";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const values = [40, 55, 45, 70, 60, 85];
const years = ["2026", "2025", "2024", "2023", "2022"];

export const SalesOverviewCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => {
  const [year, setYear] = useState("2026");
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">
            Sales Overview
          </h4>
          <p className="text-[11px] text-neutral-400 mt-0.5">
            Monthly performance
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <span>{year}</span>

            {open ? (
              <ChevronUp size={12} className="text-neutral-400" />
            ) : (
              <ChevronDown size={12} className="text-neutral-400" />
            )}
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-24 overflow-hidden rounded-xl border border-neutral-700/80 bg-neutral-900 shadow-2xl z-50">
              {years.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setYear(item);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-2.5 text-left text-[10px] font-medium transition-colors cursor-pointer ${
                    year === item
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-300 hover:bg-neutral-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative h-32 flex items-end gap-2">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 240 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d={`M0,${100 - values[0]} ${values
              .map((v, i) => `L${(i / (values.length - 1)) * 240},${100 - v}`)
              .join(" ")} L240,100 L0,100 Z`}
            fill="url(#salesGrad)"
          />

          <polyline
            points={values
              .map((v, i) => `${(i / (values.length - 1)) * 240},${100 - v}`)
              .join(" ")}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="flex justify-between mt-2">
        {months.map((m) => (
          <span key={m} className="text-[9px] font-mono text-neutral-400">
            {m}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100">
        <div>
          <p className="text-[10px] text-neutral-400">Total Sales</p>
          <p className="text-sm font-semibold text-neutral-900">$142,580</p>
        </div>

        <div className="text-right">
          <p className="text-[10px] text-neutral-400">Avg. Order</p>
          <p className="text-sm font-semibold text-neutral-900">$89</p>
        </div>
      </div>
    </div>
  );
});

SalesOverviewCard.displayName = "SalesOverviewCard";
