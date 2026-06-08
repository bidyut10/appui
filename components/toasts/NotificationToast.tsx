"use client";
import React, { useState } from "react";
import { Check } from "@/icons/Check";
import { X } from "@/icons/X";

export const NotificationToast = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="cursor-pointer rounded-xl border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
      >
        Show notification
      </button>
    );
  }

  return (
    <div className="flex w-80 items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
        <Check size={16} className="text-emerald-600" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 text-sm font-semibold text-neutral-900">
          Changes saved
        </p>
        <p className="text-xs leading-relaxed text-neutral-500">
          Your component library has been updated successfully.
        </p>
        <div className="mt-2.5 flex items-center gap-3">
          <button className="cursor-pointer text-xs font-medium text-neutral-900 hover:underline">
            View changes
          </button>
          <button className="cursor-pointer text-xs text-neutral-400 hover:text-neutral-600">
            Dismiss
          </button>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        <X size={12} />
      </button>
    </div>
  );
};
