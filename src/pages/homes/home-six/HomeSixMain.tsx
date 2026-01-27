import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ThemeCursorProvider from "@/components/providers/ThemeCursorProvider";
import HomeFourTextSlider from "@/components/text-slider/HomeFourTextSlider";
import HomeSixContactArea from "@/components/contact/HomeSixContactArea";
import HomeSixPortfolio from "@/components/portfolio/HomeSixPortfolio";
import HomeSixInstagram from "@/components/instagram/HomeSixInstagram";
import HomeSixService from "@/components/service/HomeSixService";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/shared/Search/SearchArea";
import HomeFourAward from "@/components/award/HomeFourAward";
import HomeSixAbout from "@/components/about/HomeSixAbout";
import CommonHeader from "@/layouts/headers/CommonHeader";
import FooterOne from "@/layouts/footers/FooterOne";
import HeroSix from "@/components/hero/HeroSix";

const HomeSixMain = () => {
    return (
        <ScrollSmoothProvider>
            <ThemeCursorProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea/>
                    <CommonHeader spacingCls="mt-20" customCls="tp-main-menu-2" wrapCustomCls="bf-header-3-style" />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <HeroSix />
                                <HomeSixAbout />
                                <HomeSixService />
                                <HomeSixPortfolio />
                                <HomeFourTextSlider spacingCls="pt-70" />
                                <HomeFourAward />
                                <HomeSixContactArea />
                                <HomeSixInstagram />
                            </main>
                            <FooterOne wrapClass="bf-footer-2-top-spacing pb-30"
                             customCls="bf-footer-topspacing bf-service-3-rounded" />
                        </div>
                    </div>
                </AnimationWrapper>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeSixMain;