import { DribbbleIconThree, FacebookIconTwo, InstragramIconThree, TwitorIconTwo } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const PostboxAuthorDetails = () => {
    return (
        <div className="sidebar-widget-author d-flex align-items-start">
            <div className="sidebar-widget-author-img">
                <Image width={100} height={100}
                src="/assets/img/blog/blog-standard/blog-av-1.jpg" alt="blog author" />
            </div>
            <div className="postbox-details-content">
                <div className="sidebar-widget-author-content">
                    <span>About Author</span>
                    <h4 className="sidebar-widget-author-name">Peter Bowman</h4>
                    <p>
                        Phasellus et ipsum justo. Aenean fringilla a fermentum mauris non venenatis. <br />
                        Praesent at nulla aliquam ligula.
                    </p>
                </div>
                <div className="sidebar-widget-author-social">
                    <Link href="#">
                        <span><FacebookIconTwo /></span>
                    </Link>
                    <Link href="#">
                        <span><TwitorIconTwo /></span>
                    </Link>
                    <Link href="#">
                        <span><DribbbleIconThree /></span>
                    </Link>
                    <Link href="#">
                        <span><InstragramIconThree /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostboxAuthorDetails;