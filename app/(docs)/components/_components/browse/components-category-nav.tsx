"use client";

import { SaveScrollLink } from "@/lib/docs";
import { cn } from "@/lib/cn";
import { resolveShowcaseCategory } from "@/lib/showcase/resolve-category";
import type { ShowcaseCategoryGroup } from "@/lib/showcase";

import { ShowcaseNewBadge } from "../shared/showcase-new-badge";

type ComponentsCategoryNavProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  activeCategory: string;
  isBrowseAll?: boolean;
}>;

function categoryHref(category: string) {
  return `/components?category=${encodeURIComponent(category)}`;
}

export function ComponentsCategoryNav({
  categories,
  activeCategory,
  isBrowseAll = false,
}: ComponentsCategoryNavProps) {
  return (
    <div className="border-b border-neutral-200 bg-white px-4 py-3 md:hidden">
      <div className="flex scrollbar-none items-center gap-2 overflow-x-auto">
        <SaveScrollLink
          href="/components"
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 font-sans text-xs whitespace-nowrap transition-colors",
            isBrowseAll
              ? "bg-neutral-900 text-white"
              : "bg-neutral-100 text-neutral-600",
          )}
        >
          All components
        </SaveScrollLink>

        {categories.map((group) => {
          const isActive =
            !isBrowseAll &&
            resolveShowcaseCategory(categories, activeCategory)?.category ===
              group.category;

          return (
            <SaveScrollLink
              key={group.category}
              href={categoryHref(group.category)}
              className={cn(
                "inline-flex shrink-0 items-center rounded-full px-3 py-1.5 font-sans text-xs whitespace-nowrap transition-colors",
                isActive
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600",
              )}
            >
              {group.category}
              {group.isCategoryNew ? (
                <ShowcaseNewBadge className="ml-1.5" />
              ) : null}
            </SaveScrollLink>
          );
        })}
      </div>
    </div>
  );
}
