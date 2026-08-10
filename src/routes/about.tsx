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
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Our story
      </p>
      <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight sm:text-5xl">
        We started Atha because we wanted to <em className="italic text-primary">own less, better</em>.
      </h1>

      <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/80">
        <p>
          Atha is a small, independent studio. We choose objects with care — pieces made by
          people we know, in materials we trust, designed to last well beyond a season.
        </p>
        <p>
          The collection grows slowly. We add something when it earns its place, not to fill a
          calendar. If you don't see what you're looking for, we'd rather point you elsewhere than
          sell you the wrong thing.
        </p>
        <p>
          For now this site is a quiet showcase — a way to share what we're working on as we build
          toward opening properly. Thank you for being early.
        </p>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-12 sm:grid-cols-4">
        {[
          ["2024", "Founded"],
          ["12", "Pieces"],
          ["3", "Categories"],
          ["12", "Partner makers"],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="text-3xl font-light">{n}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
          </div>
        ))}
      </dl>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link to="/shop" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
          See the collection
        </Link>
        <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted">
          Say hello
        </Link>
      </div>
    </div>
  );
}