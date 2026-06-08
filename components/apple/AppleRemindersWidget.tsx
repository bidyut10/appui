import React, { forwardRef } from "react";

const lists = [
  {
    name: "Today",
    count: 3,
    color: "bg-[#007AFF]",
    items: [
      "Review design mockups",
      "Ship v2.0 release",
      "Team standup at 10am",
    ],
  },
  { name: "Work", count: 5, color: "bg-[#FF9500]", items: [] },
  { name: "Personal", count: 2, color: "bg-[#34C759]", items: [] },
];

export const AppleRemindersWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-lg shadow-black/5 ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-[17px] font-bold text-neutral-900">Reminders</h4>
      <button className="cursor-pointer text-2xl leading-none font-light text-[#007AFF]">
        +
      </button>
    </div>
    <div className="p-2">
      {lists.map((list) => (
        <div key={list.name} className="mb-1">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className={`h-3 w-3 rounded-full ${list.color}`} />
            <span className="text-[15px] font-semibold text-neutral-900">
              {list.name}
            </span>
            <span className="ml-auto text-[13px] text-neutral-400">
              {list.count}
            </span>
          </div>
          {list.items.map((item) => (
            <div
              key={item}
              className="ml-2 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#f2f2f7]"
            >
              <div className="h-[22px] w-[22px] shrink-0 rounded-full border-2 border-neutral-300" />
              <span className="text-[15px] text-neutral-800">{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
));
AppleRemindersWidget.displayName = "AppleRemindersWidget";
