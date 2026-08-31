"use client";

import { useRef } from "react";
import Link from "next/link";
import { Home, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";

import { usePanelWheelScroll } from "@/app/_shared/scroll/docs-scroll";

import {
  getHydratedSearchParam,
  useHydratedSearchParams,
} from "@/app/_shared/navigation/use-hydrated-search-params";

import { SaveScrollLink } from "@/lib/docs";
import { cn } from "@/lib/cn";
import { resolveShowcaseCategory } from "@/lib/showcase/resolve-category";
import type { ShowcaseNavCategoryGroup } from "@/lib/showcase";

import { ShowcaseNewBadge } from "../shared/showcase-new-badge";

function categoryHref(category: string) {
  return `/components?category=${encodeURIComponent(category)}`;
}

type DocsSidebarNavProps = Readonly<{
  categories: ShowcaseNavCategoryGroup[];
  onNavigate?: () => void;
}>;

export function DocsSidebarNav({
  categories,
  onNavigate,
}: DocsSidebarNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const searchParams = useHydratedSearchParams();

  usePanelWheelScroll(navRef);

  const activeSlug = pathname.startsWith("/components/")
    ? pathname.replace("/components/", "")
    : null;

  const categoryParam = getHydratedSearchParam(searchParams, "category");

  const activeCategory =
    (categoryParam
      ? resolveShowcaseCategory(categories, categoryParam)?.category
      : null) ??
    (activeSlug
      ? categories.find((group) =>
          group.items.some((item) => item.slug === activeSlug),
        )?.category
      : null) ??
    "";

  const isBrowseAll =
    pathname === "/components" &&
    !getHydratedSearchParam(searchParams, "category") &&
    !getHydratedSearchParam(searchParams, "q");

  return (
    <nav
      ref={navRef}
      aria-label="Component documentation"
      className="scrollbar-hover data-docs-panel-scroll h-full min-h-0 overflow-y-auto overscroll-y-contain px-5 py-5"
    >
      <p className="mt-4 mb-2 font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
        Getting started
      </p>
      <ul className="mb-6 space-y-1">
        <li>
          <Link
            href="/"
            onClick={onNavigate}
            className="flex items-center gap-2 py-1 font-sans text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <Home
              size={12}
              strokeWidth={3}
              className="shrink-0 text-neutral-400"
              aria-hidden
            />
            Home
          </Link>
        </li>
        <li>
          <SaveScrollLink
            href="/components"
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-2 py-1 font-sans text-sm transition-colors",
              isBrowseAll
                ? "font-medium text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900",
            )}
          >
            <LayoutGrid
              size={12}
              strokeWidth={3}
              className="shrink-0 text-neutral-400"
              aria-hidden
            />
            All components
          </SaveScrollLink>
        </li>
      </ul>

      <p className="mb-3 font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
        Components
      </p>

      <div className="space-y-5">
        {categories.map((group) => (
          <div key={group.category}>
            <SaveScrollLink
              href={categoryHref(group.category)}
              onClick={onNavigate}
              className={cn(
                "flex items-center justify-between gap-3 py-1 font-sans text-sm transition-colors",
                !isBrowseAll && group.category === activeCategory && !activeSlug
                  ? "font-medium text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900",
              )}
            >
              <span className="truncate">{group.category}</span>
              <span className="shrink-0 font-mono text-[10px] text-neutral-300">
                {group.items.length}
              </span>
            </SaveScrollLink>

            <ul className="mt-1 space-y-0.5 border-l border-neutral-100 pl-3">
              {group.items.map((item) => {
                const isActive = activeSlug === item.slug;

                return (
                  <li key={item.slug}>
                    <SaveScrollLink
                      href={`/components/${item.slug}`}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center gap-1.5 py-1 font-sans text-[13px] leading-snug transition-colors",
                        isActive
                          ? "font-medium text-neutral-900"
                          : "text-neutral-500 hover:text-neutral-900",
                      )}
                    >
                      <span className="truncate">{item.title}</span>
                      {item.isNew ? <ShowcaseNewBadge /> : null}
                    </SaveScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
