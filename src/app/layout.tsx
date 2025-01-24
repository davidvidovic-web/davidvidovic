"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { Metadata } from "next";
import "./globals.css";

// Add metadata if needed
const metadata: Metadata = {
  title: "David Vidović - Personal Website",
  description:
    "David Vidović's personal website, you can find more about me here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics gaMeasurementId="G-YYN5M08HWE" trackPageViews />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
