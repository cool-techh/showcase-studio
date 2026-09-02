# Requirements — Atha

## Product requirements

- The site is a **showcase / catalogue only**. No cart, no checkout, no payments.
  Product pages show a disabled "Coming soon" button plus an "Enquire" link.
- Prices are in **Indian Rupees (₹)**. A price of `0` means "not priced yet"
  and must render as an em dash (`—`), never `₹0`.
- Availability states: `in-stock` (no badge), `not-in-stock` ("Not in stock"),
  `unavailable` ("Temporarily unavailable").
- Products without a photo show the text **"No image available"**, never
  initials or a stock photo.
- Categories (current): **Cake & Party Décor**, **Office Supply**, **More Soon**.
- **More Soon** (`more-soon`) is a placeholder: its page shows only "Soon!" —
  no product grid.
- Cake & Party Décor has a sub-nav above the grid: All, Cake Toppers & Knife,
  Party Poppers, Candles, Decor Items.
- Every category gets its own page; the homepage never lists all products.
- Design: minimalist, warm-white surface with a coral primary, Outfit +
  Figtree type. No hardcoded colors — semantic tokens in `src/styles.css`.

## Technical requirements

- **Runtime**: Node.js 20+ (or Bun) for local development.
- **Framework**: TanStack Start v1 (React 19, file-based routing, SSR) on Vite 7.
- **Styling**: Tailwind CSS v4 via `src/styles.css` (no `tailwind.config.js`).
- **UI kit**: shadcn/ui primitives in `src/components/ui`.
- **Icons**: lucide-react.
- **Data**: static TypeScript in `src/data/catalog.ts`. No database or backend
  is wired up yet.
- Dependency versions are pinned in `package.json` / `bun.lock` — that is the
  authoritative requirements file; install with `npm i` or `bun install`.

## Commands

```sh
npm i        # install
npm run dev  # dev server on http://localhost:8080
npm run build
```

## Not yet built (future scope)

- Cart, checkout and payments
- Real backend for the contact form and newsletter (currently local state only)
- Search (header search button is decorative)
- Photos for non-topper bakery products
