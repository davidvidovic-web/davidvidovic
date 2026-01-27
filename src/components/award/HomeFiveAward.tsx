"use client"
import ImageHoverRevealProvider from "../providers/ImageHoverRevealProvider";
import serviceData from "@/data/serviceData";
import { useEffect, useState } from "react";
import { AwardArrowIcon } from "@/svg";
import { useTheme } from "next-themes";
import Link from "next/link";

const HomeFiveAward = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <ImageHoverRevealProvider>
            <div className="bf-service-vp-style pt-155 title-box pb-160" style={{ backgroundColor: theme == "dark" ? "#1d1d1f" : "#000" }}>
                <div className="container-fluid container-1650">
                    <span className="bf-service-vp-subtitle d-inline-block mb-70 ml-60">Video production service©</span>
                    <div className="design-award-wrap">
                        <div className="row row-cols-1">
                            {
                                serviceData.slice(0, 5).map((item) => (
                                    <div className="col" key={item.id}>
                                        <div className="design-award-item hover-reveal-item active p-relative">
                                            <div className="design-award-content design-award-content-xs d-flex align-items-center justify-content-between">
                                                <h4 className="bf-service-vp-title"><Link href="/service">{item.title}</Link></h4>
                                                <Link href="/service" className="bf-service-vp-btn">
                                                    <AwardArrowIcon />
                                                </Link>
                                            </div>
                                            <div className="design-award-reveal-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ImageHoverRevealProvider>
    );
};

export default HomeFiveAward;