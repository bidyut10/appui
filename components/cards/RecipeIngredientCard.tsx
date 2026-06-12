import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Leaf } from "@/icons/Leaf";
import { Soup } from "@/icons/Soup";
import { Clock } from "@/icons/Clock";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type RecipeIngredient = {
  name: string;
  amount: string;
};

export type RecipeIngredientCardProps = {
  dishName?: string;
  cuisine?: string;
  prepTime?: string;
  servings?: string;
  ingredients?: RecipeIngredient[];
  chefNote?: string;
} & ComponentPropsWithoutRef<"div">;

/* -------------------------------------------------------------------------- */
/*                              Default Content                               */
/* -------------------------------------------------------------------------- */

const defaultIngredients: RecipeIngredient[] = [
  { name: "Basmati rice", amount: "2 cups" },
  { name: "Mustard oil", amount: "3 tbsp" },
  { name: "Panch phoron", amount: "1 tsp" },
  { name: "Green chili", amount: "2 pcs" },
  { name: "Fresh coriander", amount: "handful" },
];

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export const RecipeIngredientCard = forwardRef<
  HTMLDivElement,
  RecipeIngredientCardProps
>(
  (
    {
      className,
      dishName = "Shorshe Ilish",
      cuisine = "Bengali · Traditional",
      prepTime = "45 min",
      servings = "4 servings",
      ingredients = defaultIngredients,
      chefNote = "Marinate fish 20 min for deeper flavour",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="recipe-ingredient-card"
      className={cn(
        "w-full max-w-xs overflow-hidden rounded-2xl border border-amber-200/60 bg-[#fffdf8] font-sans shadow-lg shadow-amber-100/40",
        className,
      )}
      {...props}
    >
      <div
        data-slot="recipe-ingredient-card-header"
        className="border-b border-amber-100 bg-linear-to-r from-amber-50 to-orange-50 px-4 py-4 sm:px-5"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-widest text-amber-600 uppercase">
              {cuisine}
            </p>
            <h3 className="mt-0.5 truncate text-lg font-bold text-amber-950">
              {dishName}
            </h3>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <Soup size={18} />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-amber-800/70">
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {prepTime}
          </span>
          <span className="flex items-center gap-1">
            <Leaf size={11} />
            {servings}
          </span>
        </div>
      </div>

      <div
        data-slot="recipe-ingredient-card-list"
        className="space-y-2 px-4 py-4 sm:px-5"
      >
        <p className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
          Ingredients
        </p>
        {ingredients.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-2 border-b border-dotted border-amber-100 pb-2 last:border-0"
          >
            <span className="text-sm text-amber-950">{item.name}</span>
            <span className="shrink-0 font-mono text-[11px] text-amber-600">
              {item.amount}
            </span>
          </div>
        ))}
      </div>

      <div
        data-slot="recipe-ingredient-card-note"
        className="mx-4 mb-4 rounded-xl bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-800 sm:mx-5"
      >
        <span className="font-semibold">Chef tip:</span> {chefNote}
      </div>
    </div>
  ),
);

RecipeIngredientCard.displayName = "RecipeIngredientCard";
