"use client";
import BlogSingleItem from "./subComponent/BlogSingleItem";
import blogData from "@/data/blogData";
import Link from "next/link";

const HomeBlog = () => {
    //display blog data
    const displayBlog = blogData.slice(0, 3);

    return (
        <div className="tp-blog-area pt-150 pb-120">
            <div className="container">
                {/* Header */}
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        <div className="tp-blog-tittle-wrap">
                            <h2 className="tp-section-tittle reveal-text mb-50">Blog insight</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <div className="tp-blog-btn text-sm-end mb-45">
                            <Link href="/blog" className="tp-btn d-inline-flex align-items-center">
                                <span>
                                    <span className="text-1">View All</span>
                                    <span className="text-2">View All</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Items */}
                <div className="row">
                    {displayBlog.map((blog) => (
                        <BlogSingleItem key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
