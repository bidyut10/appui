import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";

import { cn } from "@/lib/utils";

import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { UserCheck } from "@/icons/UserCheck";
import { Star } from "@/icons/Star";

const activities = [
  {
    icon: Heart,
    color: "text-rose-500 bg-rose-50",
    text: "Sarah liked your design",
    time: "2m",
  },
  {
    icon: Chat,
    color: "text-blue-500 bg-blue-50",
    text: "New comment on Card UI",
    time: "15m",
  },
  {
    icon: UserCheck,
    color: "text-emerald-500 bg-emerald-50",
    text: "Alex started following you",
    time: "1h",
  },
  {
    icon: Star,
    color: "text-amber-500 bg-amber-50",
    text: "Your component got featured",
    time: "3h",
  },
];

export const ActivityFeedCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="activity-feed-card"
    className={cn(
      "group w-72 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white font-sans shadow-xl ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
      className,
    )}
    {...props}
  >
    {/* Header */}
    <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold tracking-tight text-neutral-900">
        Activity
      </h4>

      <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
        Today
      </span>
    </div>

    {/* Activity List */}
    <div className="divide-y divide-neutral-100">
      {activities.map(({ icon: Icon, color, text, time }) => (
        <div
          key={text}
          className="flex cursor-pointer items-start gap-3 px-4 py-3 transition-all duration-200 hover:bg-neutral-50"
        >
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-[1.02] ${color.split(" ")[1]}`}
          >
            <Icon
              size={14}
              className={`${color.split(" ")[0]} transition-colors`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs leading-snug font-medium text-neutral-700">
              {text}
            </p>

            <p className="mt-0.5 font-mono text-[10px] text-neutral-400">
              {time} ago
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="flex items-center gap-2 border-t border-neutral-100 bg-neutral-50/50 px-4 py-2.5">
      <div className="h-6 w-6 overflow-hidden rounded-full shadow-sm ring-2 ring-white">
        <Image
          src={profileImage}
          alt="You"
          className="h-full w-full object-cover"
        />
      </div>

      <span className="text-[11px] font-medium text-neutral-500 transition-colors group-hover:text-neutral-700">
        View all activity →
      </span>
    </div>
  </div>
));

ActivityFeedCard.displayName = "ActivityFeedCard";
