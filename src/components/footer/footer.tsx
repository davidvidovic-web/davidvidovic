"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

type FooterProps = {
  styles?: {
    footer?: string;
    link?: string;
  };
};

export default function Footer({ styles }: FooterProps) {
  useEffect(() => {
    // Animate the footer appearing from the bottom
    gsap.fromTo(
      ".footer",
      { y: 100, opacity: 0 }, // Start position (off-screen and hidden)
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out", // Smooth easing effect
      }
    );
  }, []);

  return (
    <footer className={`footer ${styles?.footer}`}>
      <Link href="mailto:mail@davidvidovic.com" className={styles?.link}>
        Email
      </Link>
      <Link
        href="https://www.linkedin.com/in/david-vidovic/"
        className={styles?.link}
      >
        LinkedIn
      </Link>
      <Link href="https://telegram.me/Davidontg" className={styles?.link}>
        Telegram
      </Link>
    </footer>
  );
}
