"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const HeroFive = () => {
    return (
        <div className="bf-hero-area bf-hero-2-video-wrap bf-hero-2-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-hero-2-wrap">
                            <div className="bf-hero-2-title">
                                VIEDO{" "}
                                <img
                                    className="gif-1 d-none d-md-inline-block"
                                    src="https://html.aqlova.com/videos/bfolio/main-gif-2.gif"
                                    alt=""
                                />{" "}
                                PRODUCTION
                                <br />
                                & EDITING {" "}
                                <div className="bf-hero-2-left-right d-none d-md-inline-block">
                                    <Swiper
                                        className="bf-hero-2-arrow-active"
                                        dir="rtl"
                                        modules={[Autoplay]}
                                        loop
                                        freeMode
                                        slidesPerView="auto"
                                        spaceBetween={50}
                                        centeredSlides
                                        allowTouchMove={false}
                                        speed={1000}
                                        autoplay={{
                                            delay: 1,
                                            disableOnInteraction: true,
                                        }}
                                    >
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <Image
                                                    src="/assets/img/update/hero/hero-2/arrow.png"
                                                    alt="arrow"
                                                    width={180}
                                                    height={74}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>{" "}
                                TO {" "}
                                <Image
                                    width={160}
                                    height={90}
                                    className="gif-2 d-none d-md-inline-block"
                                    src="https://html.aqlova.com/videos/bfolio/main-gif.gif"
                                    alt=""
                                />{" "}
                                SCAL YOUR MULTIMEDIA
                                <br />
                                <Image
                                    width={160}
                                    height={111}
                                    className="gif-3 d-none d-md-inline-block"
                                    src="https://html.aqlova.com/videos/bfolio/main-gif-3.gif"
                                    alt=""
                                    unoptimized
                                />{" "}
                                CONTENT
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bf-hero-2-video">
                <video loop muted autoPlay playsInline>
                    <source
                        src="https://html.aqlova.com/videos/bfolio/video-2.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    );
};

export default HeroFive;
