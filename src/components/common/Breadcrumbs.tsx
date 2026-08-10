/**
 * UI LAYER — breadcrumb trail. Links are pre-resolved by the caller.
 */
import { Link } from "@tanstack/react-router";
import { Fragment, type ReactNode } from "react";

export function Breadcrumbs({ items }: { items: ReactNode[] }) {
  return (
    <nav className="text-xs text-muted-foreground">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="px-1.5">/</span>}
          {item}
        </Fragment>
      ))}
    </nav>
  );
}

export function CrumbLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="hover:text-foreground">
      {children}
    </Link>
  );
}
