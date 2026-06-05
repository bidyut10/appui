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
  <div
    ref={ref}
    className={`w-80 font-sans ${className}`}
    {...props}
  >
    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 text-center mb-4">
      Trusted by teams at
    </p>

    <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 py-4">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-neutral-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-neutral-50 to-transparent z-10" />

      <div className="flex animate-marquee gap-8 w-max">
        {[...logos, ...logos, ...logos].map(({ name, icon: Icon }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity shrink-0"
          >
            <Icon size={20} />
            <span className="text-xs font-semibold text-neutral-600 tracking-tight">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
));
LogoMarquee.displayName = "LogoMarquee";
