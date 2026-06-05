"use client";
import React, { useState, useEffect } from "react";

const fullResponse = "Here's a React component with TypeScript support. It uses forwardRef for flexibility and accepts className for customization.";

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
    <div className="w-72 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-2.5 border-b border-neutral-800 flex items-center gap-2">
        <div className="w-5 h-5 rounded-md bg-emerald-500/20 flex items-center justify-center">
          <span className="text-emerald-400 text-[8px] font-bold">AI</span>
        </div>
        <span className="text-xs text-neutral-400">Generating response…</span>
        {!done && (
          <span className="ml-auto flex gap-0.5">
            {[0, 1, 2].map((d) => (
              <span key={d} className="w-1 h-1 rounded-full bg-violet-400 animate-pulse" style={{ animationDelay: `${d * 200}ms` }} />
            ))}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-neutral-300 leading-relaxed">
          {text}
          {!done && <span className="inline-block w-1.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse" />}
        </p>
        {done && (
          <div className="mt-3 p-3 bg-neutral-900 border border-neutral-800 rounded-xl">
            <p className="text-[10px] font-mono text-emerald-400 mb-1">{"// Component.tsx"}</p>
            <pre className="text-[10px] font-mono text-neutral-400 leading-relaxed whitespace-pre-wrap">
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
