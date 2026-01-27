import PortfolioMixSlicerMain from '@/components/portfolio/PortfolioMixSlicerMain';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HeaderFour from '@/layouts/headers/HeaderFour';

const PortfolioMixSlicer = () => {
    return (
        <CustomCursorProvider>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <HeaderFour />
            <main>
                <PortfolioMixSlicerMain />
            </main>
        </CustomCursorProvider>
    );
};

export default PortfolioMixSlicer;