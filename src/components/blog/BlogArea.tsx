"use client"
import BlogSingleItem from './subComponent/BlogSingleItem';
import PaginationArea from './subComponent/PaginationArea';
import { revealTextAnim } from '@/hooks/useGsapAnimation';
import blogData from '@/data/blogData';
import { useGSAP } from '@gsap/react';

const BlogArea = () => {
    //display blog data
    const displayBlog = blogData.slice(0, 9);

    //gsap animation
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
                        <h2 className="tp-project-tittle reveal-text text-center mb-80">Latest insight</h2>
                    </div>
                    {displayBlog.map((blog) => (
                        <BlogSingleItem key={blog.id} blog={blog} spacingCls="mb-55" />
                    ))}
                    <div className="col-lg-12 text-center">
                        <PaginationArea />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArea;