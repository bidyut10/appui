import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getAllShowcaseSlugs,
  getShowcaseEntry,
} from "@/lib/showcase";

import { LabPlayground } from "./lab-playground";

export const metadata: Metadata = {
  title: "Component Lab",
  description: "Local-only playground for testing components in progress.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function isComponentLabEnabled() {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.ENABLE_COMPONENT_LAB === "true"
  );
}

type LabPageProps = Readonly<{
  searchParams: Promise<{ c?: string | string[] }>;
}>;

/**
 * Local-only full-screen component playground.
 * Pick any showcase component from the toolbar. Never available in production.
 *
 * Enable with ENABLE_COMPONENT_LAB=true in .env / .env.local
 * Open: http://localhost:3000/lab
 */
export default async function ComponentLabPage({ searchParams }: LabPageProps) {
  if (!isComponentLabEnabled()) notFound();

  const params = await searchParams;
  const raw = params.c;
  const selectedSlug = Array.isArray(raw) ? raw[0] : raw;
  const selected = selectedSlug
    ? getShowcaseEntry(selectedSlug)
    : undefined;

  const options = getAllShowcaseSlugs()
    .map((slug) => getShowcaseEntry(slug))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== undefined)
    .map((entry) => ({
      slug: entry.slug,
      title: entry.title,
      category: entry.category,
      exportName: entry.exportName,
    }))
    .sort(
      (a, b) =>
        a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
    );

  return (
    <LabPlayground options={options} selectedSlug={selected?.slug}>
      {selected?.preview}
    </LabPlayground>
  );
}
