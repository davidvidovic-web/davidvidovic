"use client"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const HomeFiveAbout = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="bf-about-area bf-about-2-style pt-150 pb-120" style={{ backgroundColor: theme == "dark" ? "#000" : "#f5f5f5" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="bf-about-title-wrap">
                            <h2 className="bf-section-title bf-section-title-2 reveal-text mb-125">Crafting impactful and
                                memorable video experiences
                                with unwavering passion,
                                unmatched creativity, and
                                relentless precision to elevate
                                brands and inspirel</h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bf-about-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/bfolio/about-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bf-about-content">
                            <p className="bf-about-dec mb-50">We transform complex digital challenges into elegant,
                                functional solutions by prioritizing clarity and purpose.
                                Exceptional digital experiences start with understanding
                                your unique business objectives audience needs.</p>
                            <div className="row gx-20">
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image width={258} height={268} className="w-100" src="/assets/img/update/about/thumb-3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-thumb mb-20">
                                        <Image width={258} height={268} className="w-100" src="/assets/img/update/about/thumb-4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFiveAbout;