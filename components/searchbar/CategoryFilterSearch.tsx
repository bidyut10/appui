"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";
import { X } from "@/icons/X";

const categories = ["All", "Design", "Code", "UI"];

export const CategoryFilterSearch = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState("All");

  return (
    <div className="w-72 space-y-3">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Filter components…"
          className="w-full h-10 pl-10 pr-8 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-2.5 w-5 h-5 rounded-md bg-neutral-100 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            <X className="w-3 h-3 text-neutral-500" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer
              ${active === cat
                ? "bg-neutral-900 text-white shadow-sm"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
          {active === "All" ? "24 results" : `8 in ${active}`}
        </span>
        <span className="text-[10px] text-neutral-400">Sorted by relevance</span>
      </div>
    </div>
  );
};
