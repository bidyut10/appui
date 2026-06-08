"use client";
import React, { useState } from "react";
import { Search } from "@/icons/Search";
import { X } from "@/icons/X";

export interface SearchBarProps {
  placeholder?: string;
  width?: string;
}

export interface SearchBarWithResultsProps {
  placeholder?: string;
}

export const SearchBarWithResults: React.FC<SearchBarWithResultsProps> = ({
  placeholder = "Search people…",
}) => {
  const [value, setValue] = useState("");
  const results = ["Bidyut Kundu", "John Duo"];
  const filtered = results.filter(
    (r) => r.toLowerCase().includes(value.toLowerCase()) && value,
  );
  return (
    <div className="relative w-64">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="h-9 w-full rounded-full border border-neutral-200 bg-neutral-50 pr-8 pl-9 text-sm text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-2.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-neutral-300"
          >
            <X className="h-2.5 w-2.5 text-neutral-600" />
          </button>
        )}
      </div>
      {filtered.length > 0 && (
        <div className="absolute top-full z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          {filtered.map((r) => (
            <div
              key={r}
              onClick={() => {
                setValue(r);
              }}
              className="flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-medium text-blue-700">
                {r[0]}
              </div>
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
