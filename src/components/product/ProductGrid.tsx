/**
 * UI LAYER — the responsive grid used on every listing page.
 */
import type { Product } from "@/data/types";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  className = "",
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 ${className}`}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
