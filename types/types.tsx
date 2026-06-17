export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export type RelatedIcon = { name: string; slug: string; category: string };

export type Props = { params: Promise<{ slug: string }> };

export type Row = readonly React.ReactNode[];
