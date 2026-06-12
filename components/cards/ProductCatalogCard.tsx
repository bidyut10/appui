import Image, { type StaticImageData } from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import product1 from "@/public/dithar.png";
import product2 from "@/public/bh.png";
import product3 from "@/public/bg.png";
import product4 from "@/public/dbg.png";

export type CatalogProduct = {
  name: string;
  price: string;
  image: StaticImageData | string;
};

export type ProductCatalogCardProps = {
  brand?: string;
  products?: CatalogProduct[];
} & ComponentPropsWithoutRef<"div">;

const defaultProducts: CatalogProduct[] = [
  { name: "Linen Blazer", price: "₹4,200", image: product1 },
  { name: "Canvas Tote", price: "₹1,890", image: product2 },
  { name: "Ceramic Mug", price: "₹890", image: product3 },
  { name: "Desk Lamp", price: "₹3,400", image: product4 },
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
        "w-full max-w-xs rounded-2xl border border-neutral-200 bg-white p-4 font-sans",
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
