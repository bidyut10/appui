"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Clock } from "@/icons/Clock";

const presets = ["Today", "Last 7 days", "Last 30 days", "This month", "Custom range"];
const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const dates = Array.from({ length: 28 }, (_, i) => i + 1);

export const DateRangeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState("Last 7 days");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 h-10 px-3 border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
      >
        <Clock size={14} className="text-neutral-500" />
        <span className="text-xs font-medium text-neutral-700">{preset}</span>
        <ChevronDown className="w-3 h-3 text-neutral-400" />
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] right-0 w-72
          bg-white border border-neutral-200/80 rounded-2xl overflow-hidden
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top right" }}
      >
        <div className="flex">
          <div className="w-28 border-r border-neutral-100 p-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setPreset(p)}
                className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-medium cursor-pointer transition-colors ${
                  preset === p ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex-1 p-3">
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2 text-center">
              June 2026
            </p>
            <div className="grid grid-cols-7 gap-0.5 mb-1">
              {days.map((d) => (
                <span key={d} className="text-[8px] text-neutral-400 text-center font-mono">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0.5">
              {dates.map((d) => (
                <button
                  key={d}
                  className={`w-6 h-6 rounded-md text-[10px] font-medium cursor-pointer transition-colors ${
                    d >= 1 && d <= 7
                      ? "bg-violet-600 text-white"
                      : d === 14
                        ? "bg-violet-100 text-violet-700"
                        : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-3 py-2.5 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-400">Jun 1 — Jun 7, 2026</span>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 bg-neutral-900 text-white text-[10px] font-medium rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
