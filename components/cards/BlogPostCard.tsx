import React, { forwardRef } from "react";
import Image from "next/image";
import { Clock } from "@/icons/Clock";
import { ArrowRight } from "@/icons/ArrowRight";
import { cn } from "@/lib/cn";

/**
 * Blog post preview card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export const BlogPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group w-72 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/70 bg-white font-sans shadow-lg ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
      className,
    )}
    {...props}
  >
    {/* Cover */}
    <div className="relative h-40 overflow-hidden">
      <Image
        src="/dbg.png"
        alt="Blog cover"
        fill
        sizes="288px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

      <div className="absolute top-3 left-3">
        <span className="rounded-full border border-white/40 bg-white/80 px-2.5 pt-1.5 pb-1 font-mono text-[10px] tracking-wider text-neutral-700 uppercase backdrop-blur-md">
          Tutorial
        </span>
      </div>
    </div>

    <div className="p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-sm" />

        <span className="text-[11px] font-medium text-neutral-600">
          John Doe
        </span>

        <span className="text-neutral-300">·</span>

        <span className="flex items-center gap-1 text-[11px] text-neutral-400">
          <Clock size={10} />6 min read
        </span>
      </div>

      <h3 className="mb-2 text-base leading-snug font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-teal-700">
        Building a Design System from Scratch in 2026
      </h3>

      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-neutral-500">
        A practical guide to creating scalable, token-based design systems that
        your team will actually use.
      </p>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <div className="flex gap-1.5">
          {["Design", "React"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-600 transition-colors group-hover:bg-neutral-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-600">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
));

BlogPostCard.displayName = "BlogPostCard";
