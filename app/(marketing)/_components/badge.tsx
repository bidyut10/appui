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
      className={`absolute rounded-full border border-neutral-200 bg-white px-1.5 pt-1 pb-0.5 font-sans text-[10px] leading-none font-medium tracking-tight uppercase shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}
