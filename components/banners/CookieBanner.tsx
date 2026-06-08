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
        onClick={() => {
          setVisible(true);
          setAccepted(null);
        }}
        className="cursor-pointer rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
      >
        Show cookie banner
      </button>
    );
  }

  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white font-sans shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
      <div className="p-5">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-50">
            <Settings size={16} className="text-amber-600" />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-semibold text-neutral-900">
              We value your privacy
            </h4>
            <p className="text-[11px] leading-relaxed text-neutral-500">
              We use cookies to enhance your experience, analyze traffic, and
              personalize content. You can customize your preferences below.
            </p>
          </div>
        </div>

        {accepted ? (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
            <Check size={14} className="text-emerald-600" />
            <p className="text-xs font-medium text-emerald-700">
              {accepted === "all"
                ? "All cookies accepted"
                : "Essential cookies only"}
            </p>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setAccepted("all");
                setTimeout(() => setVisible(false), 1200);
              }}
              className="h-9 flex-1 cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
            >
              Accept All
            </button>
            <button
              onClick={() => {
                setAccepted("essential");
                setTimeout(() => setVisible(false), 1200);
              }}
              className="h-9 flex-1 cursor-pointer rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              Essential Only
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-5 py-2.5">
        <button className="cursor-pointer text-[10px] text-neutral-400 transition-colors hover:text-neutral-600">
          Cookie Policy
        </button>
        <button
          onClick={() => setVisible(false)}
          className="cursor-pointer text-[10px] text-neutral-400 transition-colors hover:text-neutral-600"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
