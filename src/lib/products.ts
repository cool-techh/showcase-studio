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
  image?: string; // optional external image URL
  status?: "in-stock" | "unavailable" | "not-in-stock";
};

import bakeryImg from "@/assets/bakery.jpg";
import officeImg from "@/assets/office.jpg";
import soonImg from "@/assets/soon.jpg";

const t1 = "/toppers/topper-1.jpeg";
const t2 = "/toppers/topper-2.jpeg";
const t3 = "/toppers/topper-3.jpeg";
const t4 = "/toppers/topper-4.jpeg";
const t5 = "/toppers/topper-5.jpeg";
const t6 = "/toppers/topper-6.jpeg";
const t7 = "/toppers/topper-7.jpeg";
const t8 = "/toppers/topper-8.jpeg";
const t9 = "/toppers/topper-9.jpeg";
const t10 = "/toppers/topper-10.jpeg";
const t11 = "/toppers/topper-11.jpeg";
const t12 = "/toppers/topper-12.jpeg";
const t13 = "/toppers/topper-13.jpeg";
const t14 = "/toppers/topper-14.jpeg";
const t15 = "/toppers/topper-15.jpeg";
const t16 = "/toppers/topper-16.jpeg";
const t17 = "/toppers/topper-17.jpeg";
const t18 = "/toppers/topper-18.jpeg";
const t19 = "/toppers/topper-19.jpeg";
const t20 = "/toppers/topper-20.jpeg";

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
  // ===== MDF / Acrylic toppers (photos) =====
  { id: "tp-happy-birthday-red", name: "Happy Birthday Topper — Red Glitter", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday cake topper in red glitter script. Size 4.45\"–5\". Premium MDF, lightweight and durable.", tone: "bg-[oklch(0.85_0.06_20)]", status: "in-stock", image: t1 },
  { id: "tp-happy-birthday-stars", name: "Happy Birthday Topper — Black Stars", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday topper with star cut-outs in matte black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t2 },
  { id: "tp-happy-birthday-script", name: "Happy Birthday Topper — Black Script", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Classic script Happy Birthday MDF topper in glossy black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t3 },
  { id: "tp-happy-birthday-blue", name: "Happy Birthday Topper — Blue Glitter", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Sparkling blue glitter Happy Birthday MDF topper. Size 4.45\"–5\".", tone: "bg-[oklch(0.82_0.08_240)]", status: "in-stock", image: t4 },
  { id: "tp-anniversary-gold", name: "Happy Anniversary Topper — Gold Mirror", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mirror-gold Happy Anniversary topper with heart detailing. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t5 },
  { id: "tp-mr-mrs-gold", name: "Mr & Mrs Topper — Gold Mirror", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mr & Mrs ring-motif topper in mirror gold — perfect for weddings. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t6 },
  { id: "tp-anniversary-couple", name: "Happy Anniversary Topper — Couple Silver", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Silver glitter Happy Anniversary topper with couple silhouette. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t7 },
  { id: "tp-farewell-gold", name: "Farewell Topper — Gold Mirror", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Geometric frame Farewell topper in mirror gold. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t8 },
  { id: "tp-best-dad", name: "Best Dad Topper — Silver Glitter", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Best Dad script topper in silver glitter MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t9 },
  { id: "tp-anniversary-rings", name: "Happy Anniversary Topper — Silver Rings", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Silver glitter Happy Anniversary topper with interlocking rings. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t10 },
  { id: "tp-hbd-name-black", name: "Happy Birthday Topper — Name Script Black", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday topper in matte black script with a name cut-out. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t11 },
  { id: "tp-hbd-classic-black", name: "Happy Birthday Topper — Classic Black", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Clean classic script Happy Birthday MDF topper in black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t12 },
  { id: "tp-just-engaged-couple", name: "Just Engaged Topper — Couple Heart", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Just Engaged MDF topper with couple silhouette inside a heart and ring motif. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t13 },
  { id: "tp-just-engaged-ring", name: "Just Engaged Topper — Ring Script", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Just Engaged script topper with diamond ring detail in matte black MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t14 },
  { id: "tp-moon-couple-gold", name: "Couple Moon Topper — Gold Mirror", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Crescent moon topper with couple silhouette and stars in mirror gold. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t15 },
  { id: "tp-anniversary-blue", name: "Happy Anniversary Topper — Blue Glitter Couple", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Blue glitter Happy Anniversary topper with couple silhouette. Size 4.45\"–5\".", tone: "bg-[oklch(0.82_0.08_240)]", status: "in-stock", image: t16 },
  { id: "tp-bride-to-be", name: "Bride To Be Topper — Gold Glitter", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Bride To Be script topper in gold glitter MDF — ideal for bridal showers. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t17 },
  { id: "tp-best-mom", name: "Best Mom Topper — Gold Glitter", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Best Mom script topper in gold glitter MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t18 },
  { id: "tp-one-month-gold", name: "One Month Topper — Gold Mirror", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "One Month milestone topper with balloon detailing in mirror gold. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t19 },
  { id: "tp-hbd-circle-gold", name: "Happy Birthday Topper — Gold Circle Frame", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Scalloped circle frame Happy Birthday topper in mirror gold. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t20 },

  // ===== Atha catalogue (from spreadsheet) =====
  { id: "tq-number-candle", name: "Number Candle", price: 15, category: "bakery-supply", subcategory: "Candles", description: "Numeric birthday candles for cakes — clean shapes, steady burn.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "tq-spiral-candle", name: "Spiral Candle", price: 17, category: "bakery-supply", subcategory: "Candles", description: "Slim spiral twist candles in soft pastel tones.", tone: "bg-[oklch(0.88_0.04_60)]", status: "in-stock" },
  { id: "tq-mdf-topper", name: "MDF Topper (5 inch, 2 mm)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Laser-cut MDF cake topper — 5 inch, 2 mm thickness. Price per piece.", tone: "bg-[oklch(0.82_0.05_70)]", status: "in-stock" },
  { id: "tq-acrylic-topper", name: "Acrylic Topper (5 inch, 2 mm)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mirror-finish acrylic cake topper — 5 inch, 2 mm thickness. Price per piece.", tone: "bg-[oklch(0.85_0.06_80)]", status: "in-stock" },
  { id: "tq-knife", name: "Cake Knife", price: 0, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Decorative cake-cutting knife.", tone: "bg-[oklch(0.9_0.01_260)]", status: "not-in-stock" },
  { id: "tq-sash", name: "Birthday Sash", price: 11, category: "bakery-supply", subcategory: "Decor Items", description: "Satin birthday sash — soft finish, adjustable fit.", tone: "bg-[oklch(0.85_0.06_20)]", status: "in-stock" },
  { id: "tq-metallic-balloon", name: "Metallic Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Glossy metallic-finish balloons for celebrations.", tone: "bg-[oklch(0.78_0.08_85)]", status: "unavailable" },
  { id: "tq-normal-balloon", name: "Normal Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Classic latex party balloons in assorted colours.", tone: "bg-[oklch(0.88_0.05_20)]", status: "unavailable" },
  { id: "tq-chrome-balloon", name: "Chrome Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "High-shine chrome balloons that reflect light beautifully.", tone: "bg-[oklch(0.82_0.03_240)]", status: "unavailable" },
  { id: "tq-heart-balloon", name: "Heart Shape Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Heart-shaped balloons — ideal for anniversaries and love notes.", tone: "bg-[oklch(0.8_0.09_20)]", status: "unavailable" },
  { id: "tq-combo", name: "Decor Combo", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Curated combo of decor essentials for a full party setup.", tone: "bg-[oklch(0.88_0.04_60)]", status: "unavailable" },
  { id: "tq-party-popper", name: "Party Popper", price: 0, category: "bakery-supply", subcategory: "Party Poppers", description: "Twist-to-pop confetti tubes for instant celebration.", tone: "bg-[oklch(0.88_0.04_140)]", status: "unavailable" },
  { id: "tq-caps", name: "Party Caps", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Colourful conical party caps with elastic string.", tone: "bg-[oklch(0.85_0.08_60)]", status: "unavailable" },
  { id: "tq-foil", name: "Foil Decor", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Metallic foil curtains and streamers for backdrops.", tone: "bg-[oklch(0.82_0.06_85)]", status: "not-in-stock" },

  // Office Supply
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