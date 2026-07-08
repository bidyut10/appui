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

export function searchShowcaseEntries(query: string): ShowcaseEntry[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return getAllShowcaseSlugs()
    .map((slug) => getShowcaseEntry(slug))
    .filter((entry): entry is ShowcaseEntry => entry !== undefined)
    .filter((entry) => {
      const haystack = entryHaystack(entry);
      return terms.every((term) => haystack.includes(term));
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
