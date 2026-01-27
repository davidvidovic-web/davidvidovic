interface serviceDT {
  id: number;
  image: string;
  icon?: string;
  title: string;
  description?: string;
  categories?: string[];
  link?: string;
  date?: string;
}
const serviceData: serviceDT[] = [
  //home five service data start
  {
    id: 1,
    image: "/assets/img/update/service/vp/thumb.jpg",
    title: "Corporate Video Production",
  },
  {
    id: 2,
    image: "/assets/img/update/service/vp/thumb-2.jpg",
    title: "Scriptwriting & Storyboarding",
  },
  {
    id: 3,
    image: "/assets/img/update/service/vp/thumb-3.jpg",
    title: "MOTION GRAPHICS AND ANIMATION",
  },
  {
    id: 4,
    image: "/assets/img/update/service/vp/thumb-4.jpg",
    title: "SOCIAL MEDIA VIDEO CONTENT",
  },
  {
    id: 5,
    image: "/assets/img/update/service/vp/thumb-5.jpg",
    title: "FASHION AND LIFESTYLE VIDEOS",
  },
  //home five service data end
  //home four service data start
  {
    id: 6,
    title: "WordPress/custom websites",
    description:
      "Fast, modern, and fully tailored websites—from design to final launch. Every site is responsive, optimized, and built to fit your specific goals.",
    image: "/assets/img/update/service/service-1.jpg",
    icon: "Globe",
    categories: ["Custom development", "Responsive design", "SEO-ready"],
  },
  {
    id: 7,
    title: "Theme & plugin development",
    description:
      "Custom websites built with modern design principles and performance in mind, optimized for all devices.",
    image: "/assets/img/update/service/service-2.jpg",
    icon: "Puzzle",
    categories: ["Custom features", "WordPress plugins", "Custom themes"],
  },
  {
    id: 8,
    title: "Website optimization & fixes",
    description:
      "I handle speed improvements, Core Web Vitals, security hardening, bug fixes, migrations, and general troubleshooting to keep your site running smoothly.",
    image: "/assets/img/update/service/service-3.jpg",
    icon: "Zap",
    categories: ["Speed optimization", "Performance tuning", "Security fixes"],
  },
  {
    id: 9,
    title: "Ongoing maintenance & support",
    description:
      "Flexible maintenance plans or on-demand support—updates, backups, monitoring, improvements, and small enhancements whenever you need them.",
    image: "/assets/img/update/service/service-4.jpg",
    icon: "Settings",
    categories: ["Updates", "Backups", "Monitoring"],
  },
  //home four service data end
  //home six service data start
  {
    id: 10,
    title: "UpWork Freelance",
    image: "/assets/img/update/service/service-3/st-service-1.jpg",
    link: "https://www.upwork.com/freelancers/~0163d597d928e1e526",
    date: "Feb 2023 - Present",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  {
    id: 11,
    title: "Converted UK",
    image: "/assets/img/update/service/service-3/st-service-2.jpg",
    link: "https://converted.co.uk/",
    date: "Aug 2024 - Jan 2025",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  {
    id: 12,
    title: "Effecticore DE",
    image: "/assets/img/update/service/service-3/st-service-3.jpg",
    link: "https://www.effecticore.de/",
    date: "Oct 2022 - Aug 2024",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  {
    id: 13,
    title: "Obsidian Media DK",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    link: "https://obsidianmedia.dk/",
    date: "Sept 2020 - Sept 2022",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  {
    id: 14,
    title: "UpWork Freelance",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    link: "https://www.upwork.com/freelancers/~0163d597d928e1e526",
    date: "Sept 2019 - Oct 2020",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  {
    id: 15,
    title: "Ad-kraft",
    image: "/assets/img/update/service/service-3/st-service-4.jpg",
    link: "https://ad-kraft.com/",
    date: "Jan 2019 - Sept 2019",
    categories: [
      "UX Design",
      "User Testing",
      "Product Prototype",
      "Mobile UI",
      "Web app design",
    ],
  },
  //home six service data end
];
export default serviceData;
