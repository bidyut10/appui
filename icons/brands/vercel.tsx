import { IconProps } from "@/types/types";

export const Vercel = ({
  size = 24,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);