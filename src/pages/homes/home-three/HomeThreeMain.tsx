import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import HomeThreeProject from '@/components/project/HomeThreeProject';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import ContactArea from '@/components/contact/ContactArea';
import PricingArea from '@/components/pricing/PricingArea';
import FooterThree from '@/layouts/footers/FooterThree';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import HeroThree from '@/components/hero/HeroThree';

const HomeThreeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CustomCursorProvider>
                <div id="magic-cursor" className="cursor-white-bg">
                    <div id="ball"></div>
                </div>
                {/* Global Components */}
                <BackToTop />
                <SearchArea />
                <HeaderTwo />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <HeroThree />
                            <HomeThreeProject />
                            <PricingArea />
                            <ContactArea />
                        </main>
                        <FooterThree />
                    </div>
                </div>
            </CustomCursorProvider >
        </ScrollSmoothProvider>
    );
};

export default HomeThreeMain;