"use client";
import serviceData from "@/data/serviceData";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";

const HomeFourService = () => {
  //display services data
  const displayServiceData = serviceData.slice(5, 9);
  //set theme color
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="bf-service-area pt-155 pb-160"
      style={{ backgroundColor: theme == "dark" ? "#1d1d1f" : "#000" }}
    >
      <div className="container">
        <div className="bf-service-title-wrap mb-45">
          <div className="row flex-column">
            <div className="col-xl-6">
              <div className="bf-service-subtitle-box mb-40">
                <h2 className="bf-section-title fs-75 text-white">
                  digital solutions <br></br> for your business
                </h2>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="bf-service-title-box pt-20 mb-40">
                <p className="bf-service-dec mb-45">
                  I transform complex digital challenges into elegant,
                  functional solutions by prioritizing clarity and purpose.
                </p>
                {/* <Link
                                    href="/service"
                                    className="tp-btn tp-btn-xl bf-btn-white-border d-inline-flex align-items-center"
                                >
                                    <span>
                                        <span className="text-1">View all Services</span>
                                        <span className="text-2">View all Services</span>
                                    </span>
                                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bf-service-accordion-wrap">
          <div className="bf-accordion accordion" id="accordionExample">
            {displayServiceData.map((service, index) => (
              <div key={service.id} className="accordion-items">
                <div className="accordion-header">
                  <div
                    className={`accordion-buttons ${index !== 0 ? "collapsed" : ""}`}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${service.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${service.id}`}
                  >
                    <div className="bf-service-item">
                      <div className="row align-items-center">
                        <div className="col-xxl-3 col-xl-2 col-lg-4 col-md-2 col-2">
                          <div className="bf-service-num">
                            <span>({`0${index + 1}`})</span>
                          </div>
                        </div>
                        <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-10 col-10">
                          <div className="bf-service-top">
                            <div className="bf-service-title">
                              <h4>{service.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="accordion-icon"></span>
                    </div>
                  </div>
                </div>
                <div
                  id={`collapse${service.id}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      <div className="offset-xxl-3 col-xxl-9 offset-xl-2 col-xl-10">
                        <div className="row align-items-center">
                          <div className="col-xl-7 col-lg-8">
                            <div className="bf-service-content d-flex align-items-center">
                              <div className="bf-service-thumb">
                                {service.icon &&
                                  (() => {
                                    const IconComponent = (LucideIcons as any)[
                                      service.icon
                                    ];
                                    return IconComponent ? (
                                      <IconComponent
                                        size={80}
                                        strokeWidth={1.5}
                                        color="#ffffff"
                                      />
                                    ) : null;
                                  })()}
                              </div>
                              <div className="bf-service-content">
                                <p>{service.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="bf-service-category">
                              {service?.categories?.map((cat, idx) => (
                                <span key={idx}>{cat}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourService;
