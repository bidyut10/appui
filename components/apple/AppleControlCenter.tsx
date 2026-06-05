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
    <div className="w-72 bg-black/40 backdrop-blur-3xl rounded-[2rem] p-4 font-sans border border-white/10">
      <div className="grid grid-cols-4 gap-3">
        {controls.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setStates((s) => { const n = [...s]; n[i] = !n[i]; return n; })}
            className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all active:scale-95`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-colors ${
              states[i] ? c.color : "bg-white/15"
            }`}>
              {c.icon}
            </div>
            <span className="text-[9px] text-white/60 font-medium">{c.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 p-3 bg-white/10 rounded-2xl">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">🔆</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full"><div className="h-full w-[70%] bg-white rounded-full" /></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🔊</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full"><div className="h-full w-[45%] bg-white rounded-full" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};
