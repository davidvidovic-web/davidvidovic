# David Vidovic — Portfolio & Case Studies

The personal portfolio and case-study showcase of **David Vidovic**, a WordPress Specialist and Full-Stack Developer specializing in custom WordPress themes, plugins, WooCommerce architectures, and performance-focused web applications.

Live website: [davidvidovic.com](https://www.davidvidovic.com)

---

## Overview

This website is designed for speed, clarity, and demonstrating measurable business impact through real client case studies. Built with modern web standards on Astro, it delivers fast load times, structured content collections, and an interactive multi-step project inquiry flow.

### Key Features

- **In-Depth Case Studies**: Real production breakdowns with measured outcome metrics (completed bookings, conversion lift, load time improvements, and operational efficiencies).
- **Interactive Scope Builder**: Multi-step project inquiry flow allowing potential clients to define requirements, budget scope, and timeline before submitting.
- **Content Collections**: Type-safe markdown-driven case studies with structured schema validation via Astro Content Collections.
- **SEO & Discoverability**: Semantic HTML, JSON-LD structured data (`CreativeWork`, `Person`), dynamic `sitemap.xml`, and modern machine-readable feeds (`llms.txt` and `llms-full.txt`).
- **Resend Contact Integration**: Serverless contact endpoint with validation and email notifications.

---

## Tech Stack

- **Framework**: [Astro](https://astro.build) v7 (Serverless SSR)
- **Deployment & Hosting**: [Vercel](https://vercel.com) via `@astrojs/vercel`
- **Language**: TypeScript
- **Styling**: Vanilla modern CSS (custom tokens, responsive grid layouts, animations)
- **Email Delivery**: [Resend](https://resend.com) API
- **Content**: Astro Content Collections (`src/content/projects/`)

---

## Project Structure

```text
/
├── public/                 # Static assets (favicons, images, brand marks)
├── src/
│   ├── config/             # Site metadata and analytics configuration
│   ├── content/            # Markdown content collections (featured projects)
│   ├── content.config.ts   # Zod schema definitions for content collections
│   ├── data/               # Structured data (services, testimonials, FAQs, other projects)
│   ├── layouts/            # Base layouts, SEO meta, header, and footer
│   ├── lib/                # Contact validation helpers
│   ├── pages/              # Astro pages, dynamic routes, and API endpoints
│   │   ├── api/            # Serverless endpoints (/api/contact)
│   │   ├── portfolio/      # Case study index and [slug] detail pages
│   │   ├── index.astro     # Homepage
│   │   └── ...             # sitemap, robots, llms.txt endpoints
│   └── styles/             # Global stylesheets and design tokens
├── astro.config.mjs        # Astro configuration and Vercel adapter
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js `>= 22.12.0`
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Environment Variables

Configure the following environment variables in your deployment environment or `.env`:

```env
PUBLIC_SITE_URL=https://www.davidvidovic.com
PUBLIC_GA_MEASUREMENT_ID=G-YYN5M08HWE

# Contact Form Delivery
RESEND=re_your_api_key
CONTACT_TO_EMAIL=mail@davidvidovic.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

### Development

Start the local Astro development server:

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

Build the production-ready serverless bundle:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

---

## License

All rights reserved. &copy; David Vidovic.
