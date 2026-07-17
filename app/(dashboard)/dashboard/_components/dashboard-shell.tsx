import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { LogoIcon } from "@/app/(marketing)/_components/Logo";

type DashboardShellProps = Readonly<{
  children: ReactNode;
}>;

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-dvh w-full min-w-0 flex-col overflow-hidden bg-white selection:bg-neutral-800 selection:text-white">
      <header className="shrink-0 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link href="/" className="inline-flex shrink-0 items-center">
            {/* <Image
              src="/osui-logo.png"
              alt={siteConfig.name}
              width={0}
              height={0}
              sizes="96px"
              className="h-auto w-16 md:w-20"
            /> */}
                    <div className="flex items-center gap-1">
          <LogoIcon className="w-6" fill="text-rose-300"/>
          <span className="text-lg tracking-tighter font-medium font-sans">
            {siteConfig.displayName}
          </span>
        </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/components"
              className="hidden font-sans text-sm text-neutral-400 transition-colors hover:text-neutral-700 md:inline"
            >
              Components
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-neutral-500 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-neutral-800 hover:decoration-neutral-400"
            >
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <main className="scrollbar-hover mx-auto min-h-0 w-full max-w-6xl flex-1 overflow-y-auto px-4 py-8 md:px-6 md:py-10">
        {children}
      </main>
    </div>
  );
}
