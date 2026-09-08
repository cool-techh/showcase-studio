/**
 * CONFIG LAYER — SEO helpers.
 * One place that builds the meta arrays each route's head() returns.
 */
import { site } from "./site";

export const pageTitle = (title: string) => `${title} — ${site.name}`;

export const buildMeta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];
