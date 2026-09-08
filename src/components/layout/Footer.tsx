import { Link } from "@tanstack/react-router";
import { listCategories } from "@/domain/catalog";
import { site } from "@/config/site";

/**
 * UI LAYER — site footer.
 */
export function Footer() {
  const categories = listCategories();
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-script text-3xl text-primary">{site.name}.</div>
          <p className="mt-3 max-w-xs text-sm text-background/60">
            Joyful details for cakes, parties, and the people worth celebrating.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/60">
            <li><Link to="/shop" className="hover:text-foreground">All products</Link></li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/60">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background">Stay in touch</h4>
          <p className="mt-4 text-sm text-background/60">New arrivals and celebration ideas, monthly.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="min-w-0 flex-1 border-b border-background/40 bg-transparent px-1 py-2 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none"
            />
            <button className="bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-background/50 sm:flex-row sm:items-center lg:px-8">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Showcase site — not yet open for orders.</span>
        </div>
      </div>
    </footer>
  );
}