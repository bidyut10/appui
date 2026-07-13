import type { ReactNode } from "react";

import { BOX_PATTERN } from "@/lib/shared";
import { SaveScrollLink } from "@/lib/docs";
import { ArrowRight } from "lucide-react";

import { ShowcasePreviewContent } from "../shared/showcase-preview-content";

type ComponentPreviewCardProps = Readonly<{
  slug: string;
  title: string;
  category: string;
  description: string;
  preview: ReactNode;
  variant?: "default" | "input" | "form";
}>;

export function ComponentPreviewCard({
  slug,
  title,
  category,
  description,
  preview,
  variant = "default",
}: ComponentPreviewCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-100 bg-white">
      <div
        className="relative flex min-h-96 items-center justify-center overflow-hidden border-b border-neutral-100 p-7 md:min-h-120 md:p-9"
        style={BOX_PATTERN}
      >
        <ShowcasePreviewContent variant={variant}>{preview}</ShowcasePreviewContent>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 flex-1 truncate font-sans text-[15px] leading-snug">
            <SaveScrollLink
              href={`/components/${slug}`}
              className="transition-colors outline-none hover:text-neutral-700"
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

        <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-relaxed text-neutral-500">
          {description}
        </p>

        <p className="mt-2 font-mono text-[11px] text-neutral-400">
          Free · copy &amp; paste ready
        </p>
      </div>
    </article>
  );
}
