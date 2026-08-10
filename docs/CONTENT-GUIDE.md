# Content guide — how to change what the site shows

Everything below is a data/config edit. No component changes needed.

## Add a product

Open `src/data/catalog.ts` and append to the `products` array:

```ts
{
  id: "unique-slug",                 // becomes /product/unique-slug and the SKU
  name: "Product name",
  price: 15,                          // ₹; use 0 for "not priced yet" (shows —)
  category: "bakery-supply",         // must match a category slug
  subcategory: "Cake Toppers & Knife", // optional; must match src/config/site.ts
  description: "One or two sentences.",
  tone: "bg-[oklch(0.9_0.01_260)]",  // placeholder swatch behind the photo
  status: "in-stock",                // in-stock | not-in-stock | unavailable
  image: "/toppers/topper-21.jpeg",  // optional; omit for "No image available"
  badge: "New",                      // optional; badged items appear on the homepage rail
}
```

## Add a photo

Drop the file in `public/toppers/` (or any folder under `public/`) and
reference it with its public path, e.g. `/toppers/topper-21.jpeg`. Files in
`public/` work on any host; do not paste editor CDN links.

## Add a category

1. Add an entry to `categories` in `src/data/catalog.ts` (slug, name, tagline,
   description, image — import the cover from `src/assets/`).
2. Optional: add a sub-nav for it in `CATEGORY_SUBNAV` in `src/config/site.ts`.

The header, footer, homepage tiles, hero carousel and shop filters all read
from that array — nothing else to update.

## Rename a sub-category tab

Edit `CATEGORY_SUBNAV` in `src/config/site.ts` **and** the matching
`subcategory` values in `src/data/catalog.ts` (they must match exactly).

## Change brand name, email, studio address or hours

`src/config/site.ts`.

## Change page titles / meta descriptions

Each route's `head()` uses `buildMeta()` from `src/config/seo.ts`.
