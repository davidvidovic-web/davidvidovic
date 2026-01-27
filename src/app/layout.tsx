import { VideoProvider } from "@/provider/VideoProvider";
import { BodyThemeSync } from "@/hooks/BodyThemeSync";
import AppProvider from "@/provider/AppProvider";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Wrapper from "@/layouts/wrapper";
import type { Metadata } from "next";
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
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="tp-magic-cursor">
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
