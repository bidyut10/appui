import { SaveScrollLink } from "@/lib/docs";
import { ChevronRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ShowcaseEntry } from "@/lib/showcase";

const LETTER_COLORS = [
  { bg: "bg-neutral-100", text: "text-sky-700" },
  { bg: "bg-neutral-100", text: "text-rose-600" },
  { bg: "bg-neutral-100", text: "text-amber-700" },
  { bg: "bg-neutral-100", text: "text-emerald-700" },
  { bg: "bg-neutral-100", text: "text-violet-700" },
  { bg: "bg-neutral-100", text: "text-cyan-700" },
  { bg: "bg-neutral-100", text: "text-orange-700" },
  { bg: "bg-neutral-100", text: "text-fuchsia-700" },
  { bg: "bg-neutral-100", text: "text-lime-700" },
  { bg: "bg-neutral-100", text: "text-indigo-700" },
] as const;

function getLetterColor(index: number) {
  return LETTER_COLORS[index % LETTER_COLORS.length];
}

type ComponentListRowProps = Readonly<{
  item: ShowcaseEntry & { category: string };
  index: number;
}>;

export function ComponentListRow({ item, index }: ComponentListRowProps) {
  const letterColor = getLetterColor(index);
  const letter = item.title.charAt(0).toUpperCase();

  return (
    <li className="min-w-0">
      <SaveScrollLink
        href={`/components/${item.slug}`}
        className="group flex min-w-0 items-center gap-2.5 py-1 max-[499px]:gap-2"
      >
        <div
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded",
            letterColor.bg,
          )}
        >
          <span
            className={cn(
              "font-sans text-[10px] font-semibold",
              letterColor.text,
            )}
          >
            {letter}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 max-[499px]:gap-2">
          <p className="min-w-0 flex-1 truncate font-sans text-sm leading-snug">
            <span className="font-semibold text-neutral-900 group-hover:text-neutral-700">
              {item.title}
            </span>
            <span className="text-neutral-300"> / </span>
            <span className="text-neutral-500">{item.category}</span>
          </p>

          <span className="relative inline-flex size-3 shrink-0 items-center justify-center text-neutral-400 group-hover:text-neutral-700">
            <ChevronRight
              size={12}
              strokeWidth={3}
              className="transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
              aria-hidden
            />
            <MoveRight
              size={12}
              strokeWidth={2.5}
              className="absolute scale-95 -translate-x-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
              aria-hidden
            />
          </span>
        </div>
      </SaveScrollLink>
    </li>
  );
}
