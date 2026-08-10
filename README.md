# Atha — minimalist product showcase

A quiet, image-led catalogue for **bakery** and **office** supplies. The site
is a showcase only: browse categories and products, no cart or checkout.

Built with TanStack Start (React 19, SSR), Vite 7, Tailwind CSS v4 and
shadcn/ui.

## Quick start

```sh
npm i
npm run dev     # http://localhost:8080
```

## Where things live

```text
src/
  data/        the catalog (categories, products) + types  <- edit content here
  domain/      logic: lookups, filters, price/status formatting
  config/      brand copy, category sub-nav, SEO helpers
  hooks/       interaction state (hero carousel, mobile query)
  components/  layout/ common/ product/ home/ ui/   (presentation only)
  routes/      one file per URL (file-based routing)
  styles.css   Tailwind v4 theme + design tokens
public/toppers/  product photos served at /toppers/*.jpeg
docs/            architecture, requirements, content guide
```

## Docs

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — layers, folder map, routes, and
  the rules that keep them separate.
- [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md) — product rules (₹ pricing,
  stock states, placeholder category) and the technical stack.
- [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) — how to add a product, photo
  or category without touching components.

## Layer rule of thumb

UI components render props. Logic lives in `src/domain`. Content lives in
`src/data`. Copy and settings live in `src/config`. Never mix two of those in
one file.

## Build with Lovable

Continue developing this project in the
[Lovable editor](https://lovable.dev/projects/a5c72197-f93b-4004-a651-a450c30d3035).
Push to `main` on GitHub and changes sync back into Lovable.
