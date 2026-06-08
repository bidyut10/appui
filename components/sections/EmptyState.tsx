import React, { forwardRef } from "react";
import { Folder } from "@/icons/Folder";
import { ArrowRight } from "@/icons/ArrowRight";

export const EmptyState = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 text-center font-sans ${className}`}
    {...props}
  >
    <div className="relative mx-auto mb-5 h-24 w-24">
      <div className="absolute inset-0 rotate-6 rounded-3xl bg-linear-to-br from-pink-100 to-fuchsia-100" />
      <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <Folder size={32} className="text-neutral-300" />
      </div>
      <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500">
        <span className="text-[10px] font-bold text-white">0</span>
      </div>
    </div>

    <h3 className="mb-1.5 text-base font-semibold text-neutral-900">
      No projects yet
    </h3>
    <p className="mx-auto mb-5 max-w-55 text-xs leading-relaxed text-neutral-500">
      Create your first project to start building with our component library.
    </p>

    <button className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-lg bg-neutral-900 px-5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95">
      Create Project
      <ArrowRight size={12} />
    </button>

    <p className="mt-4 text-[10px] text-neutral-400">
      or{" "}
      <button className="cursor-pointer text-neutral-800 hover:underline">
        import from template
      </button>
    </p>
  </div>
));
EmptyState.displayName = "EmptyState";
