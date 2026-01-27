import Link from 'next/link';

const BlogSidebarTags = () => {
    return (
        <div className="tagcloud">
            <Link href="#">Blog</Link>
            <Link href="#">Creative</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Theme</Link>
            <Link href="#">WordPress</Link>
            <Link href="#">Design Trends</Link>
        </div>
    );
};

export default BlogSidebarTags;