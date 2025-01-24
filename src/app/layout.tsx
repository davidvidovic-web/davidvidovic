"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
    <>
      <Head>
        {/* Metadata */}
        <title>{String(metadata.title)}</title>
        <meta
          name="description"
          content={
            metadata.description ||
            "David Vidović's personal website, you can find more about me here."
          }
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics gaMeasurementId="G-YYN5M08HWE" trackPageViews />

        {/* Main content */}
        {children}
      </body>
    </>
  );
}
