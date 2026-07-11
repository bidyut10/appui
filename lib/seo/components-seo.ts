import { siteConfig } from "@/lib/site";

export function getCategorySeoDescription(
  category: string,
  itemCount: number,
): string {
  const label = category.toLowerCase();
  const noun = itemCount === 1 ? "component" : "components";

  return `Browse ${itemCount} free ${label} ${noun} for React and Next.js on ${siteConfig.displayName}. MIT-licensed, copy-paste TypeScript source with Tailwind CSS v4 and live previews.`;
}

export function getCategorySeoTitle(category: string): string {
  return `${category} React Components — Copy & Paste UI`;
}

export function getBrowseAllSeoDescription(totalCount: number): string {
  return `Browse ${totalCount}+ free, MIT-licensed React and Next.js UI components on ${siteConfig.displayName}. Copy and paste production-ready TypeScript source code with live previews across buttons, clocks, mockups, widgets, and more.`;
}

export function getBrowseAllSeoTitle(): string {
  return "Browse Free React & Next.js UI Components";
}
