export type UpdateCategory =
  | "AI"
  | "Startups"
  | "IT"
  | "Funding"
  | "Cybersecurity"
  | "Policy";

export type TechUpdate = {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  whyItMatters: string;
  imageUrl: string;
  imageAlt: string;
  category: UpdateCategory;
  source: string;
  sourceUrl: string;
  region: string;
  publishedAt: string;
  importance: "High" | "Medium" | "Low";
};

export const categoryRoutes: Record<UpdateCategory, string> = {
  AI: "/ai",
  Startups: "/startups",
  IT: "/it",
  Funding: "/funding",
  Cybersecurity: "/cybersecurity",
  Policy: "/policy",
};

export const categories: Array<"All" | UpdateCategory> = [
  "All",
  ...(Object.keys(categoryRoutes) as UpdateCategory[]),
];

export const updates: TechUpdate[] = [
  {
    id: "open-model-infra",
    title: "AI infrastructure demand keeps shifting toward custom chips",
    summary:
      "Cloud providers and model labs are increasing investment in specialized compute as inference costs become a board-level concern.",
    keyPoints: [
      "Inference workload growth is changing cloud infrastructure priorities.",
      "Custom silicon is becoming a strategic cost-control layer.",
      "Enterprise AI buyers are asking for clearer unit economics.",
    ],
    whyItMatters:
      "AI products are moving from experiments to high-volume usage, so infrastructure cost now shapes product margins and platform choices.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Close-up of illuminated circuit board components",
    category: "AI",
    source: "Market Brief",
    sourceUrl: "https://example.com/ai-infrastructure-demand",
    region: "Global",
    publishedAt: "12 min ago",
    importance: "High",
  },
  {
    id: "startup-funding-index",
    title: "Early-stage startup rounds show renewed activity in developer tools",
    summary:
      "Seed-stage teams building workflow automation, observability, and AI coding infrastructure are seeing stronger investor attention.",
    keyPoints: [
      "Developer workflow startups are seeing stronger seed activity.",
      "AI coding infrastructure remains a visible investor theme.",
      "Observability and automation are being bundled into broader platforms.",
    ],
    whyItMatters:
      "Funding patterns are a useful signal for where tooling demand may expand over the next few product cycles.",
    imageUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Startup team collaborating around a laptop",
    category: "Funding",
    source: "Startup Desk",
    sourceUrl: "https://example.com/startup-funding-index",
    region: "US / India",
    publishedAt: "38 min ago",
    importance: "Medium",
  },
  {
    id: "security-supply-chain",
    title: "Security teams focus on software supply chain visibility",
    summary:
      "New vendor releases are targeting dependency scanning, provenance, and runtime monitoring for enterprise engineering teams.",
    keyPoints: [
      "Supply chain security is moving closer to daily engineering workflows.",
      "Runtime context is being added to static dependency data.",
      "Enterprises want better evidence for audits and incident response.",
    ],
    whyItMatters:
      "Security tooling that fits engineering workflows can reduce risk without slowing release velocity as much as manual review processes.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Security dashboard interface on a laptop screen",
    category: "Cybersecurity",
    source: "Security Watch",
    sourceUrl: "https://example.com/security-supply-chain",
    region: "Global",
    publishedAt: "1 hr ago",
    importance: "High",
  },
  {
    id: "cloud-platform-updates",
    title: "Cloud platforms bundle AI services into existing developer workflows",
    summary:
      "Major platform updates are making model routing, vector search, and managed agents easier to adopt inside existing stacks.",
    keyPoints: [
      "Cloud vendors are packaging AI features into familiar platform tools.",
      "Managed model routing is becoming a default abstraction.",
      "Vector search and agent tooling are moving into mainstream app stacks.",
    ],
    whyItMatters:
      "Teams can adopt AI capabilities faster when they appear inside existing deployment, database, and monitoring workflows.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Digital network visualization of global technology systems",
    category: "IT",
    source: "Cloud Notes",
    sourceUrl: "https://example.com/cloud-platform-updates",
    region: "Global",
    publishedAt: "2 hrs ago",
    importance: "Medium",
  },
  {
    id: "ai-policy-roundup",
    title: "AI policy discussions move from principles to compliance operations",
    summary:
      "Governments and enterprises are converging around audit trails, risk classification, and model usage documentation.",
    keyPoints: [
      "AI governance is shifting toward operational controls.",
      "Auditability and risk classification are recurring requirements.",
      "Internal AI usage documentation is becoming more important.",
    ],
    whyItMatters:
      "Teams building AI features may need compliance-ready records earlier in the product lifecycle than they expected.",
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Law and policy books arranged on a desk",
    category: "Policy",
    source: "Policy Wire",
    sourceUrl: "https://example.com/ai-policy-roundup",
    region: "EU / US",
    publishedAt: "3 hrs ago",
    importance: "Medium",
  },
  {
    id: "founder-product-led-growth",
    title: "Startup teams lean into product-led growth with smaller sales teams",
    summary:
      "New SaaS launches are focusing on self-serve onboarding, usage-based pricing, and fast activation loops.",
    keyPoints: [
      "Self-serve onboarding remains central for new SaaS launches.",
      "Usage-based pricing is being used to lower adoption friction.",
      "Smaller teams are trying to automate more of the customer journey.",
    ],
    whyItMatters:
      "Founders can compete with leaner go-to-market motions when activation is built directly into the product experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Founders reviewing startup metrics together",
    category: "Startups",
    source: "Founder Signal",
    sourceUrl: "https://example.com/founder-product-led-growth",
    region: "Global",
    publishedAt: "5 hrs ago",
    importance: "Low",
  },
];

export const digestHighlights = [
  "AI compute and inference economics remain the strongest theme today.",
  "Developer tooling and security infrastructure are leading startup activity.",
  "Policy updates are becoming more operational, with compliance workflows in focus.",
];

export const sources = [
  {
    name: "Market Brief",
    category: "AI",
    status: "Active",
    cadence: "15 min",
    trustLevel: "High",
  },
  {
    name: "Startup Desk",
    category: "Funding",
    status: "Active",
    cadence: "30 min",
    trustLevel: "Medium",
  },
  {
    name: "Security Watch",
    category: "Cybersecurity",
    status: "Active",
    cadence: "15 min",
    trustLevel: "High",
  },
  {
    name: "Policy Wire",
    category: "Policy",
    status: "Queued",
    cadence: "Daily",
    trustLevel: "Medium",
  },
];

export function getUpdateById(id: string) {
  return updates.find((update) => update.id === id);
}

export function getUpdatesByCategory(category: UpdateCategory) {
  return updates.filter((update) => update.category === category);
}

export function getRelatedUpdates(update: TechUpdate) {
  return updates
    .filter((item) => item.id !== update.id && item.category === update.category)
    .slice(0, 3);
}
