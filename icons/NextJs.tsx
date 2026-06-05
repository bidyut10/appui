import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const NextJs = ({
  size = 48,
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.05 0 3.95-.62 5.54-1.67L9.26 9.63v6.5H7.87V7.86h1.74l9.03 11.63A9.97 9.97 0 0 0 22.01 12c0-5.52-4.48-10-10-10Zm4.25 12.13-1.38-1.78V7.86h1.38z" />
  </svg>
);
