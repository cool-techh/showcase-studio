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
    <div className="relative overflow-hidden bg-muted">
      <div className="relative min-h-[70vh] sm:min-h-[76vh]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-foreground/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-background">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-background/85">
                Atha collection · {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 max-w-4xl text-5xl uppercase leading-[0.95] sm:text-7xl lg:text-8xl">{c.name}</h2>
              <p className="font-script mt-5 text-2xl text-background sm:text-3xl">{c.tagline}</p>
              <span className="mt-8 border border-background/70 bg-background px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                Explore the collection
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {categories.map((c, i) => (
          <button
            key={c.slug}
            onClick={() => onSelect(i)}
            aria-label={`Show ${c.name}`}
            className={`h-1.5 transition-all ${
              i === slide ? "w-8 bg-background" : "w-4 bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
