import { IconProps } from "@/types/types";

export const Microsoft = ({
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
    <path d="M11.55 21H3v-8.55h8.55zM21 21h-8.55v-8.55H21zm-9.45-9.45H3V3h8.55zm9.45 0h-8.55V3H21z" />
  </svg>
);
