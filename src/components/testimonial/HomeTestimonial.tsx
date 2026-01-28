"use client"
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';
import testimonialData from '@/data/testimonialData';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { ArrowIcon } from '@/svg';
import Image from 'next/image';

const HomeTestimonial = () => {
    // display testimonial data
    const displayTestimonialData = testimonialData;

    // Type fix here 
    const [contentSwiper, setContentSwiper] = useState<SwiperClass | null>(null);
    const [avatarSwiper, setAvatarSwiper] = useState<SwiperClass | null>(null);

    return (
        <>
            {/* Avatar Slider */}
            {/* <div className="tp-testimonial-area p-relative">
                <div className="tp-section-border tp-testimonial-border"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-testimonial-avatar-wrap d-flex justify-content-center">
                                <div className="tp-testimonial-avatar-text p-relative d-flex justify-content-center align-items-center">
                                    <Image width={222} height={222} className="text-img tp-live-anim-spin"
                                        src="/assets/img/testimonial/text.png" alt="text image" />
                                    <Swiper
                                        modules={[Autoplay, EffectFade, Controller]}
                                        className='tp-testimonial-avatar-slider'
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                        }}
                                        spaceBetween={30}
                                        effect="fade"
                                        onSwiper={(swiper) => setAvatarSwiper(swiper)}
                                        controller={{ control: contentSwiper }}
                                    >
                                        {displayTestimonialData.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <div className="tp-testimonial-avatar text-center">
                                                    <Image width={160} height={160} src={testimonial.avatar} alt="avatar image" />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Content Slider */}
            <div id="testimonials" className="tp-testimonial-main pt-60 pb-100">
                <div className="container p-relative" style={{ minHeight: '400px' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}>
                                <Swiper
                                    modules={[Autoplay, Navigation, Controller]}
                                    className='tp-testimonial-text-slider'
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 5000,
                                    }}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: '.tp-testimonial-next',
                                        prevEl: '.tp-testimonial-prev',
                                    }}
                                    onSwiper={(swiper) => setContentSwiper(swiper)}
                                    controller={{ control: avatarSwiper }}
                                >
                                    {displayTestimonialData.map((testimonial) => (
                                        <SwiperSlide key={testimonial.id}>
                                            <div className="tp-testimonial-content text-center">
                                                <p className="tp-testimonial-para mb-35">{testimonial.content}</p>
                                                <div className="tp-testimonial-author-info">
                                                    <h5 className="mb-5 lh-1">{testimonial.name}</h5>
                                                    <span>{testimonial.designation}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="tp-testimonial-navigation" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%', left: 0, zIndex: 10 }}>
                        <span className="tp-testimonial-prev" style={{ background: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ArrowIcon direction='left' />
                        </span>
                        <span className="tp-testimonial-next" style={{ background: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ArrowIcon direction='right' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeTestimonial;
