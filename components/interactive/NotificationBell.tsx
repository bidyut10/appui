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
        className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-sm active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={18}
          height={18}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-600"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-rose-500 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] right-0 z-[100] w-72 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top right" }}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <h4 className="text-sm font-semibold text-neutral-900">
            Notifications
          </h4>
          <button className="cursor-pointer text-[10px] font-medium text-teal-600 hover:underline">
            Mark all read
          </button>
        </div>

        <div className="max-h-52 overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.title}
              className={`flex cursor-pointer items-start gap-3 px-4 py-3 transition-colors hover:bg-neutral-50 ${n.unread ? "bg-teal-50/30" : ""}`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${n.color}`}
              >
                <n.icon size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs leading-snug ${n.unread ? "font-medium text-neutral-900" : "text-neutral-600"}`}
                >
                  {n.title}
                </p>
                <p className="mt-0.5 text-[10px] text-neutral-400">{n.time}</p>
              </div>
              {n.unread && (
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-100 px-4 py-2.5 text-center">
          <button className="cursor-pointer text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
};
