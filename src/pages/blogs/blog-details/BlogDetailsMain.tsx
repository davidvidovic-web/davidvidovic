import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import CustomCursorProvider from "@/components/providers/CustomCursorProvider";
import BlogDetailsInfo from '@/components/blog/subComponent/BlogDetailsInfo';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import BlogDetailsArea from "@/components/blog/BlogDetailsArea";
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import { IdProps } from '@/types/custom-dt';
import blogData from '@/data/blogData';

const BlogDetailsMain = ({ id }: IdProps) => {
    // Find the blog that matches the given ID
    const blog = blogData.find((blog) => blog.id == id);

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
                                            <div className="tp-blog-details-without-heading text-center">
                                                <BlogDetailsInfo blogTitle={blog?.title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // blog details area  */}
                            <BlogDetailsArea/>
                        </main>
                        <CommonFooter />
                    </div>
                </div>
            </CustomCursorProvider>
        </ScrollSmoothProvider>
    );
};

export default BlogDetailsMain;