# Architecture — Atha showcase site

The codebase is split into **layers**. Each layer has one job and may only
import from the layers below it. Nothing imports upward.

```text
ROUTES        src/routes/*            pages, SEO head, loaders
   |
UI            src/components/*        markup + styling only
   |
UX / STATE    src/hooks/*             interaction state (carousel, mobile)
   |
DOMAIN        src/domain/*            logic: filtering, lookups, formatting
   |
DATA          src/data/*              the catalog itself + types
   |
CONFIG        src/config/*            brand copy, nav, SEO helpers (leaf, importable anywhere)
```

## Folder map

| Path | Layer | Contains |
| --- | --- | --- |
| `src/data/types.ts` | Data | `Category`, `Product`, `ProductStatus` types |
| `src/data/catalog.ts` | Data | The actual categories + products. No logic. |
| `src/domain/catalog.ts` | Domain | `getProduct`, `getCategory`, `getProductsByCategory`, `getFeaturedProducts`, `getRelatedProducts`, `filterByCategory`, `filterBySubcategory`, `countProductsInCategory`, `ALL_FILTER` |
| `src/domain/presentation.ts` | Domain | `formatPrice` (₹, `—` when 0), `getStatusLabel`, `formatSku` |
| `src/config/site.ts` | Config | Brand name, contact details, `CATEGORY_SUBNAV`, `PLACEHOLDER_CATEGORY_SLUG` |
| `src/config/seo.ts` | Config | `pageTitle`, `buildMeta` used by every route `head()` |
| `src/hooks/use-carousel.ts` | UX | Auto-advancing index for the hero |
| `src/components/layout/` | UI | `Header`, `Footer` |
| `src/components/common/` | UI | `FilterChip`, `Breadcrumbs`, `PageMessage` |
| `src/components/product/` | UI | `ProductCard`, `ProductGrid` |
| `src/components/home/` | UI | `HeroCarousel`, `CategoryTiles` |
| `src/components/ui/` | UI | shadcn primitives (generated, leave alone) |
| `src/routes/` | Routes | One file per URL (see below) |
| `public/toppers/` | Assets | Product photos served at `/toppers/*.jpeg` |
| `src/assets/` | Assets | Category cover images (bundled imports) |

## Routes

| File | URL | Purpose |
| --- | --- | --- |
| `__root.tsx` | – | Shell: Header + `<Outlet />` + Footer, global head, error/404 |
| `index.tsx` | `/` | Hero carousel, category tiles, featured rail, editorial line |
| `shop.tsx` | `/shop` | Whole catalog with category filter chips |
| `category.$slug.tsx` | `/category/:slug` | One page per category; sub-nav filter; "Soon!" placeholder |
| `product.$id.tsx` | `/product/:id` | Detail page, specs, related products |
| `about.tsx` | `/about` | Studio story |
| `contact.tsx` | `/contact` | Enquiry form (client-side only, no backend) |

`src/routeTree.gen.ts` is generated — never edit it.

## Rules to keep the structure clean

1. **Never filter or map catalog arrays inside a component.** Add a named
   function to `src/domain/catalog.ts` and call it.
2. **Never hardcode brand copy or currency** in a component — use
   `src/config/site.ts` and `src/domain/presentation.ts`.
3. **Components stay presentational**: props in, markup out. State goes in a
   hook or in the route component.
4. **Routes compose**; they don't hold layout details other components own.
5. **Data files hold no logic**; logic files hold no data.
