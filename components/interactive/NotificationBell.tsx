"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { UserCheck } from "@/icons/UserCheck";

const notifications = [
  {
    icon: Heart,
    color: "bg-rose-50 text-rose-500",
    title: "Sarah liked your design",
    time: "2m ago",
    unread: true,
  },
  {
    icon: Chat,
    color: "bg-blue-50 text-blue-500",
    title: "New comment on Card UI",
    time: "15m ago",
    unread: true,
  },
  {
    icon: UserCheck,
    color: "bg-emerald-50 text-emerald-500",
    title: "Alex started following you",
    time: "1h ago",
    unread: false,
  },
];

export const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-11 h-11 rounded-xl border border-neutral-200 bg-white flex items-center justify-center hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            {unreadCount}
          </span>
        )}
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] right-0 w-72
          bg-white border border-neutral-200/80 rounded-2xl overflow-hidden
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top right" }}
      >
        <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-neutral-900">Notifications</h4>
          <button className="text-[10px] font-medium text-violet-600 hover:underline cursor-pointer">
            Mark all read
          </button>
        </div>

        <div className="max-h-52 overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.title}
              className={`flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors ${n.unread ? "bg-violet-50/30" : ""}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${n.color}`}>
                <n.icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs leading-snug ${n.unread ? "font-medium text-neutral-900" : "text-neutral-600"}`}>
                  {n.title}
                </p>
                <p className="text-[10px] text-neutral-400 mt-0.5">{n.time}</p>
              </div>
              {n.unread && (
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="px-4 py-2.5 border-t border-neutral-100 text-center">
          <button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
};
