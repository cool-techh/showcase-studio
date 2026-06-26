export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string; // category slug
  description: string;
  tone: string; // tailwind bg utility for placeholder swatch
  badge?: string;
};

export const categories: Category[] = [
  { slug: "home", name: "Home", tagline: "Objects for slow living", description: "Ceramics, textiles, and quiet essentials that shape a calmer home." },
  { slug: "fashion", name: "Fashion", tagline: "Considered wardrobe staples", description: "Timeless pieces in natural fibers — built to outlast trends." },
  { slug: "tech", name: "Tech", tagline: "Tools that disappear", description: "Devices designed with restraint — useful, beautiful, unobtrusive." },
  { slug: "beauty", name: "Beauty", tagline: "Clean rituals", description: "Skincare and fragrance with simple formulas and honest ingredients." },
  { slug: "accessories", name: "Accessories", tagline: "Small, daily things", description: "Bags, leather goods, and the small objects you'll carry for years." },
];

export const products: Product[] = [
  { id: "linen-throw", name: "Stonewashed Linen Throw", price: 89, category: "home", description: "Heavyweight European linen, garment-washed for a softened drape.", tone: "bg-[oklch(0.92_0.02_75)]", badge: "New" },
  { id: "ceramic-mug", name: "Hand-thrown Ceramic Mug", price: 28, category: "home", description: "Stoneware mug with raw clay base. Each piece slightly unique.", tone: "bg-[oklch(0.88_0.03_60)]" },
  { id: "olivewood-board", name: "Olivewood Serving Board", price: 64, category: "home", description: "Single-piece olive wood, oiled by hand.", tone: "bg-[oklch(0.78_0.05_70)]" },
  { id: "wool-blanket", name: "Merino Wool Blanket", price: 145, category: "home", description: "Woven in Portugal from undyed merino wool.", tone: "bg-[oklch(0.86_0.015_85)]" },

  { id: "linen-shirt", name: "Relaxed Linen Shirt", price: 120, category: "fashion", description: "Oversized fit, mother-of-pearl buttons, French linen.", tone: "bg-[oklch(0.93_0.015_85)]", badge: "Bestseller" },
  { id: "wool-coat", name: "Wool Overcoat", price: 480, category: "fashion", description: "Italian wool, single-breasted, fully canvassed.", tone: "bg-[oklch(0.42_0.02_60)]" },
  { id: "leather-loafers", name: "Leather Loafers", price: 245, category: "fashion", description: "Hand-stitched in Spain, full-grain vegetable-tanned leather.", tone: "bg-[oklch(0.55_0.06_50)]" },
  { id: "cashmere-tee", name: "Cashmere Tee", price: 180, category: "fashion", description: "Featherweight cashmere — your softest shirt.", tone: "bg-[oklch(0.9_0.01_80)]" },

  { id: "wireless-speaker", name: "Portable Speaker", price: 199, category: "tech", description: "Aluminum body, 12-hour battery, weather-sealed.", tone: "bg-[oklch(0.94_0.005_60)]", badge: "New" },
  { id: "desk-lamp", name: "Articulating Desk Lamp", price: 175, category: "tech", description: "Solid brass arm with warm dimmable LED.", tone: "bg-[oklch(0.82_0.04_75)]" },
  { id: "wireless-earbuds", name: "Wireless Earbuds", price: 159, category: "tech", description: "Active noise cancellation, USB-C, recycled aluminum.", tone: "bg-[oklch(0.96_0.003_60)]" },
  { id: "e-reader", name: "Minimal E-reader", price: 229, category: "tech", description: "300 dpi e-ink, weeks of battery, no notifications.", tone: "bg-[oklch(0.3_0.01_60)]" },

  { id: "face-oil", name: "Botanical Face Oil", price: 58, category: "beauty", description: "Cold-pressed seed oils in amber glass.", tone: "bg-[oklch(0.85_0.06_75)]" },
  { id: "bar-soap", name: "Hand-milled Soap", price: 16, category: "beauty", description: "Olive oil base, scented with bergamot and vetiver.", tone: "bg-[oklch(0.9_0.02_85)]" },
  { id: "eau-de-parfum", name: "Eau de Parfum", price: 145, category: "beauty", description: "Fig leaf, cedar, and warm musk. Unisex.", tone: "bg-[oklch(0.88_0.03_50)]", badge: "New" },
  { id: "lip-balm", name: "Tinted Lip Balm", price: 22, category: "beauty", description: "Beeswax and shea, in a brass tin.", tone: "bg-[oklch(0.78_0.08_30)]" },

  { id: "leather-tote", name: "Everyday Leather Tote", price: 320, category: "accessories", description: "Unlined vegetable-tanned leather. Patinas with use.", tone: "bg-[oklch(0.5_0.06_50)]", badge: "Bestseller" },
  { id: "card-wallet", name: "Card Wallet", price: 95, category: "accessories", description: "Six slots, no stitching, made from a single piece of leather.", tone: "bg-[oklch(0.35_0.03_50)]" },
  { id: "canvas-cap", name: "Waxed Canvas Cap", price: 48, category: "accessories", description: "British millerain waxed cotton, leather strap.", tone: "bg-[oklch(0.62_0.04_75)]" },
  { id: "linen-scarf", name: "Linen Scarf", price: 72, category: "accessories", description: "Lightweight indigo-dyed linen, hand-rolled hem.", tone: "bg-[oklch(0.5_0.06_240)]" },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);