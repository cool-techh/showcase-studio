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
  // Bakery Supply — existing
  { id: "kraft-pastry-boxes", name: "Kraft Pastry Boxes (50pk)", price: 28, category: "bakery-supply", description: "Food-safe kraft boxes with window — perfect for pastries and small cakes.", tone: "bg-[oklch(0.82_0.05_70)]", badge: "New" },
  { id: "wooden-rolling-pin", name: "French Rolling Pin", price: 34, category: "bakery-supply", description: "Tapered beechwood pin, hand-finished, weighted for even pressure.", tone: "bg-[oklch(0.78_0.05_70)]" },
  { id: "linen-proofing-cloth", name: "Linen Proofing Cloth", price: 22, category: "bakery-supply", description: "Heavyweight European linen — for shaping loaves and dusting work surfaces.", tone: "bg-[oklch(0.93_0.015_85)]" },
  { id: "ceramic-mixing-bowl", name: "Stoneware Mixing Bowl", price: 48, category: "bakery-supply", description: "Glazed stoneware, generous 3L capacity. Heavy enough to hold its ground.", tone: "bg-[oklch(0.88_0.03_60)]", badge: "Bestseller" },
  { id: "twine-spool", name: "Bakery Twine Spool", price: 12, category: "bakery-supply", description: "Natural cotton twine in a brass dispenser — for tying boxes and bundles.", tone: "bg-[oklch(0.9_0.02_85)]" },
  { id: "kraft-paper-bags", name: "Kraft Paper Bags (100pk)", price: 18, category: "bakery-supply", description: "Flat-bottom kraft bags with a soft matte finish. Recyclable.", tone: "bg-[oklch(0.85_0.04_75)]" },

  // Bakery Supply — Cake Toppers
  { id: "gold-cake-topper", name: "Gold Acrylic Cake Topper", price: 14, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mirror-finish acrylic topper in a delicate script. Reusable and food-safe.", tone: "bg-[oklch(0.85_0.06_80)]" },
  { id: "floral-cake-topper", name: "Pressed Floral Topper Set", price: 22, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Real pressed flowers sealed in clear acrylic. A gentle, natural accent.", tone: "bg-[oklch(0.92_0.03_120)]", badge: "New" },
  { id: "minimal-number-topper", name: "Minimal Number Toppers", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Matte black acrylic numbers 0–9. Clean lines for any celebration.", tone: "bg-[oklch(0.35_0.02_260)]" },

  // Bakery Supply — Party Poppers
  { id: "confetti-poppers", name: "Biodegradable Confetti Poppers (6pk)", price: 16, category: "bakery-supply", subcategory: "Party Poppers", description: "Twist-to-pop tubes filled with pastel paper confetti. Compostable.", tone: "bg-[oklch(0.88_0.04_140)]" },
  { id: "gold-streamer-poppers", name: "Gold Streamer Poppers (4pk)", price: 20, category: "bakery-supply", subcategory: "Party Poppers", description: "Compressed air poppers that shoot fine metallic streamers up to 3m.", tone: "bg-[oklch(0.78_0.08_85)]", badge: "Popular" },

  // Bakery Supply — Candles
  { id: "beeswax-candles", name: "Tapered Beeswax Candles (12pk)", price: 16, category: "bakery-supply", subcategory: "Candles", description: "Naturally scented beeswax with cotton wicks. Burn time ~45 min each.", tone: "bg-[oklch(0.86_0.06_80)]" },
  { id: "metallic-candles", name: "Metallic Birthday Candles (24pk)", price: 10, category: "bakery-supply", subcategory: "Candles", description: "Slim twisted candles in gold and rose gold. Fits standard holders.", tone: "bg-[oklch(0.72_0.06_60)]" },
  { id: "led-candles", name: "LED Flameless Candles (6pk)", price: 24, category: "bakery-supply", subcategory: "Candles", description: "Warm flicker LED with wax coating. Safe around kids and paper decor.", tone: "bg-[oklch(0.95_0.02_90)]", badge: "New" },

  // Bakery Supply — Decor Items
  { id: "bunting-garland", name: "Cloth Bunting Garland (3m)", price: 18, category: "bakery-supply", subcategory: "Decor Items", description: "Double-sided cotton pennants in muted earth tones. Reusable.", tone: "bg-[oklch(0.82_0.04_120)]" },
  { id: "lace-doilies", name: "Paper Lace Doilies (50pk)", price: 12, category: "bakery-supply", subcategory: "Decor Items", description: "Intricate laser-cut paper doilies. Perfect under plates and cake stands.", tone: "bg-[oklch(0.94_0.015_85)]" },
  { id: "satin-ribbon", name: "Satin Ribbon Spool (10m)", price: 9, category: "bakery-supply", subcategory: "Decor Items", description: "Double-faced satin in warm ivory. For boxes, bouquets and table settings.", tone: "bg-[oklch(0.92_0.02_80)]" },

  // ===== Trusiqq catalogue (from spreadsheet) =====
  { id: "tq-number-candle", name: "Number Candle", price: 15, category: "bakery-supply", subcategory: "Candles", description: "Numeric birthday candles for cakes — clean shapes, steady burn.", tone: "bg-[oklch(0.9_0.03_80)]", status: "in-stock", image: "https://loremflickr.com/800/1000/number,candle,birthday" },
  { id: "tq-spiral-candle", name: "Spiral Candle", price: 17, category: "bakery-supply", subcategory: "Candles", description: "Slim spiral twist candles in soft pastel tones.", tone: "bg-[oklch(0.88_0.04_60)]", status: "in-stock", image: "https://loremflickr.com/800/1000/spiral,candle" },
  { id: "tq-mdf-topper", name: "MDF Topper (5 inch, 2 mm)", price: 15, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Laser-cut MDF cake topper — 5 inch, 2 mm thickness. Price per piece.", tone: "bg-[oklch(0.82_0.05_70)]", status: "in-stock", image: "https://loremflickr.com/800/1000/cake,topper,wood" },
  { id: "tq-acrylic-topper", name: "Acrylic Topper (5 inch, 2 mm)", price: 18, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Mirror-finish acrylic cake topper — 5 inch, 2 mm thickness. Price per piece.", tone: "bg-[oklch(0.85_0.06_80)]", status: "in-stock", image: "https://loremflickr.com/800/1000/cake,topper,acrylic" },
  { id: "tq-knife", name: "Cake Knife", price: 0, category: "bakery-supply", subcategory: "Cake Toppers & Knife", description: "Decorative cake-cutting knife.", tone: "bg-[oklch(0.9_0.01_260)]", status: "not-in-stock", image: "https://loremflickr.com/800/1000/cake,knife" },
  { id: "tq-sash", name: "Birthday Sash", price: 11, category: "bakery-supply", subcategory: "Decor Items", description: "Satin birthday sash — soft finish, adjustable fit.", tone: "bg-[oklch(0.85_0.06_20)]", status: "in-stock", image: "https://loremflickr.com/800/1000/birthday,sash" },
  { id: "tq-metallic-balloon", name: "Metallic Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Glossy metallic-finish balloons for celebrations.", tone: "bg-[oklch(0.78_0.08_85)]", status: "unavailable", image: "https://loremflickr.com/800/1000/metallic,balloon" },
  { id: "tq-normal-balloon", name: "Normal Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Classic latex party balloons in assorted colours.", tone: "bg-[oklch(0.88_0.05_20)]", status: "unavailable", image: "https://loremflickr.com/800/1000/balloon,party" },
  { id: "tq-chrome-balloon", name: "Chrome Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "High-shine chrome balloons that reflect light beautifully.", tone: "bg-[oklch(0.82_0.03_240)]", status: "unavailable", image: "https://loremflickr.com/800/1000/chrome,balloon" },
  { id: "tq-heart-balloon", name: "Heart Shape Balloon", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Heart-shaped balloons — ideal for anniversaries and love notes.", tone: "bg-[oklch(0.8_0.09_20)]", status: "unavailable", image: "https://loremflickr.com/800/1000/heart,balloon" },
  { id: "tq-combo", name: "Decor Combo", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Curated combo of decor essentials for a full party setup.", tone: "bg-[oklch(0.88_0.04_60)]", status: "unavailable", image: "https://loremflickr.com/800/1000/party,decoration" },
  { id: "tq-party-popper", name: "Party Popper", price: 0, category: "bakery-supply", subcategory: "Party Poppers", description: "Twist-to-pop confetti tubes for instant celebration.", tone: "bg-[oklch(0.88_0.04_140)]", status: "unavailable", image: "https://loremflickr.com/800/1000/party,popper,confetti" },
  { id: "tq-caps", name: "Party Caps", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Colourful conical party caps with elastic string.", tone: "bg-[oklch(0.85_0.08_60)]", status: "unavailable", image: "https://loremflickr.com/800/1000/party,hat" },
  { id: "tq-foil", name: "Foil Decor", price: 0, category: "bakery-supply", subcategory: "Decor Items", description: "Metallic foil curtains and streamers for backdrops.", tone: "bg-[oklch(0.82_0.06_85)]", status: "not-in-stock", image: "https://loremflickr.com/800/1000/foil,curtain,decor" },

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