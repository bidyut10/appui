"use client";
import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";
import React, { useState } from "react";

export const PaginationBar = () => {
  const [page, setPage] = useState(3);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1 font-sans">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-sm transition-colors"
      >
        <ChevronLeft/>
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
            page === p
              ? "bg-neutral-900 text-white shadow-sm"
              : "border border-neutral-200 text-neutral-600 bg-white hover:bg-neutral-50"
          }`}
        >
          {p}
        </button>
      ))}
      <span className="text-neutral-400 text-xs px-1">…</span>
      <button className="w-8 h-8 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:bg-neutral-50 cursor-pointer transition-colors">
        12
      </button>
      <button
        onClick={() => setPage(Math.min(12, page + 1))}
        className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 cursor-pointer text-sm transition-colors"
      >
        <ChevronRight/>
      </button>
    </div>
  );
};
