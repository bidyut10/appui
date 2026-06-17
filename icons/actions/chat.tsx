import { IconProps } from "@/types/types";

export const Chat = ({
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
    <path d="m12,2C6.49,2,2,6.49,2,12s4.49,10,10,10h9c.37,0,.71-.21.89-.54.17-.33.15-.73-.06-1.03l-1.75-2.53c1.25-1.71,1.93-3.78,1.93-5.9,0-5.51-4.49-10-10-10Zm6,16.43l1.09,1.57h-7.09c-4.41,0-8-3.59-8-8S7.59,4,12,4s8,3.59,8,8c0,1.91-.69,3.75-1.93,5.21-.3.34-.32.85-.06,1.22Z" />
  </svg>
);
