"use client"
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ServiceItem {
    id: number;
    title: string;
    image: string;
    description: string;
    categories: string[];
}

const services: ServiceItem[] = [
    {
        id: 1,
        title: "Brand Identity Design",
        image: "assets/img/update/service/service-1.jpg",
        description:
            "Strategic, data-driven media campaigns designed to build brand awareness & connect with your target audience.",
        categories: ["Content strategy", "Analytics & reporting", "Community management"],
    },
    {
        id: 2,
        title: "Web design & development",
        image: "assets/img/update/service/service-2.jpg",
        description:
            "Strategic, data-driven media campaigns designed to build brand awareness & connect with your target audience.",
        categories: ["Content strategy", "Analytics & reporting", "Community management"],
    },
    {
        id: 3,
        title: "SEO Optimization",
        image: "assets/img/update/service/service-3.jpg",
        description:
            "Strategic, data-driven media campaigns designed to build brand awareness & connect with your target audience.",
        categories: ["Content strategy", "Analytics & reporting", "Community management"],
    },
    {
        id: 4,
        title: "Creative Web Solutions",
        image: "assets/img/update/service/service-4.jpg",
        description:
            "Strategic, data-driven media campaigns designed to build brand awareness & connect with your target audience.",
        categories: ["Content strategy", "Analytics & reporting", "Community management"],
    },
];

const AccordionItem = ({ item, index }: { item: ServiceItem; index: number }) => {
    const collapseId = `collapse-${index}`;
    const isFirst = index === 0;

    return (
        <div className="accordion-items">
            <div className="accordion-header">
                <div
                    className={`accordion-buttons ${!isFirst ? "collapsed" : ""}`}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isFirst}
                    aria-controls={collapseId}
                >
                    <div className="bf-service-item">
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-2 col-2">
                                <div className="bf-service-num">
                                    <span>({String(item.id).padStart(2, "0")})</span>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 col-10">
                                <div className="bf-service-top">
                                    <div className="bf-service-title">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="accordion-icon"></span>
                    </div>
                </div>
            </div>

            <div
                id={collapseId}
                className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <div className="row align-items-center">
                        <div className="offset-xxl-3 col-xxl-9 offset-xl-2 col-xl-10">
                            <div className="row align-items-center">
                                <div className="col-xl-7 col-lg-8">
                                    <div className="bf-service-content d-flex align-items-center">
                                        <div className="bf-service-thumb">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="bf-service-content">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="bf-service-category">
                                        {item.categories.map((cat, i) => (
                                            <span key={i}>{cat}</span>
                                        ))}
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

const ServiceArea = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="bf-service-area pt-155 pb-160" style={{ backgroundColor: theme === "dark" ? "#1d1d1f" : "#000" }}>
            <div className="container">
                {/* Header Section */}
                <div className="bf-service-title-wrap mb-45">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="bf-service-subtitle-box mb-40">
                                <h2 className="bf-section-title fs-75 text-white">
                                    Let’s create a brand that defies Gravity
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="bf-service-title-box pt-200 mb-40">
                                <p className="bf-service-dec mb-45">
                                    We transform complex digital challenges into elegant, functional solutions by
                                    prioritizing clarity and purpose. Exceptional digital experiences start with
                                    understanding your unique business.
                                </p>
                                <Link
                                    href="#"
                                    className="tp-btn tp-btn-xl bf-btn-white-border d-inline-flex align-items-center"
                                >
                                    <span>
                                        <span className="text-1">View all Services</span>
                                        <span className="text-2">View all Services</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion Section */}
                <div className="bf-service-accordion-wrap">
                    <div className="bf-accordion accordion" id="accordionExample">
                        {services.map((item, index) => (
                            <AccordionItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
