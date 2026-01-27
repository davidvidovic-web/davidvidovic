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
// import HomeFourBrand from "@/components/brand/HomeFourBrand";
// import HomeFourBlog from "@/components/blog/HomeFourBlog";
import CommonHeader from "@/layouts/headers/CommonHeader";
import FooterThree from "@/layouts/footers/FooterThree";
import HomeTestimonial from "@/components/testimonial/HomeTestimonial";
import HomeFiveFaqArea from "@/components/faq/HomeFiveFaqArea";
import ContactArea from "@/components/contact/ContactArea";
import HomeTextSlider from "@/components/text-slider/HomeTextSlider";
import HomeSixService from "@/components/service/HomeSixService";
// import HeroFour from "@/components/hero/HeroFour";

const HomeFourMain = () => {
  return (
    <ScrollSmoothProvider>
      <ThemeCursorProvider>
        <AnimationWrapper>
          <div id="magic-cursor" className="cursor-white-bg">
            <div id="ball"></div>
          </div>
          {/* Global Components */}
          <BackToTop />
          <CommonHeader
            spacingCls="mt-20"
            customCls="tp-main-menu-2"
            wrapCustomCls="bf-header-3-style"
          />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>
                {/* <HeroFour /> */}
                <HomeFourAbout />
                {/* <HomeFourBrand /> */}
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
