import Script from "next/script";

const StructuredData = () => {
  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://davidvidovic.com",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Home",
        "url": "https://davidvidovic.com/"
      },
      {
        "@type": "WebPage",
        "name": "Projects",
        "url": "https://davidvidovic.com/#portfolio"
      },
      {
        "@type": "WebPage",
        "name": "Services",
        "url": "https://davidvidovic.com/#services"
      },
      {
        "@type": "WebPage",
        "name": "Other Projects",
        "url": "https://davidvidovic.com/#awards"
      },
      {
        "@type": "WebPage",
        "name": "Experience",
        "url": "https://davidvidovic.com/#experience"
      },
      {
        "@type": "WebPage",
        "name": "Testimonials",
        "url": "https://davidvidovic.com/#testimonials"
      },
      {
        "@type": "WebPage",
        "name": "FAQ",
        "url": "https://davidvidovic.com/#faq"
      },
      {
        "@type": "WebPage",
        "name": "Contact",
        "url": "https://davidvidovic.com/#contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you work exclusively with WordPress, or do you use other frameworks as well?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress is my main focus, but I also work with React and Next.js depending on project needs."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the pricing (e.g., revisions, source files)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My pricing includes everything needed to get your website fully up and running: the complete build, responsive layouts, basic SEO setup, and the essential integrations we agree on. You also get a set number of revisions, so we can fine-tune the final result. All source files, theme files, and code are included, and the website is fully yours once the project is finished. If you need extra features or ongoing support, I can provide those as optional add-ons."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it typically take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This really depends on the scope of a project. A simple site can be done in a couple of weeks, while larger custom builds take longer. Once I know the requirements, I give a detailed effort estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Will I get updates or previews during the design process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I share regular updates and previews as the project moves forward, so you always know what's happening. You'll see the key stages as they're completed, and you can give feedback along the way. My goal is to keep the process transparent and make sure the final result matches what you need."
        }
      },
      {
        "@type": "Question",
        "name": "What does your development process look like from start to launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We define the goals, create the structure and design, build the site, test everything, and then launch."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing maintenance and support after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I offer maintenance packages that include regular updates, security monitoring, backups, and technical support. Whether you need monthly maintenance or occasional fixes, I can tailor a plan that fits your needs and ensures your website stays secure and up-to-date."
        }
      },
      {
        "@type": "Question",
        "name": "What are your pricing models for different types of projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer fixed-price quotes for clearly defined projects and hourly or monthly options for ongoing work. Once I understand the scope, I share a clear estimate with no surprises."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party services, APIs, or custom features into my site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Whether it's payment systems, external APIs, headless CMS setups, or custom functionality, I can integrate it smoothly into your website."
        }
      },
      {
        "@type": "Question",
        "name": "What if I need changes or new features after the project is complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I'm always available for additional work after launch. Whether you need small tweaks, new features, or a complete redesign, just reach out and I'll provide a quote. Many clients work with me on retainer for ongoing development needs."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly and responsive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely! Every website I build is fully responsive and optimized for all devices—smartphones, tablets, and desktops. I test extensively across different screen sizes and browsers to ensure a consistent, high-quality experience for all your visitors."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle website hosting, speed optimization, and security setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I can set up reliable hosting, optimize performance, improve Core Web Vitals, configure caching/CDN, and secure the site against common issues."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="site-navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationData),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  );
};

export default StructuredData;
