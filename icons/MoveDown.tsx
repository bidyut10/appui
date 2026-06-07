import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const MoveDown = ({
  size = 16,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    stroke={color}
    className={className}
    {...props}
    fill="none"
  >
    <path d="M8 18L12 22L16 18" />
    <path d="M12 2V22" />
  </svg>
);
