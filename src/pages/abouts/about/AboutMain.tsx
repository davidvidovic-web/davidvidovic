import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import PersonalInfoArea from '@/components/personal-info/PersonalInfoArea';
import AboutTextSlider from '@/components/text-slider/AboutTextSlider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CounterArea from '@/components/counter/CounterArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import AboutArea from '@/components/about/AboutArea';
import HomeAward from '@/components/award/HomeAward';
import AboutFaq from '@/components/faq/AboutFaq';

const AboutMain = () => {
    return (
        <ScrollSmoothProvider>
            <CustomCursorProvider>
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
                            <AboutArea />
                            <PersonalInfoArea />
                            <AboutTextSlider />
                            <HomeAward />
                            <CounterArea />
                            <AboutFaq />
                        </main>
                        <CommonFooter />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default AboutMain;