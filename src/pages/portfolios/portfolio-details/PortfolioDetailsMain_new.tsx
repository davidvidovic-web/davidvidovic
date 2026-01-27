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
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";

const PortfolioDetailsMain = ({ id }: IdProps) => {
  // Find the portfolio that matches the given ID
  const portfolio = projectData.find((project) => project.id == id);

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
                          {portfolio.mainDescription || portfolio.description || "Project Details"}
                        </h2>
                        {portfolio.overview && (
                          <p className="tp-project-details-para mb-40">
                            {portfolio.overview}
                          </p>
                        )}
                        {portfolio.websiteUrl && (
                          <Link
                            href={portfolio.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tp-btn tp-btn-xl d-none d-md-inline-flex align-items-center"
                          >
                            <span>
                              <span className="text-1">View website</span>
                              <span className="text-2">View website</span>
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="pt-70 pb-95">
                        <div className="tp-project-details-thumb fix">
                          <Image
                            data-speed=".8"
                            width={1326}
                            height={603}
                            className="img-fluid w-100 h-auto"
                            src={portfolio.detailsImage || portfolio.image}
                            alt={portfolio.title}
                          />
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
                </div>
              </div>

              {/* -- Related Projects -- */}
              <ProjectDetailsProject />
            </main>
            <FooterThree />
          </div>
        </div>
      </CustomCursorProvider>
    </ScrollSmoothProvider>
  );
};

export default PortfolioDetailsMain;
