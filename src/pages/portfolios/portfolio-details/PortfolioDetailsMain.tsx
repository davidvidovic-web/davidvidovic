import ProjectDetailsOverview from "@/components/project/subComponent/ProjectDetailsOverview";
import ProjectDetailsInfo from "@/components/project/subComponent/ProjectDetailsInfo";
import ProjectDetailsCounter from "@/components/counter/ProjectDetailsCounter";
import ProjectDetailsProject from "@/components/project/ProjectDetailsProject";
import ScrollSmoothProvider from "@/components/providers/ScrollSmoothProvider";
import CustomCursorProvider from "@/components/providers/CustomCursorProvider";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import SearchArea from "@/components/shared/Search/SearchArea";
import projectData from "@/data/projectData";
import { IdProps } from "@/types/custom-dt";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";

const PortfolioDetailsMain = ({ id }: IdProps) => {
  // Find the portfolio that matches the given ID
  const portfolio = projectData.find((project) => project.id == id);
  
  // Find current portfolio index and get prev/next
  const currentIndex = projectData.findIndex((project) => project.id == id);
  const prevProject = currentIndex > 0 ? projectData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null;

  // If portfolio not found, show error message
  if (!portfolio) {
    return (
      <div className="container pt-160 pb-130">
        <h2>Portfolio not found</h2>
      </div>
    );
  }

  return (
    <ScrollSmoothProvider>
      <CustomCursorProvider>
        <div id="magic-cursor" className="cursor-white-bg">
          <div id="ball"></div>
        </div>

        {/* Global Components */}
        <BackToTop />
        <SearchArea />
        <HeaderThree />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="tp-project-area tp-project-details-spacing pt-160 pb-130">
                <div className="container">
                  <div className="row mb-40">
                    <div className="col-12">
                      <Link
                        href="/#portfolio"
                        className="tp-btn-back d-inline-flex align-items-center"
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: 500,
                          gap: "8px",
                          padding: "8px 0",
                          transition: "all 0.3s ease",
                          textDecoration: "none",
                        }}
                      >
                        <ArrowLeft size={20} />
                        <span>Back to Projects</span>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      {/* project details left info */}
                      <ProjectDetailsInfo portfolio={portfolio} />
                    </div>
                    <div className="col-lg-8">
                      <div className="tp-project-details-right-info mb-30">
                        <span className="tp-project-details-subtittle d-block mb-10">
                          {portfolio.title}
                        </span>
                        <h2 className="tp-project-details-tittle mb-25">
                          {portfolio.mainDescription ||
                            portfolio.description ||
                            "Project Details"}
                        </h2>
                        {portfolio.overview && (
                          <p className="tp-project-details-para mb-40">
                            {portfolio.overview}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="pt-70 pb-95">
                        <div className="tp-project-details-thumb fix">
                          {portfolio.logo ? (
                            <div
                              className="portfolio-logo-container"
                              style={{
                                backgroundColor:
                                  portfolio.backgroundColor || "#ffffff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "60px",
                                borderRadius: "30px",
                                maxHeight: "500px",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                width={800}
                                height={500}
                                className="img-fluid"
                                style={{
                                  maxHeight: "380px",
                                  width: "auto",
                                  objectFit: "contain",
                                }}
                                src={portfolio.logo}
                                alt={portfolio.title}
                              />
                            </div>
                          ) : (
                            <Image
                              data-speed=".8"
                              width={1326}
                              height={603}
                              className="img-fluid w-100 h-auto"
                              src={portfolio.detailsImage || portfolio.image}
                              alt={portfolio.title}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <ProjectDetailsOverview />
                      <div className="tp-project-details-overview-box">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="tp-project-details-overview-left">
                              <h2 className="tp-project-details-overview-title">
                                Results
                              </h2>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <ProjectDetailsCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Navigation */}
                  <div className="row pt-70 pb-70">
                    <div className="col-12">
                      <div className="tp-project-navigation d-flex justify-content-between align-items-center" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px' }}>
                        {prevProject ? (
                          <Link
                            href={`/portfolio-details/${prevProject.id}`}
                            className="tp-project-nav-item d-flex align-items-center"
                            style={{ textDecoration: 'none', gap: '12px' }}
                          >
                            <ChevronLeft size={24} />
                            <div>
                              <span style={{ fontSize: '14px', opacity: 0.6, display: 'block' }}>Previous Project</span>
                              <span style={{ fontSize: '18px', fontWeight: 600 }}>{prevProject.title}</span>
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}
                        
                        {nextProject ? (
                          <Link
                            href={`/portfolio-details/${nextProject.id}`}
                            className="tp-project-nav-item d-flex align-items-center text-end"
                            style={{ textDecoration: 'none', gap: '12px' }}
                          >
                            <div>
                              <span style={{ fontSize: '14px', opacity: 0.6, display: 'block' }}>Next Project</span>
                              <span style={{ fontSize: '18px', fontWeight: 600 }}>{nextProject.title}</span>
                            </div>
                            <ChevronRight size={24} />
                          </Link>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -- Related Projects -- */}
              {/* <ProjectDetailsProject /> */}
            </main>
            <FooterThree />
          </div>
        </div>
      </CustomCursorProvider>
    </ScrollSmoothProvider>
  );
};

export default PortfolioDetailsMain;
