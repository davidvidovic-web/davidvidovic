"use client"
import { textMarqueeSwiperParams } from "@/constants/swiper";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

const sliderItems = [
    "Other projects",
    "Personal apps",
    "Experimental coding",
    "Other projects",
    "Personal apps",
    "Experimental coding",
    "Other projects",
    "Personal apps",
    "Experimental coding",
];

const HomeFourTextSlider = ({ spacingCls = "pt-150", bgColor = "" }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className={`tp-text-slider-area bf-text-slider-style ${spacingCls}`} style={{ backgroundColor: theme === "dark" ? "#151515" : bgColor }}>
            {/* Top Slider */}
            <div className="tp-text-slide-top">
                <div className="swiper-container tp-text-slide-active mb-10">
                    <div className="swiper-wrapper slide-transtion">
                        <Swiper
                            {...textMarqueeSwiperParams}
                        >
                            {sliderItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="tp-text-content">
                                        <span>{item}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Bottom Slider */}
            <div className="tp-text-slide-bottom">
                <div className="swiper-container tp-text-slide-active">
                    <div className="swiper-wrapper slide-transtion">
                        <Swiper
                            dir="rtl"
                            {...textMarqueeSwiperParams}
                        >
                            {sliderItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="tp-text-content">
                                        <span>{item}</span>
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

export default HomeFourTextSlider;
