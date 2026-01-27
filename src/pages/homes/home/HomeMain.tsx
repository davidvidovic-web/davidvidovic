import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import HomeTestimonial from '@/components/testimonial/HomeTestimonial';
import HomeTextSlider from '@/components/text-slider/HomeTextSlider';
import HomeGalleryArea from '@/components/gallery/HomeGalleryArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import HomeProject from '@/components/project/HomeProject';
import CommonHeader from '@/layouts/headers/CommonHeader';
import HomeAbout from '@/components/about/HomeAbout';
import HomeAward from '@/components/award/HomeAward';
import FooterOne from '@/layouts/footers/FooterOne';
import HomeBlog from '@/components/blog/HomeBlog';
import HeroOne from '@/components/hero/HeroOne';

const HomeMain = () => {
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
                    <CommonHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <HeroOne />
                                <HomeGalleryArea />
                                <HomeAbout />
                                <HomeProject />
                                <HomeTestimonial />
                                <HomeTextSlider />
                                <HomeAward />
                                <HomeBlog />
                            </main>
                            <FooterOne />
                        </div>
                    </div>
                </AnimationWrapper>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeMain;