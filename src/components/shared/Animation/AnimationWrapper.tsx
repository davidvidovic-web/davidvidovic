"use client";
import { animationConfig } from "@/config/animationConfig";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import React from "react";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useGSAP(() => {
    const timer = setTimeout(() => {
      // Page-specific animations
      if (pathname) {
        const pageAnimations = animationConfig[pathname];
        if (pageAnimations && Array.isArray(pageAnimations)) {
          pageAnimations.forEach((fn: () => void) => fn());
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};

export default AnimationWrapper;


