"use client"
import PhotoProviderWrapper from "@/provider/PhotoProviderWrapper";
import { portfolioMixSlider } from "@/constants/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import projectData from "@/data/projectData";
import {PhotoView } from "react-photo-view";
import Image from "next/image";
import Link from "next/link";

const PortfolioMixSlicerMain = () => {
    //display portfolio data
    const displayPortfolioData = projectData.slice(27, 32);

    return (
        <div className="tp-portfolio-mix-slider-wrap mix p-relative">
            <div className="swiper tp-portfolio-mix-slider">
                <div className="swiper-wrapper">
                    <PhotoProviderWrapper>
                        <Swiper
                            {...portfolioMixSlider}
                        >
                            {displayPortfolioData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="tp-portfolio-mix-slider-item">
                                        <div className="tp-portfolio-mix-slider-image">
                                            <Image
                                                width={1920}
                                                height={1080}
                                                className="swiper-gl-image"
                                                src={slide.image}
                                                alt={slide.title}
                                            />
                                            <PhotoView src={slide.image}>
                                                <a className="popup-image">
                                                    <i className="fa-regular fa-arrows-maximize"></i>
                                                </a>
                                            </PhotoView>
                                        </div>
                                        <div className="tp-portfolio-mix-slider-content">
                                            <span className="tp-portfolio-mix-slide-text">{slide.description}</span>
                                            <h2 className="tp-portfolio-mix-slide-heading">
                                                <Link href={`/portfolio-details/${slide.id}`}>{slide.title}</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </PhotoProviderWrapper>
                </div>
            </div>

            {/* Navigation */}
            <div className="tp-portfolio-mix-slider-navigation overflow-hidden">
                <div className="container-fluid container-1750">
                    <div className="slider-nav">
                        <div className="tp-portfolio-mix-button-prev nav-icon">
                            <i className="fa-solid fa-angle-left"></i>Prev
                        </div>
                        <div className="tp-portfolio-mix-button-next nav-icon">
                            Next<i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div
                className="tp-portfolio-mix-pagination has_fade_anim"
                data-fade-from="bottom"
                data-fade-offset="0"
                data-on-scroll="0"
                data-delay="0.45"
            ></div>
        </div>
    );
};

export default PortfolioMixSlicerMain;
