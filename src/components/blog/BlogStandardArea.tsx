"use client"
import PaginationArea from './subComponent/PaginationArea';
import { revealTextAnim } from '@/hooks/useGsapAnimation';
import PostBoxItem from './subComponent/PostboxItem';
import BlogSidebarArea from './BlogSidebarArea';
import blogData from '@/data/blogData';
import { useGSAP } from '@gsap/react';

const BlogStandardArea = () => {
    // GSAP Animations
    useGSAP(() => {
        const timer = setTimeout(() => {
            revealTextAnim();
        }, 100)
        return () => clearTimeout(timer);
    });
    return (
        <div className="tp-blog-area tp-blog-spacing pt-175 pb-160">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tp-project-tittle reveal-text text-center mb-80">Blog standard</h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-postbox-wrapper mr-55">
                            {/* -- Display blog posts from index 9 to 12 (4 posts)-- */}
                            {blogData.slice(9, 13).map((post) => (
                                <PostBoxItem key={post.id} post={post} />
                            ))}
                            <PaginationArea />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <BlogSidebarArea />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardArea;