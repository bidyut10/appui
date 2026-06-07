"use client";
import React, { useState } from "react";
import { Settings } from "@/icons/Settings";
import { Check } from "@/icons/Check";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(true);
  const [accepted, setAccepted] = useState<"all" | "essential" | null>(null);

  if (!visible) {
    return (
      <button
        onClick={() => { setVisible(true); setAccepted(null); }}
        className="px-4 py-2 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
      >
        Show cookie banner
      </button>
    );
  }

  return (
    <div className="w-80 bg-white border border-neutral-200/80 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden font-sans">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-neutral-50 flex items-center justify-center shrink-0">
            <Settings size={16} className="text-amber-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-1">
              We value your privacy
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              We use cookies to enhance your experience, analyze traffic, and
              personalize content. You can customize your preferences below.
            </p>
          </div>
        </div>

        {accepted ? (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
            <Check size={14} className="text-emerald-600" />
            <p className="text-xs text-emerald-700 font-medium">
              {accepted === "all" ? "All cookies accepted" : "Essential cookies only"}
            </p>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => { setAccepted("all"); setTimeout(() => setVisible(false), 1200); }}
              className="flex-1 h-9 bg-neutral-900 text-white text-xs font-medium rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95"
            >
              Accept All
            </button>
            <button
              onClick={() => { setAccepted("essential"); setTimeout(() => setVisible(false), 1200); }}
              className="flex-1 h-9 border border-neutral-200 text-neutral-700 text-xs font-medium rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        )}
      </div>

      <div className="px-5 py-2.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
        <button className="text-[10px] text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer">
          Cookie Policy
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-[10px] text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
