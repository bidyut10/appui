import { Suspense } from "react";

import {
  getAllShowcaseSlugs,
  getShowcaseByCategory,
} from "@/lib/showcase";

import { ComponentsBrowseAll } from "./_components/components-browse-all";
import { ComponentsCatalog } from "./_components/components-catalog";
import { ComponentsCategoryNav } from "./_components/components-category-nav";
import { DocsToc } from "./_components/docs-toc";

export const metadata = {
  title: "Components",
  description:
    "Browse free, open-source UI components by category. Copy and paste production-ready React components into your project.",
};

type ComponentsPageProps = Readonly<{
  searchParams: Promise<{ category?: string }>;
}>;

export default async function ComponentsPage({
  searchParams,
}: ComponentsPageProps) {
  const { category: categoryParam } = await searchParams;
  const categories = getShowcaseByCategory();
  const totalCount = getAllShowcaseSlugs().length;

  const hasCategory =
    !!categoryParam &&
    categories.some((group) => group.category === categoryParam);

  const activeGroup = hasCategory
    ? categories.find((group) => group.category === categoryParam)
    : null;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Suspense fallback={null}>
        <ComponentsCategoryNav
          categories={categories}
          activeCategory={hasCategory ? categoryParam! : ""}
          isBrowseAll={!hasCategory}
        />
      </Suspense>

      <div className="flex min-h-0 flex-1">
        <main
          data-docs-scroll
          className="scrollbar-hover min-h-0 min-w-0 flex-1 overflow-y-auto"
        >
          {hasCategory && activeGroup ? (
            <ComponentsCatalog
              categories={categories}
              category={categoryParam!}
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
            hasCategory && activeGroup
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
