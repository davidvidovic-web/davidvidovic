import BlogDetailsSidebar from '@/pages/blogs/blog-details-sidebar/BlogDetailsSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Details Sidebar - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <BlogDetailsSidebar />
    );
};

export default page;