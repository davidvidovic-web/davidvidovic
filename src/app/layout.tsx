import React from "react";
import "./globals.css";
import ClientComponents from "@/components/clientComponents/clientComponents";

export const metadata = {
  title: 'David Vidovic',
  description: 'Personal portfolio of David Vidovic',
  keywords: ['developer', 'portfolio', 'blog'],
  openGraph: {
    title: 'David Vidovic',
    description: 'Personal portfolio and blog',
    url: 'https://davidvidovic.com',
    siteName: 'David Vidovic',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientComponents />
        {children}
      </body>
    </html>
  );
}
