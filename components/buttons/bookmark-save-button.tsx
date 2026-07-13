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
          "inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border px-3.5 font-sans text-sm font-medium transition-[background-color,border-color,color,transform] duration-500 ease-in-out active:scale-[0.98] select-none",
          saved
            ? "border-yellow-200 bg-yellow-400 text-white"
            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
          className,
        )}
        {...props}
      >
        <Bookmark
          size={16}
          strokeWidth={2}
          className={cn(
            "transition-[fill,color,transform] duration-500 ease-in-out",
            saved ? "scale-110 fill-white text-white" : "scale-100 fill-transparent text-current",
          )}
        />
        {saved ? savedLabel : label}
      </button>
    );
  },
);

BookmarkSaveButton.displayName = "BookmarkSaveButton";
