import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

import { Star } from "@/icons/Star";
import { QuoteRight } from "@/icons/QuoteRight";

/*
| Testimonial card built with Next.js, React, TypeScript,
| and Tailwind CSS.
|
| Replace the demo review, reviewer details, avatar,
| and rating with your own content.
|
| React Users:
| Replace `next/image` with a standard `img` element.
*/

export type TestimonialCardProps = {
  quote?: string;

  name?: string;
  role?: string;

  rating?: number;

  avatar?: StaticImageData | string;
  avatarAlt?: string;

  quoteIcon?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      className,

      quote = "These components saved us weeks of design work. The attention to detail is incredible — every card feels production-ready out of the box.",

      name = "Sarah Chen",
      role = "Lead Designer · Figma",

      rating = 5,

      avatar = profileImage,
      avatarAlt = "Reviewer",

      quoteIcon,

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="testimonial-card"
      className={cn(
        "relative w-72 rounded-2xl border border-neutral-100 bg-white p-6 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* -------------------------------------------------------------------------- */}
      {/*                                Quote Icon                                   */}
      {/* -------------------------------------------------------------------------- */}

      <div
        data-slot="testimonial-card-quote-icon"
        className="pointer-events-none absolute top-5 right-5 text-neutral-100 select-none"
      >
        {quoteIcon ?? <QuoteRight size={24} />}
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                  Rating                                     */}
      {/* -------------------------------------------------------------------------- */}

      <div data-slot="testimonial-card-rating" className="mb-4 flex gap-0.5">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={12} className="text-amber-400" />
        ))}
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/*                                  Review                                     */}
      {/* -------------------------------------------------------------------------- */}

      <p
        data-slot="testimonial-card-quote"
        className="relative z-10 mb-6 text-sm leading-relaxed text-neutral-700"
      >
        {quote}
      </p>

      {/* -------------------------------------------------------------------------- */}
      {/*                                  Author                                     */}
      {/* -------------------------------------------------------------------------- */}

      <div
        data-slot="testimonial-card-author"
        className="flex items-center gap-3 border-t border-neutral-100 pt-4"
      >
        <div
          data-slot="testimonial-card-avatar"
          className="h-10 w-10 overflow-hidden rounded-full border-2 border-neutral-100"
        >
          <Image
            src={avatar}
            alt={avatarAlt}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>

        <div data-slot="testimonial-card-author-info">
          <p className="text-sm font-semibold text-neutral-900">{name}</p>

          <p className="text-[11px] text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  ),
);

TestimonialCard.displayName = "TestimonialCard";
