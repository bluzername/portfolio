export type ProductPlatform =
  | "web"
  | "chrome"
  | "telegram"
  | "instagram"
  | "linkedin"
  | "ios";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  platform: ProductPlatform;
  links: {
    live?: string;
    github?: string;
    video?: string;
  };
  tags: string[];
  featured: boolean;
  order: number;
}

export const products: Product[] = [
  {
    id: "trustedchat",
    name: "TrustedChat",
    tagline: "AI consensus you can trust",
    description:
      "Get reliable answers by querying multiple LLMs simultaneously. When Claude, GPT, and Gemini all agree, you know the answer is solid. When they disagree, you see the nuance. No more second-guessing AI responses.",
    image: "/products/trustedchat.png",
    platform: "web",
    links: {
      live: "https://trustedchat.chat",
      github: "https://github.com/bluzername/trusted-ask-ai",
    },
    tags: ["AI", "LLM", "Consensus"],
    featured: true,
    order: 1,
  },
  {
    id: "swingtrade-pro",
    name: "SwingTrade Pro",
    tagline: "10-point swing analysis in seconds",
    description:
      "Professional swing trading analysis with portfolio tracking, watchlist management, and even politician trade monitoring. Enter any ticker and get comprehensive technical indicators, trading signals, and actionable recommendations.",
    image: "/products/swingtrade-pro.png",
    platform: "web",
    links: {
      live: "https://checklister.bluzername.live",
      github: "https://github.com/bluzername/checklister_production",
    },
    tags: ["Finance", "Trading", "Analytics"],
    featured: true,
    order: 2,
  },
  {
    id: "whatsapp-formatter",
    name: "WhatsApp Formatter",
    tagline: "Format messages like a pro",
    description:
      "Chrome extension that brings rich text formatting to WhatsApp Web. Bold, italic, strikethrough, and monospace at your fingertips. Published on the Chrome Web Store with real users who love clean, formatted messages.",
    image: "/products/whatsapp-formatter.png",
    platform: "chrome",
    links: {
      live: "https://chromewebstore.google.com/detail/whatsapp-formatter/leaaedjehccafdfcnbjcekofeehilcpl",
    },
    tags: ["Chrome Extension", "Productivity", "WhatsApp"],
    featured: true,
    order: 3,
  },
  {
    id: "synthetic-research",
    name: "Synthetic Market Research",
    tagline: "Weeks of research in 5 minutes for $2",
    description:
      "Multi-agent system that generates product concepts, simulates market responses using 100+ synthetic personas, calculates Product-Market Fit metrics, and iteratively refines ideas. Validated against 9,300 human responses across 57 surveys.",
    image: "/products/synthetic-research.png",
    platform: "linkedin",
    links: {
      video: "https://www.linkedin.com/posts/evyatar-bluzer-46605077_prototype-of-the-day-a-multi-agent-system-activity-7384551297183649792-prh6",
      github: "https://github.com/bluzername/synthetic-consumer-research",
    },
    tags: ["AI Agents", "Market Research", "LangGraph"],
    featured: true,
    order: 4,
  },
  {
    id: "podcaststldr",
    name: "Podcasts TL;DR",
    tagline: "Skip the fluff, get the insights",
    description:
      "Telegram bot that summarizes podcast episodes so you can decide what's worth your time. Get key takeaways, timestamps for interesting segments, and actionable insights—all delivered to your chat.",
    image: "/products/telegram-bot.png",
    platform: "telegram",
    links: {
      live: "https://t.me/podcaststldr",
    },
    tags: ["Telegram Bot", "AI", "Podcasts"],
    featured: false,
    order: 5,
  },
  {
    id: "ze-ra-tldr",
    name: "Ze Ra TL;DR",
    tagline: "Israeli news, summarized",
    description:
      "Telegram bot delivering concise Hebrew news summaries. Stay informed without doom-scrolling through endless articles. Quick, digestible updates on what matters in Israel.",
    image: "/products/telegram-bot.png",
    platform: "telegram",
    links: {
      live: "https://t.me/ze_ra_tldr",
    },
    tags: ["Telegram Bot", "AI", "News"],
    featured: false,
    order: 6,
  },
  {
    id: "nocap4eel",
    name: "No Cap 4 Eel",
    tagline: "AI-generated content that hits different",
    description:
      "Instagram account showcasing AI-generated visual content. Experimenting with the latest generative AI tools to create eye-catching, shareable content that explores the boundaries of synthetic media.",
    image: "/products/nocap4eel.png",
    platform: "instagram",
    links: {
      live: "https://www.instagram.com/nocap4eel/",
    },
    tags: ["AI Art", "Social Media", "Generative AI"],
    featured: false,
    order: 7,
  },
  {
    id: "paddockpulse",
    name: "Paddock Pulse",
    tagline: "F1 data meets viral content",
    description:
      "Automated Instagram account transforming F1 race data into stunning visualizations and viral social media content. AI-powered insights meet motorsport passion—stats that fans actually want to share.",
    image: "/products/paddockpulse.png",
    platform: "instagram",
    links: {
      live: "https://www.instagram.com/paddockpulse1950/",
      github: "https://github.com/bluzername/paddock-pulse",
    },
    tags: ["F1", "Data Viz", "Automation"],
    featured: false,
    order: 8,
  },
];

export function getFeaturedProducts(): Product[] {
  return products
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllProducts(): Product[] {
  return products.sort((a, b) => a.order - b.order);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const platformConfig: Record<
  ProductPlatform,
  { label: string; color: string; bgColor: string }
> = {
  web: { label: "Web App", color: "text-blue-700", bgColor: "bg-blue-100" },
  chrome: { label: "Chrome Extension", color: "text-yellow-700", bgColor: "bg-yellow-100" },
  telegram: { label: "Telegram Bot", color: "text-sky-700", bgColor: "bg-sky-100" },
  instagram: { label: "Instagram", color: "text-pink-700", bgColor: "bg-pink-100" },
  linkedin: { label: "Prototype", color: "text-indigo-700", bgColor: "bg-indigo-100" },
  ios: { label: "iOS App", color: "text-gray-700", bgColor: "bg-gray-100" },
};
