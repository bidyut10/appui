import { IconProps } from "@/types/types";

export const Sparkle = ({
  size = 14,
  color = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2.5 L13.6 9.6 L21 12 L13.6 14.4 L12 21.5 L10.4 14.4 L3 12 L10.4 9.6 Z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#hd-rough-soft)"
    />
  </svg>
);
