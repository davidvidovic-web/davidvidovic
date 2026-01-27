import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import PortfolioArea from '@/components/portfolio/PortfolioArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';

const PortfolioMain = () => {
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
                            <PortfolioArea />
                        </main>
                        <CommonFooter />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default PortfolioMain;