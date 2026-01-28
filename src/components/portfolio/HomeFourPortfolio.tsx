import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const HomeFourPortfolio = () => {
  // display portfolio data
  const displayPortfolioData = projectData.slice(20, 24);

  return (
    <div id="portfolio" className="bf-portfolio-area bf-portfolio-sticky-area pt-140 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bf-portfolio-wrap text-center">
              <h2 className="bf-portfolio-title bf-portfolio-text-sticky mb-0">
                My work
              </h2>

              <div className="bf-portfolio-wrapper">
                <div className="d-grid">
                  {displayPortfolioData.map((item) => (
                    <div className="grid-item" key={item.id}>
                      <Link
                        id={`project-${item.slug || item.id}`}
                        className="cursor-hide"
                        href={`/portfolio/${item.slug || item.id}`}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                      >
                        <div className="project-item project-style-3 hover-play">
                          <div
                            className="project-item-inner"
                            data-cursor="View<br>Details"
                          >
                            <div className="bf-portfolio-post-thumbnail">
                              <div
                                className="video-container"
                                style={{
                                  backgroundColor:
                                    item.backgroundColor || "#f5f5f5",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  minHeight: "clamp(444px, 60vw, 844px)",
                                  borderRadius: "30px",
                                }}
                              >
                                <Image
                                  width={500}
                                  height={500}
                                  style={{
                                    maxWidth: "80%",
                                    height: "auto",
                                    objectFit: "contain",
                                  }}
                                  src={item.logo || item.image}
                                  alt={item.title}
                                  priority
                                />
                              </div>
                            </div>

                            <div className="bf-portfolio-content">
                              <span 
                                className="bf-portfolio-vp-text-top"
                                style={{ color: item.textColor }}
                              >
                                {item.title}
                              </span>
                              <span 
                                className="bf-portfolio-vp-text-middle"
                                style={{ color: item.textColor }}
                              >
                                {item.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourPortfolio;
