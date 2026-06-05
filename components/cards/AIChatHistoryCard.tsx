import React, { forwardRef } from "react";

export const AIChatHistoryCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-900">Chat History</h4>
      <button className="text-[10px] font-medium text-violet-600 hover:underline cursor-pointer">New chat</button>
    </div>
    <div className="divide-y divide-neutral-50 max-h-52 overflow-y-auto">
      {[
        { title: "React component patterns", time: "2m ago", active: true },
        { title: "Tailwind CSS grid layout", time: "1h ago", active: false },
        { title: "API authentication flow", time: "Yesterday", active: false },
        { title: "Design system tokens", time: "2 days ago", active: false },
      ].map((chat) => (
        <div key={chat.title} className={`px-4 py-3 cursor-pointer transition-colors ${chat.active ? "bg-violet-50 border-l-2 border-violet-500" : "hover:bg-neutral-50"}`}>
          <p className={`text-xs font-medium truncate ${chat.active ? "text-violet-900" : "text-neutral-800"}`}>{chat.title}</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">{chat.time}</p>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-100">
      <p className="text-[10px] text-neutral-400 text-center">4 conversations · Free plan</p>
    </div>
  </div>
));
AIChatHistoryCard.displayName = "AIChatHistoryCard";
