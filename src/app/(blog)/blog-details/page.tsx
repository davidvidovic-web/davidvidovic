import BlogDetailsdMain from '@/pages/blogs/blog-details/BlogDetailsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Details - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <BlogDetailsdMain id={1}/>
    );
};

export default page;