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

  // ===== Trading catalogue — Decor Items =====
  { id: "t-1", name: "Balloon Pump", price: 30, category: "bakery-supply", subcategory: "Decor Items", description: "Colourful plastic balloon pumps, individually sleeved.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-2", name: "30cm Party Popper", price: 26, category: "bakery-supply", subcategory: "Decor Items", description: "30cm party popper for celebrations.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-3", name: "40cm Party Popper", price: 29, category: "bakery-supply", subcategory: "Decor Items", description: "40cm party popper for celebrations.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-4", name: "50cm Party Popper", price: 32, category: "bakery-supply", subcategory: "Decor Items", description: "50cm party popper for celebrations.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-5", name: "60cm Party Popper", price: 34, category: "bakery-supply", subcategory: "Decor Items", description: "60cm party popper for celebrations.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-6", name: "40cm Fancy Party Popper", price: 34, category: "bakery-supply", subcategory: "Decor Items", description: "40cm fancy party poppers in assorted designs — money, emoji, hearts and confetti.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-7", name: "Nikki Birthday Candles", price: 50, category: "bakery-supply", subcategory: "Decor Items", description: "Twisted birthday candles, 10 pcs per box.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-8", name: "Plastic Box Candle", price: 36, category: "bakery-supply", subcategory: "Decor Items", description: "Birthday candles in a plastic storage box.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-9", name: "Star Candle", price: 52, category: "bakery-supply", subcategory: "Decor Items", description: "Star-shaped number candles for kids' parties.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-10", name: "Stick Candle", price: 42, category: "bakery-supply", subcategory: "Decor Items", description: "Classic stick birthday candles.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-11", name: "Baby Shower Foil Balloon", price: 50, category: "bakery-supply", subcategory: "Decor Items", description: "16 inch Baby Shower foil balloon set for decoration.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-12", name: "Welcome Foil Balloon", price: 40, category: "bakery-supply", subcategory: "Decor Items", description: "Welcome foil balloon set for decoration.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-13", name: "Metallic Balloons", price: 50, category: "bakery-supply", subcategory: "Decor Items", description: "Pack of metallic balloons for party decoration.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-14", name: "Foil Combo", price: 90, category: "bakery-supply", subcategory: "Decor Items", description: "Birthday theme set — 13 pcs HBD banner, foil star, 2 foil curtains and 20 metallic balloons.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-15", name: "V-Cut Combo", price: 60, category: "bakery-supply", subcategory: "Decor Items", description: "V-Cut birthday decoration combo with banner, foil star, curtains and balloons.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-16", name: "Happy Birthday Foil", price: 45, category: "bakery-supply", subcategory: "Decor Items", description: "Happy Birthday foil balloon set.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-17", name: "Happy Anniversary Foil", price: 60, category: "bakery-supply", subcategory: "Decor Items", description: "Happy Anniversary foil balloon set.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-18", name: "Party Sash", price: 20, category: "bakery-supply", subcategory: "Decor Items", description: "Assorted party sashes.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-19", name: "Knife Heavy", price: 120, category: "bakery-supply", subcategory: "Decor Items", description: "Heavy translucent plastic cake knives, assorted colours.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-20", name: "Knife Lite", price: 65, category: "bakery-supply", subcategory: "Decor Items", description: "Lightweight plastic cake knives, assorted colours.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-21", name: "Knife Lite 1st", price: 70, category: "bakery-supply", subcategory: "Decor Items", description: "Lightweight first-quality plastic cake knives.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-22", name: "Tag", price: 80, category: "bakery-supply", subcategory: "Decor Items", description: "Assorted cake topper tags in packaging.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-23", name: "Star Foil", price: 17, category: "bakery-supply", subcategory: "Decor Items", description: "Star-shaped foil balloon.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-24", name: "Heart Foil", price: 17, category: "bakery-supply", subcategory: "Decor Items", description: "18 inch heart-shaped foil balloon.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-25", name: "Music Candle", price: 26, category: "bakery-supply", subcategory: "Decor Items", description: "Lotus-shaped rotating music candle.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-26", name: "Ribbon", price: 34, category: "bakery-supply", subcategory: "Decor Items", description: "Pack of six colourful gift-wrapping ribbons.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-27", name: "Snow Spray", price: 30, category: "bakery-supply", subcategory: "Decor Items", description: "Party snow spray, 40% extra free.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-28", name: "Tiara", price: 150, category: "bakery-supply", subcategory: "Decor Items", description: "Tiaras in assorted colours, boxed.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-28-floral", name: "Floral Tiara", price: 130, category: "bakery-supply", subcategory: "Decor Items", description: "Floral tiaras in assorted colours, individually boxed.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-29", name: "Folding Crown", price: 142, category: "bakery-supply", subcategory: "Decor Items", description: "Folding crowns with assorted jewels and metal finishes.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-30", name: "Fix Crown", price: 118, category: "bakery-supply", subcategory: "Decor Items", description: "Fixed crowns in silver and gold with jewel detailing.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-31", name: "King Crown", price: 30, category: "bakery-supply", subcategory: "Decor Items", description: "Gold king crown with red and blue jewels.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-32", name: "Foam Tape Double Side", price: 100, category: "bakery-supply", subcategory: "Decor Items", description: "Double-sided foam mounting tape rolls.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-33", name: "Haldi Mehndi Combo", price: 80, category: "bakery-supply", subcategory: "Decor Items", description: "Haldi and Mehndi ceremony decoration set — foil banner, 20 balloons, foil star and 2 curtains.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-34", name: "Baby Shower Theme Set", price: 110, category: "bakery-supply", subcategory: "Decor Items", description: "Baby shower theme set in pink or blue — banner, foil star, 3 curtains and 20 metallic balloons.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },
  { id: "t-35", name: "Birthday Decoration Combo", price: 80, category: "bakery-supply", subcategory: "Decor Items", description: "Birthday decoration combo — HBD banner, foil star, curtain and 30 metallic balloons.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock" },
  { id: "t-36", name: "Anniversary Theme Set", price: 70, category: "bakery-supply", subcategory: "Decor Items", description: "Happy Anniversary theme decoration set.", tone: "bg-[oklch(0.9_0.03_240)]", status: "in-stock" },
  { id: "t-37", name: "Welcome Baby Theme Set", price: 80, category: "bakery-supply", subcategory: "Decor Items", description: "Welcome Baby theme set — banner, baby foil, foil star, curtains and 20 metallic balloons.", tone: "bg-[oklch(0.9_0.03_20)]", status: "in-stock" },
  { id: "t-38", name: "Character Birthday Theme Set", price: 80, category: "bakery-supply", subcategory: "Decor Items", description: "Character birthday theme sets — Spiderman, Doraemon, Hello Kitty, Unicorn and more.", tone: "bg-[oklch(0.9_0.03_300)]", status: "in-stock" },
  { id: "t-39", name: "Mehndi Foil Balloon", price: 35, category: "bakery-supply", subcategory: "Decor Items", description: "Mehndi foil balloon set for decoration.", tone: "bg-[oklch(0.9_0.03_140)]", status: "in-stock" },

  // Office Supply
];
