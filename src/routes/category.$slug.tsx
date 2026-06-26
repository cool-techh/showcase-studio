import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, getProductsByCategory, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.category.name} — Maison` : "Category — Maison" },
      { name: "description", content: loaderData?.category.description ?? "" },
      { property: "og:title", content: loaderData ? `${loaderData.category.name} — Maison` : "" },
      { property: "og:description", content: loaderData?.category.description ?? "" },
    ],
  }),
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-2xl font-light">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="px-1.5">/</span>
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <span className="px-1.5">/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>

      <header className="mt-6 border-b border-border pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Category
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">{category.name}</h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">{category.description}</p>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <aside className="mt-20 border-t border-border pt-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Other categories
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border px-4 py-1.5 text-xs font-medium hover:bg-muted"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-2xl font-light">Category not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">That category doesn't exist.</p>
      <Link to="/shop" className="mt-6 inline-block rounded-full border border-border px-5 py-2 text-sm">
        Browse all
      </Link>
    </div>
  );
}