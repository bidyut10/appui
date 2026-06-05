"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";
import { Command } from "@/icons/Command";

export const CommandPaletteSearch = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-72">
      <div
        className={`
          relative flex items-center rounded-2xl border transition-all duration-300
          ${focused
            ? "bg-neutral-900 border-neutral-700 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]"
            : "bg-neutral-800 border-neutral-700/50"
          }
        `}
      >
        <Search className="absolute left-4 w-4 h-4 text-neutral-500 pointer-events-none" />
        <input
          type="text"
          placeholder="Search commands…"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full h-12 pl-11 pr-24 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 outline-none"
        />
        <div className="absolute right-3 flex items-center gap-1">
          <kbd className="h-6 px-1.5 flex items-center gap-0.5 rounded-md border border-neutral-600 bg-neutral-700/50 font-mono text-[10px] text-neutral-400">
            <Command size={10} />
            K
          </kbd>
        </div>
      </div>

      {focused && (
        <div className="absolute top-[calc(100%+6px)] w-full bg-neutral-900 border border-neutral-700/80 rounded-2xl p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-50">
          <p className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            Suggestions
          </p>
          {[
            { label: "Go to Dashboard", kbd: "G D" },
            { label: "Create New Project", kbd: "C P" },
            { label: "Open Settings", kbd: "⌘ ," },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] cursor-pointer transition-colors ${
                i === 0
                  ? "bg-neutral-800 text-neutral-100"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
              }`}
            >
              <span>{item.label}</span>
              <kbd className="font-mono text-[10px] text-neutral-600">{item.kbd}</kbd>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
