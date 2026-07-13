"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Link from "next/link";

import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

export type DashboardNavItem = Readonly<{
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
}>;

export type DashboardNavSection = Readonly<{
  label: string;
  items: readonly DashboardNavItem[];
}>;

export type DashboardSidebarNavProps = Readonly<
  {
    brandName?: string;
    brandHref?: string;
    sections?: readonly DashboardNavSection[];
    activeId?: string;
    footerLabel?: string;
  } & ComponentPropsWithoutRef<"aside">
>;

const DEFAULT_SECTIONS: readonly DashboardNavSection[] = [
  {
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", href: "#", icon: LayoutDashboard },
      { id: "analytics", label: "Analytics", href: "#", icon: BarChart3 },
      { id: "customers", label: "Customers", href: "#", icon: Users },
    ],
  },
  {
    label: "Workspace",
    items: [
      { id: "billing", label: "Billing", href: "#", icon: CreditCard },
      { id: "settings", label: "Settings", href: "#", icon: Settings },
    ],
  },
];

function NavItemButton({
  item,
  active,
}: Readonly<{ item: DashboardNavItem; active: boolean }>) {
  const Icon = item.icon ?? LayoutDashboard;
  const className = cn(
    "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
    active
      ? "bg-neutral-900 text-white"
      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
  );

  if (!item.href || item.href === "#") {
    return (
      <button type="button" className={className} aria-current={active ? "page" : undefined}>
        <Icon size={15} aria-hidden />
        {item.label}
      </button>
    );
  }

  return (
    <Link href={item.href} className={className} aria-current={active ? "page" : undefined}>
      <Icon size={15} aria-hidden />
      {item.label}
    </Link>
  );
}

// Dashboard sidebar nav — grouped links for admin panels and SaaS dashboards.
export const DashboardSidebarNav = forwardRef<HTMLElement, DashboardSidebarNavProps>(
  (
    {
      className,
      brandName = "Opensource UI",
      brandHref = "#",
      sections = DEFAULT_SECTIONS,
      activeId = "dashboard",
      footerLabel = "Dashboard navigation",
      ...props
    },
    ref,
  ) => (
    <aside
      ref={ref}
      data-slot="dashboard-sidebar-nav"
      aria-label={footerLabel}
      className={cn(
        "flex w-64 min-w-64 flex-col border-r border-neutral-200 bg-white font-sans",
        className,
      )}
      {...props}
    >
      <div className="border-b border-neutral-100 px-4 py-4">
        {!brandHref || brandHref === "#" ? (
          <button
            type="button"
            className="font-serif text-lg leading-none tracking-tight text-neutral-950"
          >
            {brandName}
          </button>
        ) : (
          <Link
            href={brandHref}
            className="font-serif text-lg leading-none tracking-tight text-neutral-950"
          >
            {brandName}
          </Link>
        )}
      </div>

      <nav className="flex-1 space-y-6 px-3 py-4">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-3 font-mono text-[10px] tracking-[0.16em] text-neutral-400 uppercase">
              {section.label}
            </p>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <NavItemButton item={item} active={item.id === activeId} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  ),
);

DashboardSidebarNav.displayName = "DashboardSidebarNav";
