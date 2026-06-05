"use client";
import React, { useState } from "react";

const settings = [
  { label: "Email notifications", desc: "Receive updates via email", on: true },
  { label: "Push notifications", desc: "Browser push alerts", on: false },
  { label: "Two-factor auth", desc: "Extra security layer", on: true },
  { label: "Dark mode", desc: "Use dark theme", on: false },
];

export const SettingsToggleCard = () => {
  const [toggles, setToggles] = useState(settings.map((s) => s.on));

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-3 border-b border-neutral-100">
        <h4 className="text-sm font-semibold text-neutral-900">Preferences</h4>
        <p className="text-[11px] text-neutral-400 mt-0.5">Manage your account settings</p>
      </div>
      <div className="divide-y divide-neutral-50">
        {settings.map((s, i) => (
          <div key={s.label} className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-xs font-medium text-neutral-800">{s.label}</p>
              <p className="text-[10px] text-neutral-400 mt-0.5">{s.desc}</p>
            </div>
            <button
              onClick={() => setToggles((t) => { const n = [...t]; n[i] = !n[i]; return n; })}
              className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer shrink-0 ${toggles[i] ? "bg-neutral-900" : "bg-neutral-200"}`}
            >
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${toggles[i] ? "translate-x-[22px]" : "translate-x-0.5"}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
