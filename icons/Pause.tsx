import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Pause = ({
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
    <path d="M6 18h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1M7 8h2v8H7zM14 6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm3 10h-2V8h2z" />
  </svg>
);
