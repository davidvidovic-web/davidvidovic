"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import DotGrid from "@/components/ui/DotGrid";

const HomeFourAbout = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="bf-about-area p-relative pt-155 pb-120"
      style={{ backgroundColor: theme === "dark" ? "#000" : "#f8f8f9" }}
    >
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
      <div className="container p-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="bf-about-title-wrap"></div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div 
              className="bf-about-video"
              style={{
                padding: '15px',
                borderRadius: '15px',
                background: theme === "dark" ? 'var(--tp-common-black)' : 'var(--tp-common-white)'
              }}
            >
              <h2 className="bf-section-title reveal-text mb-15 d-flex flex-column">
                <span style={{ display: 'block' }}>David Vidović</span>
                <span style={{ display: 'block' }}>Web Developer</span>
              </h2>
              <p className="bf-about-dec mb-0">
                Web developer with 8 years of experience.
                I transform complex digital challenges into clear, functional
                solutions. Every project starts with understanding your goals
                and the needs of your audience, ensuring the final product is
                both effective and purposeful.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bf-about-content">
              {/* <div className="row gx-20">
                <div className="col-lg-6 col-md-6">
                  <div className="bf-about-thumb mb-20">
                    <Image
                      width={258}
                      height={258}
                      className="w-100"
                      src="/assets/img/update/about/thumb.jpg"
                      alt="about thumb"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bf-about-thumb mb-20">
                    <Image
                      width={258}
                      height={258}
                      className="w-100"
                      src="/assets/img/update/about/thumb-2.jpg"
                      alt="about thumb"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourAbout;
