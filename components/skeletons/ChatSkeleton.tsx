import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/*
| Chat skeleton loader built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Perfect for chat interfaces, AI assistants,
| support widgets, and messaging applications
| while content is loading.
*/

export type ChatSkeletonProps = ComponentPropsWithoutRef<"div">;

export const ChatSkeleton = forwardRef<HTMLDivElement, ChatSkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="chat-skeleton"
      className={cn(
        "w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div
        data-slot="chat-skeleton-header"
        className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3"
      >
        <div className="h-8 w-8 animate-pulse rounded-full bg-neutral-200" />

        <div className="space-y-1.5">
          <div className="h-2.5 w-20 animate-pulse rounded bg-neutral-200" />
          <div className="h-2 w-14 animate-pulse rounded bg-neutral-100" />
        </div>
      </div>

      {/* Messages */}
      <div data-slot="chat-skeleton-messages" className="space-y-3 p-4">
        <div className="flex gap-2">
          <div className="h-6 w-6 shrink-0 animate-pulse rounded-lg bg-neutral-200" />

          <div className="h-10 w-48 animate-pulse rounded-2xl bg-neutral-100" />
        </div>

        <div className="flex justify-end gap-2">
          <div className="h-8 w-36 animate-pulse rounded-2xl bg-neutral-200" />
        </div>

        <div className="flex gap-2">
          <div className="h-6 w-6 shrink-0 animate-pulse rounded-lg bg-neutral-200" />

          <div className="h-14 w-52 animate-pulse rounded-2xl bg-neutral-100" />
        </div>
      </div>

      {/* Input */}
      <div
        data-slot="chat-skeleton-input"
        className="border-t border-neutral-100 p-3"
      >
        <div className="h-9 animate-pulse rounded-xl bg-neutral-100" />
      </div>
    </div>
  ),
);

ChatSkeleton.displayName = "ChatSkeleton";
