"use client";
import React, { useState, useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "./globals.css";
import InteractiveGrid from "@/components/InteractiveGrid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Track screen dimensions
  const [screenDimensions, setScreenDimensions] = useState({
    width: 1440, // Default fallback
    height: 900,
    aspectRatio: 1.6,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenDimensions({
        width,
        height,
        aspectRatio: width / height,
      });

      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        setScreenDimensions({
          width: newWidth,
          height: newHeight,
          aspectRatio: newWidth / newHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaMeasurementId="G-YYN5M08HWE" trackPageViews />
        <InteractiveGrid
          gridSize={40}
          cellSize={2}
          gridColor="#444444"
          hoverColor="#8ab4f8"
          pillarHeight={2}
          animationDuration={0.15} // Faster individual animations
          backgroundColor="#1a1a1a"
        />
        {/* <Home /> */}
        {children}
      </body>
    </html>
  );
}
