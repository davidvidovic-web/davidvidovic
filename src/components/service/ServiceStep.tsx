import { ServiceStepArrowIcon } from "@/svg/ArrowIcon";
import Link from "next/link";

const steps = [
    {
        title: "Discovery",
        showIcon: true,
        links: [
            "Brand discovery",
            "Design audits",
            "Brand discovery",
        ],
    },
    {
        title: "Strategy",
        showIcon: true,
        links: [
            "Photography",
            "Design audits",
            "Content creation",
        ],
    },
    {
        title: "Design",
        showIcon: false,
        links: [
            "Logo design",
            "Identity design",
            "Brand discovery",
        ],
    },
];

const ServiceStep = () => {
    return (
        <section className="bf-service-step-area pt-125 pb-120">
            <div className="container">
                <div className="row">
                    {/* Subtitle */}
                    <div className="col-lg-3">
                        <div className="bf-service-step-subtitle">
                            <span>What we do</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-9">
                        <div className="bf-service-step-content">
                            <h2 className="bf-service-step-title mb-75">
                                Your brand’s creative partner for identity, design, content and beyond
                            </h2>

                            <div className="row">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="col-lg-4 col-md-4 col-sm-6"
                                    >
                                        <div className="bf-service-step-item p-relative mb-30">
                                            {step.showIcon && (
                                                <span className="bf-service-step-icon d-none d-md-inline-block">
                                                    <ServiceStepArrowIcon />
                                                </span>
                                            )}

                                            <h4 className="mb-15">{step.title}</h4>

                                            <ul>
                                                {step.links.map((link, i) => (
                                                    <li key={i}>
                                                        <Link href="#">{link}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceStep;
