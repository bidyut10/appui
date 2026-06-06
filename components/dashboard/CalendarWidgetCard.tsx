"use client";
import React, { useState } from "react";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const dates = Array.from({ length: 35 }, (_, i) => i + 1);

export const CalendarWidgetCard = () => {
  const [selected, setSelected] = useState(14);

  return (
    <div className="w-80 bg-white border border-neutral-100 shadow-lg rounded-2xl p-4 font-sans">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-neutral-900">June 2026</h4>
        <div className="flex gap-1">
          <button className="w-6 h-6 rounded-md flex items-center justify-center text-neutral-400 hover:bg-neutral-100 cursor-pointer text-xs">‹</button>
          <button className="w-6 h-6 rounded-md flex items-center justify-center text-neutral-400 hover:bg-neutral-100 cursor-pointer text-xs">›</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {days.map((d) => (
          <span key={d} className="text-[9px] font-mono text-neutral-400 text-center py-1">{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {dates.slice(0, 30).map((d) => (
          <button
            key={d}
            onClick={() => setSelected(d)}
            className={`w-7 h-7 rounded-lg text-[11px] font-medium cursor-pointer transition-colors ${
              d === selected ? "bg-neutral-900 text-white" :
              d === 6 ? "bg-violet-50 text-violet-700" :
              "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-neutral-100">
        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">Today</p>
        <div className="flex items-center gap-2 p-2 bg-violet-50 rounded-lg">
          <div className="w-1 h-8 bg-violet-500 rounded-full" />
          <div>
            <p className="text-xs font-medium text-neutral-900">Team Standup</p>
            <p className="text-[10px] text-neutral-500">10:00 AM · 30 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};
