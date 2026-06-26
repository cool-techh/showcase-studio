import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison" },
      { name: "description", content: "Get in touch with the Maison studio." },
      { property: "og:title", content: "Contact — Maison" },
      { property: "og:description", content: "Get in touch with the Maison studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
          Tell us what you're looking for.
        </h1>
        <p className="mt-6 max-w-md text-base text-muted-foreground">
          We read every message. Whether it's a question about a piece, a wholesale enquiry, or
          just to say hello — write to us.
        </p>
        <dl className="mt-12 space-y-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Email</dt>
            <dd className="mt-1">hello@maison.studio</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Studio</dt>
            <dd className="mt-1">14 Rue des Artisans, Paris</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Hours</dt>
            <dd className="mt-1">Mon–Fri, 10:00 – 18:00 CET</dd>
          </div>
        </dl>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        {sent ? (
          <div className="py-10 text-center">
            <h2 className="text-xl font-medium">Thank you.</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll be in touch soon.</p>
          </div>
        ) : (
          <>
            <Field label="Name">
              <input required className="input" placeholder="Your name" />
            </Field>
            <Field label="Email">
              <input required type="email" className="input" placeholder="you@example.com" />
            </Field>
            <Field label="Subject">
              <input className="input" placeholder="What's this about?" />
            </Field>
            <Field label="Message">
              <textarea required rows={5} className="input resize-none" placeholder="Tell us more…" />
            </Field>
            <button className="w-full rounded-full bg-foreground py-3 text-sm font-medium text-background hover:opacity-90">
              Send message
            </button>
          </>
        )}
      </form>
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus { border-color: var(--color-foreground); }
      `}</style>
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