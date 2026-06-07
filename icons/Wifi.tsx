import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Wifi = ({
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
    <path d="M10 19c0 1.1.89 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2M17.66 15.39c-1.51-1.51-3.52-2.34-5.66-2.34s-4.15.83-5.66 2.34l1.41 1.41c1.13-1.13 2.64-1.76 4.24-1.76s3.11.62 4.24 1.76l1.41-1.41Z" />
    <path d="M20.49 12.57C18.22 10.3 15.21 9.05 12 9.05s-6.22 1.25-8.49 3.52l1.42 1.41c1.89-1.89 4.4-2.93 7.07-2.93s5.18 1.04 7.07 2.93z" />
    <path d="M.69 9.69 2.1 11.1C4.74 8.46 8.26 7 12 7s7.25 1.46 9.9 4.1l1.41-1.41C20.29 6.67 16.27 5 12 5S3.71 6.66.69 9.69" />
  </svg>
);
