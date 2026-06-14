import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";
import { Web } from "@/icons/Web";

/**
 * Mini Footer built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type MiniFooterColumn = {
  title: string;
  links: string[];
};

export type MiniFooterProps = {
  brandName?: string;
  brandInitial?: string;
  columns?: MiniFooterColumn[];
  copyright?: string;
} & ComponentPropsWithoutRef<"div">;

const defaultColumns: MiniFooterColumn[] = [
  {
    title: "Product",
    links: ["Components", "Templates", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Community", "Support"],
  },
];

const socialIcons = [Github, Mail, Web];

export const MiniFooter = forwardRef<HTMLDivElement, MiniFooterProps>(
  (
    {
      className,
      brandName = "AppUI",
      brandInitial = "A",
      columns = defaultColumns,
      copyright = "© 2026 AppUI",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="mini-footer"
      className={cn(
        "w-80 overflow-hidden rounded-2xl bg-neutral-950 font-sans",
        className,
      )}
      {...props}
    >
      <div className="p-5">
        <div
          data-slot="mini-footer-brand"
          className="mb-4 flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
            <span className="text-xs font-bold text-neutral-900">
              {brandInitial}
            </span>
          </div>
          <span className="text-sm font-semibold text-white">{brandName}</span>
        </div>

        <div
          data-slot="mini-footer-columns"
          className="mb-5 grid grid-cols-2 gap-4"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                {col.title}
              </p>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      aria-label={link}
                      className="cursor-pointer text-[11px] text-neutral-400 transition-colors hover:text-white"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          data-slot="mini-footer-bottom"
          className="flex items-center gap-2 border-t border-neutral-800 pt-4"
        >
          {socialIcons.map((Icon, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Social link ${i + 1}`}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
            >
              <Icon size={13} />
            </button>
          ))}
          <p className="ml-auto text-[10px] text-neutral-600">{copyright}</p>
        </div>
      </div>
    </div>
  ),
);

MiniFooter.displayName = "MiniFooter";
