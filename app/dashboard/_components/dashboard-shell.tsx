import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import oui from "@/public/opensourceui-logo.png";

type DashboardShellProps = Readonly<{
  children: ReactNode;
}>;

/** Shared layout shell — mirrors the main site nav and width. */
export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-3 pb-12 selection:bg-neutral-800 selection:text-white sm:px-4">
      <nav className="w-full max-w-6xl border-b border-neutral-100 px-4 py-4 md:px-0">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="select-none">
            <Image src={oui} alt="opensource-ui-logo" width={20} />
          </Link>
          <Link
            href="/"
            className="font-mono text-xs text-neutral-600 underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-900"
          >
            Back to site
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-6xl pt-10 md:pt-12">{children}</main>
    </div>
  );
}
