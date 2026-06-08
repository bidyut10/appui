"use client";
import React, { useState } from "react";

const controls = [
  { icon: "✈️", label: "Airplane", active: false, color: "bg-orange-500" },
  { icon: "📶", label: "Wi-Fi", active: true, color: "bg-[#007AFF]" },
  { icon: "🔵", label: "Bluetooth", active: true, color: "bg-[#007AFF]" },
  { icon: "📱", label: "Cellular", active: true, color: "bg-[#007AFF]" },
  { icon: "🔦", label: "Flashlight", active: false, color: "bg-neutral-600" },
  { icon: "📷", label: "Camera", active: false, color: "bg-neutral-600" },
  { icon: "🧮", label: "Calculator", active: false, color: "bg-neutral-600" },
  { icon: "🎵", label: "Music", active: false, color: "bg-neutral-600" },
];

export const AppleControlCenter = () => {
  const [states, setStates] = useState(controls.map((c) => c.active));

  return (
    <div className="w-72 rounded-[2rem] border border-white/10 bg-black/40 p-4 font-sans backdrop-blur-3xl">
      <div className="grid grid-cols-4 gap-3">
        {controls.map((c, i) => (
          <button
            key={c.label}
            onClick={() =>
              setStates((s) => {
                const n = [...s];
                n[i] = !n[i];
                return n;
              })
            }
            className={`flex cursor-pointer flex-col items-center gap-1.5 transition-all active:scale-95`}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl transition-colors ${
                states[i] ? c.color : "bg-white/15"
              }`}
            >
              {c.icon}
            </div>
            <span className="text-[9px] font-medium text-white/60">
              {c.label}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-3">
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm">🔆</span>
            <div className="h-1 flex-1 rounded-full bg-white/20">
              <div className="h-full w-[70%] rounded-full bg-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🔊</span>
            <div className="h-1 flex-1 rounded-full bg-white/20">
              <div className="h-full w-[45%] rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
