
import BlogStandardMain from '@/pages/blogs/blog-standard/BlogStandardMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Standard - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <BlogStandardMain />
    );
};

export default page;