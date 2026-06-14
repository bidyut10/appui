import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { ReactJs } from "@/icons/ReactJs";
import { NextJs } from "@/icons/NextJs";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { Typescript } from "@/icons/Typescript";
import { Github } from "@/icons/Github";

/**
 * Logo Marquee built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type LogoMarqueeItem = {
  name: string;
  icon: typeof ReactJs;
};

export type LogoMarqueeProps = {
  heading?: string;
  logos?: LogoMarqueeItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultLogos: LogoMarqueeItem[] = [
  { name: "React", icon: ReactJs },
  { name: "Next.js", icon: NextJs },
  { name: "Tailwind", icon: TailwindCSS },
  { name: "TypeScript", icon: Typescript },
  { name: "GitHub", icon: Github },
];

export const LogoMarquee = forwardRef<HTMLDivElement, LogoMarqueeProps>(
  (
    {
      className,
      heading = "Trusted by teams at",
      logos = defaultLogos,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="logo-marquee"
      className={cn("w-80 font-sans", className)}
      {...props}
    >
      <p className="mb-4 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
        {heading}
      </p>

      <div
        data-slot="logo-marquee-track"
        className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 py-4"
      >
        <div className="absolute top-0 bottom-0 left-0 z-10 w-12 bg-linear-to-r from-neutral-50 to-transparent" />
        <div className="absolute top-0 right-0 bottom-0 z-10 w-12 bg-linear-to-l from-neutral-50 to-transparent" />

        <div className="animate-marquee flex w-max gap-8">
          {[...logos, ...logos, ...logos].map(({ name, icon: Icon }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2 opacity-40 transition-opacity hover:opacity-70"
            >
              <Icon size={20} />
              <span className="text-xs font-semibold tracking-tight text-neutral-600">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
);

LogoMarquee.displayName = "LogoMarquee";
