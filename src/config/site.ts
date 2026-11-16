const siteUrl =
  import.meta.env.NEXT_PUBLIC_SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://www.davidvidovic.com";

export const SITE = {
  name: "David Vidovic",
  siteUrl,
  title: "David Vidovic | Full-stack Web Developer",
  description:
    "I'm David Vidovic, a full-stack web developer. I build websites, web apps, online shops and the integrations behind them.",
  defaultOgImage: "/assets/img/og-image.jpg",
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
