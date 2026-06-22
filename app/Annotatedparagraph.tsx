import { Heart } from "@/icons/elements/heart";
import { Pin } from "@/icons/elements/pin";
import { CircleScribble } from "@/icons/shapes/circle-scribble";
import { HighlightScribble } from "@/icons/shapes/highlight-scribble";
import { WavyUnderline } from "@/icons/shapes/wavy-underline";

// Shared hand-drawn displacement filters
function RoughFilters() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="hd-rough" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.045}
            numOctaves={2}
            seed={4}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={2.6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="hd-rough-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.035}
            numOctaves={2}
            seed={11}
            result="n2"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n2"
            scale={1.5}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function AnnotatedParagraph() {
  return (
    <div className="max-w-xl px-4 my-14 md:px-0">
      <RoughFilters />
      <p className="text-start font-serif text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
        <span className="relative inline-block font-normal whitespace-nowrap text-neutral-950">
          Every day
          <WavyUnderline className="pointer-events-none absolute bottom-[-0.4em] left-[-2%] h-[0.7em] w-[104%] text-purple-300" />
        </span>
        , building for the web becomes easier. New tools appear, new ideas
        emerge, and creating something functional takes less time than ever
        before.
        <br />
        <br />
        Yet the products people remember are rarely remembered for what they do.
        They&rsquo;re remembered for{" "}
        <span className="relative inline-block font-normal whitespace-nowrap text-neutral-950">
          how they feel
          <WavyUnderline className="pointer-events-none absolute bottom-[-0.4em] left-[-2%] h-[0.7em] w-[104%] text-purple-400" />
        </span>
        , the{" "}
        <span className="relative inline-block px-1 font-normal whitespace-nowrap text-neutral-950">
          care behind them
          <CircleScribble className="pointer-events-none absolute inset-[-0.6em_-0.55em] h-[calc(100%+1.2em)] w-[calc(100%+1.1em)] text-cyan-200" />
        </span>
        , and the details that make them stand apart.
        <br />
        <br />
        <Pin className="mr-1 inline-block h-[0.85em] w-[0.85em] -translate-y-px text-red-500 fill-red-500" />
        <span className="font-normal text-neutral-950">OpensourceUI</span> is
        for builders who believe those details matter. A collection of
        thoughtfully crafted components designed to help create work that feels{" "}
        <span className="font-normal text-neutral-950">intentional</span>,{" "}
        <span className="font-normal text-neutral-950">polished</span>, and{" "}
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10 font-normal text-neutral-950">
            worth sharing.
          </span>
          <HighlightScribble className="pointer-events-none absolute inset-x-[-4%] bottom-[-0.08em] z-0 h-[1.15em] w-[108%] text-yellow-300/60" />
        </span>
        <Heart className="ml-1 inline-block h-[0.9em] w-[0.9em] -translate-y-px text-yellow-400 fill-yellow-400" />
      </p>
    </div>
  );
}
