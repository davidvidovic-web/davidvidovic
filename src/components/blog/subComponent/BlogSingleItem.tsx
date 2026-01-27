import { blogDt } from '@/types/custom-dt';
import { ClockIcon } from '@/svg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface blogProps {
    blog: blogDt;
    spacingCls?: string;
}
const BlogSingleItem: React.FC<blogProps> = ({ blog, spacingCls = "mb-30" }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={`tp-blog-item ${spacingCls}`}>
                <div className="tp-blog-thumb fix mb-25">
                    {blog.image && (
                        <Image width={422} height={442} className="w-100 img-fluid h-auto" src={blog.image} alt={blog.title} />
                    )
                    }
                </div>
                <div className="tp-blog-content">
                    <div className="tp-blog-tag-inner d-flex align-items-center mb-20">
                        <span className="tp-blog-tag mr-20">{blog.category}</span>
                        <span className="tp-blog-date"> 
                            <ClockIcon />
                            {blog.date && blog?.date?.toString()}
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
    );
};

export default BlogSingleItem;