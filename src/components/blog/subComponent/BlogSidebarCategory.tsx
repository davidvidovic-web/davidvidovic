import Link from 'next/link';

const BlogSidebarCategory = () => {
    return (
        <ul>
            <li>
                <Link href="#">
                    <span>Design</span>
                    <span>[7]</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <span>Experience</span>
                    <span>[4]</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <span>Uncategorized</span>
                    <span>[0]</span>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <span>Digital</span>
                    <span>[3]</span>
                </Link>
            </li>
        </ul>
    );
};

export default BlogSidebarCategory;