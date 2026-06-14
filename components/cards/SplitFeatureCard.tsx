"use client";

import Image from "next/image";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { ArrowRight } from "@/icons/ArrowRight";


/**
 * Split feature card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo copy, image, and CTA with your own content.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type SplitFeatureCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: string;
  imageSrc?: string;
  imageAlt?: string;

  ctaIcon?: ReactNode;

  onCtaClick?: () => void;
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
      imageSrc = "/dithar.png",
      imageAlt = "Feature preview",

      ctaIcon,

      onCtaClick,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="split-feature-card"
      className={cn(
        "w-md overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white font-sans shadow-lg ring-1 ring-black/[0.03]",
        className,
      )}
      {...props}
    >
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col justify-center p-5 sm:p-6">
          <span className="w-fit rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-teal-700 uppercase">
            {eyebrow}
          </span>

          <h3 className="mt-3 text-lg leading-snug font-bold tracking-tight text-neutral-900">
            {title}
          </h3>

          <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
            {description}
          </p>

          <button
            type="button"
            aria-label={cta}
            onClick={onCtaClick}
            className="mt-4 inline-flex w-fit cursor-pointer items-center gap-1 text-[13px] font-semibold text-teal-700 underline-offset-2 hover:underline"
          >
            {cta}
            {ctaIcon ?? <ArrowRight size={14} className="shrink-0" />}
          </button>
        </div>

        {/* Image */}
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
