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
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-500 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`h-8 w-8 cursor-pointer rounded-lg text-xs font-medium transition-colors ${
            page === p
              ? "bg-neutral-900 text-white shadow-sm"
              : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
          }`}
        >
          {p}
        </button>
      ))}
      <span className="px-1 text-xs text-neutral-400">…</span>
      <button className="h-8 w-8 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
        12
      </button>
      <button
        onClick={() => setPage(Math.min(12, page + 1))}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-white text-sm text-neutral-500 transition-colors hover:bg-neutral-50"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
