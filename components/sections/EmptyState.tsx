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
    <div className="relative mx-auto w-24 h-24 mb-5">
      <div className="absolute inset-0 bg-linear-to-br from-pink-100 to-fuchsia-100 rounded-3xl rotate-6" />
      <div className="absolute inset-0 bg-white border border-neutral-200 rounded-3xl flex items-center justify-center shadow-sm">
        <Folder size={32} className="text-neutral-300" />
      </div>
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white text-[10px] font-bold">0</span>
      </div>
    </div>

    <h3 className="text-base font-semibold text-neutral-900 mb-1.5">
      No projects yet
    </h3>
    <p className="text-xs text-neutral-500 leading-relaxed mb-5 max-w-55 mx-auto">
      Create your first project to start building with our component library.
    </p>

    <button className="inline-flex items-center gap-1.5 h-9 px-5 bg-neutral-900 text-white text-xs font-medium rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95">
      Create Project
      <ArrowRight size={12} />
    </button>

    <p className="text-[10px] text-neutral-400 mt-4">
      or{" "}
      <button className="text-neutral-800 hover:underline cursor-pointer">
        import from template
      </button>
    </p>
  </div>
));
EmptyState.displayName = "EmptyState";
