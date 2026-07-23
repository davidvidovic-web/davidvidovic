import type { APIRoute } from "astro";
import { SITE } from "../config/site";

export const GET: APIRoute = async () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    `Sitemap: ${SITE.siteUrl}/sitemap.xml`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
