"use client";

import { forwardRef, type ComponentPropsWithoutRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Home } from "@/icons/Home";
import { Folder } from "@/icons/Folder";
import { Settings } from "@/icons/Settings";
import { UserGroup } from "@/icons/UserGroup";
import { Web } from "@/icons/Web";

/*
| Dashboard sidebar card built with React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo navigation links,
| branding, and user information with
| your own application data.
|
| Design remains exactly the same.
*/

export type DashboardSidebarLink = {
  label: string;
  badge?: string | null;
  icon: React.ComponentType<{ size?: number }>;
};

export type DashboardSidebarMiniProps = {
  brandName?: string;
  brandInitial?: string;

  userName?: string;
  userPlan?: string;

  defaultActive?: string;

  links?: DashboardSidebarLink[];
} & ComponentPropsWithoutRef<"div">;

const defaultLinks: DashboardSidebarLink[] = [
  {
    icon: Home,
    label: "Dashboard",
    badge: null,
  },
  {
    icon: Folder,
    label: "Projects",
    badge: "12",
  },
  {
    icon: UserGroup,
    label: "Team",
    badge: null,
  },
  {
    icon: Web,
    label: "Analytics",
    badge: null,
  },
  {
    icon: Settings,
    label: "Settings",
    badge: null,
  },
];

export const DashboardSidebarMini = forwardRef<
  HTMLDivElement,
  DashboardSidebarMiniProps
>(
  (
    {
      className,

      brandName = "AppUI",
      brandInitial = "A",

      userName = "John Doe",
      userPlan = "Pro plan",

      defaultActive = "Dashboard",

      links = defaultLinks,

      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultActive);

    return (
      <div
        ref={ref}
        data-slot="dashboard-sidebar-mini"
        className={cn(
          "w-64 rounded-2xl bg-neutral-950 p-3 font-sans",
          className,
        )}
        {...props}
      >
        {/* Brand */}
        <div
          data-slot="dashboard-sidebar-mini-brand"
          className="mb-3 flex items-center gap-2 px-2 py-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
            <span className="text-[10px] font-bold text-neutral-900">
              {brandInitial}
            </span>
          </div>

          <span className="text-sm font-semibold text-white">{brandName}</span>
        </div>

        {/* Navigation */}
        <nav data-slot="dashboard-sidebar-mini-nav" className="space-y-0.5">
          {links.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(label)}
              data-slot="dashboard-sidebar-mini-link"
              data-active={active === label}
              className={cn(
                "flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-all",
                active === label
                  ? "bg-white/10 text-white"
                  : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300",
              )}
            >
              <Icon size={15} />

              <span>{label}</span>

              {badge && (
                <span
                  data-slot="dashboard-sidebar-mini-badge"
                  className="ml-auto rounded-full bg-green-500 px-1 pt-1 pb-0.5 font-mono text-[9px] text-white"
                >
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div
          data-slot="dashboard-sidebar-mini-user"
          className="mt-4 border-t border-neutral-800 px-2 pt-3"
        >
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-linear-to-br from-green-400 to-cyan-400" />

            <div>
              <p className="text-[10px] font-medium text-white">{userName}</p>

              <p className="text-[9px] text-neutral-500">{userPlan}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

DashboardSidebarMini.displayName = "DashboardSidebarMini";
