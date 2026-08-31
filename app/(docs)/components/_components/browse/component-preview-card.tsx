import type { CSSProperties, ReactNode } from "react";

import { BOX_PATTERN } from "@/lib/shared";
import { SaveScrollLink } from "@/lib/docs";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

import { ShowcasePreviewContent } from "../shared/showcase-preview-content";
import { ShowcaseNewBadge } from "../shared/showcase-new-badge";

type ComponentPreviewCardProps = Readonly<{
  slug: string;
  title: string;
  category: string;
  description: string;
  preview: ReactNode;
  isNew?: boolean;
  variant?: "default" | "input" | "form";
  fullBleed?: boolean;
  backdropImage?: string;
}>;

export function ComponentPreviewCard({
  slug,
  title,
  category,
  description,
  preview,
  isNew,
  variant = "default",
  fullBleed = false,
  backdropImage,
}: ComponentPreviewCardProps) {
  const stageStyle: CSSProperties | undefined = backdropImage
    ? {
        backgroundImage: `url(${backdropImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : fullBleed
      ? undefined
      : BOX_PATTERN;

  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-100 bg-white">
      <div
        className={cn(
          "relative flex overflow-hidden border-b border-neutral-100",
          fullBleed
            ? "min-h-96 bg-black p-0 md:min-h-120"
            : "min-h-96 items-center justify-center p-7 md:min-h-120 md:p-9",
          backdropImage && "items-center justify-center p-7 md:p-9",
        )}
        style={stageStyle}
      >
        <ShowcasePreviewContent variant={variant} fullBleed={fullBleed}>
          {preview}
        </ShowcasePreviewContent>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 flex-1 truncate font-sans text-[15px] leading-snug">
            <SaveScrollLink
              href={`/components/${slug}`}
              className="transition-colors outline-none hover:text-neutral-700"
            >
              <span className="font-semibold text-neutral-900">{title}</span>
              {isNew ? (
                <span className="ml-1.5 align-middle">
                  <ShowcaseNewBadge />
                </span>
              ) : null}
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
