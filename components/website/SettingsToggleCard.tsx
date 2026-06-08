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
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="border-b border-neutral-100 px-4 py-3">
        <h4 className="text-sm font-semibold text-neutral-900">Preferences</h4>
        <p className="mt-0.5 text-[11px] text-neutral-400">
          Manage your account settings
        </p>
      </div>
      <div className="divide-y divide-neutral-50">
        {settings.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center justify-between px-4 py-3"
          >
            <div>
              <p className="text-xs font-medium text-neutral-800">{s.label}</p>
              <p className="mt-0.5 text-[10px] text-neutral-400">{s.desc}</p>
            </div>
            <button
              onClick={() =>
                setToggles((t) => {
                  const n = [...t];
                  n[i] = !n[i];
                  return n;
                })
              }
              className={`relative h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors ${toggles[i] ? "bg-neutral-900" : "bg-neutral-200"}`}
            >
              <div
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${toggles[i] ? "translate-x-[22px]" : "translate-x-0.5"}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
