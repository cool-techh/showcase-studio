import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, getCategory, getProductsByCategory, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    const category = getCategory(product.category)!;
    const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
    return { product, category, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — Atha` : "Product — Atha" },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:title", content: loaderData ? `${loaderData.product.name} — Atha` : "" },
      { property: "og:description", content: loaderData?.product.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-2xl font-light">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-block rounded-full border border-border px-5 py-2 text-sm">
        Browse all
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-2xl font-light">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const p = product as Product;

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="px-1.5">/</span>
        <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-foreground">
          {category.name}
        </Link>
        <span className="px-1.5">/</span>
        <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className={`relative aspect-square overflow-hidden rounded-2xl ${p.tone}`}>
          {p.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
              {p.badge}
            </span>
          )}
          <div className="absolute inset-0 flex items-end p-8">
            <span className="font-display text-7xl font-light leading-none text-foreground/30">
              {p.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {category.name}
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">{p.name}</h1>
          <div className="mt-4 text-2xl font-light tabular-nums">₹{p.price}</div>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background opacity-60"
            >
              Coming soon
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              Enquire
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Category</dt>
              <dd className="mt-1 text-foreground">{category.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">SKU</dt>
              <dd className="mt-1 text-foreground">{p.id.toUpperCase()}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Shipping</dt>
              <dd className="mt-1 text-foreground">Worldwide</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Returns</dt>
              <dd className="mt-1 text-foreground">30 days</dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="text-2xl font-light tracking-tight">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
            {(related as Product[]).map((r) => (
              <ProductCard key={r.id} product={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}