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

// Bookmark save — icon fills and label swaps when saved.
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
          "inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border px-3.5 font-sans text-sm font-medium transition-all duration-200 active:scale-[0.98] select-none",
          saved
            ? "border-amber-200 bg-amber-50 text-amber-800"
            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
          className,
        )}
        {...props}
      >
        <Bookmark
          size={16}
          strokeWidth={2}
          className={cn(
            "transition-transform duration-200",
            saved ? "scale-110 fill-amber-500 text-amber-500" : "scale-100",
          )}
        />
        {saved ? savedLabel : label}
      </button>
    );
  },
);

BookmarkSaveButton.displayName = "BookmarkSaveButton";
