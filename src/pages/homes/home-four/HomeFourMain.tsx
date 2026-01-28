'use client';
import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import HomeFourTextSlider from "@/components/text-slider/HomeFourTextSlider";
import ThemeCursorProvider from "@/components/providers/ThemeCursorProvider";
import HomeFourPortfolio from "@/components/portfolio/HomeFourPortfolio";
import HomeFourService from "@/components/service/HomeFourService";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import HomeFourFooter from "@/layouts/footers/HomeFourFooter";
import HomeFourAbout from "@/components/about/HomeFourAbout";
import HomeFourAward from "@/components/award/HomeFourAward";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HomeTestimonial from "@/components/testimonial/HomeTestimonial";
import HomeFiveFaqArea from "@/components/faq/HomeFiveFaqArea";
import ContactArea from "@/components/contact/ContactArea";
import HomeTextSlider from "@/components/text-slider/HomeTextSlider";
import HomeSixService from "@/components/service/HomeSixService";
import HeroThree from "@/components/hero/HeroThree";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollToPlugin);

const HomeFourMain = () => {
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove '#'
      
      // Wait for ScrollSmoother to be ready and DOM to be fully loaded
      const scrollToElement = () => {
        let element = document.getElementById(elementId);
        
        // If it's a project-specific ID and not found, try scrolling to portfolio section
        if (!element && elementId.startsWith('project-')) {
          element = document.getElementById('portfolio');
        }
        
        if (element) {
          const smoother = ScrollSmoother.get();
          if (smoother) {
            smoother.scrollTo(element, true, "top 100px");
          } else {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: element, offsetY: 100 },
              ease: "power2.inOut"
            });
          }
        }
      };

      // Use a longer delay to ensure ScrollSmoother is initialized
      const timer = setTimeout(scrollToElement, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ScrollSmoothProvider>
      <ThemeCursorProvider>
        <AnimationWrapper>
          <div id="magic-cursor" className="cursor-white-bg">
            <div id="ball"></div>
          </div>
          {/* Global Components */}
          <BackToTop />
          <HeaderThree />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>
                {/* <HeroFour /> */}
                {/* <HomeFourAbout /> */}
                {/* <HomeFourBrand /> */}
                <HeroThree />
                <HomeFourPortfolio />
                <HomeFourService />
                <HomeFourTextSlider />
                <HomeFourAward />
                <HomeSixService />
                <HomeTextSlider />
                <HomeTestimonial />
                <HomeFiveFaqArea />
                <ContactArea />

                {/* <HomeFourBlog /> */}
              </main>
              <FooterThree />
              {/* <HomeFourFooter /> */}
            </div>
          </div>
        </AnimationWrapper>
      </ThemeCursorProvider>
    </ScrollSmoothProvider>
  );
};

export default HomeFourMain;
