"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function BodyThemeSync() {
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove("david-light", "david-dark");
    document.body.classList.add(theme === "dark" ? "david-dark" : "david-light");
  }, [theme]);

  return null;
}
