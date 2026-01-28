"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function BodyThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    document.body.classList.remove("david-light", "david-dark");
    document.body.classList.add(resolvedTheme === "dark" ? "david-dark" : "david-light");
  }, [resolvedTheme]);

  return null;
}
