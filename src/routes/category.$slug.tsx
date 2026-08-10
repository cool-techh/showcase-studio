/**
 * ROUTE LAYER — "/category/$slug" one page per category.
 * Data is loaded in the route loader; filtering logic lives in the domain layer.
 */
import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ALL_FILTER,
  filterBySubcategory,
  getCategory,
  getOtherCategories,
  getProductsByCategory,
} from "@/domain/catalog";
import { buildMeta, pageTitle } from "@/config/seo";
import { CATEGORY_SUBNAV, PLACEHOLDER_CATEGORY_SLUG } from "@/config/site";
import { Breadcrumbs, CrumbLink } from "@/components/common/Breadcrumbs";
import { FilterChip } from "@/components/common/FilterChip";
import { PageMessage } from "@/components/common/PageMessage";
import { ProductGrid } from "@/components/product/ProductGrid";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: getProductsByCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: buildMeta(
      loaderData ? pageTitle(loaderData.category.name) : pageTitle("Category"),
      loaderData?.category.description ?? "",
    ),
  }),
  notFoundComponent: () => (
    <PageMessage
      title="Category not found"
      body="That category doesn't exist."
      action={{ to: "/shop", label: "Browse all" }}
    />
  ),
  errorComponent: ({ error }) => (
    <PageMessage title="Something went wrong" body={error.message} />
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();

  // Placeholder category ("More Soon") — just announce it.
  if (category.slug === PLACEHOLDER_CATEGORY_SLUG) {
    return <ComingSoon name={category.name} />;
  }

  return <CategoryListing category={category} products={products} />;
}

function ComingSoon({ name }: { name: string }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{name}</p>
      <h1 className="mt-6 text-7xl font-light italic tracking-tight text-primary sm:text-8xl">
        Soon!
      </h1>
      <p className="mt-6 max-w-md text-base text-muted-foreground">
        New categories are on the way. Check back shortly.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
      >
        Back to home
      </Link>
    </div>
  );
}

function CategoryListing({
  category,
  products,
}: {
  category: ReturnType<typeof getCategory> & object;
  products: ReturnType<typeof getProductsByCategory>;
}) {
  const subnav = CATEGORY_SUBNAV[category.slug];
  const [activeSub, setActiveSub] = useState(ALL_FILTER);
  const filtered = subnav ? filterBySubcategory(products, activeSub) : products;

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <Breadcrumbs
        items={[
          <CrumbLink to="/">Home</CrumbLink>,
          <CrumbLink to="/shop">Shop</CrumbLink>,
          <span className="text-foreground">{category.name}</span>,
        ]}
      />

      <header className="mt-6 border-b border-border pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Category
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">{category.name}</h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">{category.description}</p>
      </header>

      {subnav && (
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {[ALL_FILTER, ...subnav].map((sub) => (
            <FilterChip
              key={sub}
              label={sub}
              variant="primary"
              active={activeSub === sub}
              onClick={() => setActiveSub(sub)}
            />
          ))}
        </div>
      )}

      <ProductGrid products={filtered} className="mt-10" />

      <aside className="mt-20 border-t border-border pt-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Other categories
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {getOtherCategories(category.slug).map((c) => (
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
