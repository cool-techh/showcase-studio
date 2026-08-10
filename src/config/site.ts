/**
 * CONFIG LAYER — brand, navigation and page-level constants.
 * Change copy here rather than inside components.
 */

export const site = {
  name: "Atha",
  tagline: "Bakery & Office Supplies",
  description:
    "A minimalist showcase of bakery and office supplies — considered goods for makers and workspaces.",
  year: "2026",
  email: "hello@trusiqq.com",
  studio: "14 Rue des Artisans, Paris",
  hours: "Mon–Fri, 10:00 – 18:00 CET",
  /** The site is a catalogue only — no checkout yet. */
  ordersEnabled: false,
} as const;

/** Category slug that renders the "Soon!" placeholder page instead of a grid. */
export const PLACEHOLDER_CATEGORY_SLUG = "more-soon";

/** Sub-navigation shown on category pages, keyed by category slug. */
export const CATEGORY_SUBNAV: Record<string, string[]> = {
  "bakery-supply": ["Cake Toppers & Knife", "Party Poppers", "Candles", "Decor Items"],
};
