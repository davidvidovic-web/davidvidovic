import { DribbbleIconTwo, FacebookIcon, InstragramIconTwo, TwitorIcon } from '@/svg';
import Link from 'next/link';

const PostboxDetailsTags = () => {
    return (
        <>
            <div className="tp-blog-sidebar-tagcloud d-flex align-items-center mb-10">
                <span>Tagged with :</span>
                <div className="tagcloud">
                    <Link href="#">Blog</Link>
                    <Link href="#">Creative</Link>
                    <Link href="#">Portfolio</Link>
                    <Link href="#">Theme</Link>
                </div>
            </div>
            <div className="postbox-details-social mb-10">
                <Link href="#">
                    <span><FacebookIcon /></span>
                </Link>
                <Link href="#">
                    <span><TwitorIcon /></span>
                </Link>
                <Link href="#">
                    <span><DribbbleIconTwo /></span>
                </Link>
                <Link href="#">
                    <span><InstragramIconTwo /></span>
                </Link>
            </div>
        </>
    );
};

export default PostboxDetailsTags;