import blogData from "@/data/blogData";
import { ClockIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const HomeFourBlog = () => {
    //display blog data
    const displayBlogData = blogData.slice(15, 18);

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
                    {displayBlogData.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <div className="tp-blog-item mb-30">
                                <div className="tp-blog-thumb fix mb-25">
                                    {
                                        blog.image &&
                                        <Image width={422} height={422} className="w-100"
                                            src={blog.image} alt={blog.title} />
                                    }
                                </div>
                                <div className="tp-blog-content">
                                    <div className="tp-blog-tag-inner d-flex align-items-center mb-20">
                                        <span className="tp-blog-tag mr-20">{blog.category}</span>
                                        <span className="tp-blog-date">
                                            <ClockIcon />
                                            {blog.date as string}
                                        </span>
                                    </div>
                                    <h2 className="tp-blog-tittle">
                                        <Link className="common-underline" href={`/blog-details/${blog.id}`}>
                                            {blog.title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFourBlog;
