import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Pin = ({
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
    <path d="m3.71,21.71l5.29-5.29,2.29,2.29c.2.2.45.29.71.29s.51-.1.71-.29l3-3c.39-.39.39-1.02,0-1.41l-.79-.79,1.59-1.59.79.79c.39.39,1.02.39,1.41,0l3-3c.39-.39.39-1.02,0-1.41l-6-6c-.39-.39-1.02-.39-1.41,0l-3,3c-.39.39-.39,1.02,0,1.41l.79.79-1.59,1.59-.79-.79c-.39-.39-1.02-.39-1.41,0l-3,3c-.39.39-.39,1.02,0,1.41l2.29,2.29-5.29,5.29,1.41,1.41Zm5.29-11.29l.79.79c.39.39,1.02.39,1.41,0l3-3c.39-.39.39-1.02,0-1.41l-.79-.79,1.59-1.59,4.59,4.59-1.59,1.59-.79-.79c-.39-.39-1.02-.39-1.41,0l-3,3c-.39.39-.39,1.02,0,1.41l.79.79-1.59,1.59-4.59-4.59,1.59-1.59Z" />
  </svg>
);
