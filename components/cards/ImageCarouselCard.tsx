"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import img1 from "@/public/dbg.png";
import img2 from "@/public/bh.png";
import img3 from "@/public/bg.png";

import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";

/**
 * ImageCarouselCard
 *
 * A lightweight image carousel card built with
 * Next.js, React, TypeScript, and Tailwind CSS.
 *
 * Perfect for:
 * - Product showcases
 * - Portfolios
 * - Travel galleries
 * - Featured content sections
 *
 * Note:
 * - Uses Next.js Image for optimization.
 * - Replace <Image /> with <img /> if using React only.
 */
export type ImageCarouselCardProps = {
  slides?: (StaticImageData | string)[];

  title?: string;
  description?: string;

  previousIcon?: ReactNode;
  nextIcon?: ReactNode;

  initialSlide?: number;
} & ComponentPropsWithoutRef<"div">;

const defaultSlides = [img1, img2, img3];

export const ImageCarouselCard = forwardRef<
  HTMLDivElement,
  ImageCarouselCardProps
>(
  (
    {
      className,

      slides = defaultSlides,

      title = "Coastal Views",
      description = "Beautiful landscapes",

      previousIcon,
      nextIcon,

      initialSlide = 0,

      ...props
    },
    ref,
  ) => {
    const [current, setCurrent] = useState(initialSlide);

    const previousSlide = () => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
      <div
        ref={ref}
        data-slot="image-carousel-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Carousel */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            fill
            sizes="288px"
            className="object-cover transition-opacity duration-500"
          />

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={previousSlide}
            className="absolute top-1/2 left-2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
          >
            {previousIcon ?? <ChevronLeft size={16} />}
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="absolute top-1/2 right-2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-neutral-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
          >
            {nextIcon ?? <ChevronRight size={16} />}
          </button>

          {/* Indicators */}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all",
                  index === current ? "w-5 bg-white" : "w-1.5 bg-white/50",
                )}
              />
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {title}
              </h3>

              <p className="mt-1 text-xs text-neutral-400">{description}</p>
            </div>

            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
              {current + 1}/{slides.length}
            </span>
          </div>
        </div>
      </div>
    );
  },
);

ImageCarouselCard.displayName = "ImageCarouselCard";
