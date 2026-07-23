import type { APIRoute } from "astro";

export function permanentRedirect(location: string): Response {
  return new Response(null, {
    status: 301,
    headers: { Location: location },
  });
}

export const legacyPortfolioById: Record<string, string> = {
  "1": "/portfolio/geeks-on-site",
  "2": "/portfolio/promot-box",
  "3": "/portfolio/olio-noiring",
  "4": "/portfolio/rando-hando",
  "5": "/portfolio/sonder-goods",
  "6": "/portfolio/promot-box",
  "7": "/portfolio/olio-noiring",
  "8": "/portfolio/rando-hando",
  "9": "/portfolio/toy-car-illustration",
  "10": "/portfolio/paper-cup-box-mockup",
  "11": "/portfolio/mobile-app-ui-mockup",
  "12": "/portfolio/digital-presentation-design",
  "13": "/portfolio/award-certificates",
  "14": "/portfolio/cyber-security-concept",
  "15": "/portfolio/modern-book-mockup",
  "16": "/portfolio/hardcover-book-design",
  "17": "/portfolio/cinematic-alpha",
  "18": "/portfolio/cinematic-noir",
  "19": "/portfolio/cinematic-bloom",
  "20": "/portfolio/cinematic-pulse",
  "21": "/portfolio/geeks-on-site",
  "22": "/portfolio/kozmeticki-salon-cats",
  "23": "/portfolio/ambientivo",
  "24": "/portfolio/desserts-with-ana",
  "25": "/portfolio/skillvision",
  "26": "/portfolio/kashtech",
  "27": "/portfolio/rebrand",
  "28": "/portfolio/smart-platform",
  "29": "/portfolio/worlds-relays",
  "30": "/portfolio/bright-captive",
  "31": "/portfolio/top-paddock",
  "32": "/portfolio/royal-benz",
  "33": "/portfolio/royal-benz",
  "34": "/portfolio/smart-platform",
  "35": "/portfolio/worlds-relays",
  "36": "/portfolio/bright-captive",
  "37": "/portfolio/top-paddock",
};

export function redirectHandler(path: string): APIRoute {
  return async () => permanentRedirect(path);
}
