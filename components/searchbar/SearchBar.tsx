"use client";
import { Search } from "@/icons/Search";
import { X } from "@/icons/X";
import React, { useState } from "react";

export interface SearchBarProps {
  placeholder?: string;
  width?: string;
}

export interface SearchBarWithResultsProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search anything…",
  width = "w-56",
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="relative flex items-center">
      <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`${width} h-9 rounded-full border border-neutral-200 bg-neutral-50 pr-8 pl-9 text-sm text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-blue-100`}
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
  );
};
