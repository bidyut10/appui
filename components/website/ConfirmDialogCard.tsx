"use client";
import React, { useState } from "react";
import { Trash } from "@/icons/Trash";

export const ConfirmDialogCard = () => {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium hover:bg-neutral-50"
      >
        Show dialog
      </button>
    );
  }

  return (
    <div className="w-72 rounded-2xl border border-neutral-200 bg-white p-5 text-center font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
        <Trash size={20} className="text-red-500" />
      </div>
      <h4 className="mb-1 text-sm font-semibold text-neutral-900">
        Delete project?
      </h4>
      <p className="mb-5 text-[11px] leading-relaxed text-neutral-500">
        This will permanently delete &quot;Design System v2&quot; and all its
        files. This action cannot be undone.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setOpen(false)}
          className="h-9 flex-1 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Cancel
        </button>
        <button
          onClick={() => setOpen(false)}
          className="h-9 flex-1 cursor-pointer rounded-lg bg-red-500 text-xs font-medium text-white transition-colors hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
