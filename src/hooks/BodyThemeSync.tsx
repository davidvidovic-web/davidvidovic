"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function BodyThemeSync() {
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove("bfolio-light", "bfolio-dark");
    document.body.classList.add(theme === "dark" ? "bfolio-dark" : "bfolio-light");
  }, [theme]);

  return null;
}
