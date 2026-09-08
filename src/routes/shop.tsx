/**
 * ROUTE LAYER — "/shop" full collection with category filter.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ALL_FILTER,
  countProductsInCategory,
  filterByCategory,
  listCategories,
  listProducts,
} from "@/domain/catalog";
import { buildMeta, pageTitle } from "@/config/seo";
import { FilterChip } from "@/components/common/FilterChip";
import { ProductGrid } from "@/components/product/ProductGrid";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: buildMeta(
      pageTitle("Shop all"),
      "Browse the full Atha collection — every category, every piece.",
    ),
  }),
  component: Shop,
});

function Shop() {
  const categories = listCategories();
  const products = listProducts();
  const [active, setActive] = useState<string>(ALL_FILTER);
  const visible = filterByCategory(active);

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <header className="grid gap-6 border-b border-border pb-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          The collection
        </p>
        <h1 className="mt-3 text-5xl uppercase leading-none sm:text-7xl">Shop all</h1>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground lg:col-span-4">
          {products.length} pieces across {categories.length} categories. Filter to narrow.
        </p>
      </header>

      <div className="sticky top-16 z-30 -mx-5 mt-6 flex gap-2 overflow-x-auto bg-background/85 px-5 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <FilterChip
          label={`All (${products.length})`}
          active={active === ALL_FILTER}
          onClick={() => setActive(ALL_FILTER)}
        />
        {categories.map((c) => (
          <FilterChip
            key={c.slug}
            label={`${c.name} (${countProductsInCategory(c.slug)})`}
            active={active === c.slug}
            onClick={() => setActive(c.slug)}
          />
        ))}
      </div>

      <ProductGrid products={visible} className="mt-8" />

      <p className="mt-16 text-center text-xs text-muted-foreground">
        Looking for something specific? <Link to="/contact" className="underline">Get in touch</Link>.
      </p>
    </div>
  );
}
