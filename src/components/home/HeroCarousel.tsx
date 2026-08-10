/**
 * UI LAYER — homepage hero carousel (presentational only).
 * Slide index is owned by the caller via the `useCarousel` hook.
 */
import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/types";

export function HeroCarousel({
  categories,
  slide,
  onSelect,
}: {
  categories: Category[];
  slide: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-muted">
      <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7]">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            aria-label={`View ${c.name}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === slide ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={c.image}
              alt={`${c.name} — ${c.tagline}`}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-background sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-background/80">
                Category {i + 1} of {categories.length}
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-5xl">{c.name}</h2>
              <p className="mt-2 max-w-md text-sm text-background/85 sm:text-base">{c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
        {categories.map((c, i) => (
          <button
            key={c.slug}
            onClick={() => onSelect(i)}
            aria-label={`Show ${c.name}`}
            className={`h-1.5 rounded-full transition-all ${
              i === slide ? "w-8 bg-background" : "w-4 bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
