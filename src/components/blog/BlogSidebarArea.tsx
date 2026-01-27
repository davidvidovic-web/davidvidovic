import BlogSidebarCategory from './subComponent/BlogSidebarCategory';
import BlogSidebarRecentPost from './BlogSidebarRecentPost';
import BlogSidebarTags from './subComponent/BlogSidebarTags';
import BlogSearch from '../form/BlogSearch';

const BlogSidebarArea = () => {
    return (
        <div className="tp-blog-sidebar">
            <div className="tp-blog-sidebar-search mb-50">
                <h3 className="tp-blog-sidebar-tittle mb-20">Search</h3>
                <BlogSearch />
            </div>
            <div className="tp-blog-sidebar-cetagory mb-40">
                <h3 className="tp-blog-sidebar-tittle mb-20">Category</h3>
                <BlogSidebarCategory />
            </div>
            <div className="tp-blog-sidebar-post mb-50">
                <h3 className="tp-blog-sidebar-tittle mb-30">Recent Posts</h3>
                <BlogSidebarRecentPost />
            </div>
            <div className="tp-blog-sidebar-tagcloud mb-50">
                <h3 className="tp-blog-sidebar-tittle mb-20">Tags</h3>
                <BlogSidebarTags />
            </div>
        </div>
    );
};

export default BlogSidebarArea;