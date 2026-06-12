import Image, { type StaticImageData } from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import cover from "@/public/dithar.png";

export type SplitFeatureCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: string;
  imageSrc?: StaticImageData | string;
  imageAlt?: string;
} & ComponentPropsWithoutRef<"div">;

export const SplitFeatureCard = forwardRef<
  HTMLDivElement,
  SplitFeatureCardProps
>(
  (
    {
      className,
      eyebrow = "New release",
      title = "Component library v2",
      description = "180+ production-ready blocks with refined typography, spacing, and interaction patterns.",
      cta = "Explore components",
      imageSrc = cover,
      imageAlt = "Feature preview",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="split-feature-card"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white font-sans shadow-sm ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col justify-center p-5 sm:p-6">
          <span className="w-fit rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-teal-700 uppercase">
            {eyebrow}
          </span>
          <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-neutral-900">
            {title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
            {description}
          </p>
          <button
            type="button"
            className="mt-4 w-fit cursor-pointer text-[13px] font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            {cta} →
          </button>
        </div>
        <div className="relative min-h-[160px] bg-neutral-100 sm:min-h-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  ),
);

SplitFeatureCard.displayName = "SplitFeatureCard";
