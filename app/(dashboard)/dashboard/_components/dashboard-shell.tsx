import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { LogoIcon } from "@/app/(marketing)/_components/Logo";

type DashboardShellProps = Readonly<{
  children: ReactNode;
  /** Optional right-side header controls (tabs / actions). */
  headerRight?: ReactNode;
}>;

export function DashboardShell({ children, headerRight }: DashboardShellProps) {
  return (
    <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-neutral-50 selection:bg-neutral-800 selection:text-white">
      <header className="z-20 shrink-0 border-b border-neutral-200/80 bg-white">
        <div className="flex h-14 w-full items-center justify-between gap-3 px-3 md:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <LogoIcon className="w-5 shrink-0" />
            <div className="min-w-0">
              <p className="truncate font-sans text-sm font-semibold tracking-tight text-neutral-900">
                {siteConfig.displayName}
              </p>
              <p className="hidden font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase md:block">
                Analytics
              </p>
            </div>
          </div>
          {headerRight ? (
            <div className="flex min-w-0 items-center gap-2 md:gap-3">
              {headerRight}
            </div>
          ) : null}
        </div>
      </header>

      {/* Mobile: page scrolls. md+: fixed viewport, panels scroll inside. */}
      <main className="scrollbar-hover min-h-0 w-full flex-1 overflow-y-auto md:overflow-hidden">
        {children}
      </main>
    </div>
  );
}
