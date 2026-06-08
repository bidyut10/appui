import React, { forwardRef } from "react";
import { Home } from "@/icons/Home";
import { ArrowRight } from "@/icons/ArrowRight";

export const Error404Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 text-center font-sans ${className}`}
    {...props}
  >
    <p className="text-7xl leading-none font-extralight tracking-tighter text-neutral-200">
      404
    </p>
    <h3 className="mt-2 mb-1 text-lg font-semibold text-neutral-900">
      Page not found
    </h3>
    <p className="mx-auto mb-5 max-w-55 text-xs leading-relaxed text-neutral-500">
      Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
      moved.
    </p>
    <div className="flex items-center justify-center gap-2">
      <button className="flex h-9 cursor-pointer items-center gap-1.5 rounded-lg bg-neutral-900 px-4 text-xs font-medium text-white transition-colors hover:bg-neutral-800">
        <Home size={12} /> Go Home
      </button>
      <button className="flex h-9 cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 bg-white px-4 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
        Contact <ArrowRight size={12} />
      </button>
    </div>
  </div>
));
Error404Card.displayName = "Error404Card";
