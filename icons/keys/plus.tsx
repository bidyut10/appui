import { IconProps } from "@/types/types";

export const Plus = ({
  size = 14,
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
    <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z" />
  </svg>
);
