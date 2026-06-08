"use client";
import React, { useState } from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const dates = Array.from({ length: 35 }, (_, i) => i + 1);

export const CalendarWidgetCard = () => {
  const [selected, setSelected] = useState(14);

  return (
    <div className="w-80 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-neutral-900">June 2026</h4>
        <div className="flex gap-1">
          <button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-xs text-neutral-400 hover:bg-neutral-100">
            ‹
          </button>
          <button className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-xs text-neutral-400 hover:bg-neutral-100">
            ›
          </button>
        </div>
      </div>
      <div className="mb-1 grid grid-cols-7 gap-0.5">
        {days.map((d) => (
          <span
            key={d}
            className="py-1 text-center font-mono text-[9px] text-neutral-400"
          >
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {dates.slice(0, 30).map((d) => (
          <button
            key={d}
            onClick={() => setSelected(d)}
            className={`h-7 w-7 cursor-pointer rounded-lg text-[11px] font-medium transition-colors ${
              d === selected
                ? "bg-neutral-900 text-white"
                : d === 6
                  ? "bg-violet-50 text-violet-700"
                  : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="mt-3 border-t border-neutral-100 pt-3">
        <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          Today
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-violet-50 p-2">
          <div className="h-8 w-1 rounded-full bg-violet-500" />
          <div>
            <p className="text-xs font-medium text-neutral-900">Team Standup</p>
            <p className="text-[10px] text-neutral-500">10:00 AM · 30 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};
