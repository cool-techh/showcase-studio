import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all — Trusiqq" },
      { name: "description", content: "Browse the full Trusiqq collection — every category, every piece." },
      { property: "og:title", content: "Shop all — Trusiqq" },
      { property: "og:description", content: "The full Trusiqq collection." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The collection
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">Shop all</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          {products.length} pieces across {categories.length} categories. Filter to narrow.
        </p>
      </header>

      <div className="sticky top-16 z-30 -mx-5 mt-6 flex gap-2 overflow-x-auto bg-background/85 px-5 py-3 backdrop-blur lg:-mx-8 lg:px-8">
        <FilterChip label={`All (${products.length})`} active={active === "all"} onClick={() => setActive("all")} />
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.slug).length;
          return (
            <FilterChip
              key={c.slug}
              label={`${c.name} (${count})`}
              active={active === c.slug}
              onClick={() => setActive(c.slug)}
            />
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <p className="mt-16 text-center text-xs text-muted-foreground">
        Looking for something specific? <Link to="/contact" className="underline">Get in touch</Link>.
      </p>
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:bg-muted"
      }`}
    >
      {label}
    </button>
  );
}