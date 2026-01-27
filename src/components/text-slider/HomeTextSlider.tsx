"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const HomeTextSlider = () => {
    const textSlides = [
        "Testimonials",
        "What clients say",
        "Customer satisfaction",
        "Testimonials",
        "What clients say",
        "Customer satisfaction",
    ];

    return (
        <div className="tp-text-slider-area mt-100">
            {/* Top slider */}
            <div className="tp-text-slide-top">
                <div className='swiper-container tp-text-slide-active'>
                    <div className='swiper-wrapper slide-transtion'>
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            freeMode={true}
                            slidesPerView="auto"
                            centeredSlides={true}
                            allowTouchMove={false}
                            spaceBetween={80}
                            speed={8000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: true,
                            }}
                        >
                            {textSlides.map((text, index) => (
                                <SwiperSlide key={`top-${index}`}>
                                    <div className="tp-text-content">
                                        <span>{text}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Bottom slider (RTL) */}
            <div className="tp-text-slide-bottom">
                <div className='swiper-container tp-text-slide-active'>
                    <div className='swiper-wrapper slide-transtion'>
                        <Swiper
                            modules={[Autoplay]}
                            dir="rtl"
                            loop={true}
                            freeMode={true}
                            slidesPerView="auto"
                            centeredSlides={true}
                            allowTouchMove={false}
                            spaceBetween={80}
                            speed={8000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: true,
                            }}
                        >
                            {textSlides.map((text, index) => (
                                <SwiperSlide key={`bottom-${index}`}>
                                    <div className="tp-text-content">
                                        <span>{text}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTextSlider;
