import type { SVGProps } from "react";

export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Images = ({
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
    <path d="M12 12 11 11 9 14 19 14 15 8 12 12z" />
    <path d="m20,2h-12c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2Zm-12,14V4h12v12s-12,0-12,0Z" />
    <path d="m4,8h-2v12c0,1.1.9,2,2,2h12v-2H4v-12Z" />
  </svg>
);
