
import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import PortfolioHover from '@/components/portfolio/PortfolioHover';
import HeaderFour from '@/layouts/headers/HeaderFour';

const PortfolioInteractiveHover = () => {
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
                            <PortfolioHover />
                        </main>
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default PortfolioInteractiveHover;