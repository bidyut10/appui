import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";


/**
 * Product catalog grid card built with Next.js, React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CatalogProduct = {
  name: string;
  price: string;
  image: string;
};

export type ProductCatalogCardProps = {
  brand?: string;
  products?: CatalogProduct[];
} & ComponentPropsWithoutRef<"div">;

const defaultProducts: CatalogProduct[] = [
  { name: "Linen Blazer", price: "₹4,200", image: "/dithar.png" },
  { name: "Canvas Tote", price: "₹1,890", image: "/bh.png" },
  { name: "Ceramic Mug", price: "₹890", image: "/bg.png" },
  { name: "Desk Lamp", price: "₹3,400", image: "/dbg.png" },
];

export const ProductCatalogCard = forwardRef<
  HTMLDivElement,
  ProductCatalogCardProps
>(
  (
    {
      className,
      brand = "Atelier / SS26",
      products = defaultProducts,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="product-catalog-card"
      className={cn(
        "w-xs rounded-2xl border border-neutral-100 bg-white p-4 font-sans",
        className,
      )}
      {...props}
    >
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-bold tracking-tight text-neutral-900">
          {brand}
        </h4>
        <span className="text-[10px] text-neutral-400">4 items</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <div key={product.name} className="group cursor-default">
            <div className="relative mb-2 aspect-square overflow-hidden rounded-xl bg-neutral-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="160px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="truncate text-[12px] font-medium text-neutral-800">
              {product.name}
            </p>
            <p className="text-[11px] text-neutral-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  ),
);

ProductCatalogCard.displayName = "ProductCatalogCard";
