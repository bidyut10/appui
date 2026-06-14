"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { ArrowRight } from "@/icons/ArrowRight";
import { Chat } from "@/icons/Chat";
import { Heart } from "@/icons/Heart";
import { Star } from "@/icons/Star";
import { UserCheck } from "@/icons/UserCheck";


/**
 * Activity feed card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo activities, header, and footer with your own content.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type ActivityFeedItem = {
  id?: string;
  icon?: ReactNode;
  color?: string;
  text?: string;
  time?: string;
};

export type ActivityFeedCardProps = {
  title?: string;
  period?: string;

  activities?: ActivityFeedItem[];

  footerText?: string;
  footerAvatar?: string;
  footerAvatarAlt?: string;

  footerIcon?: ReactNode;

  onViewAllClick?: () => void;
  onActivityClick?: (item: ActivityFeedItem, index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultActivities: ActivityFeedItem[] = [
  {
    id: "like",
    icon: <Heart size={14} className="text-rose-500 transition-colors" />,
    color: "text-rose-500 bg-rose-50",
    text: "Sarah liked your design",
    time: "2m",
  },
  {
    id: "comment",
    icon: <Chat size={14} className="text-blue-500 transition-colors" />,
    color: "text-blue-500 bg-blue-50",
    text: "New comment on Card UI",
    time: "15m",
  },
  {
    id: "follow",
    icon: (
      <UserCheck size={14} className="text-emerald-500 transition-colors" />
    ),
    color: "text-emerald-500 bg-emerald-50",
    text: "Alex started following you",
    time: "1h",
  },
  {
    id: "featured",
    icon: <Star size={14} className="text-amber-500 transition-colors" />,
    color: "text-amber-500 bg-amber-50",
    text: "Your component got featured",
    time: "3h",
  },
];

export const ActivityFeedCard = forwardRef<
  HTMLDivElement,
  ActivityFeedCardProps
>(
  (
    {
      className,

      title = "Activity",
      period = "Today",

      activities = defaultActivities,

      footerText = "View all activity",
      footerAvatar = "/boy.png",
      footerAvatarAlt = "You",

      footerIcon,

      onViewAllClick,
      onActivityClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="activity-feed-card"
      className={cn(
        "group w-72 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white font-sans shadow-lg ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
        className,
      )}
      {...props}
    >
      <div
        data-slot="activity-feed-card-header"
        className="flex items-center justify-between border-b border-neutral-100 px-4 py-3"
      >
        <h4 className="text-sm font-semibold tracking-tight text-neutral-900">
          {title}
        </h4>

        <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
          {period}
        </span>
      </div>

      {/* Activity list */}
      <div
        data-slot="activity-feed-card-list"
        className="divide-y divide-neutral-100"
      >
        {activities.length === 0 ? (
          <p className="px-4 py-6 text-center text-xs text-neutral-400">
            No recent activity
          </p>
        ) : (
          activities.map((item, index) => {
            const colorParts = (
              item.color ?? "text-neutral-500 bg-neutral-50"
            ).split(" ");
            const iconClass = colorParts[0] ?? "text-neutral-500";
            const bgClass = colorParts[1] ?? "bg-neutral-50";
            const itemKey = item.id ?? item.text ?? String(index);

            return (
              <button
                key={itemKey}
                type="button"
                aria-label={item.text ?? "Activity item"}
                onClick={
                  onActivityClick
                    ? () => onActivityClick(item, index)
                    : undefined
                }
                className="flex w-full cursor-pointer items-start gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-neutral-50"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-[1.02]",
                    bgClass,
                  )}
                >
                  {item.icon ?? (
                    <Heart
                      size={14}
                      className={cn(iconClass, "transition-colors")}
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs leading-snug font-medium text-neutral-700">
                    {item.text}
                  </p>

                  <p className="mt-0.5 font-mono text-[10px] text-neutral-400">
                    {item.time} ago
                  </p>
                </div>
              </button>
            );
          })
        )}
      </div>

      <button
        type="button"
        data-slot="activity-feed-card-footer"
        aria-label={footerText}
        onClick={onViewAllClick}
        className="flex w-full cursor-pointer items-center gap-2 border-t border-neutral-100 bg-neutral-50/50 px-4 py-2.5 text-left"
      >
        <div className="relative h-6 w-6 overflow-hidden rounded-full shadow-sm ring-2 ring-white">
          <Image
            src={footerAvatar}
            alt={footerAvatarAlt}
            fill
            sizes="24px"
            className="object-cover"
          />
        </div>

        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 transition-colors group-hover:text-neutral-700">
          {footerText}
          {footerIcon ?? <ArrowRight size={12} className="shrink-0" />}
        </span>
      </button>
    </div>
  ),
);

ActivityFeedCard.displayName = "ActivityFeedCard";
