import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import ThemeCursorProvider from '@/components/providers/ThemeCursorProvider';
import ServiceProject from '@/components/project/ServiceProject';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import ServiceHeader from '@/layouts/headers/ServiceHeader';
import ServiceAbout from '@/components/about/ServiceAbout';
import ServiceBrand from '@/components/brand/ServiceBrand';
import ServiceArea from '@/components/service/ServiceArea';
import ServiceStep from '@/components/service/ServiceStep';
import CommonFooter from '@/layouts/footers/CommonFooter';
import ServiceHero from '@/components/hero/ServiceHero';

const ServiceMain = () => {
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
                    <ServiceHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <ServiceHero />
                                <ServiceBrand />
                                <ServiceStep/>
                                <ServiceAbout/>
                                <ServiceArea/>
                                <ServiceProject/>
                            </main>
                            <CommonFooter bgColor='#000' wrapClass='bf-footer-2-wrap'/>
                        </div>
                    </div>
                </AnimationWrapper>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default ServiceMain;