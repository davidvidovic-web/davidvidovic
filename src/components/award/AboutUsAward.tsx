"use client"
import { useTheme } from "next-themes";
import ImageHoverRevealProvider from "../providers/ImageHoverRevealProvider";
import awardData from "@/data/awardData";
import { useEffect, useState } from "react";

const AboutUsAward = () => {
    //set theme color
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <ImageHoverRevealProvider>
            <div className="design-award-area pt-190 title-box pb-160 grey-bg" style={{ backgroundColor: theme == "dark" ? "#151515" : "#fff" }}>
                <div className="container">
                    <div className="design-award-wrap">
                        <div className="row row-cols-1">
                            {awardData.map((award, index) => (
                                <div className="col" key={index}>
                                    <div className="design-award-item hover-reveal-item active p-relative">
                                        <div className="design-award-content design-award-content-xs d-flex align-items-center justify-content-between">
                                            <h4>{award.title}</h4>
                                            <span>{award.subtitle}</span>
                                        </div>
                                        <div
                                            className="design-award-reveal-img"
                                            style={{
                                                backgroundImage: `url(${award.image})`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ImageHoverRevealProvider>
    );
};

export default AboutUsAward;
