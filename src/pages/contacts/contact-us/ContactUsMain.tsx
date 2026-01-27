import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import ThemeCursorProvider from '@/components/providers/ThemeCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import ContactUsArea from '@/components/contact/ContactUsArea';
import ContactUsMap from '@/components/contact/ContactUsMap';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';

const ContactUsMain = () => {
    return (
        <ScrollSmoothProvider>
            <ThemeCursorProvider>
                <div id="magic-cursor" className="cursor-white-bg">
                    <div id="ball"></div>
                </div>

                {/* Global Components */}
                <BackToTop />
                <SearchArea />
                <CommonHeader spacingCls="mt-20" wrapCustomCls='bf-header-3-style' customCls="tp-main-menu-2" />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <ContactUsArea/>
                            <ContactUsMap/>
                        </main>
                        <CommonFooter wrapClass='bf-footer-2-wrap' bgColor='#000'/>
                    </div>
                </div>
            </ThemeCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default ContactUsMain;