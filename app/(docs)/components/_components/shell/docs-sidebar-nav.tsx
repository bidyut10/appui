"use client";

import Link from "next/link";
import { Home, LayoutGrid } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

import { SaveScrollLink } from "@/lib/docs";
import { cn } from "@/lib/cn";
import type { ShowcaseCategoryGroup } from "@/lib/showcase";

function categoryHref(category: string) {
  return `/components?category=${encodeURIComponent(category)}`;
}

type DocsSidebarNavProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  onNavigate?: () => void;
}>;

export function DocsSidebarNav({
  categories,
  onNavigate,
}: DocsSidebarNavProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeSlug = pathname.startsWith("/components/")
    ? pathname.replace("/components/", "")
    : null;

  const activeCategory =
    searchParams.get("category") ??
    (activeSlug
      ? categories.find((group) =>
          group.items.some((item) => item.slug === activeSlug),
        )?.category
      : null) ??
    "";

  const isBrowseAll =
    pathname === "/components" &&
    !searchParams.get("category") &&
    !searchParams.get("q");

  return (
    <nav
      aria-label="Component documentation"
      className="scrollbar-hover min-h-0 flex-1 overflow-y-auto px-5 py-5"
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
                        "block py-1 font-sans text-[13px] leading-snug transition-colors",
                        isActive
                          ? "font-medium text-neutral-900"
                          : "text-neutral-500 hover:text-neutral-900",
                      )}
                    >
                      {item.title}
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
