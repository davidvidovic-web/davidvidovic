"use client"
import { initPortfolioRevealingSlider } from "@/hooks/useGsapAnimation";
import { projectDt } from "@/types/project-dt";
import projectData from "@/data/projectData";
import { useEffect } from "react";
import Link from "next/link";

const socialLinks = [
    { label: "Fb", href: "#" },
    { label: "In", href: "#" },
    { label: "Be", href: "#" },
];

const PortfolioSlide: React.FC<projectDt> = ({ id, description, title, image, isActive }) => (
    <div className={`tp-portfolio-revealing-slide ${isActive ? "s-active" : ""}`}>
        <div
            className="tp-portfolio-revealing-slide-inner bg-position"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-revealing-slide-content">
                            <span className="tp-portfolio-revealing-slide-text">{description}</span>
                            <h2 className="tp-portfolio-revealing-slide-heading">
                                <Link href={`/portfolio-details/${id}`}>{title}</Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PortfolioRevealingSlideMain = () => {
    //display portfolio data
    const displayPortfolioData = projectData.slice(32, 37);


    useEffect(() => {
        // Initialize the GSAP slider animation when mounted
        initPortfolioRevealingSlider();

        // Optional: cleanup 
        return () => {
            window.removeEventListener("wheel", () => { });
        };
    }, []);

    return (
        <div className="tp-portfolio-revealing-slider">
            {/* Slides */}
            <div className="tp-portfolio-revealing-slider-slides">
                {displayPortfolioData.map((slide, index) => (
                    <PortfolioSlide
                        key={index}
                        {...slide}
                        isActive={index === 0}
                    />
                ))}
            </div>

            {/* Controls */}
            <div className="tp-portfolio-revealing-slider-control">
                <div className="tp-portfolio-revealing-slider-control-line"></div>
                <div className="tp-portfolio-revealing-slider-control-line"></div>
            </div>
            <div className="tp-portfolio-revealing-slider-control tp-portfolio-revealing-slider-control-right m-right">
                <div className="tp-portfolio-revealing-slider-control-line"></div>
                <div className="tp-portfolio-revealing-slider-control-line"></div>
            </div>

            {/* Social Links */}
            <div className="tp-portfolio-revealing-slider-social">
                {socialLinks.map(({ label, href }, i) => (
                    <Link key={i} className="tp-hover-btn-item" href={href}>
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PortfolioRevealingSlideMain;
