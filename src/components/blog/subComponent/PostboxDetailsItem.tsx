import { ClockIconTwo, CommentIcon, EditIconTwo } from '@/svg';
import Image from 'next/image';

const PostboxDetailsItem = () => {
    return (
        <article className="postbox-details-item-2 mb-20">
            <div className="postbox-details-info-wrap">
                <div className="postbox-tag postbox-details-tag">
                    <span>
                        <i><EditIconTwo /></i>{" "}
                        Inspiration 
                    </span>{" "}
                    <span>4 min read</span>
                </div>
                <h4 className="postbox-title fs-80">Lessons learned from <br /> professional challenges</h4>
                <div className="postbox-details-meta d-flex align-items-center mt-30">
                    <div className="postbox-author-box d-flex align-items-center">
                        <div className="postbox-author-img">
                            <Image width={42} height={42} src="/assets/img/blog/blog-standard/blog-av-2.jpg" alt="blog image" />
                        </div>
                        <div className="postbox-author-info">
                            <h4 className="postbox-author-name">Phil Martinez</h4>
                        </div>
                    </div>
                    <div className="postbox-meta">
                        <i><ClockIconTwo /></i>{" "}
                        <span>April 15, 2025</span>
                    </div>
                    <div className="postbox-meta">
                        <i><CommentIcon /></i>{" "}
                        <span>0 comments</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostboxDetailsItem;