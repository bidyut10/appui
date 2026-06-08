"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";
import { Command } from "@/icons/Command";

export const CommandPaletteSearch = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-72">
      <div
        className={`relative flex items-center rounded-2xl border transition-all duration-300 ${
          focused
            ? "border-neutral-700 bg-neutral-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]"
            : "border-neutral-700/50 bg-neutral-800"
        } `}
      >
        <Search className="pointer-events-none absolute left-4 h-4 w-4 text-neutral-500" />
        <input
          type="text"
          placeholder="Search commands…"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="h-12 w-full bg-transparent pr-24 pl-11 text-sm text-neutral-100 outline-none placeholder:text-neutral-500"
        />
        <div className="absolute right-3 flex items-center gap-1">
          <kbd className="flex h-6 items-center gap-0.5 rounded-md border border-neutral-600 bg-neutral-700/50 px-1.5 font-mono text-[10px] text-neutral-400">
            <Command size={10} />K
          </kbd>
        </div>
      </div>

      {focused && (
        <div className="absolute top-[calc(100%+6px)] z-50 w-full rounded-2xl border border-neutral-700/80 bg-neutral-900 p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
          <p className="px-3 py-1.5 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            Suggestions
          </p>
          {[
            { label: "Go to Dashboard", kbd: "G D" },
            { label: "Create New Project", kbd: "C P" },
            { label: "Open Settings", kbd: "⌘ ," },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-[13px] transition-colors ${
                i === 0
                  ? "bg-neutral-800 text-neutral-100"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
              }`}
            >
              <span>{item.label}</span>
              <kbd className="font-mono text-[10px] text-neutral-600">
                {item.kbd}
              </kbd>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
