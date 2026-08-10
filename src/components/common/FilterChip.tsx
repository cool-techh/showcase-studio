/**
 * UI LAYER — pill-shaped filter button used by shop and category filters.
 */
export function FilterChip({
  label,
  active,
  onClick,
  variant = "solid",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  /** "solid" = shop chips (foreground fill), "primary" = category sub-nav. */
  variant?: "solid" | "primary";
}) {
  const activeClass =
    variant === "primary"
      ? "border-primary bg-primary text-primary-foreground"
      : "border-foreground bg-foreground text-background";
  const idleClass =
    variant === "primary"
      ? "border-border hover:bg-muted"
      : "border-border bg-background text-foreground hover:bg-muted";

  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border ${
        variant === "primary" ? "px-4 py-2 text-xs" : "px-4 py-1.5 text-xs"
      } font-medium transition-colors ${active ? activeClass : idleClass}`}
    >
      {label}
    </button>
  );
}
