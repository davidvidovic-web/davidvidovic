import BlogMain from '@/pages/blogs/blog/BlogMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <BlogMain />
    );
};

export default page;