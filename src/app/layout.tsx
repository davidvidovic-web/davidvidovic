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

  // Calculate grid parameters based on screen dimensions
  const isLargeScreen = screenDimensions.width > 1440;
  const pillarRadius = isLargeScreen ? 0.8 : 0.5;
  const pillarHeight = isLargeScreen ? 1.8 : 1.5;
  const gridSize = Math.max(
    25,
    Math.ceil(30 * (screenDimensions.aspectRatio / 1.6))
  );

  // Inner cube gradient: Light pastel green to darker mint green
  const innerGradientColors = [
    "#D4F5D1", // Very light mint green
    "#B7EDB5", // Light mint green
    "#98E49A", // Mint green
    "#74D978", // Medium green
    "#52C85D", // Fresh green
    "#26A941", // Deeper green
  ];

  // Edge gradient: Darker mint green to light pastel green (REVERSED from inner)
  const edgeGradientColors = [
    "#26A941", // Deeper green
    "#52C85D", // Fresh green
    "#74D978", // Medium green
    "#98E49A", // Mint green
    "#B7EDB5", // Light mint green
    "#D4F5D1", // Very light mint green
  ];

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
        {children}
      </body>
    </html>
  );
}
