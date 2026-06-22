import Link from "next/link";
import { notFound } from "next/navigation";

import { Box } from "@/app/Box";
import { CopyCodeBlock, SetupGuide } from "@/app/copy-code-block";
import {
  getAllShowcaseSlugs,
  getShowcaseEntry,
  readShowcaseSource,
} from "@/lib/showcase";
import type { Props } from "@/types/types";
import { House } from "@/icons/elements/house";
import { ChevronRight } from "@/icons/actions/chevron-right";

export async function generateStaticParams() {
  return getAllShowcaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getShowcaseEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function ComponentDetailPage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const entry = getShowcaseEntry(slug);
  if (!entry) notFound();

  const { cnSource, componentSource } = await readShowcaseSource(entry.file);

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl min-w-0 px-3 pb-10 selection:bg-neutral-800 selection:text-white sm:px-4">
      <div className="mb-12 flex items-center justify-start gap-1 py-4 font-mono border-b border-neutral-100">
        <Link
          href="/"
          scroll={false}
          className="inline-flex items-center gap-1 text-xs text-neutral-500 transition-colors select-none hover:text-neutral-900"
        >
          <House size={11} />
          Home
        </Link>
        <div className="inline-flex items-center gap-0.5 text-xs text-neutral-500 transition-colors select-none">
          <ChevronRight size={15} />
          Components
        </div>
        <div className="inline-flex items-center gap-0.5 text-xs text-neutral-500 transition-colors select-none">
          <ChevronRight size={15} />
          {entry.category}
        </div>
      </div>
      <header className="mb-5 font-serif sm:mb-6">
        <h1 className="text-xl font-medium text-neutral-900">
          {entry.title}
        </h1>
        <p className="mt-2 text-lg leading-relaxed text-neutral-500">
          {entry.description}
        </p>
      </header>

      <Box>{entry.preview}</Box>

      <section className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
        <SetupGuide
          componentFile={entry.file}
          exportName={entry.exportName}
          usage={entry.usage}
        />

        <CopyCodeBlock
          filename="lib/cn.ts"
          code={cnSource.trim()}
          hint="clsx + tailwind-merge"
        />

        <CopyCodeBlock
          filename={entry.file}
          code={componentSource.trim()}
          hint="icons + images"
        />
      </section>
    </div>
  );
}
