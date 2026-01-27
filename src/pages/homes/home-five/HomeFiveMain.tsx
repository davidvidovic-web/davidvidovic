
import HomeFivePorfolioArea from "@/components/portfolio/HomeFivePorfolioArea";
import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import HomeFiveTextSlider from "@/components/text-slider/HomeFiveTextSlider";
import ThemeCursorProvider from "@/components/providers/ThemeCursorProvider";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import HomeFiveFaqArea from "@/components/faq/HomeFiveFaqArea";
import HomeFiveAbout from "@/components/about/HomeFiveAbout";
import HomeFiveAward from "@/components/award/HomeFiveAward";
import HomeFiveFooter from "@/layouts/footers/HomeFiveFooter";
import HeaderThree from "@/layouts/headers/HeaderThree";
import HeroFive from "@/components/hero/HeroFive";

const HomeFiveMain = () => {
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
                                <HeroFive />
                                <HomeFiveAbout />
                                <HomeFiveTextSlider/>
                                <HomeFiveAward/>
                                <HomeFivePorfolioArea/>
                                <HomeFiveFaqArea/>
                            </main>
                            <HomeFiveFooter/>
                        </div>
                    </div>
                </AnimationWrapper>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeFiveMain;