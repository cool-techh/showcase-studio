import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-lg font-semibold">Trusiqq<span className="text-primary">.</span></div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A quiet showcase of considered goods for everyday living.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Stay in touch</h4>
          <p className="mt-4 text-sm text-muted-foreground">New arrivals and quiet dispatches, monthly.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
            <button className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center lg:px-8">
          <span>© {new Date().getFullYear()} Trusiqq. All rights reserved.</span>
          <span>Showcase site — not yet open for orders.</span>
        </div>
      </div>
    </footer>
  );
}