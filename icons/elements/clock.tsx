import { IconProps } from "@/types/types";

export const Clock = ({
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
    <path d="m12,2C6.58,2,2,6.58,2,12s4.58,10,10,10,10-4.58,10-10S17.42,2,12,2Zm0,18c-4.34,0-8-3.66-8-8S7.66,4,12,4s8,3.66,8,8-3.66,8-8,8Z" />
    <path d="M13 7 11 7 11 13 17 13 17 11 13 11 13 7z" />
  </svg>
);
