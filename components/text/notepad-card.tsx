import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";
import { Bookmark } from "lucide-react";

export type NotepadCardProps = Readonly<
  {
    title?: string;
    quote?: string;
    author?: string;
    checklist?: string[];
    bookmarkIcon?: ReactNode;
  } & ComponentPropsWithoutRef<"div">
>;

// Production-ready Notepad component — styled with Tailwind CSS.
export const NotepadCard = forwardRef<HTMLDivElement, NotepadCardProps>(
  (
    {
      className,
      title = "Note to self",
      quote = "Design is not just what it looks like and feels like. Design is how it works.",
      author = "S. Jobs",
      checklist = ["Ship the MVP", "Write tests", "Review PR #42"],
      bookmarkIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="notepad-card"
        className={cn(
          "relative w-60 border border-[#e6e2bc] bg-[#fffdf0] p-5 font-sans shadow-[5px_5px_0px_#e6e2bc]",
          className,
        )}
        {...props}
      >
        {/* Bookmark */}
        <div
          data-slot="notepad-card-bookmark"
          className="absolute top-3 right-3 text-[#a39e76]"
        >
          {bookmarkIcon ?? <Bookmark size={16} />}
        </div>

        {/* Note title */}
        <h5
          data-slot="notepad-card-title"
          title={title}
          className="mb-3 border-b border-[#e6e2bc] pb-1 font-mono text-[10px] tracking-widest text-[#a39e76] uppercase"
        >
          {title}
        </h5>

        {/* Quote content */}
        <p
          data-slot="notepad-card-quote"
          className="font-serif text-sm leading-relaxed text-[#5c5a4a] italic"
        >
          &quot;{quote}&quot;
        </p>

        {/* Quote author */}
        <p
          data-slot="notepad-card-author"
          title={author}
          className="mt-4 text-right text-[10px] text-[#a39e76]"
        >
          — {author}
        </p>

        {/* Checklist */}
        <div data-slot="notepad-card-checklist" className="mt-4 space-y-2">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs text-[#5c5a4a]"
            >
              <div className="h-3 w-3 shrink-0 border border-[#c4bf98]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

NotepadCard.displayName = "NotepadCard";
