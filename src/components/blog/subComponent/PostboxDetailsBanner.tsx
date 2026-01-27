import Image from 'next/image';
import Link from 'next/link';

const PostboxDetailsBanner = () => {
    return (
        <div className="col-xl-12">
            <Link href="#">
                <div className="postbox-details-nevigation-wrap p-relative">
                    <div className="postbox-details-nevigation-thumb-bg">
                        <div className="postbox-details-nevigation-thumb">
                            <Image width={1726} height={1150} className="img-fluid w-100 h-auto"
                             data-speed=".8" src="/assets/img/blog/blog-details/blog-details-2.jpg" alt="blog details image" />
                        </div>
                    </div>
                    <div className="postbox-details-nevigation-content">
                        <span>Next Post</span>
                        <h4 className="postbox-details-nevigation-title">Tips for thriving in our <br /> virtual world</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PostboxDetailsBanner;