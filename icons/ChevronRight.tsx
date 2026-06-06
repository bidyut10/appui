import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const ChevronRight = ({
  size = 16,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    className={className}
    {...props}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
