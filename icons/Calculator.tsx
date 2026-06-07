import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Calculator = ({
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
    <path d="m19,2H5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2ZM5,20V4h14v16s-14,0-14,0Z" />
    <path d="M7 12H9V14H7z" />
    <path d="M7 16H9V18H7z" />
    <path d="M11 12H13V14H11z" />
    <path d="M7 6H17V10H7z" />
    <path d="M11 16H13V18H11z" />
    <path d="M15 12H17V18H15z" />
  </svg>
);
