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
        <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Filter components…"
          className="h-10 w-full rounded-xl border border-neutral-200 bg-white pr-8 pl-10 text-sm text-neutral-900 shadow-sm transition-all outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-2 focus:ring-blue-100"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-2.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md bg-neutral-100 transition-colors hover:bg-neutral-200"
          >
            <X className="h-3 w-3 text-neutral-500" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
              active === cat
                ? "bg-neutral-900 text-white shadow-sm"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            } `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          {active === "All" ? "24 results" : `8 in ${active}`}
        </span>
        <span className="text-[10px] text-neutral-400">
          Sorted by relevance
        </span>
      </div>
    </div>
  );
};
