import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

/**
 * Dashboard welcome header built with Next.js, React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo user information, avatar, greeting, and stats with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type DashboardWelcomeStat = {
  label: string;
  value: string | number;
};

export type DashboardWelcomeHeaderProps = {
  greeting?: string;
  userName?: string;
  welcomePrefix?: string;
  avatar?: StaticImageData | string;
  avatarAlt?: string;
  stats?: DashboardWelcomeStat[];
} & ComponentPropsWithoutRef<"div">;

const defaultStats: DashboardWelcomeStat[] = [
  { label: "Projects", value: 12 },
  { label: "Tasks", value: 8 },
  { label: "Messages", value: 3 },
];

export const DashboardWelcomeHeader = forwardRef<
  HTMLDivElement,
  DashboardWelcomeHeaderProps
>(
  (
    {
      className,
      greeting = "Good morning",
      userName = "John",
      welcomePrefix = "Welcome back,",
      avatar = profileImage,
      avatarAlt = "User",
      stats = defaultStats,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="dashboard-welcome-header"
      className={cn(
        "w-80 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
            <div
        data-slot="dashboard-welcome-header-profile"
        className="mb-4 flex items-center gap-3"
      >
        <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-neutral-100">
          <Image
            src={avatar}
            alt={avatarAlt}
            width={44}
            height={44}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-[11px] text-neutral-400">{greeting}</p>

          <h3 className="text-base font-semibold text-neutral-900">
            {welcomePrefix} {userName}
          </h3>
        </div>
      </div>

      {/* Stats */}
      <div
        data-slot="dashboard-welcome-header-stats"
        className="grid grid-cols-3 gap-2"
      >
        {(stats ?? []).map(({ label, value }) => (
          <div
            key={label}
            data-slot="dashboard-welcome-header-stat"
            className="rounded-xl bg-neutral-50 p-2.5 text-center"
          >
            <p className="text-lg font-semibold text-neutral-900">
              {typeof value === "number" ? value.toLocaleString() : value}
            </p>

            <p className="text-[10px] text-neutral-400">{label}</p>
          </div>
        ))}
      </div>
    </div>
  ),
);

DashboardWelcomeHeader.displayName = "DashboardWelcomeHeader";
