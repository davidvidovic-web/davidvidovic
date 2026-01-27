"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import InteractiveGrid from "@/components/interactiveGrid/interactiveGrid";

export default function ClientComponents() {
  return (
    <>
      <GoogleAnalytics gaMeasurementId="G-YYN5M08HWE" trackPageViews />
      <InteractiveGrid
        gridSize={40}
        cellSize={2}
        gridColor="#444444"
        pillarHeight={2}
        animationDuration={0.15}
        backgroundColor="#1a1a1a"
      />
    </>
  );
}
