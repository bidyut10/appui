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
        className="px-4 py-2 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer"
      >
        Show notification
      </button>
    );
  }

  return (
    <div className="w-80 flex items-start gap-3 p-4 bg-white border border-neutral-200/80 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]">
      <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
        <Check size={16} className="text-emerald-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-neutral-900 mb-0.5">
          Changes saved
        </p>
        <p className="text-xs text-neutral-500 leading-relaxed">
          Your component library has been updated successfully.
        </p>
        <div className="flex items-center gap-3 mt-2.5">
          <button className="text-xs font-medium text-neutral-900 hover:underline cursor-pointer">
            View changes
          </button>
          <button className="text-xs text-neutral-400 hover:text-neutral-600 cursor-pointer">
            Dismiss
          </button>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="w-6 h-6 rounded-lg flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors cursor-pointer shrink-0"
      >
        <X size={12} />
      </button>
    </div>
  );
};
