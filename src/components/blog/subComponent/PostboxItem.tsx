import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { useVideoModal } from "@/provider/VideoProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogDt } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";

interface PostBoxItemProps {
    post: blogDt
}

const PostBoxItem: React.FC<PostBoxItemProps> = ({ post }) => {
    const { playVideo } = useVideoModal();
    return (
        <article className="tp-postbox-item mb-60">
            <div className="tp-postbox-thumb p-relative mb-35">
                {post.type === "image" && post.image && (
                    <Image width={777} height={438} className="img-fluid w-100 h-auto" src={post.image} alt={post.title} />
                )}
                {post.type === "slider" && (
                    <div className="swiper-container">
                        <Swiper
                            modules={[Autoplay, Navigation, EffectFade]}
                            className="postbox-thumb-slider-active"
                            slidesPerView={1}
                            loop={true}
                            autoplay={true}
                            effect='fade'
                            navigation={{
                                nextEl: '.tp-postbox-arrow-next',
                                prevEl: '.tp-postbox-arrow-prev',
                            }}
                        >
                            {post?.thumbs?.map((thumb, i) => (
                                <SwiperSlide key={i}>
                                    <Link href={`/blog-details/${post.id}`}>
                                        <Image width={777} height={438} className="img-fluid w-100 h-auto" src={thumb} alt={post.title} />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="tp-postbox-slider-arrow-wrap d-none d-sm-block">
                            <button className="tp-postbox-arrow-prev">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </button>
                            <button className="tp-postbox-arrow-next">
                                <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                        </div>

                    </div>
                )}

                {post.type === "video" && post.image && (
                    <>
                        <Image width={777} height={438} className="img-fluid w-100 h-auto" src={post.image} alt={post.title} />
                        <div className="tp-postbox-video-btn">
                            {post.videoUrl && (
                                <button onClick={() => playVideo(`${post.videoUrl}`)} className="tp-video-play popup-video">
                                    <i className="p-relative z-index-3 fa-regular fa-play"></i>
                                    <div className="tp-video-btn-anm">
                                        <div className="tp-video-waves tp-video-wave-1"></div>
                                        <div className="tp-video-waves tp-video-wave-2"></div>
                                        <div className="tp-video-waves tp-video-wave-3"></div>
                                    </div>
                                </button>
                            )}
                        </div>
                    </>
                )}
                <div className="tp-postbox-date text-center">
                    {typeof post.date === "object" && post.date !== null ? (
                        <>
                            <span>{post.date.month}</span>
                            <h5>{post.date.day}</h5>
                        </>
                    ) : (
                        <span>{post.date}</span>
                    )}
                </div>
            </div>
            <div className="tp-postbox-content-wrap">
                <div className="tp-postbox-meta mb-15 d-flex align-items-center">
                    <Link href="#">
                        {post.authorImg && (
                            <Image width={30} height={30} src={post.authorImg} alt={post.authorName || 'Author'} />
                        )}
                        {post.authorName}
                    </Link>
                    <div className="tp-postbox-border"></div>
                    <span>{post.category}</span>
                </div>
                <div className="tp-postbox-content">
                    <h3 className="tp-postbox-tittle mb-20">
                        <Link href={`/blog-details/${post.id}`} className="common-underline">
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mb-30">{post.desc}</p>
                    <Link
                        href={`/blog-details/${post.id}`}
                        className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center"
                    >
                        <span>
                            <span className="text-1">Read More</span>
                            <span className="text-2">Read More</span>
                        </span>
                    </Link>
                </div>
            </div>
        </article >
    );
};

export default PostBoxItem;