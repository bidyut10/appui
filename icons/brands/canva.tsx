import { IconProps } from "@/types/types";

export const Canva = ({
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-.39 16.5c-2.95 0-4.86-2.21-4.86-5.56 0-4.32 2.99-7.45 6.36-7.45 2.04 0 3.25 1.03 3.25 2.42s-1.04 2.46-1.93 2.46c-.22 0-.33-.11-.33-.29 0-.4.64-1 .64-2.13 0-.95-.58-1.55-1.53-1.55-2.04 0-4.36 2.41-4.36 6.58 0 2.46 1.22 4.24 3.19 4.24 1.71 0 3.18-1.22 4.03-2.96.08-.15.15-.22.23-.22.12 0 .23.1.23.33 0 1.01-1.81 4.12-4.94 4.12Z" />
  </svg>
);
