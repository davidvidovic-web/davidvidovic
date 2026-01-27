"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Slide Data
const slidesData = [
    "Award & recognitions",
    "Best designer 2023",
    "Creative Excellence",
    "Award & recognitions",
    "Best designer 2023",
];

const AboutTextSlider = () => {
    return (
        <div className="tp-text-slider-area">
            {/* Top Slider */}
            <div className="tp-text-slide-top">
                <Swiper
                    modules={[Autoplay]}
                    className="tp-text-slide-active slide-transtion"
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
                    {slidesData.map((text, index) => (
                        <SwiperSlide key={`top-${index}`}>
                            <div className="tp-text-content">
                                <span>{text}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom Slider (RTL) */}
            <div className="tp-text-slide-bottom">
                <Swiper
                    modules={[Autoplay]}
                    className="tp-text-slide-active slide-transtion"
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
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="tp-text-content">
                                <span>{slide}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default AboutTextSlider;
