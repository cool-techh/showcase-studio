/**
 * DOMAIN LAYER — catalog logic.
 *
 * Every read/filter/derivation of catalog data lives here as a small,
 * named, side-effect-free function. UI components never filter arrays
 * inline; they call these.
 */
import { categories, products } from "@/data/catalog";
import type { Category, Product } from "@/data/types";

/** All categories, in display order. */
export const listCategories = (): Category[] => categories;

/** All products, in display order. */
export const listProducts = (): Product[] => products;

/** One product by id, or undefined. */
export const getProduct = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

/** One category by slug, or undefined. */
export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

/** Every product inside a category. */
export const getProductsByCategory = (slug: string): Product[] =>
  products.filter((p) => p.category === slug);

/** Products in a category, excluding one id (used for "related"). */
export const getRelatedProducts = (slug: string, excludeId: string, limit = 4): Product[] =>
  getProductsByCategory(slug)
    .filter((p) => p.id !== excludeId)
    .slice(0, limit);

/** Products flagged with a badge — powers the homepage "New & notable" rail. */
export const getFeaturedProducts = (limit = 8): Product[] =>
  products.filter((p) => p.badge).slice(0, limit);

/** Categories other than the given slug. */
export const getOtherCategories = (slug: string): Category[] =>
  categories.filter((c) => c.slug !== slug);

/** Filter a list by subcategory. `ALL_FILTER` returns the list untouched. */
export const filterBySubcategory = (list: Product[], subcategory: string): Product[] =>
  subcategory === ALL_FILTER ? list : list.filter((p) => p.subcategory === subcategory);

/** Filter the full catalog by category slug. `ALL_FILTER` returns everything. */
export const filterByCategory = (slug: string): Product[] =>
  slug === ALL_FILTER ? products : getProductsByCategory(slug);

/** Number of products inside a category. */
export const countProductsInCategory = (slug: string): number =>
  getProductsByCategory(slug).length;

/** Sentinel value used by the "All" filter chips. */
export const ALL_FILTER = "All";
