"use client"
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
      <Search className="absolute left-3 w-4 h-4 text-neutral-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`${width} h-9 pl-9 pr-8 rounded-full border border-neutral-200 bg-neutral-50 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all`}
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
  );
};
