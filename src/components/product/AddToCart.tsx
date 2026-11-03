/**
 * UI LAYER — add-to-cart button with a centered frosted-glass popup.
 *
 * Toppers have a minimum order rule: 16 pcs per design (or 32 pcs).
 * When `quantityOptions` is true the button opens a full-screen overlay:
 * the page behind is blurred and dimmed, and a frosted-glass card sits
 * centered on screen with exactly those two options. Otherwise the button
 * renders without the popup.
 * There is no real cart yet — choosing an option shows a confirmation and
 * closes the card.
 */
import { useEffect, useState } from "react";

const MIN_OPTION = "16 pcs";
const DOUBLE_OPTION = "32 pcs";

export function AddToCart({ quantityOptions = false }: { quantityOptions?: boolean }) {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState<string | null>(null);

  // Close the card when clicking the blurred backdrop or pressing Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const choose = (option: string) => {
    setAdded(option);
    window.setTimeout(() => {
      setAdded(null);
      setOpen(false);
    }, 1600);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
      >
        Add to cart
      </button>

      {open && quantityOptions && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/40 backdrop-blur-xl p-4"
          onPointerDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-3xl border border-white/40 bg-white/30 p-6 shadow-2xl shadow-foreground/20 backdrop-blur-2xl">
            {added ? (
              <p className="py-6 text-center text-base font-medium text-foreground">
                {added} added to cart
              </p>
            ) : (
              <>
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                  Add to cart
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <button
                    onClick={() => choose(MIN_OPTION)}
                    className="rounded-2xl border border-white/50 bg-background/50 px-5 py-4 text-center transition-colors hover:bg-background/90"
                  >
                    <span className="block text-base font-medium text-foreground">{MIN_OPTION}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Minimum quantity per design
                    </span>
                  </button>
                  <button
                    onClick={() => choose(DOUBLE_OPTION)}
                    className="rounded-2xl border border-white/50 bg-background/50 px-5 py-4 text-center transition-colors hover:bg-background/90"
                  >
                    <span className="block text-base font-medium text-foreground">{DOUBLE_OPTION}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
