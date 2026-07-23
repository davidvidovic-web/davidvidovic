import type { APIRoute } from "astro";
import { permanentRedirect } from "../../lib/legacy-redirects";

export const prerender = true;

export function getStaticPaths() {
  return Array.from({ length: 30 }, (_, index) => ({
    params: { id: String(index + 1) },
  }));
}

export const GET: APIRoute = async () => {
  return permanentRedirect("/blog");
};
