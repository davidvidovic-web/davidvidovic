"use client";
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
import { useRouter } from "next/navigation";
import { ProjectContent } from "@/utils/getProjectContent";
import MarkdownContent from "@/components/shared/MarkdownContent";

interface PortfolioDetailsMainProps extends IdProps {
  projectContent?: ProjectContent | null;
}

const PortfolioDetailsMain = ({
  id,
  projectContent,
}: PortfolioDetailsMainProps) => {
  const router = useRouter();
  // Find the portfolio that matches the given slug or ID
  const portfolio = projectData.find(
    (project) => project.slug === id || project.id == id,
  );

  console.log("Portfolio:", portfolio);
  console.log("Portfolio counters:", portfolio?.counters);
  console.log("ProjectContent counters:", projectContent?.counters);

  // Find current portfolio index and get prev/next (only among projects with slugs)
  const portfolioProjects = projectData.filter((project) => project.slug);
  const currentIndex = portfolioProjects.findIndex(
    (project) => project.slug === id || project.id == id,
  );
  const prevProject =
    currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : null;

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
                    <div className="col-12"></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="mb-15">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/#project-${portfolio?.slug || id}`);
                          }}
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
                          <span>Back</span>
                        </button>
                      </div>

                      {/* project details left info */}
                      <ProjectDetailsInfo portfolio={portfolio} />
                    </div>
                    <div className="col-lg-8">
                      <div className="pb-50">
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
                                maxHeight: "200px",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                width={800}
                                height={500}
                                className="img-fluid"
                                style={{
                                  maxHeight: "180px",
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
                      {projectContent?.content ? (
                        <div className="tp-project-details-right-info mb-30">
                          <MarkdownContent content={projectContent.content} />
                          {portfolio.counters &&
                            portfolio.counters.length > 0 && (
                              <div className="mt-50">
                                <ProjectDetailsCounter
                                  counters={portfolio.counters}
                                />
                              </div>
                            )}
                        </div>
                      ) : (
                        <>
                          {portfolio.objective && (
                            <div className="tp-project-details-right-info mb-30">
                              <h2 className="tp-project-details-tittle mb-25">
                                Objective
                              </h2>
                              <p
                                className="tp-project-details-para mb-40"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                {portfolio.objective}
                              </p>
                            </div>
                          )}
                          {portfolio.process && (
                            <div className="tp-project-details-right-info mb-30">
                              <h2 className="tp-project-details-tittle mb-25">
                                Process
                              </h2>
                              <p
                                className="tp-project-details-para mb-40"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                {portfolio.process}
                              </p>
                            </div>
                          )}
                          {portfolio.results && (
                            <div className="tp-project-details-right-info mb-30">
                              <h2 className="tp-project-details-tittle mb-25">
                                Results
                              </h2>
                              <p
                                className="tp-project-details-para mb-40"
                                style={{ whiteSpace: "pre-line" }}
                              >
                                {portfolio.results}
                              </p>
                              {portfolio.counters && (
                                <ProjectDetailsCounter
                                  counters={portfolio.counters}
                                />
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Navigation */}
                  <div className="row pt-70 pb-70">
                    <div className="col-12">
                      <div
                        className="tp-project-navigation d-flex justify-content-between align-items-center"
                        style={{
                          borderTop: "1px solid rgba(0,0,0,0.1)",
                          paddingTop: "40px",
                        }}
                      >
                        {prevProject ? (
                          <Link
                            href={`/portfolio/${prevProject.slug || prevProject.id}`}
                            className="tp-project-nav-item d-flex align-items-center"
                            style={{ textDecoration: "none", gap: "12px" }}
                          >
                            <ChevronLeft size={24} />
                            <div>
                              <span
                                style={{
                                  fontSize: "14px",
                                  opacity: 0.6,
                                  display: "block",
                                }}
                              >
                                Previous Project
                              </span>
                              <span
                                style={{ fontSize: "18px", fontWeight: 600 }}
                              >
                                {prevProject.title}
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}

                        {nextProject ? (
                          <Link
                            href={`/portfolio/${nextProject.slug || nextProject.id}`}
                            className="tp-project-nav-item d-flex align-items-center text-end"
                            style={{ textDecoration: "none", gap: "12px" }}
                          >
                            <div>
                              <span
                                style={{
                                  fontSize: "14px",
                                  opacity: 0.6,
                                  display: "block",
                                }}
                              >
                                Next Project
                              </span>
                              <span
                                style={{ fontSize: "18px", fontWeight: 600 }}
                              >
                                {nextProject.title}
                              </span>
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
