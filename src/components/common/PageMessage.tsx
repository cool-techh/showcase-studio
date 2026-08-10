/**
 * UI LAYER — shared centered message block for not-found / error states.
 */
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageMessage({
  title,
  body,
  action,
}: {
  title: string;
  body?: ReactNode;
  action?: { to: string; label: string };
}) {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-2xl font-light">{title}</h1>
      {body && <p className="mt-2 text-sm text-muted-foreground">{body}</p>}
      {action && (
        <Link
          to={action.to as never}
          className="mt-6 inline-block rounded-full border border-border px-5 py-2 text-sm"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
