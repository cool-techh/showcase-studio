import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const statusLabel =
    product.status === "unavailable"
      ? "Temporarily unavailable"
      : product.status === "not-in-stock"
      ? "Not in stock"
      : null;
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-xl ${product.tone}`}>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
            {product.badge}
          </span>
        )}
        {!product.image && (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="font-display text-2xl font-light leading-none text-foreground/40">
              {product.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        {statusLabel && (
          <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {statusLabel}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/[0.04]" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-foreground">{product.name}</h3>
          <p className="mt-0.5 text-xs capitalize text-muted-foreground">{product.category}</p>
        </div>
        <span className="shrink-0 text-sm tabular-nums text-foreground">
          {product.price > 0 ? `$${product.price}` : "—"}
        </span>
      </div>
    </Link>
  );
}