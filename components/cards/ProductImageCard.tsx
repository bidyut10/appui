"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import productImage from "@/public/dbg.png";

import { Star } from "@/icons/Star";
import { Heart } from "@/icons/Heart";
import { Plus } from "@/icons/Plus";

/**
 * ProductImageCard
 *
 * A modern product showcase card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Perfect for:
 * - E-commerce stores
 * - Product galleries
 * - Landing pages
 * - Featured product sections
 *
 * Note:
 * - Uses Next.js Image for optimization.
 * - Replace <Image /> with <img /> if using React only.
 */
export type ProductImageCardProps = {
  image?: StaticImageData | string;

  badge?: string;
  collection?: string;

  title?: string;

  price?: string | number;
  originalPrice?: string | number;

  rating?: number;
  reviewCount?: number;

  quickViewText?: string;
  addButtonText?: string;

  wishlistIcon?: ReactNode;
  addIcon?: ReactNode;

  onWishlist?: () => void;
  onAddToCart?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const ProductImageCard = forwardRef<
  HTMLDivElement,
  ProductImageCardProps
>(
  (
    {
      className,

      image = productImage,

      badge = "New",
      collection = "Studio Collection",

      title = "Minimal Desk Lamp — Matte Black",

      price = "$89",
      originalPrice = "$120",

      rating = 5,
      reviewCount = 128,

      quickViewText = "Quick View",
      addButtonText = "Add",

      wishlistIcon,
      addIcon,

      onWishlist,
      onAddToCart,

      ...props
    },
    ref,
  ) => {
    const safeRating = Math.min(Math.max(rating, 0), 5);

    return (
      <div
        ref={ref}
        data-slot="product-image-card"
        className={cn(
          "group w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Product image */}
        <div className="relative h-44 overflow-hidden bg-neutral-50">
          <Image
            src={image}
            alt={title}
            fill
            sizes="320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Product badge */}
          <span className="absolute top-3 left-3 rounded-full bg-neutral-50/20 px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
            {badge}
          </span>

          {/* Wishlist button */}
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={onWishlist}
            className="absolute top-3 right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 hover:scale-110"
          >
            {wishlistIcon ?? <Heart size={13} className="text-neutral-600" />}
          </button>

          {/* Quick view overlay */}
          <div className="absolute inset-x-0 bottom-0 flex h-12 items-end justify-center bg-linear-to-t from-black/30 to-transparent pb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-[10px] font-medium tracking-wide text-white uppercase">
              {quickViewText}
            </span>
          </div>
        </div>

        <div className="p-4">
          <p className="mb-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            {collection}
          </p>

          <h3 className="mb-2 text-sm leading-snug font-semibold text-neutral-900">
            {title}
          </h3>

          {/* Rating */}
          <div className="mb-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={10}
                className={
                  index < safeRating ? "text-amber-400" : "text-neutral-200"
                }
              />
            ))}

            <span className="ml-1 text-[10px] text-neutral-400">
              ({reviewCount})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-base font-semibold text-neutral-900">
                {price}
              </span>

              {originalPrice && (
                <span className="ml-1.5 text-xs text-neutral-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>

            <button
              type="button"
              aria-label={`Add ${title} to cart`}
              onClick={onAddToCart}
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
            >
              {addIcon ?? <Plus size={12} />}
              {addButtonText}
            </button>
          </div>
        </div>
      </div>
    );
  },
);

ProductImageCard.displayName = "ProductImageCard";
