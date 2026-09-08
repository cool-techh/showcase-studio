import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { listCategories } from "@/domain/catalog";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

/**
 * UI LAYER — site header + mobile nav.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const categories = listCategories();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-3 items-center px-5 lg:px-8">
        <Link to="/" className="font-script justify-self-start text-3xl text-secondary">
          {site.name}<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] md:flex">
          <Link to="/shop" className="transition-colors hover:text-primary">
            Shop
          </Link>
          {categories.slice(0, 1).map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="transition-colors hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
          <Link to="/about" className="transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-1">
          <Button variant="ghost" size="icon" aria-label="Search" className="rounded-full">
            <Search className="h-[18px] w-[18px]" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Bag" className="rounded-full">
            <ShoppingBag className="h-[18px] w-[18px]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="rounded-full md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </Button>
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