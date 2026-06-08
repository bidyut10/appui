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
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "0-0": false,
  });

  return (
    <div className="w-72 rounded-[1.25rem] bg-[#f2f2f7] p-3 font-sans">
      <p className="mb-2 px-3 text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
        Settings
      </p>
      {sections.map((section, si) => (
        <div
          key={si}
          className="mb-2 overflow-hidden rounded-xl bg-white shadow-sm"
        >
          {section.items.map((item, ii) => {
            const key = `${si}-${ii}`;
            return (
              <div key={item.label}>
                <button className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-neutral-50">
                  <span className="text-base">{item.icon}</span>
                  <span className="flex-1 text-left text-[15px] text-neutral-900">
                    {item.label}
                  </span>
                  {"value" in item && item.value && (
                    <span className="text-[15px] text-neutral-400">
                      {item.value}
                    </span>
                  )}
                  {item.toggle ? (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setToggles((t) => ({ ...t, [key]: !t[key] }));
                      }}
                      className={`relative h-[31px] w-[51px] cursor-pointer rounded-full transition-colors ${toggles[key] ? "bg-[#34c759]" : "bg-neutral-200"}`}
                    >
                      <div
                        className={`absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md transition-transform ${toggles[key] ? "translate-x-[22px]" : "translate-x-[2px]"}`}
                      />
                    </div>
                  ) : (
                    <span className="text-lg text-neutral-300">›</span>
                  )}
                </button>
                {ii < section.items.length - 1 && (
                  <div className="ml-14 h-px bg-neutral-100" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
