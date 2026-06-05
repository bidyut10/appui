"use client";
import React, { useState } from "react";

const sections = [
  {
    items: [
      { label: "Airplane Mode", icon: "✈️", toggle: true },
      { label: "Wi-Fi", icon: "📶", value: "Home Network", toggle: false },
      { label: "Bluetooth", icon: "🔵", value: "On", toggle: false },
    ],
  },
  {
    items: [
      { label: "Notifications", icon: "🔔", toggle: false },
      { label: "Sounds & Haptics", icon: "🔊", toggle: false },
      { label: "Focus", icon: "🌙", value: "Do Not Disturb", toggle: false },
    ],
  },
];

export const AppleSettingsList = () => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({ "0-0": false });

  return (
    <div className="w-72 bg-[#f2f2f7] rounded-[1.25rem] p-3 font-sans">
      <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide px-3 mb-2">Settings</p>
      {sections.map((section, si) => (
        <div key={si} className="bg-white rounded-xl overflow-hidden mb-2 shadow-sm">
          {section.items.map((item, ii) => {
            const key = `${si}-${ii}`;
            return (
              <div key={item.label}>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 transition-colors cursor-pointer">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-[15px] text-neutral-900 flex-1 text-left">{item.label}</span>
                  {"value" in item && item.value && (
                    <span className="text-[15px] text-neutral-400">{item.value}</span>
                  )}
                  {item.toggle ? (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setToggles((t) => ({ ...t, [key]: !t[key] }));
                      }}
                      className={`relative w-[51px] h-[31px] rounded-full transition-colors cursor-pointer ${toggles[key] ? "bg-[#34c759]" : "bg-neutral-200"}`}
                    >
                      <div className={`absolute top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow-md transition-transform ${toggles[key] ? "translate-x-[22px]" : "translate-x-[2px]"}`} />
                    </div>
                  ) : (
                    <span className="text-neutral-300 text-lg">›</span>
                  )}
                </button>
                {ii < section.items.length - 1 && <div className="h-px bg-neutral-100 ml-14" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
