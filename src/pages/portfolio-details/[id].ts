import type { APIRoute } from "astro";
import { legacyPortfolioById, permanentRedirect } from "../../lib/legacy-redirects";

export function getStaticPaths() {
  return Array.from({ length: 40 }, (_, index) => ({
    params: { id: String(index + 1) },
  }));
}

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const slugTarget = legacyPortfolioById[params.id || ""];
  return permanentRedirect(slugTarget || "/portfolio");
};
