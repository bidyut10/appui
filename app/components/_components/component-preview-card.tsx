import type { ReactNode } from "react";

import { BOX_PATTERN } from "@/app/_components/Pattern";
import { SaveScrollLink } from "@/app/save-scroll-link";
import { ArrowRight } from "@/icons/actions/arrow-right";

type ComponentPreviewCardProps = Readonly<{
  slug: string;
  title: string;
  category: string;
  description: string;
  preview: ReactNode;
}>;

export function ComponentPreviewCard({
  slug,
  title,
  category,
  description,
  preview,
}: ComponentPreviewCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-100 bg-white">
      <div
        className="relative flex min-h-96 items-center justify-center overflow-hidden border-b border-neutral-100 p-7 md:min-h-120 md:p-9"
        style={BOX_PATTERN}
      >
        <div className="relative z-0 flex w-full min-w-0 items-center justify-center *:max-w-full *:min-w-0">
          {preview}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 flex-1 truncate font-sans text-[15px] leading-snug">
            <SaveScrollLink
              href={`/components/${slug}`}
              className="outline-none transition-colors hover:text-neutral-700"
            >
              <span className="font-semibold text-neutral-900">{title}</span>
              <span className="text-neutral-300"> / </span>
              <span className="font-normal text-neutral-400">{category}</span>
            </SaveScrollLink>
          </h3>

          <SaveScrollLink
            href={`/components/${slug}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900"
            aria-label={`View ${title}`}
          >
            <ArrowRight size={14} className="-rotate-45" />
          </SaveScrollLink>
        </div>

        <p className="mt-2 line-clamp-2 text-sm max-w-xl leading-relaxed text-neutral-500">
          {description}
        </p>

        <p className="mt-2 font-mono text-[11px] text-neutral-400">
          Free · copy &amp; paste ready
        </p>
      </div>
    </article>
  );
}
