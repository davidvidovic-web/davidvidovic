import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import HomeTwoFeature from '@/components/feature/HomeTwoFeature';
import HomeTwoProject from '@/components/project/HomeTwoProject';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import HeroTwo from '@/components/hero/HeroTwo';

const HomeTwoMain = () => {
    return (
        <ScrollSmoothProvider>
            <CustomCursorProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <CommonHeader spacingCls="mt-20" customCls="tp-main-menu-2" />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <HeroTwo />
                                <HomeTwoFeature />
                                <HomeTwoProject />
                            </main>
                            <CommonFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeTwoMain;