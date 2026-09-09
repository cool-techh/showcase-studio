/**
 * ROUTE LAYER — "/about" studio story.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta, pageTitle } from "@/config/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMeta(
      pageTitle("About"),
      "A small studio curating considered goods for everyday living.",
    ),
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
        Our story
      </p>
      <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-[0.98] sm:text-7xl">
        We believe the smallest details make celebrations <span className="font-script normal-case text-primary">unforgettable.</span>
      </h1>

      <div className="mt-16 grid gap-8 border-t border-border pt-10 text-base leading-relaxed text-foreground/80 md:grid-cols-3">
        <p>
          Atha is a small, independent collection of joyful details for cakes and parties. Every piece is chosen to add personality to the moment.
        </p>
        <p>
          Our collection grows with care. We add pieces that feel special, easy to use, and worthy of the memories being made around them.
        </p>
        <p>
          For now, this site is our showcase — a place to discover what we are working on as Atha grows. Thank you for being here early.
        </p>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-12 sm:grid-cols-3">
        {[
          ["2024", "Founded"],
          ["20", "Pieces"],
          ["1", "Growing collection"],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="text-4xl text-primary">{n}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
          </div>
        ))}
      </dl>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link to="/shop" className="bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:bg-primary">
          See the collection
        </Link>
        <Link to="/contact" className="border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-muted">
          Say hello
        </Link>
      </div>
    </div>
  );
}