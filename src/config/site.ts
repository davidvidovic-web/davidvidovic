const siteUrl =
  import.meta.env.NEXT_PUBLIC_SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://www.davidvidovic.com";

export const SITE = {
  name: "David Vidovic",
  siteUrl,
  title: "David Vidovic | Full-stack Web Developer for Websites, Web Apps & Shops",
  description:
    "I'm David Vidovic, an Austria-based full-stack web developer with 8+ years of experience. I build websites, web apps, online shops and the integrations behind them.",
  defaultOgImage: "/assets/img/og-image.jpg",
  defaultOgImageAlt: "David Vidovic, full-stack web developer",
  locale: "en_US",
};

export const ANALYTICS = {
  gaMeasurementId:
    import.meta.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    import.meta.env.PUBLIC_GA_MEASUREMENT_ID ||
    "G-YYN5M08HWE",
};

export const NAV_ITEMS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
] as const;
