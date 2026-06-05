"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";
import { Clock } from "@/icons/Clock";
import { X } from "@/icons/X";

const recentSearches = ["Card components", "Dropdown menu", "Search bar"];

export const SpotlightSearchBar = () => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-72">
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-300
          ${focused
            ? "border-violet-300 shadow-[0_0_0_4px_rgba(139,92,246,0.1),0_8px_30px_rgba(139,92,246,0.12)]"
            : "border-neutral-200 shadow-sm"
          }
        `}
      >
        <div className="absolute inset-0 bg-linear-to-r from-violet-50/80 via-white to-fuchsia-50/80" />
        <div className="relative flex items-center">
          <div className="ml-3.5 w-8 h-8 rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm">
            <Search className="w-3.5 h-3.5 text-white" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder="Spotlight search…"
            className="flex-1 h-12 pl-3 pr-10 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
          />
          {value ? (
            <button
              onClick={() => setValue("")}
              className="absolute right-3 w-5 h-5 rounded-full bg-neutral-200/80 flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
            >
              <X className="w-2.5 h-2.5 text-neutral-600" />
            </button>
          ) : (
            <kbd className="absolute right-3 h-5 px-1.5 flex items-center rounded-md border border-neutral-200 bg-white/80 font-mono text-[10px] text-neutral-400">
              /
            </kbd>
          )}
        </div>
      </div>

      {focused && !value && (
        <div className="absolute top-[calc(100%+6px)] w-full bg-white border border-neutral-200 rounded-2xl p-2 shadow-lg z-50">
          <p className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            Recent
          </p>
          {recentSearches.map((term) => (
            <div
              key={term}
              className="flex items-center gap-2.5 px-2 py-2 rounded-xl text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer transition-colors"
            >
              <Clock size={13} className="text-neutral-400" />
              {term}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
