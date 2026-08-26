import {
  getAllShowcaseSlugs,
  getShowcaseByCategory,
} from "@/lib/showcase/showcase";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBrowseAllSeoDescription,
  getBrowseAllSeoTitle,
} from "@/lib/seo/components-seo";

import { ComponentsPageClient } from "./_components/browse/components-page-client";

const categories = getShowcaseByCategory();
const totalCount = getAllShowcaseSlugs().length;

export const metadata = createPageMetadata({
  title: getBrowseAllSeoTitle(),
  description: getBrowseAllSeoDescription(totalCount),
  path: "/components",
});

export default function ComponentsPage() {
  return (
    <ComponentsPageClient categories={categories} totalCount={totalCount} />
  );
}
