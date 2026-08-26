"use client";

import { Suspense } from "react";

import {
  getHydratedSearchParam,
  useHydratedSearchParams,
} from "@/app/_shared/navigation/use-hydrated-search-params";
import { resolveShowcaseCategory } from "@/lib/showcase/resolve-category";
import type { ShowcaseCategoryGroup } from "@/lib/showcase/showcase";
import { JsonLd } from "@/lib/seo/json-ld";
import { getComponentsItemListJsonLd } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

import { DocsToc } from "../shell/docs-toc";
import { ComponentsBrowseAll } from "./components-browse-all";
import { ComponentsCatalog } from "./components-catalog";
import { ComponentsSearchResults } from "./components-search-results";

type ComponentsPageClientProps = Readonly<{
  categories: ShowcaseCategoryGroup[];
  totalCount: number;
}>;

function ComponentsPageContent({
  categories,
  totalCount,
}: ComponentsPageClientProps) {
  const searchParams = useHydratedSearchParams();
  const categoryParam = getHydratedSearchParam(searchParams, "category") ?? undefined;
  const searchQuery = getHydratedSearchParam(searchParams, "q")?.trim() ?? "";
  const isSearching = searchQuery.length > 0;

  const activeGroup = categoryParam
    ? resolveShowcaseCategory(categories, categoryParam)
    : undefined;
  const hasCategory = !isSearching && !!activeGroup;

  const listJsonLd = isSearching
    ? null
    : hasCategory && activeGroup
      ? getComponentsItemListJsonLd(
          activeGroup.items,
          `${activeGroup.category} React Components`,
          `${siteConfig.url}/components?category=${encodeURIComponent(activeGroup.category)}`,
        )
      : getComponentsItemListJsonLd(
          categories.flatMap((group) => group.items),
          "All React UI Components",
          `${siteConfig.url}/components`,
        );

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {listJsonLd ? <JsonLd data={listJsonLd} /> : null}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <main
          data-docs-scroll
          className="scrollbar-hover data-docs-scroll min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain"
        >
          {isSearching ? (
            <ComponentsSearchResults query={searchQuery} />
          ) : hasCategory && activeGroup ? (
            <ComponentsCatalog
              categories={categories}
              category={activeGroup.category}
            />
          ) : (
            <ComponentsBrowseAll
              categories={categories}
              totalCount={totalCount}
            />
          )}
        </main>

        <DocsToc
          items={
            isSearching
              ? [
                  {
                    id: "overview",
                    label: "Search",
                    description: `Results for “${searchQuery}”`,
                  },
                  {
                    id: "components",
                    label: "Components",
                    description: "Filtered matches",
                  },
                ]
              : hasCategory && activeGroup
                ? [
                    {
                      id: "overview",
                      label: "Overview",
                      description: "Category intro & usage",
                    },
                    {
                      id: "components",
                      label: "Components",
                      description: `${activeGroup.items.length} in this category`,
                    },
                  ]
                : [
                    {
                      id: "overview",
                      label: "Overview",
                      description: "Open source library intro",
                    },
                    {
                      id: "components",
                      label: "Components",
                      description: `${totalCount} available to open`,
                    },
                  ]
          }
        />
      </div>
    </div>
  );
}

function ComponentsPageFallback({
  categories,
  totalCount,
}: ComponentsPageClientProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <main
          data-docs-scroll
          className="scrollbar-hover data-docs-scroll min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-y-contain"
        >
          <ComponentsBrowseAll categories={categories} totalCount={totalCount} />
        </main>

        <DocsToc
          items={[
            {
              id: "overview",
              label: "Overview",
              description: "Open source library intro",
            },
            {
              id: "components",
              label: "Components",
              description: `${totalCount} available to open`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export function ComponentsPageClient({
  categories,
  totalCount,
}: ComponentsPageClientProps) {
  return (
    <Suspense
      fallback={
        <ComponentsPageFallback
          categories={categories}
          totalCount={totalCount}
        />
      }
    >
      <ComponentsPageContent
        categories={categories}
        totalCount={totalCount}
      />
    </Suspense>
  );
}
