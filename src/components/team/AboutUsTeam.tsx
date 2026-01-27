"use client";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AboutUsTeam = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const teamMembers = [
        { name: "Crsitopher Miller", image: "/assets/img/update/team/thumb.jpg" },
        { name: "Bramwell Cutter", image: "/assets/img/update/team/thumb-2.jpg" },
        { name: "Thayer Juno", image: "/assets/img/update/team/thumb-3.jpg" },
        { name: "James Smith", image: "/assets/img/update/team/thumb-4.jpg" },
    ];
    return (
        <section className="bf-team-area pt-160 pb-130" style={{ backgroundColor: theme === "dark" ? "#151515" : "#fff" }}>
            <div className="container">
                <div className="row">
                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className="bf-team-content-wrap mr-110 mb-30">
                            <div className="bf-team-title-wrap mb-30">
                                <span className="bf-team-subtitle d-inline-block mb-10">
                                    Who stay behind
                                </span>
                                <h2 className="tp-section-tittle">Global executive leadership</h2>
                            </div>

                            <div className="bf-team-info">
                                <h4 className="mb-15">Be part of our mission</h4>
                                <p className="mb-40">
                                    If you’re ready to create and collaborate,
                                    <br /> we’d love to hear from you.
                                </p>

                                <div className="bf-team-contact-info d-flex align-items-center">
                                    {/* Contact Button */}
                                    <Link
                                        href="/contact"
                                        className="tp-btn tp-btn-xl mr-20 d-inline-flex align-items-center"
                                    >
                                        <span>
                                            <span className="text-1">Contact Us</span>
                                            <span className="text-2">Contact Us</span>
                                        </span>
                                    </Link>

                                    {/* Phone Info */}
                                    <div className="bf-team-contact d-flex align-items-center">
                                        <span className="mr-20">
                                            <PhoneIcon />
                                        </span>
                                        <Link href="tel:+99926542563">+999 2654 2563</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Team Grid */}
                    <div className="col-lg-6">
                        <div className="bf-team-item-wrap">
                            <div className="row">
                                {teamMembers.map(({ name, image }, index) => {
                                    const [firstName, lastName] = name.split(" ");
                                    return (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="bf-team-item mb-30">
                                                <div className="bf-team-thumb p-relative">
                                                    <Link href="#">
                                                        <Image
                                                            className="w-100"
                                                            src={image}
                                                            alt={`${name} portrait`}
                                                            width={309}
                                                            height={360}
                                                        />
                                                    </Link>
                                                    <h4 className="bf-team-content-title">
                                                        <Link className="common-underline" href="#">
                                                            {firstName}
                                                            <br />
                                                            {lastName}
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTeam;
