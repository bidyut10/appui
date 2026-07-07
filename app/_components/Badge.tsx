import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span
      className={`absolute rounded-full border border-neutral-200 bg-white px-1.5 pb-0.5 pt-1 font-sans text-[10px] font-medium leading-none tracking-tight shadow-sm uppercase ${className}`}
    >
      {children}
    </span>
  );
}
