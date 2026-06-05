import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Command = ({
  size = 16,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={className}
    {...props}
  >
    <path d="M18 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4v2h-4V6c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4h2v4H6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-2h4v2c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4h-2v-4zm-2-4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2zM8 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2zM8 8H6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2zm6 6h-4v-4h4zm4 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2v-2z" />
  </svg>
);
