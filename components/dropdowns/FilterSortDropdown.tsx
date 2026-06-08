"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";

const sortOptions = [
  "Most Popular",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];
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
    else
      setActiveFilters((prev) => {
        const next = prev.filter((x) => x !== "All");
        return next.includes(f) ? next.filter((x) => x !== f) : [...next, f];
      });
  };

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 text-xs font-medium transition-all hover:border-neutral-300 hover:shadow-sm"
      >
        <svg
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="text-neutral-500"
        >
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
        Filter & Sort
        <span className="rounded-full bg-neutral-900 px-1.5 py-px font-mono text-[9px] text-white">
          {activeFilters.includes("All") ? "All" : activeFilters.length}
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-0 z-[100] w-64 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top left" }}
      >
        <p className="mb-2 px-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Sort By
        </p>
        {sortOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSort(opt)}
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-xs transition-colors ${
              sort === opt
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            {opt}
            {sort === opt && <Check size={12} />}
          </button>
        ))}

        <div className="my-2 h-px bg-neutral-100" />

        <p className="mb-2 px-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Category
        </p>
        <div className="flex flex-wrap gap-1.5 px-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={`cursor-pointer rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors ${
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
