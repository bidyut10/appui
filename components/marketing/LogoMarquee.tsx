import React, { forwardRef } from "react";
import { ReactJs } from "@/icons/ReactJs";
import { NextJs } from "@/icons/NextJs";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { Typescript } from "@/icons/Typescript";
import { Github } from "@/icons/Github";

const logos = [
  { name: "React", icon: ReactJs },
  { name: "Next.js", icon: NextJs },
  { name: "Tailwind", icon: TailwindCSS },
  { name: "TypeScript", icon: Typescript },
  { name: "GitHub", icon: Github },
];

export const LogoMarquee = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 font-sans ${className}`} {...props}>
    <p className="mb-4 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
      Trusted by teams at
    </p>

    <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 py-4">
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
));
LogoMarquee.displayName = "LogoMarquee";
