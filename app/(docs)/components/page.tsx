import {
  getAllShowcaseSlugs,
  getShowcaseByCategory,
  resolveShowcaseCategory,
} from "@/lib/showcase";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import {
  ComponentsBrowseAll,
  ComponentsCatalog,
  ComponentsSearchResults,
} from "./_components/browse";
import { DocsToc } from "./_components/shell";

type ComponentsPageProps = Readonly<{
  searchParams: Promise<{ category?: string; q?: string }>;
}>;

export async function generateMetadata({ searchParams }: ComponentsPageProps) {
  const { category: categoryParam, q: queryParam } = await searchParams;
  const searchQuery = queryParam?.trim() ?? "";

  if (searchQuery) {
    return createPageMetadata({
      title: `Search components for “${searchQuery}”`,
      description: `Search results for “${searchQuery}” in ${siteConfig.displayName}. Browse free React and Next.js UI components to copy into your project.`,
      path: `/components?q=${encodeURIComponent(searchQuery)}`,
      noIndex: true,
    });
  }

  if (categoryParam) {
    const categories = getShowcaseByCategory();
    const activeGroup = resolveShowcaseCategory(categories, categoryParam);

    if (activeGroup) {
      return createPageMetadata({
        title: `${activeGroup.category} React Components`,
        description: `Browse ${activeGroup.items.length} free ${activeGroup.category.toLowerCase()} components for React and Next.js. Copy-paste source code with live previews.`,
        path: `/components?category=${encodeURIComponent(activeGroup.category)}`,
        keywords: [
          `${activeGroup.category.toLowerCase()} components`,
          "react components",
          "next.js ui",
          ...siteConfig.keywords,
        ],
      });
    }
  }

  const totalCount = getAllShowcaseSlugs().length;

  return createPageMetadata({
    title: "Browse React UI Components",
    description: `Browse ${totalCount}+ free, MIT-licensed React and Next.js UI components. Copy and paste production-ready TypeScript source code with live previews.`,
    path: "/components",
  });
}

export default async function ComponentsPage({
  searchParams,
}: ComponentsPageProps) {
  const { category: categoryParam, q: queryParam } = await searchParams;
  const categories = getShowcaseByCategory();
  const totalCount = getAllShowcaseSlugs().length;
  const searchQuery = queryParam?.trim() ?? "";
  const isSearching = searchQuery.length > 0;

  const activeGroup = categoryParam
    ? resolveShowcaseCategory(categories, categoryParam)
    : undefined;
  const hasCategory = !isSearching && !!activeGroup;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1">
        <main
          data-docs-scroll
          className="scrollbar-hover min-h-0 min-w-0 flex-1 overflow-y-auto"
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
