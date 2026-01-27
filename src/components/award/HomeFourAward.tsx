"use client"
import { useTheme } from "next-themes";
import ImageHoverRevealProvider from "../providers/ImageHoverRevealProvider";
import awardData from "@/data/awardData";
import { useEffect, useState } from "react";

interface awardBgPropsDt {
    backgroundColor?: string
}

const HomeFourAward: React.FC<awardBgPropsDt> = ({ backgroundColor = "#f3f3f3" }) => {
    //set theme color
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <ImageHoverRevealProvider>
            <div className="design-award-area pt-190 title-box pb-160 grey-bg" style={{ background: theme == "dark" ? 'var(--tp-common-black)' : 'var(--tp-common-white)' }}>
                <div className="container">
                    <div className="design-award-wrap">
                        <div className="row row-cols-1">
                            {awardData.map((award, index) => {
                                const content = (
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
                                );

                                return (
                                    <div className="col" key={index}>
                                        {award.link ? (
                                            <a 
                                                href={award.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            content
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ImageHoverRevealProvider>
    );
};

export default HomeFourAward;
