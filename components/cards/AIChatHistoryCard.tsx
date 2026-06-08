import React, { forwardRef } from "react";

export const AIChatHistoryCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">Chat History</h4>
      <button className="cursor-pointer text-[10px] font-medium text-violet-600 hover:underline">
        New chat
      </button>
    </div>
    <div className="max-h-52 divide-y divide-neutral-50 overflow-y-auto">
      {[
        { title: "React component patterns", time: "2m ago", active: true },
        { title: "Tailwind CSS grid layout", time: "1h ago", active: false },
        { title: "API authentication flow", time: "Yesterday", active: false },
        { title: "Design system tokens", time: "2 days ago", active: false },
      ].map((chat) => (
        <div
          key={chat.title}
          className={`cursor-pointer px-4 py-3 transition-colors ${chat.active ? "border-l-2 border-violet-500 bg-violet-50" : "hover:bg-neutral-50"}`}
        >
          <p
            className={`truncate text-xs font-medium ${chat.active ? "text-violet-900" : "text-neutral-800"}`}
          >
            {chat.title}
          </p>
          <p className="mt-0.5 text-[10px] text-neutral-400">{chat.time}</p>
        </div>
      ))}
    </div>
    <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2.5">
      <p className="text-center text-[10px] text-neutral-400">
        4 conversations · Free plan
      </p>
    </div>
  </div>
));
AIChatHistoryCard.displayName = "AIChatHistoryCard";
