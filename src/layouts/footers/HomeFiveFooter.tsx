"use client";
import CommonFooter from "./CommonFooter";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HomeFiveFooter = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <CommonFooter
      bgColor={theme === "dark" ? "#1d1d1f" : "#000"}
      wrapClass="bf-footer-2-wrap"
    />
  );
};

export default HomeFiveFooter;
