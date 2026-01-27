import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import PortfolioScroll from '@/components/portfolio/PortfolioScroll';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HeaderFour from '@/layouts/headers/HeaderFour';

const PortfolioInteractiveScroll = () => {
    return (
        <ScrollSmoothProvider>
            <CustomCursorProvider>
                <div id="magic-cursor" className="cursor-white-bg">
                    <div id="ball"></div>
                </div>
                {/* Global Components */}
                <BackToTop />
                <HeaderFour />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                             <PortfolioScroll />
                        </main>
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default PortfolioInteractiveScroll;