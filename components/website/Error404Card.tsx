import React, { forwardRef } from "react";
import { Home } from "@/icons/Home";
import { ArrowRight } from "@/icons/ArrowRight";

export const Error404Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 text-center font-sans ${className}`} {...props}>
    <p className="text-7xl font-extralight text-neutral-200 tracking-tighter leading-none">404</p>
    <h3 className="text-lg font-semibold text-neutral-900 mt-2 mb-1">Page not found</h3>
    <p className="text-xs text-neutral-500 leading-relaxed mb-5 max-w-55 mx-auto">
      Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
    </p>
    <div className="flex items-center justify-center gap-2">
      <button className="h-9 px-4 bg-neutral-900 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 hover:bg-neutral-800 transition-colors cursor-pointer">
        <Home size={12} /> Go Home
      </button>
      <button className="h-9 px-4 border border-neutral-200 text-neutral-700 text-xs font-medium rounded-lg bg-white flex items-center gap-1 hover:bg-neutral-50 transition-colors cursor-pointer">
        Contact <ArrowRight size={12} />
      </button>
    </div>
  </div>
));
Error404Card.displayName = "Error404Card";
