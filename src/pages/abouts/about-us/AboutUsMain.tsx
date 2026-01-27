import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import ThemeCursorProvider from '@/components/providers/ThemeCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import AboutTwoArea from '@/components/about/AboutTwoArea';
import AboutVideoArea from '@/components/about/AboutVideoArea';
import AboutUsAboutArea from '@/components/about/AboutUsAboutArea';
import AboutUsTeam from '@/components/team/AboutUsTeam';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import HomeFourTextSlider from '@/components/text-slider/HomeFourTextSlider';
import HomeSixInstagram from '@/components/instagram/HomeSixInstagram';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import AboutUsAward from '@/components/award/AboutUsAward';

const AboutUsMain = () => {
    return (
        <ScrollSmoothProvider>
            <ThemeCursorProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <CommonHeader spacingCls="mt-20" customCls="tp-main-menu-2" wrapCustomCls="bf-header-3-style" />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <AboutTwoArea />
                                <AboutVideoArea />
                                <AboutUsAboutArea />
                                <AboutUsTeam />
                                <AboutUsBanner />
                                <HomeFourTextSlider spacingCls="pt-155" bgColor='#fff'/>
                                <AboutUsAward />
                                <HomeSixInstagram customCls='fix'/>
                            </main>
                            <CommonFooter bgColor='#000' wrapClass='bf-footer-2-wrap' footerSpacingCls='bf-footer-topspacing'/>
                        </div>
                    </div>
                </AnimationWrapper>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default AboutUsMain;