import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison — Curated Goods for Everyday Living" },
      { name: "description", content: "A minimalist showcase of curated goods across home, fashion, tech and lifestyle." },
      { property: "og:title", content: "Maison — Curated Goods" },
      { property: "og:description", content: "A minimalist showcase of curated goods." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Autumn — 2026
            </p>
            <h1 className="mt-5 text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Objects for a<br />
              <span className="italic text-primary">quieter</span> life.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              A small, considered selection of goods — from home and wardrobe to the things you carry.
              Built to be used, kept, and passed on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Curated still life of ceramics, linen and small goods"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Shop by category</h2>
            <p className="mt-2 text-sm text-muted-foreground">Five quiet worlds to explore.</p>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium text-foreground hover:underline sm:inline">
            View all →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  background: [
                    "linear-gradient(180deg, oklch(0.92 0.02 75), oklch(0.82 0.04 60))",
                    "linear-gradient(180deg, oklch(0.88 0.02 80), oklch(0.6 0.05 50))",
                    "linear-gradient(180deg, oklch(0.95 0.005 60), oklch(0.7 0.02 60))",
                    "linear-gradient(180deg, oklch(0.9 0.04 70), oklch(0.78 0.08 30))",
                    "linear-gradient(180deg, oklch(0.85 0.03 60), oklch(0.45 0.05 50))",
                  ][i % 5],
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-foreground">
                <h3 className="text-xl font-medium">{c.name}</h3>
                <p className="mt-1 text-xs text-foreground/70">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto mt-24 max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">New &amp; notable</h2>
            <p className="mt-2 text-sm text-muted-foreground">Recently added to the collection.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
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