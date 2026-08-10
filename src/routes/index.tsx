/**
 * ROUTE LAYER — "/" home page.
 * Composes UI components; all data comes from the domain layer.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, listCategories } from "@/domain/catalog";
import { buildMeta } from "@/config/seo";
import { site } from "@/config/site";
import { useCarousel } from "@/hooks/use-carousel";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { ProductGrid } from "@/components/product/ProductGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta(`${site.name} — ${site.tagline}`, site.description),
  }),
  component: Home,
});

function Home() {
  const categories = listCategories();
  const featured = getFeaturedProducts();
  const { index: slide, setIndex } = useCarousel(categories.length);
  const active = categories[slide];

  return (
    <div>
      {/* Hero carousel — one slide per category */}
      <section className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <HeroCarousel categories={categories} slide={slide} onSelect={setIndex} />

        {/* Headline + CTA */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {site.name} — {site.year}
            </p>
            <h1 className="mt-4 text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Considered supplies for{" "}
              <span className="italic text-primary">{active.name.toLowerCase()}</span>.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="max-w-md text-base text-muted-foreground">
              A small, growing selection of goods for bakers, makers and workspaces — chosen with
              care, built to be used.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Browse the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Shop by category</h2>
            <p className="mt-2 text-sm text-muted-foreground">Three quiet worlds to explore.</p>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium text-foreground hover:underline sm:inline">
            View all →
          </Link>
        </div>

        <CategoryTiles categories={categories} />
      </section>

      {/* Featured */}
      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">New &amp; notable</h2>
            <p className="mt-2 text-sm text-muted-foreground">Recently added to the collection.</p>
          </div>
        </div>
        <ProductGrid products={featured} className="mt-10" />
      </section>

      {/* Editorial */}
      <section className="mx-auto mt-28 max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our approach
        </p>
        <p className="mt-5 text-2xl font-light leading-relaxed text-foreground sm:text-3xl">
          “We choose fewer things, made well, by people we trust — then we get out of the way.”
        </p>
      </section>
    </div>
  );
}
