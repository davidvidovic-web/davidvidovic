export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: "Globe" | "Puzzle" | "Zap" | "Settings";
  categories: string[];
  link?: string;
  date?: string;
}

export const services: ServiceItem[] = [
  {
    id: 6,
    title: "WordPress and custom websites",
    description:
      "Fast, modern, and fully tailored websites from design to launch. Every build is responsive, SEO-ready, and aligned with your business goals.",
    image: "/assets/img/update/service/service-1.jpg",
    icon: "Globe",
    categories: ["Custom development", "Responsive design", "SEO-ready"],
  },
  {
    id: 7,
    title: "Theme and plugin development",
    description:
      "Custom themes and plugin architecture designed for maintainability, flexibility, and clean long-term growth.",
    image: "/assets/img/update/service/service-2.jpg",
    icon: "Puzzle",
    categories: ["Custom features", "WordPress plugins", "Custom themes"],
  },
  {
    id: 8,
    title: "Website optimization and fixes",
    description:
      "Speed improvements, Core Web Vitals upgrades, security hardening, migrations, and bug fixes to keep your site stable under real traffic.",
    image: "/assets/img/update/service/service-3.jpg",
    icon: "Zap",
    categories: ["Speed optimization", "Performance tuning", "Security fixes"],
  },
  {
    id: 9,
    title: "Ongoing maintenance and support",
    description:
      "Flexible retainers or on-demand support for updates, backups, monitoring, and incremental product improvements.",
    image: "/assets/img/update/service/service-4.jpg",
    icon: "Settings",
    categories: ["Updates", "Backups", "Monitoring"],
  },
  {
    id: 1,
    title: "Corporate Video Production",
    description:
      "Concept-driven video production for product launches, campaigns, and technical storytelling across digital channels.",
    image: "/assets/img/update/service/vp/thumb.jpg",
    icon: "Globe",
    categories: ["Creative direction", "Script planning", "Brand storytelling"],
  },
  {
    id: 2,
    title: "Scriptwriting and Storyboarding",
    description:
      "Narrative structure and storyboard preparation to align messaging, pacing, and visual hierarchy before production.",
    image: "/assets/img/update/service/vp/thumb-2.jpg",
    icon: "Puzzle",
    categories: ["Narrative design", "Storyboard planning", "Campaign alignment"],
  },
  {
    id: 3,
    title: "Motion Graphics and Animation",
    description:
      "Motion systems and animated assets tailored for social campaigns, product explainers, and brand communication.",
    image: "/assets/img/update/service/vp/thumb-3.jpg",
    icon: "Zap",
    categories: ["2D motion", "Explainer visuals", "UI animation"],
  },
  {
    id: 4,
    title: "Social Media Video Content",
    description:
      "Short-form video pipelines optimized for engagement, retention, and repeatable content publishing schedules.",
    image: "/assets/img/update/service/vp/thumb-4.jpg",
    icon: "Settings",
    categories: ["Short-form content", "Editing workflows", "Platform optimization"],
  },
  {
    id: 5,
    title: "Fashion and Lifestyle Videos",
    description:
      "Visual-first campaign production for lifestyle and product-focused brands that need premium social presentation.",
    image: "/assets/img/update/service/vp/thumb-5.jpg",
    icon: "Globe",
    categories: ["Campaign production", "Lifestyle direction", "Brand visuals"],
  },
  {
    id: 10,
    title: "UpWork Freelance",
    description:
      "Ongoing freelance delivery for global clients with focus on implementation quality, communication cadence, and predictable outcomes.",
    image: "/assets/img/update/service/service-3/st-service-1.jpg",
    icon: "Settings",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://www.upwork.com/freelancers/~0163d597d928e1e526",
    date: "Feb 2023 - Present",
  },
  {
    id: 11,
    title: "Converted UK",
    description:
      "Product design and delivery collaboration focused on practical UX decisions, testing, and iterative conversion improvements.",
    image: "/assets/img/update/service/service-3/st-service-2.jpg",
    icon: "Puzzle",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://converted.co.uk/",
    date: "Aug 2024 - Jan 2025",
  },
  {
    id: 12,
    title: "Effecticore DE",
    description:
      "Long-term digital product execution with structured design-to-development handoffs and scalable UX systems.",
    image: "/assets/img/update/service/service-3/st-service-3.jpg",
    icon: "Zap",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://www.effecticore.de/",
    date: "Oct 2022 - Aug 2024",
  },
  {
    id: 13,
    title: "Obsidian Media DK",
    description:
      "Cross-functional collaboration on digital products, including user testing cycles and interface refinement across releases.",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    icon: "Globe",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://obsidianmedia.dk/",
    date: "Sept 2020 - Sept 2022",
  },
  {
    id: 14,
    title: "UpWork Freelance (Earlier Engagements)",
    description:
      "Earlier freelance cycles centered on web app design quality, user testing feedback loops, and delivery discipline.",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    icon: "Settings",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://www.upwork.com/freelancers/~0163d597d928e1e526",
    date: "Sept 2019 - Oct 2020",
  },
  {
    id: 15,
    title: "Ad-kraft",
    description:
      "Agency-side product and UX support for campaign execution, design prototyping, and multi-device interface quality.",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    icon: "Puzzle",
    categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    link: "https://ad-kraft.com/",
    date: "Jan 2019 - Sept 2019",
  },
];
