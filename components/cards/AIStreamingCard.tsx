"use client";
import React, { useState, useEffect } from "react";

const fullResponse =
  "Here's a React component with TypeScript support. It uses forwardRef for flexibility and accepts className for customization.";

export const AIStreamingCard = () => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullResponse.length) {
        setText(fullResponse.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 font-sans">
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/20">
          <span className="text-[8px] font-bold text-emerald-400">AI</span>
        </div>
        <span className="text-xs text-neutral-400">Generating response…</span>
        {!done && (
          <span className="ml-auto flex gap-0.5">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="h-1 w-1 animate-pulse rounded-full bg-violet-400"
                style={{ animationDelay: `${d * 200}ms` }}
              />
            ))}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs leading-relaxed text-neutral-300">
          {text}
          {!done && (
            <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-violet-400" />
          )}
        </p>
        {done && (
          <div className="mt-3 rounded-xl border border-neutral-800 bg-neutral-900 p-3">
            <p className="mb-1 font-mono text-[10px] text-emerald-400">
              {"// Component.tsx"}
            </p>
            <pre className="font-mono text-[10px] leading-relaxed whitespace-pre-wrap text-neutral-400">
              {`export const Card = forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
