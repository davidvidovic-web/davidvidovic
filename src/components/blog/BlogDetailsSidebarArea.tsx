import PostboxDetailsBanner from './subComponent/PostboxDetailsBanner';
import PostboxAuthorDetails from './subComponent/PostboxAuthorDetails';
import PostboxDetailsTags from './subComponent/PostboxDetailsTags';
import PostboxDetailsCode from './subComponent/PostboxDetailsCode';
import PostboxDetailsForm from '../form/PostboxDetailsForm';
import PostboxComments from './subComponent/PostboxComments';
import BlogSidebarArea from './BlogSidebarArea';
import { QuoteIcon } from '@/svg/QuoteIcon';
import Image from 'next/image';

const BlogDetailsSidebarArea = () => {
    return (
        <section id="postbox" className="postbox-area tp-blog-details-ptb pt-20 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-postbox-left-sidebar mr-50">
                            <div className="postbox-details-thumb mb-45">
                                <Image width={824} height={462} className="img-fluid w-100 h-auto"
                                 src="/assets/img/blog/blog-details/blog-details-1.jpg" alt="blog image" />
                            </div>
                            <div className="postbox-wrapper mb-115">
                                <div className="postbox-details-text mb-45">
                                    <p className="mb-25">
                                        We love to bring designs to life as a developer, and I aim to do this using whatever front end tools
                                        are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider
                                        a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                    </p>
                                    <p>
                                        But in order that you may see whence all this born error of those who accuse pleasure and praise pain, I will open the whole matter, and explain the very things which were said by that discoverer of truth and, as it were, the architect of a happy life.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-40">
                                    <h4 className="postbox-title fs-34">Using a Query</h4>
                                    <p>
                                        We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript libraries like React.js but I like to use whatever is best for the websites needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.
                                    </p>
                                </div>
                                <div className="postbox-details-thumb d-flex align-items-center mb-50">
                                    <div>
                                        <Image width={405} height={420} className='img-fluid w-100 h-auto'
                                            src="/assets/img/blog/blog-details/blog-details-sm-1.jpg" alt="blog small image" />
                                    </div>
                                    <div>
                                        <Image width={405} height={420} className='img-fluid w-100 h-auto'
                                            src="/assets/img/blog/blog-details/blog-details-sm-2.jpg" alt="blog small image" />
                                    </div>
                                </div>
                                <div className="postbox-details-text mb-50">
                                    <p>
                                        faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                    </p>
                                </div>
                                <div className="postbox-details-quote-box mb-45">
                                    <blockquote>
                                        <div className="postbox-details-quote-box d-flex align-items-start">
                                            <i><QuoteIcon /></i>
                                            <div className="postbox-details-quote">
                                                <p>
                                                    “Success is the result of perfection, <br />
                                                    hard work, learning from failure, loyalty, & <br />
                                                    persistence”
                                                </p>
                                                <span>Phil Martinez</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="postbox-details-text mb-45">
                                    <p>
                                        faucibus enim. In aliquam tempus porta. Mauris vel finibus risus. Maecenas egestas mi sed neque finibus, nec faucibus ipsum aliquet. Duis scelerisque at odio vel tempus. Morbi a tincidunt nunc, id rutrum erat. Fusce egestas quam vel facilisis tempor.Morbi non orci elementum, sollicitudin mauris laoreet, luctus est. Donec in mi lorem.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-25">
                                    <h4 className="postbox-title fs-34">On the specificity of selectors</h4>
                                    <p>
                                        The specificity of the : <span>not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                    </p>
                                </div>
                                <div className="postbox-details-text mb-60">
                                    <p className="mb-30">
                                        The simple <span>selector that</span> : <span>not()</span> takes as an argument can be any of the following:
                                    </p>
                                    <div className="postbox-details-list">
                                        <ul>
                                            <li>Type selector (e.g <span>p, span,</span> etc.)</li>
                                            <li>Class selector (e.g <span>.element, .sidebar,</span> etc.)</li>
                                            <li>ID selector (e. #header)</li>
                                            <li>Pseudo-class selector (e.g <i>:first-child, :last-of-type</i>)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="postbox-details-code mb-40">
                                    <PostboxDetailsCode />
                                </div>
                                <div className="postbox-details-text mb-50">
                                    <p>
                                        The specificity of the <span>:not()</span> pseudo-class is the specificity of its argument. The :not() pseudo-class does not add to the selector specificity, unlike other pseudo-classes.
                                    </p>
                                </div>
                                <div className="postbox-details-tag-wrap d-flex justify-content-between align-items-center">
                                    <PostboxDetailsTags />
                                </div>
                                <div className="postbox-details-author mt-30">
                                    <PostboxAuthorDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <BlogSidebarArea />
                    </div>
                </div>
            </div>
            <div className="container container-1750">
                <div className="row">
                    <PostboxDetailsBanner />
                </div>
            </div>
            <div className="container container-1330">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="postbox__comment pt-115 pb-50">
                            <h3 className="postbox__comment-title">Comments(02)</h3>
                            <PostboxComments />
                        </div>
                        <div className="postbox-details-form">
                            <h3 className="postbox-details-form-title">Leave a Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <div className="postbox-details-form-wrapper">
                                <div className="postbox-details-form-inner">
                                    <PostboxDetailsForm />
                                </div>
                                <div className="postbox-details-suggetions mb-20">
                                    <div className="postbox-details-remeber">
                                        <input id="remeber" type="checkbox" />
                                        <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                </div>
                                <div className="postbox-details-input-box">
                                    <button type="submit" className="tp-btn tp-btn-xl d-none d-md-inline-flex align-items-center">
                                        <span>
                                            <span className="text-1">Post Comment</span>
                                            <span className="text-2">Post Comment</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsSidebarArea;