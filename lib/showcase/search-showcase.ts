import {
  getAllShowcaseSlugs,
  getShowcaseEntry,
  type ShowcaseEntry,
} from "./showcase";

function entryHaystack(entry: ShowcaseEntry) {
  return [
    entry.title,
    entry.category,
    entry.slug,
    entry.description,
    entry.file,
    entry.exportName,
  ]
    .join(" ")
    .toLowerCase();
}

let haystackCache: Map<string, string> | null = null;

function getHaystackCache() {
  if (haystackCache) return haystackCache;

  haystackCache = new Map();
  for (const slug of getAllShowcaseSlugs()) {
    const entry = getShowcaseEntry(slug);
    if (entry) haystackCache.set(slug, entryHaystack(entry));
  }

  return haystackCache;
}

export function searchShowcaseEntries(query: string): ShowcaseEntry[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const haystacks = getHaystackCache();

  return getAllShowcaseSlugs()
    .map((slug) => getShowcaseEntry(slug))
    .filter((entry): entry is ShowcaseEntry => entry !== undefined)
    .filter((entry) => {
      const haystack = haystacks.get(entry.slug) ?? entryHaystack(entry);
      return terms.every((term) => haystack.includes(term));
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
