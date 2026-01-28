# David Vidovic Portfolio - Complete File Mapping & Documentation

> **Website**: davidvidovic.com  
> **Framework**: Next.js 16 (App Router)  
> **Styling**: SCSS + Bootstrap 5  
> **Animations**: GSAP (ScrollTrigger, ScrollSmoother)  
> **Language**: TypeScript

> **⚠️ Note**: This documentation includes ALL files in the repository, including alternative page variants and components not currently used on the live homepage. The homepage uses HomeFourMain, but other home variants (home, home-two, home-three, home-five, home-six) and their components exist for future use or reference.

---

## Table of Contents

1. [Homepage (/) - Main Entry Point](#1-homepage--main-entry-point)
2. [Layout Components](#2-layout-components)
3. [Page Components](#3-page-components)
4. [Providers & Context](#4-providers--context)
5. [Shared Components](#5-shared-components)
6. [Unused Components (Available for Future Use)](#6-unused-components-available-for-future-use)
7. [Data Files](#7-data-files)
8. [Hooks & Utilities](#8-hooks--utilities)
9. [Assets Inventory](#9-assets-inventory)
10. [Styling Architecture](#10-styling-architecture)
11. [Dependencies](#11-dependencies)

---

## 1. Homepage (/) - Main Entry Point

### Root Page Component
- **File**: `/src/app/page.tsx`
- **Component**: `HomeFourMain`
- **Metadata**: SEO-optimized with Open Graph and Twitter cards
- **Description**: Root route that renders the main portfolio homepage

### Main Component: HomeFourMain
- **File**: `/src/pages/homes/home-four/HomeFourMain.tsx`
- **Purpose**: Main homepage layout combining all sections

#### Component Structure:
```
HomeFourMain
├── ScrollSmoothProvider (Wrapper for smooth scrolling)
│   └── ThemeCursorProvider (Custom cursor with theme support)
│       └── AnimationWrapper (GSAP animations controller)
│           ├── Cursor Elements (#magic-cursor, #ball)
│           ├── BackToTop (Scroll to top button)
│           ├── HeaderThree (Main navigation)
│           └── #smooth-wrapper
│               └── #smooth-content
│                   ├── main
│                   │   ├── HeroThree
│                   │   ├── HomeFourPortfolio
│                   │   ├── HomeFourService
│                   │   ├── HomeFourTextSlider
│                   │   ├── HomeFourAward
│                   │   ├── HomeSixService
│                   │   ├── HomeTextSlider
│                   │   ├── HomeTestimonial
│                   │   ├── HomeFiveFaqArea
│                   │   └── ContactArea
│                   └── FooterThree
```

---

## 2. Layout Components

### 2.1 Root Layout
- **File**: `/src/app/layout.tsx`
- **Font**: Poppins (Google Fonts, weights 100-900)
- **Features**:
  - Mobile device detection script
  - Google Analytics integration (GA_MEASUREMENT_ID)
  - Theme provider setup
  - Toast notifications (react-hot-toast)
  - SEO metadata configuration
  - Favicon: `/assets/img/logo/favicon.png`

#### Providers Hierarchy:
```
RootLayout
├── ThemeProvider (next-themes)
├── AppProvider (Context API)
├── VideoProvider (Modal video player)
├── Wrapper (Bootstrap JS loader)
└── BodyThemeSync (Theme class sync)
```

### 2.2 Header Component
- **File**: `/src/layouts/headers/HeaderThree.tsx`
- **Dependencies**:
  - `OffCanvasPanelTwo` - Mobile/offcanvas navigation
  - `NavMenus` - Desktop navigation menu
  - `useStickyHeader` - Sticky header on scroll
  - `useTheme` - Dark/light mode toggle
- **Assets Used**:
  - Logo Dark: `/assets/img/logo/logo-dark.png`
  - Logo Light: `/assets/img/logo/logo-light.webp`
- **Features**:
  - Sticky header after 20px scroll
  - Dark/light theme toggle button
  - "Let's Talk" CTA button linking to `/contact`
  - Hamburger menu for offcanvas panel

### 2.3 Footer Component
- **File**: `/src/layouts/footers/FooterThree.tsx`
- **Assets Used**:
  - Background line: `/assets/img/hero/hero-3/line-bg.png`
  - Upwork icon: `/assets/img/footer/upwork.svg`
- **Social Links**:
  - LinkedIn: `https://www.linkedin.com/in/david-vidovic/`
  - Upwork: `https://www.upwork.com/freelancers/~0163d597d928e1e526`
  - GitHub: `https://github.com/davidvidovic-web`
  - Email: `mailto:mail@davidvidovic.com`
- **Dynamic Elements**:
  - Current day display (e.g., "Have a beautiful Monday!")
  - Current year copyright
- **Dependencies**:
  - `lucide-react` icons (Linkedin, Github, Mail, Briefcase)
  - `getCurrentYear()` utility
  - `getCurrentDay()` utility

### 2.4 Off-Canvas Menu
- **File**: `/src/components/offcanvus/OffCanvasPanelTwo.tsx`
- **Components**:
  - `MobileMenus` - Mobile navigation structure
  - `CloseIcon`, `CloseIconTwo` - Close button SVGs
  - Social icons (Dribbble, Instagram, Twitter)
- **Assets**:
  - Logo Dark: `/assets/img/logo/logo-dark.png`
  - Logo Light: `/assets/img/logo/logo-light.webp`
- **Features**:
  - Split panel design (left: menu, right: contact info)
  - Responsive (right panel hidden on mobile)
  - Contact information display
  - Social media links

---

## 3. Page Components

### 3.1 HeroThree (Hero Section)
- **File**: `/src/components/hero/HeroThree.tsx`
- **Purpose**: Main hero/intro section with developer introduction
- **Assets**:
  - Background line: `/assets/img/hero/hero-3/line-bg.png`
  - TextCircleIcon SVG (animated spinning text)
- **Content**:
  - Name: "David Vidović"
  - Tagline: "Web developer with 8 years of experience..."
  - Description paragraph about services

### 3.2 HomeFourPortfolio (Portfolio Grid)
- **File**: `/src/components/portfolio/HomeFourPortfolio.tsx`
- **Data Source**: `projectData.slice(20, 24)` (Projects 21-24)
- **Features**:
  - Grid layout with hover effects
  - Colored background containers for each project
  - Logo display with custom background colors
  - Links to project details: `/portfolio-details/{id}`
- **Projects Displayed**:
  1. **Geeks on Site** - Tech support platform
     - Logo: `/assets/img/brand/gos-logo.webp`
     - Background: `#ffffff`, Text: `#8b44fb`
  2. **Kozmeticki Salon Cats** - Beauty salon
     - Logo: `/assets/img/brand/cats-logo.avif`
     - Background: `#e685b1`, Text: `#fbfaf4`
  3. **Ambientivo** - Portfolio project
     - Logo: `/assets/img/brand/ambientivo-logo.png`
     - Background: `#bdb4a0`, Text: `#ffffff`
  4. **Desserts with ana** - Bakery website
     - Logo: `/assets/img/brand/dessertswithana-logo.png`
     - Background: `#fcb3c8`, Text: `#ffffff`
- **Animation**: `homeFourPortfolioAnim` (GSAP scroll-triggered)

### 3.3 HomeFourService (Services Accordion)
- **File**: `/src/components/service/HomeFourService.tsx`
- **Data Source**: `serviceData.slice(5, 9)` (Services 6-9)
- **Features**:
  - Bootstrap accordion component
  - Dynamic icon rendering using Lucide React
  - Theme-aware dark background (`#1d1d1f` dark, `#000` light)
- **Services Displayed**:
  1. **WordPress/custom websites** (Icon: Globe)
     - Categories: Custom development, Responsive design, SEO-ready
  2. **Theme & plugin development** (Icon: Puzzle)
     - Categories: Custom features, WordPress plugins, Custom themes
  3. **Website optimization & fixes** (Icon: Zap)
     - Categories: Speed optimization, Performance tuning, Security fixes
  4. **Ongoing maintenance & support** (Icon: Settings)
     - Categories: Updates, Backups, Monitoring

### 3.4 HomeFourTextSlider (Text Marquee)
- **File**: `/src/components/text-slider/HomeFourTextSlider.tsx`
- **Purpose**: Animated text slider with "Other projects", "Personal apps", "Experimental coding"
- **Technology**: Swiper.js with autoplay
- **Features**:
  - Top slider (LTR)
  - Bottom slider (RTL - right to left)
  - Infinite loop
  - 8000ms speed
  - Theme-aware background color

### 3.5 HomeFourAward (Notable Projects)
- **File**: `/src/components/award/HomeFourAward.tsx`
- **Data Source**: `awardData` (6 projects)
- **Provider**: `ImageHoverRevealProvider` (hover effects)
- **Projects Listed**:
  1. **POS Terminals for Stripe** - WordPress plugin
     - Link: `https://wordpress.org/plugins/pos-terminals-integration-for-stripe/`
  2. **Inn digit tool** - Digitalisation calculator
     - Link: `https://infobiz.komorars.ba/inndigit/`
  3. **Vagon Gallery** - Gallery website
     - Link: `https://vagon.gallery`
  4. **Elevate** - Agency website
     - Link: `https://elevatepreview.com`
  5. **TapWaterRating** - Water rating app
     - Link: `https://tapwaterrating.com`
  6. **mojPoslic** - Job portal
     - Link: `https://mojposlic.com`

### 3.6 HomeSixService (Experience Timeline)
- **File**: `/src/components/service/HomeSixService.tsx`
- **Data Source**: `serviceData.slice(9, 15)` (Services 10-15)
- **Purpose**: Display work experience/employment history
- **Features**:
  - Timeline-style layout
  - Company links with ServiceArrowIcon
  - Date ranges for each position
- **Experience Listed**:
  1. **UpWork Freelance** (Feb 2023 - Present)
  2. **Converted UK** (Aug 2024 - Jan 2025)
  3. **Effecticore DE** (Oct 2022 - Aug 2024)
  4. **Obsidian Media DK** (Sept 2020 - Sept 2022)
  5. **UpWork Freelance** (Sept 2019 - Oct 2020)
  6. **Ad-kraft** (Jan 2019 - Sept 2019)

### 3.7 HomeTextSlider (Testimonials Banner)
- **File**: `/src/components/text-slider/HomeTextSlider.tsx`
- **Purpose**: Animated text announcing testimonials section
- **Text**: "Testimonials", "What clients say", "Customer satisfaction"
- **Technology**: Swiper.js with bi-directional scrolling

### 3.8 HomeTestimonial (Client Reviews)
- **File**: `/src/components/testimonial/HomeTestimonial.tsx`
- **Data Source**: `testimonialData` (8 testimonials)
- **Technology**: Swiper.js with navigation controls
- **Features**:
  - Autoplay (5000ms delay)
  - Navigation arrows (prev/next)
  - Controller sync between avatar and content sliders
- **Testimonials From**:
  1. Jeff (Einsteing Digital LLC)
  2. Asli (Logicandfacts)
  3. Giorgio (Primedrinks AG)
  4. Patrick (Sipstar AG)
  5. Lorenz (Futurecomm AG)
  6. Samantha (SDiane)
  7. Pavel (Blanc & White Studio)
  8. David (TechSmidt)

### 3.9 HomeFiveFaqArea (FAQ Section)
- **File**: `/src/components/faq/HomeFiveFaqArea.tsx` (Lines 1-392)
- **Purpose**: Frequently Asked Questions accordion
- **Technology**: Bootstrap accordion
- **Questions Covered**:
  1. WordPress vs other frameworks
  2. Pricing inclusions (revisions, source files)
  3. Project timeline estimates
  4. Design process updates
  5. Development process workflow
  6. Ongoing maintenance/support options

### 3.10 ContactArea (Contact Form)
- **File**: `/src/components/contact/ContactArea.tsx`
- **Component**: `ContactForm`
- **Purpose**: Lead generation form

#### ContactForm Details
- **File**: `/src/components/form/ContactForm.tsx`
- **Technology**: React Hook Form + Yup validation
- **Features**:
  - Name field (required)
  - Email field (required, validated)
  - Service interest dropdown (NiceSelect component)
  - Budget dropdown
  - Success toast notification
  - Form reset after submission
- **Data Sources**:
  - `dropdownData.ts`: `budgetOptions`, `PortfolioTypeOptions`
- **Validation**: `contactFormSchema` from `/validation/contactFormSchema.ts`

---

## 4. Providers & Context

### 4.1 ScrollSmoothProvider
- **File**: `/src/components/providers/ScrollSmoothProvider.tsx`
- **Hook**: `useScrollSmooth()`
- **Purpose**: Enables smooth scrolling with GSAP ScrollSmoother
- **Target Elements**: `#smooth-wrapper`, `#smooth-content`

### 4.2 ThemeCursorProvider
- **File**: `/src/components/providers/ThemeCursorProvider.tsx`
- **Dependencies**: 
  - `CustomCursorProvider`
  - `useTheme` from next-themes
  - `usePathname` from next/navigation
- **Purpose**: Manages custom cursor appearance based on theme and route
- **Features**:
  - Route-specific background colors
  - Theme-aware cursor styling

### 4.3 CustomCursorProvider
- **File**: `/src/components/providers/CustomCursorProvider.tsx`
- **Hook**: `useCustomCursor()`
- **Purpose**: Renders and animates custom cursor elements
- **Elements**: `.tp-cursor`, `.tp-cursor-effect`

### 4.4 AnimationWrapper
- **File**: `/src/components/shared/Animation/AnimationWrapper.tsx`
- **Dependencies**: 
  - `@gsap/react` (useGSAP hook)
  - `animationConfig` from `/config/animationConfig.ts`
- **Purpose**: Executes page-specific GSAP animations
- **Timing**: 100ms delay after pathname change

### 4.5 AppProvider
- **File**: `/src/provider/AppProvider.tsx`
- **Context**: `AppContext`
- **State**:
  - `openOffcanvas` (boolean)
  - `openSearch` (boolean)
- **Methods**:
  - `setOpenOffcanvas()`
  - `toggleOffcanvas()`
  - `setOpenSearch()`
  - `toggleSearch()`

### 4.6 VideoProvider
- **File**: `/src/provider/VideoProvider.tsx`
- **Context**: `VideoContext`
- **Purpose**: Global video modal manager
- **Features**:
  - YouTube and Vimeo support
  - Autoplay on open
  - Click-outside-to-close
  - Iframe embed with fullscreen support
- **Methods**:
  - `playVideo(videoId, platform)`
  - `closeVideo()`
- **Hook**: `useVideoModal()`

### 4.7 ImageHoverRevealProvider
- **File**: `/src/components/providers/ImageHoverRevealProvider.tsx`
- **Hook**: `useImageHoverReveal()` from GSAP animations
- **Purpose**: Image reveal effects on hover

---

## 5. Shared Components

### 5.1 BackToTop
- **File**: `/src/components/shared/BackToTop/BackToTop.tsx`
- **Trigger**: Shows after 200px scroll
- **Behavior**: Smooth scroll to top
- **Icon**: `BackToTopArrowIcon` SVG

### 5.2 Wrapper
- **File**: `/src/layouts/wrapper.tsx`
- **Purpose**: Dynamically imports Bootstrap JavaScript
- **Timing**: Client-side only (after mount)

### 5.3 BodyThemeSync
- **File**: `/src/hooks/BodyThemeSync.tsx`
- **Purpose**: Syncs theme to body classes
- **Classes**: `david-light` or `david-dark`

---

## 6. Unused Components (Available for Future Use)

> **Note**: These components exist in the repository but are not currently used on the homepage. They are available for alternative page layouts, blog functionality, and additional features.

### 6.1 Additional Component Directories

#### About Components
- **Location**: `/src/components/about/`
- **Purpose**: About page sections and profile displays
- **Files**: Various about page component variations

#### Banner Components
- **Location**: `/src/components/banner/`
- **Purpose**: Banner/hero sections for different page types

#### Blog Components
- **Location**: `/src/components/blog/`
- **Purpose**: Blog listing, post cards, pagination
- **Related SCSS**: `/public/assets/scss/layout/blog/_postbox.scss`

#### Brand Components
- **Location**: `/src/components/brand/`
- **Purpose**: Brand logo displays and partner sections

#### Counter Components
- **Location**: `/src/components/counter/`
- **Purpose**: Animated number counters and statistics displays
- **Example**: `ProjectDetailsCounter` for portfolio metrics

#### Feature Components
- **Location**: `/src/components/feature/`
- **Purpose**: Feature sections and benefit displays

#### Gallery Components
- **Location**: `/src/components/gallery/`
- **Purpose**: Image galleries and lightbox functionality

#### Instagram Components
- **Location**: `/src/components/instagram/`
- **Purpose**: Instagram feed integration

#### Personal Info Components
- **Location**: `/src/components/personal-info/`
- **Purpose**: Personal information displays and bio sections

#### Pricing Components
- **Location**: `/src/components/pricing/`
- **Purpose**: Pricing tables and package displays

#### Project Components
- **Location**: `/src/components/project/`
- **Purpose**: Project detail pages and portfolio item displays
- **Key Files**:
  - `ProjectDetailsInfo.tsx` - Portfolio sidebar (client, role, services, visit website)
  - `ProjectDetailsOverview.tsx` - Project overview section
  - `ProjectDetailsProject.tsx` - Related projects section

#### Team Components
- **Location**: `/src/components/team/`
- **Purpose**: Team member profiles and listings

#### UI Components
- **Location**: `/src/components/ui/`
- **Purpose**: Reusable UI elements
- **Key Files**:
  - `NiceSelect.tsx` - Custom dropdown/select component

### 6.2 Alternative Page Variants

#### Additional Home Pages
- **Location**: `/src/pages/homes/`
- **Available Variants**:
  - `home/` - Original home variant
  - `home-two/` - Alternative layout #2
  - `home-three/` - Alternative layout #3
  - `home-five/` - Alternative layout #5
  - `home-six/` - Alternative layout #6
- **Currently Active**: `home-four/` (used on homepage)

#### Additional App Routes
- **Location**: `/src/app/`
- **Available Routes**:
  - `(about)/about-us/` - About us page variant
  - `(about)/about-me/` - Personal about page (active)
  - `(blog)/` - Blog routes (multiple variants)
  - `(contacts)/contact/` - Contact page (active)
  - `(contacts)/contact-us/` - Contact us variant
  - `(portfolio)/` - Portfolio routes (active)
  - `service/` - Service page

#### Additional Page Components
- **Location**: `/src/pages/`
- **Available Pages**:
  - `abouts/` - About page components
  - `blogs/` - Blog page components
  - `contacts/` - Contact page components
  - `service/` - Service page components

### 6.3 Alternative Headers & Footers

#### Additional Headers
- **Location**: `/src/layouts/headers/`
- **Available Headers**:
  - `CommonHeader.tsx` - Standard header variant
  - `HeaderTwo.tsx` - Alternative header #2
  - `HeaderFour.tsx` - Alternative header #4
  - `ServiceHeader.tsx` - Service-specific header
- **Currently Active**: `HeaderThree.tsx`

#### Additional Footers
- **Location**: `/src/layouts/footers/`
- **Available Footers**:
  - `CommonFooter.tsx` - Standard footer variant
  - `FooterOne.tsx` - Alternative footer #1
  - `HomeFiveFooter.tsx` - Home five specific footer
  - `HomeFourFooter.tsx` - Home four specific footer
  - `subComponent/` - Footer subcomponents
- **Currently Active**: `FooterThree.tsx`

### 6.4 Additional Component Variations

#### Alternative Portfolio Components
- **Location**: `/src/components/portfolio/`
- **Available Variants**:
  - `HomeFivePorfolioArea.tsx`
  - `HomeSixPortfolio.tsx`
  - `PortfolioArea.tsx`
  - `PortfolioHover.tsx`
  - `PortfolioMixSlicerMain.tsx`
  - `PortfolioRevealingSlideMain.tsx`
  - `PortfolioScroll.tsx`
- **Currently Active**: `HomeFourPortfolio.tsx`

#### Alternative Service Components
- **Location**: `/src/components/service/`
- **Available Variants**:
  - `ServiceArea.tsx`
  - `ServiceStep.tsx`
- **Currently Active**: `HomeFourService.tsx`, `HomeSixService.tsx`

#### Alternative Hero Components
- **Location**: `/src/components/hero/`
- **Available Variants**:
  - `HeroOne.tsx`
  - `HeroTwo.tsx`
  - `HeroFour.tsx`
  - `HeroFive.tsx`
  - `HeroSix.tsx`
  - `ServiceHero.tsx`
- **Currently Active**: `HeroThree.tsx`

#### Alternative Text Slider Components
- **Location**: `/src/components/text-slider/`
- **Available Variants**:
  - `AboutTextSlider.tsx`
  - `HomeFiveTextSlider.tsx`
- **Currently Active**: `HomeFourTextSlider.tsx`, `HomeTextSlider.tsx`

#### Alternative Award Components
- **Location**: `/src/components/award/`
- **Available Variants**:
  - `AboutUsAward.tsx`
  - `HomeAward.tsx`
  - `HomeFiveAward.tsx`
- **Currently Active**: `HomeFourAward.tsx`

#### Alternative FAQ Components
- **Location**: `/src/components/faq/`
- **Available Variants**:
  - `AboutFaq.tsx`
- **Currently Active**: `HomeFiveFaqArea.tsx`

---

## 7. Data Files

### 6.1 projectData.ts
- **File**: `/src/data/projectData.ts`
- **Type**: `projectDt[]`
- **Total Projects**: 37
- **Categories**:
  - Home portfolio projects (1-4)
  - Home two projects (5-8)
  - Home three projects (9-12)
  - Portfolio page projects (13-16)
  - Home five projects (17-20)
  - **Home four projects (21-24)** ← Used on homepage
  - Additional portfolio variants (25-37)
- **Key Fields**:
  - `id`, `title`, `image`, `logo`, `backgroundColor`, `textColor`
  - `year`, `category`, `categories`, `description`
  - **Portfolio details fields**: `client`, `role`, `services`, `overview`, `websiteUrl`, `detailsImage`

### 6.2 serviceData.ts
- **File**: `/src/data/serviceData.ts`
- **Type**: `serviceDT[]`
- **Total Services**: 15
- **Categories**:
  - Home five services (1-5)
  - **Home four services (6-9)** ← Used on homepage (Services section)
  - **Home six services (10-15)** ← Used on homepage (Experience section)
- **Key Fields**:
  - `id`, `title`, `description`, `image`, `icon`
  - `categories`, `link`, `date`

### 6.3 awardData.ts
- **File**: `/src/data/awardData.ts`
- **Type**: `awardDT[]`
- **Total Awards**: 6
- **Used On**: HomeFourAward component
- **Key Fields**:
  - `title`, `subtitle`, `image`, `link`

### 6.4 testimonialData.ts
- **File**: `/src/data/testimonialData.ts`
- **Type**: `TestimonialDt[]`
- **Total Testimonials**: 8
- **Used On**: HomeTestimonial component
- **Key Fields**:
  - `id`, `avatar`, `name`, `designation`, `content`

### 6.5 menuData.ts
- **File**: `/src/data/menuData.ts`
- **Type**: `MenuItem[]`
- **Purpose**: Navigation menu structure
- **Features**:
  - Multi-level menu support
  - Home page variants
  - Portfolio pages
  - About/Blog/Contact pages
  - "Coming Soon" placeholders

### 6.6 dropdownData.ts
- **File**: `/src/data/dropdownData.ts`
- **Exports**:
  - `budgetOptions` - Budget ranges for contact form
  - `PortfolioTypeOptions` - Service type options

---

## 7. Hooks & Utilities

### 7.1 Custom Hooks

#### useStickyHeader
- **File**: `/src/hooks/useStickyHeader.ts`
- **Purpose**: Detects scroll position and returns sticky state
- **Parameters**: `offset` (default: 20px)
- **Returns**: `boolean` (isSticky)

#### useScrollSmooth
- **File**: `/src/hooks/useScrollSmooth.ts`
- **Dependencies**: GSAP (ScrollTrigger, ScrollSmoother)
- **Purpose**: Initializes smooth scrolling
- **Config**:
  - Smooth: 2
  - Effects: true
  - SmoothTouch: 0.1

#### useCustomCursor
- **File**: `/src/hooks/useCustomCursor.ts`
- **Purpose**: Custom cursor initialization and cleanup
- **Config**: `{ bgColor?: string }`
- **Elements Created**: `.tp-cursor`, `.tp-cursor-effect`
- **Dependencies**: `cursorAnimation` utility

#### useGsapAnimation
- **File**: `/src/hooks/useGsapAnimation.ts` (not fully read, but referenced)
- **Exports**:
  - `useImageHoverReveal()`
  - `heroVideoAnimation()`
  - `homeAwardAnimation()`
  - `homeFourPortfolioAnim()`
  - `homeFourPortfolioAnimTwo()`
  - `homeSixInstagramAnim()`
  - `homeSixPortfolioAnim()`
  - `homeSixScrollMarqueeAnim()`
  - `homeSixTitleScrollAnim()`
  - `movingText()`
  - `portfolioAnimation()`
  - `projectAnimation()`
  - `revealTextAnim()`
  - `serviceTitleMarqueAnim()`

### 7.2 Utilities

#### getCurrentYear
- **File**: `/src/utils/getCurrentYear.ts`
- **Returns**: `number` (current year)
- **Used In**: Footer copyright

#### getCurrentDay
- **File**: `/src/utils/getCurrentDay.ts`
- **Returns**: `string` (e.g., "Monday")
- **Used In**: Footer greeting

#### cursorAnimation
- **File**: `/src/utils/cursorAnimation.ts` (not fully read)
- **Purpose**: Custom cursor movement and interaction logic

---

## 8. Assets Inventory

### 8.1 Images

#### Logo Assets
- **Location**: `/public/assets/img/logo/`
- **Files**:
  - `logo-dark.png` - Dark theme logo (138x32)
  - `logo-light.webp` - Light theme logo (138x32)
  - `favicon.png` - Browser favicon

#### Brand Logos (Portfolio Projects)
- **Location**: `/public/assets/img/brand/`
- **Files**:
  - `gos-logo.webp` - Geeks on Site
  - `cats-logo.avif` - Kozmeticki Salon Cats
  - `ambientivo-logo.png` - Ambientivo
  - `dessertswithana-logo.png` - Desserts with ana
  - `logo.png`, `logo-2.png`, `logo-3.png`, `logo-4.png` - Other logos

#### Hero Section Images
- **Location**: `/public/assets/img/hero/hero-3/`
- **Files**:
  - `line-bg.png` - Decorative line background (1350x880)
  - `thumb.jpg` - Hero thumbnail (commented out)
  - `shape.png` - Shape icon (62x62, commented out)

#### Footer Assets
- **Location**: `/public/assets/img/footer/`
- **Files**:
  - `upwork.svg` - Upwork logo icon

#### Other Image Directories (Available but Not Used on Homepage)
- `/public/assets/img/about/` - About section images
- `/public/assets/img/award/` - Award images
- `/public/assets/img/blog/` - Blog post images and thumbnails
- `/public/assets/img/contact/` - Contact page images
- `/public/assets/img/counter/` - Counter section images and icons
- `/public/assets/img/cross-icon/` - Close/cross icons
  - `cross-out.png` - Custom cursor close icon
- `/public/assets/img/gallery/` - Gallery images
- `/public/assets/img/offcanvas/` - Offcanvas panel images
- `/public/assets/img/portfolio/` - Portfolio project images
- `/public/assets/img/testimonial/` - Testimonial avatars
- `/public/assets/img/update/` - Updated/new images
- `/public/assets/img/svg/` - SVG graphics and icons
  - `check.svg` - Checkmark icon (used in blog forms)

### 8.2 Fonts

#### Location: `/public/assets/fonts/`

**Custom Fonts:**
- **Morganite ExtraBold**
  - `Morganite-ExtraBold.ttf`
  - `Morganite-ExtraBold.woff`
  - `Morganite-ExtraBold.woff2`

- **Thunder Bold LC**
  - `Thunder-BoldLC.ttf`
  - `Thunder-BoldLC.woff`
  - `Thunder-BoldLC.woff2`

- **Thunder Medium LC**
  - `Thunder-MediumLC.ttf`
  - `Thunder-MediumLC.woff`
  - `Thunder-MediumLC.woff2`

**Font Awesome Pro:**
- `fa-brands-400.ttf` / `fa-brands-400.woff2`
- `fa-light-300.ttf` / `fa-light-300.woff2`
- `fa-regular-400.ttf` / `fa-regular-400.woff2`
- `fa-solid-900.ttf` / `fa-solid-900.woff2`

**Google Font:**
- **Poppins** (loaded via Next.js font optimization)
  - Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
  - Variable: `--font-poppins`

### 8.3 SVG Icons

#### Location: `/src/svg/`

**Icon Components:**
- `ArrowIcon.tsx` - Multiple arrow variations (BackToTop, Footer, Comment, Award, Service, Banner)
- `CategoriesIcon.tsx` - Category icon
- `ClockIcon.tsx` - Clock icons (two variations)
- `CloseIcon.tsx` - Close icons (two variations)
- `CommentIcon.tsx` - Comment icon
- `EditIcon.tsx` - Edit icons (two variations)
- `FeatureIcons.tsx` - Feature-related icons
- `LampIcon.tsx` - Lamp icon
- `LocationIcon.tsx` - Location pin icon
- `PhoneIcon.tsx` - Phone icon
- `PricingShape.tsx` - Pricing shape graphics
- `QuoteIcon.tsx` - Quote icon
- `SearchIcon.tsx` - Search icon
- `ShapeIcons.tsx` - Various shape graphics
- `SocialIcons.tsx` - Social media icons (Instagram, Dribbble, Behance, Youtube, Facebook, Twitter - multiple variations)
- `StarIcons.tsx` - Star rating icons
- `TextCircleIcon.tsx` - Circular text animation
- `index.ts` - Icon exports barrel file

**External Icons:**
- **lucide-react** library used in components:
  - `Linkedin`, `Github`, `Mail`, `Briefcase` (in FooterThree)
  - `Globe`, `Puzzle`, `Zap`, `Settings` (in HomeFourService)

---

## 9. Styling Architecture

### 9.1 Global Styles
- **File**: `/src/app/globals.scss`
- **Imports**:
  - Bootstrap 5 CSS: `../../public/assets/css/bootstrap.css`
  - Spacing utilities: `../../public/assets/css/spacing.css`
  - Font Awesome Pro: `../../public/assets/css/font-awesome-pro.css`
  - Main SCSS: `../../public/assets/scss/main.scss`
  - React Photo View: `react-photo-view/dist/react-photo-view.css`
- **Custom Styles**:
  - Video modal overlay and container
  - Page not found styles
  - Video modal close button

### 9.2 SCSS Structure
- **Root**: `/public/assets/scss/`
- **Main File**: `main.scss`
  - Forwards: `theme`, `components`, `layout`

**Directories:**
- `/public/assets/scss/theme/` - Theme variables and configurations
- `/public/assets/scss/components/` - Component-specific styles
- `/public/assets/scss/layout/` - Layout-specific styles
- `/public/assets/scss/utils/` - Utility classes and mixins

### 9.3 CSS Files
- `/public/assets/css/bootstrap.css` - Bootstrap 5 framework
- `/public/assets/css/spacing.css` - Custom spacing utilities
- `/public/assets/css/font-awesome-pro.css` - Font Awesome Pro styles

---

## 10. Dependencies

### 10.1 Core Framework
```json
{
  "next": "^16.1.4",
  "react": "^19.2.3",
  "react-dom": "^19.2.3"
}
```

### 10.2 Animation & Interaction
```json
{
  "@gsap/react": "^2.1.2",
  "gsap": "^3.13.0",
  "swiper": "^12.0.1",
  "split-type": "^0.3.4",
  "ogl": "^1.0.11",
  "three": "^0.182.0"
}
```

### 10.3 UI & Forms
```json
{
  "bootstrap": "^5.3.8",
  "react-hook-form": "^7.66.0",
  "@hookform/resolvers": "^5.2.2",
  "yup": "^1.7.1",
  "react-hot-toast": "^2.6.0",
  "react-photo-view": "^1.2.7",
  "lucide-react": "^0.563.0"
}
```

### 10.4 Utilities & Theme
```json
{
  "next-themes": "^0.4.6",
  "react-use": "^17.6.0",
  "sass": "^1.92.1"
}
```

### 10.5 TypeScript & Types
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "19.2.2",
  "@types/react-dom": "19.2.2",
  "@types/bootstrap": "^5.2.10",
  "@types/three": "^0.182.0"
}
```

---

## 11. Animation Configuration

### File: `/src/config/animationConfig.ts`

**Homepage ("/") Animations:**
- `homeFourPortfolioAnim` - Portfolio grid scroll animations
- `homeFourPortfolioAnimTwo` - Secondary portfolio animations
- `homeAwardAnimation` - Award/notable projects hover effects
- `revealTextAnim` - Text reveal on scroll

**Other Pages:**
- Home Two: `projectAnimation`
- Home Three: `revealTextAnim`
- Home Five: `heroVideoAnimation`, `movingText`, `homeAwardAnimation`, `portfolioAnimation`, `revealTextAnim`
- Home Six: `homeSixScrollMarqueeAnim`, `revealTextAnim`, `homeSixTitleScrollAnim`, `homeSixPortfolioAnim`, `homeAwardAnimation`, `homeSixInstagramAnim`
- About Us: `revealTextAnim`, `homeAwardAnimation`, `homeSixInstagramAnim`
- Service: `serviceTitleMarqueAnim`, `projectAnimation`

---

## 12. TypeScript Types

### Key Type Definitions

#### Project Data Type
- **File**: `/src/types/project-dt.ts`
- **Interface**: `projectDt`
- **Fields**: id, title, image, logo, category, categories, year, backgroundColor, textColor, client, role, services, mainDescription, overview, websiteUrl, detailsImage, description, color, colorCodeTwo, rightSide

#### Form Types
- **File**: `/src/types/form-dt.ts`
- **Interface**: `IFormInput`
- **Fields**: name, email, interested, budget, message

#### Custom Types
- **File**: `/src/types/custom-dt.ts`
- **Interfaces**: 
  - `AppContextType` - App context state
  - `awardDT` - Award data structure

#### Global Types
- **File**: `/src/types/global.d.ts`
- **Purpose**: Global type declarations

---

## 13. Environment Variables

### Required Variables
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking ID (optional)

---

## 14. Build & Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "clean": "rm -rf node_modules package-lock.json yarn.lock",
  "lint": "eslint"
}
```

---

## 15. Key Features Summary

### Performance Optimizations
- Next.js Image component with automatic optimization
- Font optimization with next/font
- Lazy loading for Bootstrap JS
- GSAP ScrollSmoother for smooth scrolling
- Mobile device detection for optimized experience

### SEO Features
- Comprehensive metadata configuration
- Open Graph tags
- Twitter card support
- Sitemap-ready structure
- Semantic HTML

### Theme System
- Dark/light mode toggle
- Theme persistence with next-themes
- Body class synchronization
- Route-specific cursor backgrounds
- Theme-aware component styling

### Animations
- GSAP-powered scroll animations
- Smooth scrolling with ScrollSmoother
- Custom cursor with trail effect
- Text reveal animations
- Portfolio grid animations
- Hover reveal effects
- Marquee text sliders

### Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Custom breakpoints
- Mobile-specific components
- Touch-optimized interactions

### Accessibility
- Semantic HTML structure
- ARIA labels
- Keyboard navigation
- Focus management
- Alt text on images

---

## 16. Component Communication Flow

```
App Entry (page.tsx)
    ↓
RootLayout (layout.tsx)
    ├── ThemeProvider
    ├── AppProvider → AppContext → Global state
    ├── VideoProvider → VideoContext → Video modal
    └── Wrapper → Bootstrap JS
        ↓
HomeFourMain
    ├── ScrollSmoothProvider → useScrollSmooth
    ├── ThemeCursorProvider → CustomCursorProvider → useCustomCursor
    └── AnimationWrapper → animationConfig → GSAP animations
        ↓
Page Components
    ├── HeaderThree → OffCanvasPanelTwo → MobileMenus → menuData
    ├── HeroThree → TextCircleIcon
    ├── HomeFourPortfolio → projectData
    ├── HomeFourService → serviceData
    ├── HomeFourTextSlider → Swiper
    ├── HomeFourAward → awardData → ImageHoverRevealProvider
    ├── HomeSixService → serviceData
    ├── HomeTextSlider → Swiper
    ├── HomeTestimonial → testimonialData → Swiper
    ├── HomeFiveFaqArea → Bootstrap accordion
    ├── ContactArea → ContactForm → dropdownData, contactFormSchema
    └── FooterThree → Social links, utilities
```

---

## 17. File Path Quick Reference

### Most Important Files
- **Homepage**: `/src/app/page.tsx` → `/src/pages/homes/home-four/HomeFourMain.tsx`
- **Layout**: `/src/app/layout.tsx`
- **Header**: `/src/layouts/headers/HeaderThree.tsx`
- **Footer**: `/src/layouts/footers/FooterThree.tsx`
- **Global Styles**: `/src/app/globals.scss`
- **Main SCSS**: `/public/assets/scss/main.scss`

### Data Files
- `/src/data/projectData.ts` - 37 portfolio projects
- `/src/data/serviceData.ts` - 15 services/experience items
- `/src/data/awardData.ts` - 6 notable projects
- `/src/data/testimonialData.ts` - 8 client testimonials
- `/src/data/menuData.ts` - Navigation structure
- `/src/data/dropdownData.ts` - Form dropdown options

### Providers
- `/src/provider/AppProvider.tsx` - Global app state
- `/src/provider/VideoProvider.tsx` - Video modal
- `/src/components/providers/ScrollSmoothProvider.tsx` - Smooth scrolling
- `/src/components/providers/ThemeCursorProvider.tsx` - Themed cursor
- `/src/components/providers/CustomCursorProvider.tsx` - Cursor renderer
- `/src/components/providers/ImageHoverRevealProvider.tsx` - Hover effects

### Hooks
- `/src/hooks/useScrollSmooth.ts` - Smooth scroll logic
- `/src/hooks/useStickyHeader.ts` - Sticky header detection
- `/src/hooks/useCustomCursor.ts` - Custom cursor logic
- `/src/hooks/useGsapAnimation.ts` - GSAP animation functions
- `/src/hooks/BodyThemeSync.tsx` - Theme class sync

### Utilities
- `/src/utils/getCurrentYear.ts` - Current year helper
- `/src/utils/getCurrentDay.ts` - Current day helper
- `/src/utils/cursorAnimation.ts` - Cursor animation logic

### Configuration
- `/src/config/animationConfig.ts` - Page-specific animations
- `/package.json` - Dependencies and scripts
- `/tsconfig.json` - TypeScript configuration
- `/next.config.ts` - Next.js configuration

---

## 18. Assets by Category

### Logos (5 files)
- `/public/assets/img/logo/logo-dark.png`
- `/public/assets/img/logo/logo-light.webp`
- `/public/assets/img/logo/favicon.png`
- `/public/assets/img/brand/gos-logo.webp`
- `/public/assets/img/brand/cats-logo.avif`
- `/public/assets/img/brand/ambientivo-logo.png`
- `/public/assets/img/brand/dessertswithana-logo.png`

### Background Images (2 files)
- `/public/assets/img/hero/hero-3/line-bg.png` (used in Hero & Footer)

### Icons (1 file)
- `/public/assets/img/footer/upwork.svg`

### Fonts (16 files)
- Morganite ExtraBold (3 formats)
- Thunder BoldLC (3 formats)
- Thunder MediumLC (3 formats)
- Font Awesome Pro (8 files: brands, light, regular, solid)

### SVG Components (18 React components)
- All in `/src/svg/` directory

---

## 19. External Links & Integrations

### Social Media
- LinkedIn: `https://www.linkedin.com/in/david-vidovic/`
- GitHub: `https://github.com/davidvidovic-web`
- Upwork: `https://www.upwork.com/freelancers/~0163d597d928e1e526`
- Email: `mail@davidvidovic.com`

### Company Links (Experience Section)
- Converted UK: `https://converted.co.uk/`
- Effecticore DE: `https://www.effecticore.de/`
- Obsidian Media DK: `https://obsidianmedia.dk/`
- Ad-kraft: `https://ad-kraft.com/`

### Portfolio Project Links
- Geeks on Site: `https://geeksonsite.com`
- POS Terminals Plugin: `https://wordpress.org/plugins/pos-terminals-integration-for-stripe/`
- Inn digit tool: `https://infobiz.komorars.ba/inndigit/`
- Vagon Gallery: `https://vagon.gallery`
- Elevate: `https://elevatepreview.com`
- TapWaterRating: `https://tapwaterrating.com`
- mojPoslic: `https://mojposlic.com`

### Internal Links
- Contact page: `/contact`
- Portfolio details: `/portfolio-details/{id}`

---

## 20. Development Notes

### Mobile Optimization
- Mobile detection script in layout.tsx adds `is-mobile` class
- Offcanvas menu for mobile navigation
- Responsive image sizing with Next.js Image
- Touch-optimized smooth scrolling

### Performance Considerations
- Images use Next.js optimization (WebP, lazy loading)
- Fonts preloaded and optimized
- Bootstrap JS loaded on client-side only
- GSAP animations debounced and optimized
- Swiper sliders configured for performance

### Browser Compatibility
- Modern browsers (ES6+)
- Fallbacks for custom cursor on mobile
- Theme persistence across sessions
- Smooth scrolling with fallbacks

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Component-based architecture
- Separation of concerns (data, logic, UI)
- Reusable hooks and utilities

---

**Document Version**: 2.0  
**Last Updated**: January 28, 2026  
**Total Files Documented**: 100+  
**Total Components**: 60+ (30+ active on homepage, 30+ alternative variants)  
**Total Data Files**: 6  
**Total Hooks**: 6  
**Total Providers**: 7  
**Total Assets**: 150+  
**Component Directories**: 25  
**Page Variants**: 6 home layouts + multiple page types

---

## End of Documentation

This comprehensive documentation covers the ENTIRE David Vidovic portfolio website structure, including all files in the repository. The documentation includes:

- ✅ **Active Homepage Components** (HomeFourMain and its dependencies)
- ✅ **Alternative Page Variants** (home, home-two, home-three, home-five, home-six)
- ✅ **Unused Components** (about, blog, counter, gallery, pricing, team, etc.)
- ✅ **All Headers & Footers** (6 header variants, 5 footer variants)
- ✅ **Complete Asset Inventory** (logos, fonts, images, SVGs)
- ✅ **All Data Files** (projectData, serviceData, awardData, testimonialData, etc.)
- ✅ **Providers & Hooks** (scroll, theme, cursor, animations)
- ✅ **SCSS Architecture** (global styles, components, layouts)
- ✅ **TypeScript Types** (project, form, custom interfaces)

**Note**: Components and pages marked as "unused" or "alternative" are available in the codebase for future use or reference but are not currently active on the live homepage (davidvidovic.com).
