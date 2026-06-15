"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Star } from "@/icons/Star";
import { QuoteRight } from "@/icons/QuoteRight";
import { ChevronLeft } from "@/icons/ChevronLeft";
import { ChevronRight } from "@/icons/ChevronRight";

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  avatar?: string;
};

/**
 * Testimonial carousel with swipe-style navigation and fade transitions.
 *
 * Replace the demo reviews with your own content.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type TestimonialCardProps = {
  testimonials?: TestimonialItem[];
  quote?: string;
  name?: string;
  role?: string;
  rating?: number;
  avatar?: string;
  avatarAlt?: string;
  quoteIcon?: React.ReactNode;
  autoPlayMs?: number;
  onChange?: (index: number) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "These components saved us weeks of design work. Every card feels production-ready out of the box.",
    name: "Sarah Chen",
    role: "Lead Designer · Figma",
    rating: 5,
    avatar: "/boy.png",
  },
  {
    quote:
      "The copy-paste workflow is perfect. I shipped a dashboard in a day without fighting layout bugs.",
    name: "Marcus Webb",
    role: "Founder · Launchpad",
    rating: 5,
    avatar: "/boy.png",
  },
  {
    quote:
      "Clean Tailwind patterns, thoughtful defaults, and components that actually feel interactive.",
    name: "Priya Nair",
    role: "Engineer · Vercel",
    rating: 5,
    avatar: "/boy.png",
  },
];

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      className,
      testimonials,
      quote = defaultTestimonials[0].quote,
      name = defaultTestimonials[0].name,
      role = defaultTestimonials[0].role,
      rating = 5,
      avatar = "/boy.png",
      avatarAlt = "Reviewer",
      quoteIcon,
      autoPlayMs = 6000,
      onChange,
      ...props
    },
    ref,
  ) => {
    const items =
      testimonials ??
      defaultTestimonials.map((item, index) =>
        index === 0 ? { ...item, quote, name, role, rating, avatar } : item,
      );

    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const current = items[index];

    const goTo = (next: number) => {
      if (animating || next === index) return;
      setAnimating(true);
      setIndex(next);
      onChange?.(next);
      window.setTimeout(() => setAnimating(false), 320);
    };

    const prev = () => goTo((index - 1 + items.length) % items.length);
    const next = () => goTo((index + 1) % items.length);

    useEffect(() => {
      if (autoPlayMs <= 0) return;
      const timer = window.setInterval(() => {
        setIndex((current) => {
          const next = (current + 1) % items.length;
          onChange?.(next);
          return next;
        });
      }, autoPlayMs);
      return () => window.clearInterval(timer);
    }, [autoPlayMs, items.length, onChange]);

    return (
      <div
        ref={ref}
        data-slot="testimonial-card"
        className={cn(
          "relative w-72 rounded-2xl border border-neutral-100 bg-white p-6 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <style>{`
          @keyframes testimonial-fade {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div
          data-slot="testimonial-card-quote-icon"
          className="pointer-events-none absolute top-5 right-5 text-neutral-100 select-none"
        >
          {quoteIcon ?? <QuoteRight size={24} />}
        </div>

        <div
          key={index}
          style={{ animation: "testimonial-fade 0.32s ease-out" }}
        >
          <div
            data-slot="testimonial-card-rating"
            className="mb-4 flex gap-0.5"
          >
            {Array.from({ length: current.rating ?? 5 }).map((_, starIndex) => (
              <Star key={starIndex} size={12} className="text-amber-400" />
            ))}
          </div>

          <p
            data-slot="testimonial-card-quote"
            className="relative z-10 mb-6 text-sm leading-relaxed text-neutral-700"
          >
            {current.quote}
          </p>

          <div
            data-slot="testimonial-card-author"
            className="flex items-center gap-3 border-t border-neutral-100 pt-4"
          >
            <div
              data-slot="testimonial-card-avatar"
              className="h-10 w-10 overflow-hidden rounded-full border-2 border-neutral-100"
            >
              <Image
                src={current.avatar ?? avatar}
                alt={avatarAlt}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>

            <div data-slot="testimonial-card-author-info">
              <p className="text-sm font-semibold text-neutral-900">
                {current.name}
              </p>
              <p className="text-[11px] text-neutral-400">{current.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1">
            {items.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  dotIndex === index
                    ? "w-5 bg-neutral-900"
                    : "w-1.5 bg-neutral-200 hover:bg-neutral-300",
                )}
              />
            ))}
          </div>

          <div className="flex gap-1">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";
