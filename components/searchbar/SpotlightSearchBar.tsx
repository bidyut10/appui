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
        className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
          focused
            ? "border-violet-300 shadow-[0_0_0_4px_rgba(139,92,246,0.1),0_8px_30px_rgba(139,92,246,0.12)]"
            : "border-neutral-200 shadow-sm"
        } `}
      >
        <div className="absolute inset-0 bg-linear-to-r from-violet-50/80 via-white to-fuchsia-50/80" />
        <div className="relative flex items-center">
          <div className="ml-3.5 flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-sm">
            <Search className="h-3.5 w-3.5 text-white" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder="Spotlight search…"
            className="h-12 flex-1 bg-transparent pr-10 pl-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
          />
          {value ? (
            <button
              onClick={() => setValue("")}
              className="absolute right-3 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-neutral-200/80 transition-colors hover:bg-neutral-300"
            >
              <X className="h-2.5 w-2.5 text-neutral-600" />
            </button>
          ) : (
            <kbd className="absolute right-3 flex h-5 items-center rounded-md border border-neutral-200 bg-white/80 px-1.5 font-mono text-[10px] text-neutral-400">
              /
            </kbd>
          )}
        </div>
      </div>

      {focused && !value && (
        <div className="absolute top-[calc(100%+6px)] z-50 w-full rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg">
          <p className="px-2 py-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            Recent
          </p>
          {recentSearches.map((term) => (
            <div
              key={term}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
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
