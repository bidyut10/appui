import Link from "next/link";
import { notFound } from "next/navigation";

import { Box } from "@/app/Box";
import { CopyCodeBlock, SetupGuide } from "@/app/copy-code-block";
import { ArrowLeft } from "@/icons/actions/arrow-left";
import {
  getAllShowcaseSlugs,
  getShowcaseEntry,
  readShowcaseSource,
} from "@/lib/showcase";
import type { Props } from "@/types/types";

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
    <div className="mx-auto min-h-screen w-full max-w-3xl min-w-0 px-3 py-8 selection:bg-neutral-800 selection:text-white sm:px-4 sm:py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-0.5 text-xs font-semibold text-neutral-500 transition-colors select-none hover:text-neutral-900"
      >
        <ArrowLeft size={13} />
        GO BACK
      </Link>

      <header className="mb-5 sm:mb-6">
        <p className="mb-1 font-mono text-[11px] tracking-wide text-neutral-400 uppercase">
          {entry.category}
        </p>
        <h1 className="text-xl font-medium text-neutral-900 sm:text-2xl">
          {entry.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
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
