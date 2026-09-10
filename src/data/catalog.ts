/**
 * DATA LAYER — catalog content only.
 *
 * This file is the single source of truth for what the shop sells.
 * It contains NO logic and NO UI. To add/edit a product or category,
 * edit this file only. Read/search/filter helpers live in
 * `src/domain/catalog.ts`.
 */
import type { Category, Product } from "./types";

import cakePartyDecorImg from "@/assets/cake-party-decor.jpg";

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
    name: "Cake & Party Décor",
    tagline: "Décor for every celebration",
    description: "Cake toppers, candles, party poppers and celebration essentials — chosen to make every cake and gathering feel special.",
    image: cakePartyDecorImg,
  },
];

export const products: Product[] = [
  // ===== Cake Toppers & Knife (photos) =====
  { id: "tp-happy-birthday-red", name: "Happy Birthday Topper — Red Glitter (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday cake topper in red glitter script. Size 4.45\"–5\". Premium MDF, lightweight and durable.", tone: "bg-[oklch(0.85_0.06_20)]", status: "in-stock", image: t1 },
  { id: "tp-happy-birthday-stars", name: "Happy Birthday Topper — Black Stars (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday topper with star cut-outs in matte black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t2 },
  { id: "tp-happy-birthday-script", name: "Happy Birthday Topper — Black Script (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Classic script Happy Birthday MDF topper in glossy black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t3 },
  { id: "tp-happy-birthday-blue", name: "Happy Birthday Topper — Blue Glitter (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Sparkling blue glitter Happy Birthday MDF topper. Size 4.45\"–5\".", tone: "bg-[oklch(0.82_0.08_240)]", status: "in-stock", image: t4 },
  { id: "tp-anniversary-gold", name: "Happy Anniversary Topper — Gold Mirror (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Acrylic Happy Anniversary topper with heart detailing in mirror gold. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t5 },
  { id: "tp-mr-mrs-gold", name: "Mr & Mrs Topper — Gold Mirror (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mr & Mrs ring-motif topper in mirror gold acrylic — perfect for weddings. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t6 },
  { id: "tp-anniversary-couple", name: "Happy Anniversary Topper — Couple Silver (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Silver glitter Happy Anniversary topper with couple silhouette. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t7 },
  { id: "tp-farewell-gold", name: "Farewell Topper — Gold Mirror (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Geometric frame Farewell topper in mirror gold acrylic. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t8 },
  { id: "tp-best-dad", name: "Best Dad Topper — Silver Glitter (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Best Dad script topper in silver glitter MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t9 },
  { id: "tp-anniversary-rings", name: "Happy Anniversary Topper — Silver Rings (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Silver glitter Happy Anniversary topper with interlocking rings. Size 4.45\"–5\".", tone: "bg-[oklch(0.88_0.01_260)]", status: "in-stock", image: t10 },
  { id: "tp-hbd-name-black", name: "Happy Birthday Topper — Name Script Black (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "MDF Happy Birthday topper in matte black script with a name cut-out. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t11 },
  { id: "tp-hbd-classic-black", name: "Happy Birthday Topper — Classic Black (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Clean classic script Happy Birthday MDF topper in black. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t12 },
  { id: "tp-just-engaged-couple", name: "Just Engaged Topper — Couple Heart (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Just Engaged MDF topper with couple silhouette inside a heart and ring motif. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t13 },
  { id: "tp-just-engaged-ring", name: "Just Engaged Topper — Ring Script (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Just Engaged script topper with diamond ring detail in matte black MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.9_0.01_260)]", status: "in-stock", image: t14 },
  { id: "tp-moon-couple-gold", name: "Couple Moon Topper — Gold Mirror (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Crescent moon topper with couple silhouette and stars in mirror gold acrylic. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t15 },
  { id: "tp-anniversary-blue", name: "Happy Anniversary Topper — Blue Glitter Couple (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Blue glitter Happy Anniversary topper with couple silhouette. Size 4.45\"–5\".", tone: "bg-[oklch(0.82_0.08_240)]", status: "in-stock", image: t16 },
  { id: "tp-bride-to-be", name: "Bride To Be Topper — Gold Glitter (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Bride To Be script topper in gold glitter MDF — ideal for bridal showers. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t17 },
  { id: "tp-best-mom", name: "Best Mom Topper — Gold Glitter (MDF)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Best Mom script topper in gold glitter MDF. Size 4.45\"–5\".", tone: "bg-[oklch(0.85_0.08_85)]", status: "in-stock", image: t18 },
  { id: "tp-one-month-gold", name: "One Month Topper — Gold Mirror (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "One Month milestone topper with balloon detailing in mirror gold acrylic. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t19 },
  { id: "tp-hbd-circle-gold", name: "Happy Birthday Topper — Gold Circle Frame (Acrylic)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Scalloped circle frame Happy Birthday topper in mirror gold acrylic. Size 4.45\"–5\".", tone: "bg-[oklch(0.86_0.07_85)]", status: "in-stock", image: t20 },
];
