
import BlogDetailsMain from '@/pages/blogs/blog-details/BlogDetailsMain';
import { PageParamsProps } from '@/types/custom-dt';
import blogData from '@/data/blogData';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const property = blogData.find((item) => item.id == Number(id));
    return {
        title: property?.title ? property.title : "Blog Details",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <BlogDetailsMain id={id} />
    );
}