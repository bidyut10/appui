import type { ShowcaseCategoryGroup } from "./showcase";
import { resolveShowcaseCategory } from "./resolve-category";

export function getCategorySlug(category: string): string {
  if (!category) return "";
  return category.charAt(0).toLowerCase() + category.slice(1);
}

export function categoryNameFromSlug(slug: string): string {
  const decoded = decodeURIComponent(slug).trim();
  if (!decoded) return "";
  return decoded.charAt(0).toUpperCase() + decoded.slice(1);
}

export function getCategoryPath(category: string): string {
  return `/components/category/${getCategorySlug(category)}`;
}

export function getCategoryGroupBySlug(
  categories: readonly ShowcaseCategoryGroup[],
  slug: string,
): ShowcaseCategoryGroup | undefined {
  return resolveShowcaseCategory(categories, categoryNameFromSlug(slug));
}
