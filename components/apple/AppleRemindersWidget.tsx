import React, { forwardRef } from "react";

const lists = [
  { name: "Today", count: 3, color: "bg-[#007AFF]", items: ["Review design mockups", "Ship v2.0 release", "Team standup at 10am"] },
  { name: "Work", count: 5, color: "bg-[#FF9500]", items: [] },
  { name: "Personal", count: 2, color: "bg-[#34C759]", items: [] },
];

export const AppleRemindersWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white rounded-[1.25rem] overflow-hidden shadow-lg shadow-black/5 font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-[17px] font-bold text-neutral-900">Reminders</h4>
      <button className="text-[#007AFF] text-2xl font-light cursor-pointer leading-none">+</button>
    </div>
    <div className="p-2">
      {lists.map((list) => (
        <div key={list.name} className="mb-1">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className={`w-3 h-3 rounded-full ${list.color}`} />
            <span className="text-[15px] font-semibold text-neutral-900">{list.name}</span>
            <span className="text-[13px] text-neutral-400 ml-auto">{list.count}</span>
          </div>
          {list.items.map((item) => (
            <div key={item} className="flex items-center gap-3 px-2 py-2 ml-2 hover:bg-[#f2f2f7] rounded-lg cursor-pointer transition-colors">
              <div className="w-[22px] h-[22px] rounded-full border-2 border-neutral-300 shrink-0" />
              <span className="text-[15px] text-neutral-800">{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
));
AppleRemindersWidget.displayName = "AppleRemindersWidget";
