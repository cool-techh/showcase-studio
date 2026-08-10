/**
 * DATA LAYER — shared content types.
 * Pure type declarations; no runtime code.
 */

/** Availability of a product in the showcase. */
export type ProductStatus = "in-stock" | "unavailable" | "not-in-stock";

export type Category = {
  /** URL segment, e.g. "bakery-supply" -> /category/bakery-supply */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Imported asset or public path. */
  image: string;
};

export type Product = {
  id: string;
  /** Price in INR. 0 means "not priced yet" and renders as "—". */
  price: number;
  name: string;
  /** Category slug this product belongs to. */
  category: string;
  /** Optional sub-group inside a category, e.g. "Candles". */
  subcategory?: string;
  description: string;
  /** Tailwind background utility used as the placeholder swatch. */
  tone: string;
  badge?: string;
  image?: string;
  status?: ProductStatus;
};
