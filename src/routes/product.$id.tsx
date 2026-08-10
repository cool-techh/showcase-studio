/**
 * ROUTE LAYER — "/product/$id" product detail.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";
import { getCategory, getProduct, getRelatedProducts } from "@/domain/catalog";
import { formatPrice, formatSku } from "@/domain/presentation";
import { buildMeta, pageTitle } from "@/config/seo";
import { Breadcrumbs, CrumbLink } from "@/components/common/Breadcrumbs";
import { PageMessage } from "@/components/common/PageMessage";
import { ProductGrid } from "@/components/product/ProductGrid";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    const category = getCategory(product.category)!;
    const related = getRelatedProducts(product.category, product.id);
    return { product, category, related };
  },
  head: ({ loaderData }) => ({
    meta: buildMeta(
      loaderData ? pageTitle(loaderData.product.name) : pageTitle("Product"),
      loaderData?.product.description ?? "",
    ),
  }),
  notFoundComponent: () => (
    <PageMessage title="Product not found" action={{ to: "/shop", label: "Browse all" }} />
  ),
  errorComponent: ({ error }) => (
    <PageMessage title="Something went wrong" body={error.message} />
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p, category, related } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <Breadcrumbs
        items={[
          <CrumbLink to="/">Home</CrumbLink>,
          <Link
            to="/category/$slug"
            params={{ slug: category.slug }}
            className="hover:text-foreground"
          >
            {category.name}
          </Link>,
          <span className="text-foreground">{p.name}</span>,
        ]}
      />

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className={`relative aspect-square overflow-hidden rounded-2xl ${p.tone}`}>
          {p.image && (
            <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
          )}
          {p.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider">
              {p.badge}
            </span>
          )}
          {!p.image && (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/40">
                No image available
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {category.name}
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">{p.name}</h1>
          <div className="mt-4 text-2xl font-light tabular-nums">{formatPrice(p.price)}</div>
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
            <Spec label="Category" value={category.name} />
            <Spec label="SKU" value={formatSku(p)} />
            <Spec label="Shipping" value="Worldwide" />
            <Spec label="Returns" value="30 days" />
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24 border-t border-border pt-12">
          <h2 className="text-2xl font-light tracking-tight">You may also like</h2>
          <ProductGrid products={related} className="mt-8 md:grid-cols-4" />
        </section>
      )}
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-foreground">{value}</dd>
    </div>
  );
}
