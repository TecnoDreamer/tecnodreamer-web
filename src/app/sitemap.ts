import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { PRODUCTS } from "@/constants/products";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/empresa", changeFrequency: "monthly", priority: 0.7 },
  { path: "/produtos", changeFrequency: "monthly", priority: 0.9 },
  { path: "/equipe", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contato", changeFrequency: "yearly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacidade", changeFrequency: "yearly", priority: 0.2 },
  { path: "/termos", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...PRODUCTS.map((product) => ({
      url: `${SITE_URL}/produtos/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
