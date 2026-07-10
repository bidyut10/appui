import type { ShowcaseCategoryGroup } from "./showcase";

// Category URLs are matched case-insensitively — clocks, Clocks, and CLOCKS all resolve.
export function resolveShowcaseCategory(
  categories: readonly ShowcaseCategoryGroup[],
  param: string,
): ShowcaseCategoryGroup | undefined {
  const normalized = param.trim().toLowerCase();
  if (!normalized) return undefined;

  return categories.find((group) => group.category.toLowerCase() === normalized);
}
