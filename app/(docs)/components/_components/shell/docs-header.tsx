"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Suspense } from "react";

import { siteConfig } from "@/lib/site";

import { useDocsShell } from "./docs-shell-context";
import { DocsSearch } from "./docs-search";
import { LogoIcon } from "@/app/(marketing)/_components/Logo";

const metaLinkClass =
  "font-sans text-sm text-neutral-400 transition-colors hover:text-neutral-700";

export function DocsHeader() {
  const { author } = siteConfig;
  const shell = useDocsShell();

  return (
    <header className="shrink-0 border-b border-neutral-200 bg-white">
      <div className="flex h-14 items-center gap-2 px-3 md:gap-4 md:px-6">
        <Link href="/" className="inline-flex shrink-0 items-center">
          {/* <Image
            src="/osui-logo.png"
            alt={siteConfig.name}
            width={0}
            height={0}
            sizes="96px"
            className="h-auto w-14 md:w-24"
          /> */}
                  <div className="flex items-center gap-1">
          <LogoIcon className="w-6" fill="text-rose-300"/>
          <span className="text-lg tracking-tighter font-medium font-sans">
            {siteConfig.displayName}
          </span>
        </div>
        </Link>

        <div className="flex min-w-0 flex-1 items-center gap-2 md:justify-center">
          <div className="min-w-0 flex-1 md:flex md:max-w-sm md:flex-1 md:justify-center">
            <Suspense fallback={null}>
              <DocsSearch />
            </Suspense>
          </div>

          <button
            type="button"
            onClick={shell?.toggleSidebar}
            aria-label={shell?.isSidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={shell?.isSidebarOpen ?? false}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-100 bg-white text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900 md:hidden"
          >
            <Menu size={15} aria-hidden />
          </button>
        </div>

        <div className="hidden shrink-0 items-center gap-4 md:flex md:gap-5">
          <a
            href="https://github.com/bidyut10/appui"
            target="_blank"
            rel="noopener noreferrer"
            className={metaLinkClass}
          >
            GitHub
          </a>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className={metaLinkClass}
          >
            Twitter/X
          </a>
        </div>
      </div>
    </header>
  );
}
