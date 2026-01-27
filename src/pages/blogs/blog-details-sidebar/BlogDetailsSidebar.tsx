import PostboxDetailsItem from "@/components/blog/subComponent/PostboxDetailsItem";
import CustomCursorProvider from "@/components/providers/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import BlogDetailsSidebarArea from "@/components/blog/BlogDetailsSidebarArea";
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';

const BlogDetailsSidebar = () => {
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
                            <div className="tp-blog-details-without-ptb">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="tp-blog-details-without-heading">
                                                <PostboxDetailsItem />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // blog details area  */}
                           <BlogDetailsSidebarArea/>
                        </main>
                        <CommonFooter />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default BlogDetailsSidebar;