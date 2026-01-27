import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import ContactTopArea from '@/components/contact/ContactTopArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import ContactArea from '@/components/contact/ContactArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';

const ContactMain = () => {
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
                            <ContactTopArea />
                            <ContactArea spacingClass="pt-110 pb-160" />
                        </main>
                        <CommonFooter />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default ContactMain;