export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string; // category slug
  subcategory?: string; // subcategory name
  description: string;
  tone: string; // tailwind bg utility for placeholder swatch
  badge?: string;
};

import bakeryImg from "@/assets/bakery.jpg";
import officeImg from "@/assets/office.jpg";
import soonImg from "@/assets/soon.jpg";

export const categories: Category[] = [
  {
    slug: "bakery-supply",
    name: "Bakery Supply",
    tagline: "Tools of the trade",
    description: "Equipment, packaging and essentials for bakers — built for daily use in the kitchen.",
    image: bakeryImg,
  },
  {
    slug: "office-supply",
    name: "Office Supply",
    tagline: "A considered workspace",
    description: "Stationery, organisers and desk objects to bring quiet focus to your work.",
    image: officeImg,
  },
  {
    slug: "more-soon",
    name: "More Soon",
    tagline: "Stay updated",
    description: "New categories landing soon. Check back shortly.",
    image: soonImg,
  },
];

export const products: Product[] = [
  { id: "kraft-pastry-boxes", name: "Kraft Pastry Boxes (50pk)", price: 28, category: "bakery-supply", description: "Food-safe kraft boxes with window — perfect for pastries and small cakes.", tone: "bg-[oklch(0.82_0.05_70)]", badge: "New" },
  { id: "wooden-rolling-pin", name: "French Rolling Pin", price: 34, category: "bakery-supply", description: "Tapered beechwood pin, hand-finished, weighted for even pressure.", tone: "bg-[oklch(0.78_0.05_70)]" },
  { id: "linen-proofing-cloth", name: "Linen Proofing Cloth", price: 22, category: "bakery-supply", description: "Heavyweight European linen — for shaping loaves and dusting work surfaces.", tone: "bg-[oklch(0.93_0.015_85)]" },
  { id: "ceramic-mixing-bowl", name: "Stoneware Mixing Bowl", price: 48, category: "bakery-supply", description: "Glazed stoneware, generous 3L capacity. Heavy enough to hold its ground.", tone: "bg-[oklch(0.88_0.03_60)]", badge: "Bestseller" },
  { id: "twine-spool", name: "Bakery Twine Spool", price: 12, category: "bakery-supply", description: "Natural cotton twine in a brass dispenser — for tying boxes and bundles.", tone: "bg-[oklch(0.9_0.02_85)]" },
  { id: "kraft-paper-bags", name: "Kraft Paper Bags (100pk)", price: 18, category: "bakery-supply", description: "Flat-bottom kraft bags with a soft matte finish. Recyclable.", tone: "bg-[oklch(0.85_0.04_75)]" },

  { id: "leather-notebook", name: "Full-grain Leather Notebook", price: 86, category: "office-supply", description: "Refillable A5 cover in vegetable-tanned leather. Patinas with use.", tone: "bg-[oklch(0.5_0.06_50)]", badge: "New" },
  { id: "brass-pen", name: "Brass Ballpoint Pen", price: 42, category: "office-supply", description: "Solid brass barrel, refillable. Weighted for a steady hand.", tone: "bg-[oklch(0.72_0.07_75)]" },
  { id: "gold-paper-clips", name: "Gold Paper Clips (set of 30)", price: 14, category: "office-supply", description: "Brass-plated clips in a glass jar. A small upgrade for the desk.", tone: "bg-[oklch(0.82_0.08_85)]" },
  { id: "linen-folder", name: "Linen-bound Document Folder", price: 38, category: "office-supply", description: "A4 folder wrapped in natural linen with an elastic closure.", tone: "bg-[oklch(0.86_0.015_85)]", badge: "Bestseller" },
  { id: "desk-organizer", name: "Walnut Desk Organizer", price: 110, category: "office-supply", description: "Solid walnut tray with felt-lined compartments for daily tools.", tone: "bg-[oklch(0.42_0.04_50)]" },
  { id: "kraft-letter-set", name: "Kraft Letter Set", price: 16, category: "office-supply", description: "Twenty sheets and ten envelopes in soft kraft paper.", tone: "bg-[oklch(0.78_0.05_70)]" },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);