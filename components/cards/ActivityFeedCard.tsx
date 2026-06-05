import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { UserCheck } from "@/icons/UserCheck";
import { Star } from "@/icons/Star";

const activities = [
  { icon: Heart, color: "text-rose-500 bg-rose-50", text: "Sarah liked your design", time: "2m" },
  { icon: Chat, color: "text-blue-500 bg-blue-50", text: "New comment on Card UI", time: "15m" },
  { icon: UserCheck, color: "text-emerald-500 bg-emerald-50", text: "Alex started following you", time: "1h" },
  { icon: Star, color: "text-amber-500 bg-amber-50", text: "Your component got featured", time: "3h" },
];

export const ActivityFeedCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-900">Activity</h4>
      <span className="text-[10px] font-mono text-neutral-400">Today</span>
    </div>

    <div className="divide-y divide-neutral-50">
      {activities.map(({ icon: Icon, color, text, time }) => (
        <div key={text} className="flex items-start gap-3 px-4 py-3 hover:bg-neutral-50/50 transition-colors cursor-pointer">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${color.split(" ")[1]}`}>
            <Icon size={14} className={color.split(" ")[0]} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-neutral-700 leading-snug">{text}</p>
            <p className="text-[10px] text-neutral-400 mt-0.5">{time} ago</p>
          </div>
        </div>
      ))}
    </div>

    <div className="px-4 py-2.5 border-t border-neutral-100 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden">
        <Image src={profileImage} alt="You" className="w-full h-full object-cover" />
      </div>
      <span className="text-[11px] text-neutral-400">View all activity →</span>
    </div>
  </div>
));
ActivityFeedCard.displayName = "ActivityFeedCard";
