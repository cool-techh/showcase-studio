import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { categories } from "@/lib/products";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Atha<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/shop" className="text-foreground/80 transition-colors hover:text-foreground">
            Shop all
          </Link>
          {categories.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {c.name}
            </Link>
          ))}
          <Link to="/about" className="text-foreground/80 transition-colors hover:text-foreground">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <button aria-label="Search" className="rounded-full p-2 hover:bg-muted">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Bag" className="rounded-full p-2 hover:bg-muted">
            <ShoppingBag className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Menu"
            className="rounded-full p-2 hover:bg-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 text-sm">
            <Link to="/shop" className="py-2.5" onClick={() => setOpen(false)}>Shop all</Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="py-2.5"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}
            <Link to="/about" className="py-2.5" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="py-2.5" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}