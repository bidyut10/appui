"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
} from "react";

import { cn } from "@/lib/utils";

import { Home } from "@/icons/Home";
import { Folder } from "@/icons/Folder";
import { Settings } from "@/icons/Settings";
import { User } from "@/icons/User";

export type GlassNavbarLink = {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  badge?: string;
};

/**
 * Glass morphism navbar built with React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo links, logo, and navigation items
 * with your own navbar configuration.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GlassNavbarProps = {
  logoLetter?: string;
  links?: GlassNavbarLink[];
  defaultActive?: string;
  profileAriaLabel?: string;
} & ComponentPropsWithoutRef<"nav">;

const defaultLinks: GlassNavbarLink[] = [
  { label: "Home", icon: Home },
  { label: "Projects", icon: Folder, badge: "3" },
  { label: "Settings", icon: Settings },
];

export const GlassNavbar = forwardRef<HTMLElement, GlassNavbarProps>(
  (
    {
      className,
      logoLetter = "A",
      links = defaultLinks,
      defaultActive = "Home",
      profileAriaLabel = "Open profile menu",
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(defaultActive);

    return (
      <nav
        ref={ref}
        data-slot="glass-navbar"
        aria-label="Main navigation"
        className={cn(
          "flex w-80 items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/70 px-2 py-2 font-sans shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl",
          className,
        )}
        {...props}
      >
        <div data-slot="glass-navbar-links" className="flex items-center gap-1">
          <div
            data-slot="glass-navbar-logo"
            className="mr-1 flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900"
          >
            <span className="text-xs font-bold text-white">{logoLetter}</span>
          </div>
          {links.map(({ label, icon: Icon, badge }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-current={active === label ? "page" : undefined}
              onClick={() => setActive(label)}
              data-slot="glass-navbar-link"
              className={cn(
                "relative flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200",
                active === label
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-500 hover:bg-neutral-100/80 hover:text-neutral-900",
              )}
            >
              <Icon size={13} />
              {label}
              {badge && active !== label && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[8px] font-bold text-white">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={profileAriaLabel}
          data-slot="glass-navbar-profile"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-neutral-100 transition-colors hover:bg-neutral-200"
        >
          <User size={14} className="text-neutral-600" />
        </button>
      </nav>
    );
  },
);

GlassNavbar.displayName = "GlassNavbar";
