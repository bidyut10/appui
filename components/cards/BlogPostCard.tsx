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
    className={`group w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans cursor-pointer ${className}`}
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
        <span className="px-2.5 pt-1.5 pb-1 bg-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-700 rounded-full">
          Tutorial
        </span>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500" />
        <span className="text-[11px] text-neutral-500">John Doe</span>
        <span className="text-neutral-300">·</span>
        <span className="text-[11px] text-neutral-400 flex items-center gap-1">
          <Clock size={10} />
          6 min read
        </span>
      </div>

      <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2 group-hover:text-violet-700 transition-colors">
        Building a Design System from Scratch in 2026
      </h3>

      <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
        A practical guide to creating scalable, token-based design systems that
        your team will actually use.
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div className="flex gap-1.5">
          {["Design", "React"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-neutral-100 text-[10px] font-medium text-neutral-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-neutral-400 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
));
BlogPostCard.displayName = "BlogPostCard";
