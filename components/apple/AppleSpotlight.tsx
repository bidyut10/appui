"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";

const results = [
  { icon: "📱", title: "Settings", sub: "System Preferences" },
  { icon: "📝", title: "Notes", sub: "Application" },
  { icon: "🗺️", title: "Maps", sub: "Find locations" },
];

export const AppleSpotlight = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-80 font-sans">
      <div className={`bg-white/70 backdrop-blur-2xl border rounded-2xl shadow-2xl shadow-black/20 overflow-hidden transition-all ${focused ? "border-neutral-300" : "border-white/60"}`}>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100/80">
          <Search size={16} className="text-neutral-400 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Spotlight Search"
            className="flex-1 bg-transparent text-[15px] text-neutral-900 placeholder:text-neutral-400 outline-none"
          />
          <kbd className="text-[10px] font-mono text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">⌘ Space</kbd>
        </div>
        {(focused || query) && (
          <div className="py-2">
            {results.filter((r) => !query || r.title.toLowerCase().includes(query.toLowerCase())).map((r, i) => (
              <div key={r.title} className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer ${i === 0 ? "bg-[#007AFF]/10" : "hover:bg-neutral-50"}`}>
                <span className="text-lg">{r.icon}</span>
                <div>
                  <p className={`text-[13px] ${i === 0 ? "font-semibold text-[#007AFF]" : "text-neutral-800"}`}>{r.title}</p>
                  <p className="text-[11px] text-neutral-400">{r.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
