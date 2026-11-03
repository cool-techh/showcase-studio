/**
 * UI LAYER — add-to-cart button with a glass quantity popup.
 *
 * Toppers have a minimum order rule: 16 pcs per design (or 16 × 2 = 32 pcs).
 * When `quantityOptions` is true the button opens a frosted-glass card with
 * exactly those two options; otherwise the button renders without the popup.
 * There is no real cart yet — choosing an option shows a confirmation and
 * closes the card.
 */
import { useEffect, useRef, useState } from "react";

const MIN_OPTION = "16 pcs";
const DOUBLE_OPTION = "16 × 2 = 32 pcs";

export function AddToCart({ quantityOptions = false }: { quantityOptions?: boolean }) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close the card when clicking anywhere outside it.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const choose = (option: string) => {
    setAdded(option);
    window.setTimeout(() => {
      setAdded(null);
      setOpen(false);
    }, 1600);
  };

  return (
    <div ref={cardRef} className="relative inline-flex flex-col items-start">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Add to cart
      </button>

      {open && quantityOptions && (
        <div className="absolute left-0 top-full z-30 mt-3 w-72 rounded-2xl border border-border/60 bg-background/55 p-4 shadow-xl shadow-foreground/10 backdrop-blur-xl">
          {added ? (
            <p className="py-3 text-center text-sm font-medium text-foreground">
              {added} added to cart
            </p>
          ) : (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                Add to cart
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <button
                  onClick={() => choose(MIN_OPTION)}
                  className="rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-left transition-colors hover:bg-background/80"
                >
                  <span className="block text-sm font-medium text-foreground">{MIN_OPTION}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    Minimum quantity per design
                  </span>
                </button>
                <button
                  onClick={() => choose(DOUBLE_OPTION)}
                  className="rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-left transition-colors hover:bg-background/80"
                >
                  <span className="block text-sm font-medium text-foreground">{DOUBLE_OPTION}</span>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
