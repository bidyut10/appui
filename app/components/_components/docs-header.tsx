import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "@/icons/actions/chevron-right";
import { MoveRight } from "@/icons/keys/move-right";
import { mailtoLinks, siteConfig } from "@/lib/site";

const metaLinkClass =
  "font-sans text-sm text-neutral-400 transition-colors hover:text-neutral-700";

export function DocsHeader() {
  const { author } = siteConfig;

  return (
    <header className="shrink-0 border-b border-neutral-200 bg-white">
      <div className="flex h-14 items-center gap-4 px-4 md:px-6">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Image
            src="/osui-logo.png"
            alt={siteConfig.name}
            width={0}
            height={0}
            sizes="96px"
            className="h-auto w-16 md:w-24"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <label className="relative block w-full max-w-sm">
            <span className="sr-only">Search components</span>
            <input
              type="search"
              disabled
              placeholder="Search components…"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-sans text-sm text-neutral-400 outline-none"
            />
            <kbd className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border border-neutral-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
              ⌘ + K
            </kbd>
          </label>
        </div>

        <div className="ml-auto flex items-center gap-4 md:gap-5">
          <a
            href="https://github.com/bidyut10/appui"
            target="_blank"
            rel="noopener noreferrer"
            className={`${metaLinkClass} hidden md:inline`}
          >
            GitHub
          </a>
          <a
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${metaLinkClass} hidden md:inline`}
          >
            Twitter/X
          </a>
        </div>
      </div>
    </header>
  );
}
