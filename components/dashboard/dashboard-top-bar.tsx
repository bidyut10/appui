"use client";

import {
  forwardRef,
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";

import { Bell, Search } from "lucide-react";

import { cn } from "@/lib/cn";

export type DashboardTopBarProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    searchPlaceholder?: string;
    searchValue?: string;
    defaultSearchValue?: string;
    onSearchChange?: (value: string) => void;
    onSearchSubmit?: (value: string) => void;
    notificationCount?: number;
    userName?: string;
    userEmail?: string;
  } & ComponentPropsWithoutRef<"header">
>;

// Dashboard top bar — page title, search, notifications, and user summary.
export const DashboardTopBar = forwardRef<HTMLElement, DashboardTopBarProps>(
  (
    {
      className,
      title = "Dashboard",
      subtitle = "Overview of your workspace",
      searchPlaceholder = "Search reports, customers, invoices…",
      searchValue,
      defaultSearchValue = "",
      onSearchChange,
      onSearchSubmit,
      notificationCount = 3,
      userName = "Bidyut Kundu",
      userEmail = "hello@opensourceui.in",
      ...props
    },
    ref,
  ) => {
    const searchId = useId();
    const [internalSearch, setInternalSearch] = useState(defaultSearchValue);
    const query = searchValue ?? internalSearch;
    const showBadge = notificationCount > 0;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSearchSubmit?.(query);
    };

    return (
      <header
        ref={ref}
        data-slot="dashboard-top-bar"
        className={cn(
          "w-full border-b border-neutral-200 bg-white px-4 py-4 font-sans md:px-6",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <h1 className="font-serif text-2xl leading-none tracking-tight text-neutral-950">
              {title}
            </h1>
            <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
          </div>

          <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center">
            <form onSubmit={handleSubmit} className="relative min-w-0 md:w-72">
              <label htmlFor={searchId} className="sr-only">
                Search dashboard
              </label>
              <Search
                size={15}
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
              />
              <input
                id={searchId}
                type="search"
                value={query}
                placeholder={searchPlaceholder}
                onChange={(event) => {
                  const next = event.target.value;
                  if (searchValue === undefined) {
                    setInternalSearch(next);
                  }
                  onSearchChange?.(next);
                }}
                className="w-full border border-neutral-200 bg-neutral-50 py-2 pr-3 pl-9 text-sm text-neutral-800 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white focus:ring-0"
              />
            </form>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={
                  showBadge
                    ? `${notificationCount} unread notifications`
                    : "Notifications"
                }
                className="relative flex size-9 items-center justify-center border border-neutral-200 bg-white text-neutral-700 transition-colors hover:border-neutral-300 hover:text-neutral-900"
              >
                <Bell size={15} aria-hidden />
                {showBadge ? (
                  <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center bg-neutral-900 font-mono text-[9px] text-white tabular-nums">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                ) : null}
              </button>

              <div className="min-w-0 border-l border-neutral-100 pl-3">
                <p className="truncate text-sm font-medium text-neutral-900">
                  {userName}
                </p>
                <p className="truncate font-mono text-[10px] text-neutral-400">
                  {userEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  },
);

DashboardTopBar.displayName = "DashboardTopBar";
