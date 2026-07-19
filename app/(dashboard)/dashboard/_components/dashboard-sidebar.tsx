"use client";

import {
  BarChart3,
  Boxes,
  Globe2,
  Inbox,
  LayoutDashboard,
  LogOut,
  Menu,
  RefreshCw,
  X,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { LogoIcon } from "@/app/(marketing)/_components/Logo";
import { siteConfig } from "@/lib/site";

import type { DashboardSection } from "./dashboard-types";

const NAV: Array<{
  id: DashboardSection;
  label: string;
  icon: typeof LayoutDashboard;
  group: "analytics" | "inbox";
}> = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, group: "analytics" },
  { id: "traffic", label: "Traffic", icon: BarChart3, group: "analytics" },
  { id: "components", label: "Components", icon: Boxes, group: "analytics" },
  { id: "geography", label: "Geography", icon: Globe2, group: "analytics" },
  { id: "emails", label: "Emails", icon: Inbox, group: "inbox" },
];

type DashboardSidebarProps = Readonly<{
  section: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
  inboxCount: number;
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}>;

export function DashboardSidebar({
  section,
  onSectionChange,
  inboxCount,
  isOpen,
  onClose,
  onSignOut,
  onRefresh,
  refreshing = false,
}: DashboardSidebarProps) {
  function go(next: DashboardSection) {
    onSectionChange(next);
    onClose();
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-neutral-950/70 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[min(20rem,88vw)] shrink-0 flex-col border-r border-white/[0.04] bg-neutral-950 transition-transform duration-300 ease-out md:static md:z-auto md:w-72 md:translate-x-0 lg:w-80",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/[0.04] px-5 py-3 md:hidden">
          <p className="font-mono text-[10px] tracking-[0.12em] text-neutral-600 uppercase">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-8 items-center justify-center rounded-md text-neutral-500 hover:bg-white/[0.04] hover:text-neutral-300"
          >
            <X size={16} aria-hidden />
          </button>
        </div>

        <div className="hidden items-center gap-2.5 border-b border-white/[0.04] px-5 py-4 md:flex">
          <LogoIcon className="w-6 shrink-0 text-neutral-300" fill="currentColor" />
          <div className="min-w-0">
            <p className="truncate font-sans text-sm font-semibold tracking-tight text-neutral-400">
              {siteConfig.displayName}
            </p>
            <p className="font-mono text-[10px] tracking-[0.12em] text-neutral-600 uppercase">
              Dashboard
            </p>
          </div>
        </div>

        <nav className="scrollbar-hover min-h-0 flex-1 overflow-y-auto px-3 py-4">
          <p className="px-2 pb-2 font-mono text-[10px] tracking-[0.14em] text-neutral-600 uppercase">
            Analytics
          </p>
          <ul className="space-y-0.5">
            {NAV.filter((item) => item.group === "analytics").map((item) => {
              const Icon = item.icon;
              const active = section === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
                      active
                        ? "bg-white/[0.06] text-neutral-300"
                        : "text-neutral-500 hover:bg-white/[0.03] hover:text-neutral-400",
                    )}
                  >
                    <Icon size={15} className="shrink-0" aria-hidden />
                    <span className="font-sans text-sm font-medium">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 px-2 pb-2 font-mono text-[10px] tracking-[0.14em] text-neutral-600 uppercase">
            Inbox
          </p>
          <ul className="space-y-0.5">
            {NAV.filter((item) => item.group === "inbox").map((item) => {
              const Icon = item.icon;
              const active = section === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors",
                      active
                        ? "bg-white/[0.06] text-neutral-300"
                        : "text-neutral-500 hover:bg-white/[0.03] hover:text-neutral-400",
                    )}
                  >
                    <Icon size={15} className="shrink-0" aria-hidden />
                    <span className="min-w-0 flex-1 font-sans text-sm font-medium">
                      {item.label}
                    </span>
                    {inboxCount > 0 ? (
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 font-mono text-[10px] tabular-nums",
                          active
                            ? "bg-rose-800/12 text-rose-700/60"
                            : "bg-rose-800/8 text-rose-700/60",
                        )}
                      >
                        {inboxCount}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-2 border-t border-white/[0.04] p-3">
          {onRefresh ? (
            <button
              type="button"
              onClick={onRefresh}
              disabled={refreshing}
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg bg-white/[0.08] px-2.5 py-2 font-sans text-xs font-medium text-neutral-300 transition-colors hover:bg-white/[0.12] disabled:opacity-60"
            >
              <RefreshCw
                size={14}
                className={cn("shrink-0 text-neutral-300", refreshing && "animate-spin")}
                aria-hidden
              />
              Refresh
            </button>
          ) : null}
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.05] px-2.5 py-2 font-sans text-xs font-medium text-neutral-400 transition-colors hover:border-white/10 hover:text-neutral-200"
          >
            <LogOut size={14} className="shrink-0 text-neutral-400" aria-hidden />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}

export function DashboardMenuButton({
  onClick,
}: Readonly<{ onClick: () => void }>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open navigation"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.05] text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100 md:hidden"
    >
      <Menu size={16} aria-hidden />
    </button>
  );
}
