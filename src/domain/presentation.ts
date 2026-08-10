/**
 * DOMAIN LAYER — display formatting.
 * Turns raw data values into the strings the UI prints.
 */
import type { Product } from "@/data/types";

/** Prices are INR. Unpriced items (0) show an em dash. */
export const formatPrice = (price: number): string => (price > 0 ? `₹${price}` : "—");

/** Human label for a product's availability, or null when it is in stock. */
export const getStatusLabel = (product: Product): string | null => {
  if (product.status === "unavailable") return "Temporarily unavailable";
  if (product.status === "not-in-stock") return "Not in stock";
  return null;
};

/** SKU shown on the product page. */
export const formatSku = (product: Product): string => product.id.toUpperCase();
