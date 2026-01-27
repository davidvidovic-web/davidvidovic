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
  title: "Bfolio - Personal Portfolio NextJs Template",
  description: "A modern and responsive Next.js portfolio template",
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
