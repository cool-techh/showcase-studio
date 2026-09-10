/**
 * UI LAYER — homepage category tiles.
 */
import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/types";

export function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <Link
          key={c.slug}
          to="/category/$slug"
          params={{ slug: c.slug }}
          className="group relative aspect-[4/5] overflow-hidden bg-muted lg:first:col-span-2 lg:first:aspect-[16/9]"
        >
          <img
            src={c.tileImage ?? c.image}
            alt={c.name}
            loading="lazy"
            width={800}
            height={1067}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-background sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-background/75">Collection 01</p>
            <h3 className="mt-2 text-2xl uppercase sm:text-3xl">{c.name}</h3>
            <p className="font-script mt-2 text-xl text-background/90">{c.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
