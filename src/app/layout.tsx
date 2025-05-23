"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "./globals.css";
import InteractiveGrid from "@/components/InteractiveGrid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaMeasurementId="G-YYN5M08HWE" trackPageViews />
        <InteractiveGrid
          gridSize={40}
          cellSize={2}
          gridColor="#444444"
          pillarHeight={2}
          animationDuration={0.15} // Faster individual animations
          backgroundColor="#1a1a1a"
        />
        {children}
      </body>
    </html>
  );
}
