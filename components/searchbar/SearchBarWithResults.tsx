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
        <Search className="absolute left-3 w-4 h-4 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full h-9 pl-9 pr-8 rounded-full border border-neutral-200 bg-neutral-50 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-2.5 w-4 h-4 rounded-full bg-neutral-300 flex items-center justify-center cursor-pointer"
          >
            <X className="w-2.5 h-2.5 text-neutral-600" />
          </button>
        )}
      </div>
      {filtered.length > 0 && (
        <div className="absolute top-full mt-1.5 w-full bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden z-50">
          {filtered.map((r) => (
            <div
              key={r}
              onClick={() => {
                setValue(r);
              }}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-medium">
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
