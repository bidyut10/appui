"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { Bookmark } from "lucide-react";

export type BookmarkSaveButtonProps = Readonly<
  {
    label?: string;
    savedLabel?: string;
    defaultSaved?: boolean;
  } & ComponentPropsWithoutRef<"button">
>;

// Labels stack in one grid cell; outgoing fades out, incoming fades in after.
const LABEL_LAYER =
  "col-start-1 row-start-1 text-left transition-opacity ease-out motion-reduce:transition-none";

// Bookmark save — raised key; the icon fills amber and the label fades over.
export const BookmarkSaveButton = forwardRef<
  HTMLButtonElement,
  BookmarkSaveButtonProps
>(
  (
    {
      className,
      label = "Save",
      savedLabel = "Saved",
      defaultSaved = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [saved, setSaved] = useState(defaultSaved);

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={saved}
        data-slot="bookmark-save-button"
        onClick={(event) => {
          setSaved((prev) => !prev);
          onClick?.(event);
        }}
        className={cn(
          "inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg px-3.5 font-sans text-sm font-medium outline-none select-none",
          "transition-[background-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
          // Raised keycap: hairline outline, downward shadows, bottom shade.
          "shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.12),0_2px_3px_rgba(0,0,0,0.12),inset_0_-2px_3px_rgba(0,0,0,0.08)]",
          // Pressing sinks the key with the balanced inset recipe.
          "active:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_1px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(0,0,0,0.06),inset_0_2px_3px_rgba(0,0,0,0.03),inset_0_-2px_3px_rgba(0,0,0,0.05)]",
          saved
            ? "bg-amber-50 text-amber-700 active:bg-amber-100"
            : "bg-neutral-50 text-neutral-700 hover:text-neutral-900 active:bg-neutral-100",
          className,
        )}
        {...props}
      >
        <Bookmark
          size={16}
          strokeWidth={2}
          aria-hidden
          className={cn(
            "shrink-0 transition-[fill,color,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none",
            saved
              ? "scale-110 fill-amber-500 text-amber-500"
              : "scale-100 fill-transparent text-neutral-500",
          )}
        />

        <span className="grid">
          <span
            aria-hidden={saved}
            className={cn(
              LABEL_LAYER,
              saved ? "opacity-0 duration-200" : "opacity-100 duration-300 delay-200",
            )}
          >
            {label}
          </span>
          <span
            aria-hidden={!saved}
            className={cn(
              LABEL_LAYER,
              saved ? "opacity-100 duration-300 delay-200" : "opacity-0 duration-200",
            )}
          >
            {savedLabel}
          </span>
        </span>
      </button>
    );
  },
);

BookmarkSaveButton.displayName = "BookmarkSaveButton";
