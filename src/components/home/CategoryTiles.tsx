/**
 * UI LAYER — homepage category tiles.
 */
import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/types";

export function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {categories.map((c) => (
        <Link
          key={c.slug}
          to="/category/$slug"
          params={{ slug: c.slug }}
          className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted"
        >
          <img
            src={c.image}
            alt={c.name}
            loading="lazy"
            width={800}
            height={1067}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-background">
            <h3 className="text-xl font-medium">{c.name}</h3>
            <p className="mt-1 text-xs text-background/80">{c.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
