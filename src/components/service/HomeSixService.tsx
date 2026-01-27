
import serviceData from "@/data/serviceData";
import { ServiceArrowIcon } from "@/svg";
import Link from "next/link";

const HomeSixService = () => {
    //display services data
    const displayServiceData = serviceData.slice(9, 15);

    return (
        <div
            className="bf-service-area bf-service-3-rounded pt-150 pb-160 mt-30"
            style={{ backgroundColor: "#151515" }}
        >
            <div className="container container-1320">
                {/* Heading Section */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bf-service-heading mb-60">
                            <h3
                                className="bf-section-title-3 text-white mb-20"
                            >
                                Experience
                            </h3>
                            <p className="bf-service-3-dec">
                                Where have I worked?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Items */}
                {displayServiceData.map((service) => (
                    <div className="bf-service-item-3 fix" key={service.id}>
                        <div className="row gx-0">
                            {/* Left Side - Title */}
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center">
                                    <div className="bf-service-item-3-text" style={{ opacity: '1 !important', transform: 'translateX(0) !important' } as React.CSSProperties}>
                                        <h4 className="bf-service-item-3-title">
                                            {service.link ? (
                                                <Link className="common-underline" href={service.link} target="_blank" rel="noopener noreferrer">
                                                    {service.title}
                                                </Link>
                                            ) : (
                                                <span>{service.title}</span>
                                            )}
                                        </h4>
                                        {service.date && (
                                            <p className="text-white-50 mt-2 mb-0" style={{ fontSize: '14px' }}>{service.date}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Arrow + Tags */}
                            <div className="col-lg-6">
                                <div className="bf-service-item-3-wrapper p-relative fix">
                                    {service.link && (
                                        <div className="bf-service-item-3-btn">
                                            <Link href={service.link} target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <ServiceArrowIcon />
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HomeSixService;