"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";

const sortOptions = ["Most Popular", "Newest", "Price: Low to High", "Price: High to Low"];
const filters = ["All", "Cards", "Dropdowns", "Search", "Sections"];

export const FilterSortDropdown = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("Most Popular");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const toggleFilter = (f: string) => {
    if (f === "All") setActiveFilters(["All"]);
    else setActiveFilters((prev) => {
      const next = prev.filter((x) => x !== "All");
      return next.includes(f) ? next.filter((x) => x !== f) : [...next, f];
    });
  };

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-2 h-10 px-4 text-xs font-medium border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
      >
        <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2} className="text-neutral-500">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
        Filter & Sort
        <span className="px-1.5 py-px bg-neutral-900 text-white text-[9px] font-mono rounded-full">
          {activeFilters.includes("All") ? "All" : activeFilters.length}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] left-0 w-64
          bg-white border border-neutral-200/80 rounded-2xl p-3
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top left" }}
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 px-1">Sort By</p>
        {sortOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
              sort === opt ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            {opt}
            {sort === opt && <Check size={12} />}
          </button>
        ))}

        <div className="h-px bg-neutral-100 my-2" />

        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 px-1">Category</p>
        <div className="flex flex-wrap gap-1.5 px-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium cursor-pointer transition-colors ${
                activeFilters.includes(f)
                  ? "bg-violet-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
