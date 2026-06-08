import React, { forwardRef } from "react";
import Image from "next/image";
import coverImage from "@/public/dbg.png";
import { Clock } from "@/icons/Clock";
import { ArrowRight } from "@/icons/ArrowRight";

export const BlogPostCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-72 cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-40 overflow-hidden">
      <Image
        src={coverImage}
        alt="Blog cover"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3">
        <span className="rounded-full bg-white/10 px-2.5 pt-1.5 pb-1 font-mono text-[10px] tracking-wider text-neutral-700 uppercase">
          Tutorial
        </span>
      </div>
    </div>

    <div className="p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500" />
        <span className="text-[11px] text-neutral-500">John Doe</span>
        <span className="text-neutral-300">·</span>
        <span className="flex items-center gap-1 text-[11px] text-neutral-400">
          <Clock size={10} />6 min read
        </span>
      </div>

      <h3 className="mb-2 text-base leading-snug font-semibold text-neutral-900 transition-colors group-hover:text-violet-700">
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
              className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:text-violet-600">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
));
BlogPostCard.displayName = "BlogPostCard";
