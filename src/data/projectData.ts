import { projectDt } from "@/types/project-dt";

const projectData: projectDt[] = [
  //home main project data start
  {
    id: 1,
    title: "Geeks on Site",
    image: "/assets/img/portfolio/thumb.jpg",
    category: "Branding",
    year: "/2025",
  },
  {
    id: 2,
    title: "Promot Box",
    image: "/assets/img/portfolio/thumb-2.jpg",
    category: "Web Design",
    year: "/2025",
  },
  {
    id: 3,
    title: "Olio Noiring",
    image: "/assets/img/portfolio/thumb-3.jpg",
    category: "Development",
    year: "/2025",
  },
  {
    id: 4,
    title: "Rando Hando",
    image: "/assets/img/portfolio/thumb-4.jpg",
    category: "Portfolio",
    year: "/2025",
  },
  //home main project data end

  //home two project data start
  {
    id: 5,
    title: "Sonder goods",
    categories: ["Branding", "Digital"],
    year: "/2025",
    image: "/assets/img/portfolio/port-2/thumb.jpg",
  },
  {
    id: 6,
    title: "Promot box",
    categories: ["Branding", "Digital"],
    year: "/2025",
    image: "/assets/img/portfolio/port-2/thumb-2.jpg",
  },
  {
    id: 7,
    title: "Olio noiring",
    categories: ["Branding", "Digital"],
    year: "/2025",
    image: "/assets/img/portfolio/port-2/thumb-3.jpg",
  },
  {
    id: 8,
    title: "Rondo hando",
    categories: ["Branding", "Digital"],
    year: "/2025",
    image: "/assets/img/portfolio/port-2/thumb-4.jpg",
  },
  //home two project data end
  //home three project data start
  {
    id: 9,
    title: "3D Toy Car Illustration",
    year: "/2025",
    image: "/assets/img/portfolio/thumb.jpg",
  },
  {
    id: 10,
    title: "Paper Cup & Box Mockup",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-2.jpg",
  },
  {
    id: 11,
    title: "Mobile App UI Mockup",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-3.jpg",
  },
  {
    id: 12,
    title: "Digital Presentation Design",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-4.jpg",
  },
  //home three project data end

  //portfolio page project data start
  {
    id: 13,
    title: "Award Certificates",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-5.jpg",
  },
  {
    id: 14,
    title: "Cyber Security Concept",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-6.jpg",
  },
  {
    id: 15,
    title: "Modern Book Mockup",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-7.jpg",
  },
  {
    id: 16,
    title: "Hardcover Book Design",
    year: "/2025",
    image: "/assets/img/portfolio/thumb-8.jpg",
  },
  //home five portfolio project data start
  {
    id: 17,
    categories: ["GRAPHICS", "VIDEO"],
    title: "CINEMATIC",
    year: "/2025",
    image: "/assets/img/update/portfolio/vp/portfolio.jpg",
    color: "#5811d3",
  },
  {
    id: 18,
    categories: ["GRAPHICS", "VIDEO"],
    title: "CINEMATIC",
    year: "/2025",
    image: "/assets/img/update/portfolio/vp/portfolio-2.jpg",
    color: "#1d1d1f",
    colorCodeTwo: "#bd8202",
  },
  {
    id: 19,
    categories: ["GRAPHICS", "VIDEO"],
    title: "CINEMATIC",
    year: "/2025",
    image: "/assets/img/update/portfolio/vp/portfolio-3.jpg",
    color: "#a20cc8",
  },
  {
    id: 20,
    categories: ["GRAPHICS", "VIDEO"],
    title: "CINEMATIC",
    year: "/2025",
    image: "/assets/img/update/portfolio/vp/portfolio-4.jpg",
    color: "#bd8202",
  },
  //home five portfolio project data end
  //home four portfolio data start
  {
    id: 21,
    slug: "geeks-on-site",
    image: "/assets/img/brand/gos-logo.webp",
    logo: "/assets/img/brand/gos-logo.webp",
    backgroundColor: "#ffffff",
    textColor: "#8b44fb",
    title: "Geeks on Site",
    year: "2025",
    client: "Geeks on Site LLC",
    role: "Full Stack Developer & UI/UX Designer",
    services: [
      "Web Development",
      "WordPress",
      "UI/UX Design",
      "SEO Optimization",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL",
      "HTML/CSS",
      "WooCommerce",
    ],
    websiteUrl: "https://geeksonsite.com",
    detailsImage: "/assets/img/brand/gos-screenshot.jpg",
    counters: [
      {
        value: 27,
        prefix: "+",
        suffix: "%",
        label:
          "increase in completed bookings following the launch of the online booking system",
      },
      {
        value: 13,
        prefix: "–",
        suffix: "%",
        label:
          "reduction in checkout abandonment due to the redesigned mini-cart, cart, and checkout flow",
      },
      {
        value: 16.5,
        prefix: "+",
        suffix: "%",
        label:
          "increase in mobile conversions driven by a cleaner, more responsive layout",
      },
    ],
  },
  {
    id: 22,
    slug: "kozmeticki-salon-cats",
    image: "/assets/img/brand/cats-logo.avif",
    logo: "/assets/img/brand/cats-logo.avif",
    backgroundColor: "#e685b1",
    textColor: "#fbfaf4",
    title: "Kozmeticki Salon Cats",
    year: "2025",
    client: "Kozmeticki Salon Cats",
    role: "Web Developer",
    services: [
      "Web Development",
      "WordPress",
      "SEO Optimization",
      "E-commerce",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "Figma"],
    websiteUrl: "https://kozmetickisaloncats.com",
    counters: [
      {
        value: 22,
        prefix: "+",
        suffix: "%",
        label:
          "increase in Instagram-driven visits after introducing the optimized link-style front page",
      },
      {
        value: 14,
        prefix: "+",
        suffix: "%",
        label:
          "growth in product sales following the launch of the new online shop",
      },
      {
        value: 31,
        prefix: "–",
        suffix: "%",
        label:
          "reduction in customer inquiries via DMs thanks to clearer navigation and easier access to essential information",
      },
    ],
  },
  {
    id: 23,
    slug: "ambientivo",
    image: "/assets/img/brand/ambientivo-logo.png",
    logo: "/assets/img/brand/ambientivo-logo.png",
    backgroundColor: "#bdb4a0",
    textColor: "#ffffff",
    title: "Ambientivo",
    year: "2024",
    client: "Ambientivo",
    role: "Web Developer",
    services: ["Web Development", "WordPress", "SEO Optimization"],
    technologies: ["WordPress", "PHP", "JavaScript", "React", "Figma"],
    websiteUrl: "https://ambientivo.com",
    counters: [
      {
        value: 27,
        prefix: "",
        suffix: "%",
        label:
          "of total traffic now comes from organic search, helping establish Ambientivo’s presence in the architectural space",
      },
      {
        value: 34,
        prefix: "",
        suffix: "%",
        label:
          "of visitors reach the portfolio section, showing strong interest in Ambientivo’s work after the site's launch",
      },
      {
        value: 18,
        prefix: "",
        suffix: "%",
        label:
          "rise in brand-related searches following the introduction of a clear, modern online presence",
      },
    ],
  },
  {
    id: 24,
    slug: "desserts-with-ana",
    image: "/assets/img/brand/dessertswithana-logo.png",
    logo: "/assets/img/brand/dessertswithana-logo.png",
    backgroundColor: "#fcb3c8",
    textColor: "#ffffff",
    title: "Desserts with ana",
    year: "2023",
    client: "Desserts with Ana",
    role: "Web Developer",
    services: [
      "Web Development",
      "WordPress",
      "E-commerce",
      "UI/UX Design",
      "SEO Optimization",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "WooCommerce",
      "Stripe POS",
      "Figma",
    ],
    websiteUrl: "https://dessertswithana.com",
    counters: [
      {
        value: 15,
        prefix: "",
        suffix: "%",
        label:
          "of website visitors now discover Desserts with Ana via organic search thanks to the recipe section and SEO optimization",
      },
      {
        value: 28,
        prefix: "",
        suffix: "%",
        label:
          "of visitors explore both the shop and recipes, showing engagement across multiple sections",
      },
      {
        value: 12,
        prefix: "",
        suffix: "%",
        label:
          "of total orders are now processed using the Stripe POS integration, improving offline sales workflow",
      },
    ],
  },
  //home four portfolio data end
  {
    id: 25,
    title: "Skillvision",
    description: "Research, UX, UI Design",
    image: "/assets/img/update/portfolio/port-3/portfolio.jpg",
    rightSide: true,
  },
  {
    id: 26,
    title: "Kashtech",
    description: "Research, UX, UI Design",
    image: "/assets/img/update/portfolio/port-3/portfolio-2.jpg",
    rightSide: false,
  },
  {
    id: 27,
    title: "Rebrand",
    description: "Research, UX, UI Design",
    image: "/assets/img/update/portfolio/port-3/portfolio-3.jpg",
    rightSide: true,
  },
  //portfolio mix slicer data start
  {
    id: 28,
    image: "/assets/img/update/mix/thumb.jpg",
    description: "Greetings, Traveler",
    title: "Smart platform",
  },
  {
    id: 29,
    image: "/assets/img/update/mix/thumb-2.jpg",
    description: "Interactive Mind",
    title: "World’s Relays",
  },
  {
    id: 30,
    image: "/assets/img/update/mix/thumb-3.jpg",
    description: "Greetings, Traveler!",
    title: "Bright Captive",
  },
  {
    id: 31,
    image: "/assets/img/update/mix/thumb-4.jpg",
    description: "[ UI, Web Design ]",
    title: "Top Paddock",
  },
  {
    id: 32,
    image: "/assets/img/update/mix/thumb-5.jpg",
    description: "Digital platform",
    title: "Royal Benz",
  },
  //portfolio mix slicer data end
  //portfolio revealing slider data start
  {
    id: 33,
    description: "Digital platform",
    title: "Royal Benz",
    image: "/assets/img/revealing/webgl-1.jpg",
  },
  {
    id: 34,
    description: "Greetings, Traveler!",
    title: "Smart platform",
    image: "/assets/img/revealing/webgl-2.jpg",
  },
  {
    id: 35,
    description: "Interactive Mind",
    title: "World’s Relays",
    image: "/assets/img/revealing/webgl-3.jpg",
  },
  {
    id: 36,
    description: "Greetings, Traveler!",
    title: "Bright Captive",
    image: "/assets/img/revealing/webgl-4.jpg",
  },
  {
    id: 37,
    description: "[ UI, Web Design ]",
    title: "Top Paddock",
    image: "/assets/img/revealing/webgl-5.jpg",
  },
  //portfolio revealing slider data end
];

export default projectData;
