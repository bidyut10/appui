"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { ClaudeAI } from "@/icons/ClaudeAI";
import { Check } from "@/icons/Check";

const MODELS = [
  { id: "fast", name: "Fast", desc: "Quick drafts" },
  { id: "pro", name: "Pro", desc: "Best quality" },
  { id: "vision", name: "Vision", desc: "Image analysis" },
];

export type AIAgentStatusCardProps = {
  task?: string;
} & ComponentPropsWithoutRef<"div">;

export const AIAgentStatusCard = forwardRef<
  HTMLDivElement,
  AIAgentStatusCardProps
>(
  (
    { className, task = "Analyzing uploaded images for metadata…", ...props },
    ref,
  ) => {
    const [model, setModel] = useState("pro");
    const [done, setDone] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="ai-agent-status-card"
        className={cn(
          "w-64 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <ClaudeAI size={18} />
            {!done && (
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
            )}
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">AI Agent</p>
            <p className="text-[10px] text-neutral-500">
              {done ? "Complete" : "Running"}
            </p>
          </div>
        </div>

        <p className="mb-3 text-[11px] leading-relaxed text-neutral-600">
          {task}
        </p>

        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
          <div
            className={cn(
              "h-full rounded-full bg-neutral-900 transition-all duration-700",
              done ? "w-full" : "w-2/3 animate-pulse",
            )}
          />
        </div>

        <div className="mb-3 grid grid-cols-3 gap-1.5">
          {MODELS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setModel(m.id)}
              className={cn(
                "rounded-lg border px-1 py-2 text-center transition-colors",
                model === m.id
                  ? "border-neutral-900 bg-neutral-50"
                  : "border-neutral-100 hover:border-neutral-200",
              )}
            >
              <p className="text-[10px] font-bold text-neutral-900">{m.name}</p>
              <p className="text-[8px] text-neutral-400">{m.desc}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDone(!done)}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-neutral-900 py-2 text-[11px] font-semibold text-white"
        >
          {done ? <Check size={12} /> : null}
          {done ? "Task complete" : "Mark complete"}
        </button>
      </div>
    );
  },
);

AIAgentStatusCard.displayName = "AIAgentStatusCard";
