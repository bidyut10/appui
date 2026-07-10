import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";

export function ViewLink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group absolute top-full right-0 mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-500"
    >
      {children}
      <span className="relative inline-flex size-3.5 shrink-0 items-center justify-center">
        <ChevronRight
          size={14}
          strokeWidth={2.5}
          className="ease-smooth transition-[opacity,transform] duration-500 group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
        />
        <MoveRight
          size={14}
          strokeWidth={1.5}
          className="ease-smooth absolute -translate-x-0.5 scale-95 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
}
