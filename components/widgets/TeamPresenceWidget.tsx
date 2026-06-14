"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";


export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  status: "online" | "away" | "busy" | "offline";
};

/**
 * Team presence widget — who's online right now (Slack / Teams style).
 *
 * Replace the demo members with your own team data.
 */
export type TeamPresenceWidgetProps = {
  title?: string;
  onlineCount?: number;
  members?: TeamMember[];
  onMemberClick?: (member: TeamMember) => void;
} & ComponentPropsWithoutRef<"div">;

const statusColors = {
  online: "bg-emerald-500",
  away: "bg-amber-400",
  busy: "bg-rose-500",
  offline: "bg-neutral-300",
};

const defaultMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Design",
    avatar: "/boy.png",
    status: "online",
  },
  {
    id: "2",
    name: "Marcus Webb",
    role: "Engineering",
    avatar: "/boy.png",
    status: "online",
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "Product",
    avatar: "/boy.png",
    status: "away",
  },
  {
    id: "4",
    name: "Alex Rivera",
    role: "QA",
    avatar: "/boy.png",
    status: "busy",
  },
  {
    id: "5",
    name: "John Duo",
    role: "DevOps",
    avatar: "/boy.png",
    status: "offline",
  },
];

export const TeamPresenceWidget = forwardRef<
  HTMLDivElement,
  TeamPresenceWidgetProps
>(
  (
    {
      className,
      title = "Team online",
      onlineCount = 2,
      members = defaultMembers,
      onMemberClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="team-presence-widget"
      className={cn(
        "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-bold text-neutral-900">{title}</p>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {onlineCount} online
        </span>
      </div>

      <div className="space-y-1">
        {members.map((member) => (
          <button
            key={member.id}
            type="button"
            onClick={() => onMemberClick?.(member)}
            data-slot="team-presence-widget-member"
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-neutral-50"
          >
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src={member.avatar ?? "/boy.png"}
                alt={member.name}
                width={36}
                height={36}
                className="h-full w-full rounded-full object-cover"
              />
              <span
                className={cn(
                  "absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full ring-2 ring-white",
                  statusColors[member.status],
                )}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-neutral-900">
                {member.name}
              </p>
              <p className="truncate text-[11px] text-neutral-400 capitalize">
                {member.status} · {member.role}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  ),
);

TeamPresenceWidget.displayName = "TeamPresenceWidget";
