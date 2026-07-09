import { ChevronRight, MoveRight } from "lucide-react";

export function ViewLink({
  children,
  href = "#",
}: {
  children: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group absolute top-full right-0 mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-700 underline underline-offset-2"
    >
      {children}
      <span className="relative inline-flex size-3.5 shrink-0 items-center justify-center">
        <ChevronRight
          size={14}
          strokeWidth={2.5}
          className="transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
        />
        <MoveRight
          size={14}
          strokeWidth={1.5}
          className="absolute scale-95 -translate-x-0.5 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
        />
      </span>
    </a>
  );
}
