/**
 * ROUTE LAYER — "/contact" enquiry form (local state only, no backend yet).
 */
import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, pageTitle } from "@/config/seo";
import { site } from "@/config/site";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta(pageTitle("Contact"), "Get in touch with the Atha studio."),
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Contact</p>
        <h1 className="mt-4 text-5xl uppercase leading-none sm:text-7xl">
          Let's make it <span className="font-script normal-case text-primary">special.</span>
        </h1>
        <p className="mt-6 max-w-md text-base text-muted-foreground">
          We read every message. Whether it's a question about a piece, a wholesale enquiry, or
          just to say hello — write to us.
        </p>
        <dl className="mt-12 space-y-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Email</dt>
            <dd className="mt-1">{site.email}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Studio</dt>
            <dd className="mt-1">{site.studio}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Hours</dt>
            <dd className="mt-1">{site.hours}</dd>
          </div>
        </dl>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="space-y-5 border border-border bg-card p-6 sm:p-10"
      >
        {sent ? (
          <div className="py-10 text-center">
            <h2 className="text-xl font-medium">Thank you.</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            <Field label="Name">
              <input required className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none focus:border-secondary" placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input required type="email" className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none focus:border-secondary" placeholder="you@example.com" />
            </Field>
            <Field label="Subject">
              <input className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none focus:border-secondary" placeholder="What's this about?" />
            </Field>
            <Field label="Message">
              <textarea required rows={5} className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm outline-none focus:border-secondary" placeholder="Tell us more…" />
            </Field>
            <Button className="h-12 w-full rounded-none bg-secondary text-xs uppercase tracking-wider text-secondary-foreground hover:bg-primary">
              Send message
            </Button>
          </>
        )}
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}