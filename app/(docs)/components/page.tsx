import {
  getAllShowcaseSlugs,
  getShowcaseByCategory,
  resolveShowcaseCategory,
} from "@/lib/showcase";
import {
  createPageMetadata,
  JsonLd,
  getComponentsItemListJsonLd,
  getBrowseAllSeoDescription,
  getBrowseAllSeoTitle,
  getCategorySeoDescription,
  getCategorySeoTitle,
} from "@/lib/seo";
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
        title: getCategorySeoTitle(activeGroup.category),
        description: getCategorySeoDescription(
          activeGroup.category,
          activeGroup.items.length,
        ),
        path: `/components?category=${encodeURIComponent(activeGroup.category)}`,
        keywords: [
          `${activeGroup.category.toLowerCase()} react components`,
          `${activeGroup.category.toLowerCase()} ui components`,
          "copy paste react components",
          "tailwind react components",
          ...siteConfig.keywords,
        ],
      });
    }
  }

  const totalCount = getAllShowcaseSlugs().length;

  return createPageMetadata({
    title: getBrowseAllSeoTitle(),
    description: getBrowseAllSeoDescription(totalCount),
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
    <div className="flex min-h-0 flex-1 flex-col">
      {listJsonLd ? <JsonLd data={listJsonLd} /> : null}
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
