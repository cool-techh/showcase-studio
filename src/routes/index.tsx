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
  return (
    <div>
      <section>
        <HeroCarousel categories={categories} slide={slide} onSelect={setIndex} />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:items-end lg:px-8">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              Celebrations, considered · {site.year}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-[0.95] text-foreground sm:text-7xl">
              The little details make the <span className="font-script normal-case text-primary">moment.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              A joyful edit of cake toppers and party details, selected to turn everyday gatherings into lasting memories.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-foreground transition-colors hover:bg-primary"
              >
                Browse all <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border-b border-foreground py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">01 · The collection</p>
            <h2 className="mt-3 text-3xl uppercase sm:text-5xl">Made for the celebration</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium text-foreground hover:underline sm:inline">
            View all →
          </Link>
        </div>

        <CategoryTiles categories={categories} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">02 · Product edit</p>
            <h2 className="mt-3 text-3xl uppercase sm:text-5xl">New &amp; notable</h2>
          </div>
        </div>
        <ProductGrid products={featured} className="mt-10" />
      </section>

      <section className="bg-secondary px-5 py-24 text-center text-secondary-foreground lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70">
          The Atha point of view
        </p>
        <p className="mx-auto mt-5 max-w-4xl text-3xl uppercase leading-tight sm:text-5xl">
          “Small details. <span className="font-script normal-case text-highlight">Big celebrations.</span> Made memorable.”
        </p>
      </section>
    </div>
  );
}
