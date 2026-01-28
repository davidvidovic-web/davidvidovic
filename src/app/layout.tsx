import { VideoProvider } from "@/provider/VideoProvider";
import { BodyThemeSync } from "@/hooks/BodyThemeSync";
import AppProvider from "@/provider/AppProvider";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Wrapper from "@/layouts/wrapper";
import StructuredData from "@/components/shared/StructuredData";
import type { Metadata } from "next";
import Script from "next/script";
import "swiper/css/bundle";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "David Vidovic - Web Developer | Full Stack Developer",
    template: "%s | David Vidovic"
  },
  description: "Professional web developer and full-stack engineer specializing in modern web technologies, JavaScript frameworks, and scalable web applications. Based in [Your Location], delivering innovative digital solutions.",
  keywords: ["web developer", "full stack developer", "JavaScript developer", "React developer", "Next.js", "TypeScript", "Node.js", "frontend development", "backend development", "web design", "UI/UX", "responsive design", "software engineer", "web applications", "portfolio"],
  authors: [{ name: "David Vidovic" }],
  creator: "David Vidovic",
  icons: {
    icon: "/assets/img/logo/favicon.png",
    shortcut: "/assets/img/logo/favicon.png",
    apple: "/assets/img/logo/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidvidovic.com",
    siteName: "David Vidovic - Web Developer",
    title: "David Vidovic - Web Developer Portfolio",
    description: "Professional web developer specializing in full-stack development and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Vidovic - Web Developer",
    description: "Professional web developer portfolio",
    creator: "@davidvidovic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="tp-magic-cursor">
        <Script
          id="mobile-detect"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
                if (isMobile) {
                  document.body.classList.add('is-mobile');
                }
              })();
            `,
          }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          value={{
            light: "bfolio-light",
            dark: "bfolio-dark",
          }}
        >
          <BodyThemeSync />
          <AppProvider>
            <VideoProvider>
              <Wrapper>
                {children}
                <Toaster />
              </Wrapper>
            </VideoProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
