import blogData from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';

const BlogSidebarRecentPost = () => {
    //display only 2 recent posts
    const recentPosts = blogData.slice(13, 15);

    return (
        <div className="rc-post-wrap">
            {recentPosts.map((post, index) => (
                <div key={index} className="rc-post d-flex mb-20 align-items-center">
                    <div className="rc-post-thumb mr-20">
                        <Link href={`/blog-details/${post.id}`}>
                            {post.image && (<Image width={90} height={90} src={post.image} alt={post.title} />)}
                        </Link>
                    </div>
                    <div className="rc-post-content">
                        <h6 className="rc-post-title mb-5">
                            <Link className="common-underline" href={`/blog-details/${post.id}`}>
                                <span dangerouslySetInnerHTML={{ __html: post.title }} />
                            </Link>
                        </h6>
                        <div className="rc-post-cetagory">
                            <span>
                                <Link href="#">{post.category}</Link>
                            </span>
                            <span>{post.date && post.date.toString()}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogSidebarRecentPost;
