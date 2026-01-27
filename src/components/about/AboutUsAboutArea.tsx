"use client";

import Image from "next/image";
import AnimatedCounterTwo from "../shared/Counter/AnimatedCounterTwo";

const AboutUsAboutArea = () => {
    const stats = [
        { value: 98, suffix: "%", label: "Clients Satisfied and <br /> Repeating" },
        { value: 125, suffix: "+", label: "Projects Completed in<br /> 24 Countries" },
    ];

    return (
        <section className="bf-about-area pt-140 pb-130">
            <div className="container">
                <div className="row">
                    {/* Section Subtitle */}
                    <div className="col-lg-3">
                        <div className="bf-about-3-subtitle mb-20">
                            <span>About us</span>
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className="col-lg-9">
                        <div className="bf-about-3-title-wrap mb-20">
                            <h2 className="bf-about-3-title reveal-text">
                                An independent <strong>web design</strong> and branding agency
                                in Manchester set up in 2010 — who care, build relationships,
                                have industry experience, and win awards.
                            </h2>
                        </div>
                    </div>

                    {/* Left Images */}
                    <div className="col-lg-3 col-md-5 col-sm-5">
                        <div className="bf-about-3-thumb mb-30">
                            <Image
                                src="/assets/img/update/about/abour-3/thumb.jpg"
                                alt="About Thumbnail"
                                width={256}
                                height={266}
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-7 col-sm-7">
                        <div className="bf-about-3-thumb-2 pt-60 ml-50 mb-30">
                            <Image
                                src="/assets/img/update/about/abour-3/thumb-2.jpg"
                                alt="About Thumbnail 2"
                                width={306}
                                height={400}
                            />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="col-lg-5">
                        <div className="bf-about-3-info-wrap pt-90 ml-35">
                            <div className="bf-about-3-avatar">
                                <Image
                                    className="mb-15"
                                    src="/assets/img/update/about/abour-3/avatar.png"
                                    alt="About Avatar"
                                    width={140}
                                    height={54}
                                />
                                <p>
                                    Driven by a passion for innovation, we specialize in
                                    delivering top-quality design solutions.
                                </p>
                            </div>

                            {/* Stats Section */}
                            <div className="bf-about-3-count-wrap">
                                <div className="row">
                                    {stats.map(({ value, label, suffix }, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="bf-about-3-count-item mb-30">
                                                <AnimatedCounterTwo suffix={suffix} min={0} max={value} cls="bf-about-3-count-title" />
                                                <span
                                                    dangerouslySetInnerHTML={{ __html: label }}
                                                ></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsAboutArea;
