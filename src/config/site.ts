const siteUrl =
  import.meta.env.NEXT_PUBLIC_SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://www.davidvidovic.com";

export const SITE = {
  name: "David Vidovic",
  siteUrl,
  title: "David Vidovic | WordPress Specialist and Full-stack Developer",
  description:
    "WordPress developer specializing in custom themes, plugins, WooCommerce and booking flows. I also build applications for teams that need custom web products.",
  defaultOgImage: "/assets/img/og-image.jpg",
  locale: "en_US",
  twitterHandle: "@davidvidovic",
};

export const ANALYTICS = {
  gaMeasurementId:
    import.meta.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    import.meta.env.PUBLIC_GA_MEASUREMENT_ID ||
    "G-YYN5M08HWE",
};

export const NAV_ITEMS = [
  { label: "Work", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Other Projects", href: "/#awards" },
  { label: "FAQ", href: "/#faq" },
  { label: "Connect", href: "/#connect" },
] as const;
