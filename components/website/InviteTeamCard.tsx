"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { UserGroup } from "@/icons/UserGroup";
import { Mail } from "@/icons/Mail";
import { ChevronUp } from "@/icons/ChevronUp";
import { ChevronDown } from "@/icons/ChevronDown";

/**
 * Invite Team Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type TeamMember = {
  initials: string;
};

export type InviteTeamCardProps = {
  title?: string;

  description?: string;

  usedSeats?: number;

  totalSeats?: number;

  members?: TeamMember[];

  roles?: string[];

  defaultRole?: string;

  inviteLabel?: string;

  placeholder?: string;

  successMessage?: string;

  onInvite?: (email: string, role: string) => void;

  onRoleChange?: (role: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMembers: TeamMember[] = [
  { initials: "JD" },
  { initials: "SK" },
  { initials: "MR" },
];

const defaultRoles = ["Member", "Admin", "Viewer"];

export const InviteTeamCard = forwardRef<HTMLDivElement, InviteTeamCardProps>(
  (
    {
      className,

      title = "Invite Team",

      description,

      usedSeats = 3,

      totalSeats = 5,

      members = defaultMembers,

      roles = defaultRoles,

      defaultRole = "Member",

      inviteLabel = "Invite",

      placeholder = "colleague@company.com",

      successMessage = "Invitation sent to",

      onInvite,

      onRoleChange,

      ...props
    },
    ref,
  ) => {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const [role, setRole] = useState(defaultRole);
    const [openRole, setOpenRole] = useState(false);

    const remainingSeats = Math.max(totalSeats - members.length, 0);

    return (
      <div
        ref={ref}
        data-slot="invite-team-card"
        className={cn(
          "w-84 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="invite-team-card-header"
          className="mb-4 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50">
            <UserGroup size={18} className="text-neutral-600" />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>

            <p className="text-[11px] text-neutral-400">
              {description ?? `${usedSeats} of ${totalSeats} seats used`}
            </p>
          </div>
        </div>

        <div
          data-slot="invite-team-card-members"
          className="mb-4 flex -space-x-2"
        >
          {members.map((member) => (
            <div
              key={member.initials}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-green-500 to-cyan-500 text-[9px] font-bold text-white"
            >
              {member.initials}
            </div>
          ))}

          {remainingSeats > 0 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-[10px] text-neutral-400">
              +{remainingSeats}
            </div>
          )}
        </div>

        {sent ? (
          <div
            data-slot="invite-team-card-success"
            className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center text-xs font-medium text-emerald-700"
          >
            {successMessage} {email}
          </div>
        ) : (
          <div data-slot="invite-team-card-form" className="flex gap-2">
            <div className="relative flex-1">
              <Mail
                size={13}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 pr-3 pl-9 text-xs transition-all outline-none focus:border-neutral-300"
              />
            </div>

            <button
              onClick={() => {
                if (!email) return;

                setSent(true);
                onInvite?.(email, role);
              }}
              className="h-9 shrink-0 cursor-pointer rounded-lg bg-neutral-900 px-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {inviteLabel}
            </button>
          </div>
        )}

        <div
          data-slot="invite-team-card-role-selector"
          className="relative mt-2"
        >
          <button
            onClick={() => setOpenRole((v) => !v)}
            className="flex h-8 w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-[11px] text-neutral-600 transition-colors hover:bg-neutral-100"
          >
            <span>{role}</span>

            {openRole ? (
              <ChevronUp size={12} className="text-neutral-400" />
            ) : (
              <ChevronDown size={12} className="text-neutral-400" />
            )}
          </button>

          {openRole && (
            <div className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-xl">
              {roles.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-label={`Select role ${item}`}
                  onClick={() => {
                    setRole(item);
                    setOpenRole(false);
                    onRoleChange?.(item);
                  }}
                  className={cn(
                    "w-full cursor-pointer px-3 py-2.5 text-left text-[11px] font-medium transition-colors",
                    role === item
                      ? "bg-neutral-100 text-neutral-900"
                      : "text-neutral-600 hover:bg-neutral-50",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

InviteTeamCard.displayName = "InviteTeamCard";
