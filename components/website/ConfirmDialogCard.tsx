"use client";
import React, { useState } from "react";
import { Trash } from "@/icons/Trash";

export const ConfirmDialogCard = () => {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="px-4 py-2 text-xs font-medium border border-neutral-200 rounded-lg hover:bg-neutral-50 cursor-pointer">
        Show dialog
      </button>
    );
  }

  return (
    <div className="w-72 bg-white border border-neutral-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-5 font-sans text-center">
      <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mx-auto mb-4">
        <Trash size={20} className="text-red-500" />
      </div>
      <h4 className="text-sm font-semibold text-neutral-900 mb-1">Delete project?</h4>
      <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
        This will permanently delete &quot;Design System v2&quot; and all its files. This action cannot be undone.
      </p>
      <div className="flex gap-2">
        <button onClick={() => setOpen(false)} className="flex-1 h-9 border border-neutral-200 text-neutral-700 text-xs font-medium rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer">
          Cancel
        </button>
        <button onClick={() => setOpen(false)} className="flex-1 h-9 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};
