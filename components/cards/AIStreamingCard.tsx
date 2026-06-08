"use client";

import {
  forwardRef,
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

/*
| AI streaming card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo response and code snippet with
| your own AI output. Perfect for chatbots, AI
| assistants, code generators, and streaming UIs.
*/

export type AIStreamingCardProps = {
  response?: string;
  codeSnippet?: string;
  fileName?: string;
  speed?: number;
} & ComponentPropsWithoutRef<"div">;

export const AIStreamingCard = forwardRef<HTMLDivElement, AIStreamingCardProps>(
  (
    {
      className,

      response = "Here's a React component with TypeScript support. It uses forwardRef for flexibility and accepts className for customization.",

      codeSnippet = `export const Card = forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));`,

      fileName = "// Component.tsx",

      speed = 30,

      ...props
    },
    ref,
  ) => {
    const [text, setText] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
      let index = 0;

      setText("");
      setDone(false);

      const interval = setInterval(() => {
        if (index < response.length) {
          setText(response.slice(0, index + 1));
          index++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, [response, speed]);

    return (
      <div
        ref={ref}
        data-slot="ai-streaming-card"
        className={cn(
          "w-72 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Header */}
        <div
          data-slot="ai-streaming-card-header"
          className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2.5"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/20">
            <span className="text-[8px] font-bold text-emerald-400">AI</span>
          </div>

          <span className="text-xs text-neutral-400">Generating response…</span>

          {!done && (
            <span className="ml-auto flex gap-0.5">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1 w-1 animate-pulse rounded-full bg-violet-400"
                  style={{
                    animationDelay: `${dot * 200}ms`,
                  }}
                />
              ))}
            </span>
          )}
        </div>

        {/* Content */}
        <div data-slot="ai-streaming-card-content" className="p-4">
          <p className="text-xs leading-relaxed text-neutral-300">
            {text}

            {!done && (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-violet-400" />
            )}
          </p>

          {done && (
            <div
              data-slot="ai-streaming-card-code"
              className="mt-3 rounded-xl border border-neutral-800 bg-neutral-900 p-3"
            >
              <p className="mb-1 font-mono text-[10px] text-emerald-400">
                {fileName}
              </p>

              <pre className="font-mono text-[10px] leading-relaxed whitespace-pre-wrap text-neutral-400">
                {codeSnippet}
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  },
);

AIStreamingCard.displayName = "AIStreamingCard";
