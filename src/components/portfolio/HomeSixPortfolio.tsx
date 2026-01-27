import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

const HomeSixPortfolio = () => {
    return (
        <div className="bf-portfolio-3-area pt-160 title-box">
            <div className="container-fluid container-1650">
                <div className="bf-portfolio-3-title-wrap mb-120">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-9">
                            <div className="bf-portfolio-3-title-box">
                                <h2 className="bf-portfolio-3-sectitle mb-45">
                                    <span className="tp-text-right-scroll d-inline-block reveal-text">recent</span> <br />
                                    <span className="reveal-text">work</span>
                                </h2>
                                <p>
                                    In the creative wilderness,<br />
                                    our work becomes the beacon<br />
                                    clients grow to love.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="bf-portfolio-3-shape mt-20">
                                <Image width={442} height={296} src="/assets/img/update/portfolio/port-3/cat.png" alt="cat image" />
                                <div className="bf-portfolio-3-btn pt-90 text-start text-md-end">
                                    <Link href="portfolio" className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center">
                                        <span>
                                            <span className="text-1">Explore Work</span>
                                            <span className="text-2">Explore Work</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bf-portfolio-3-item-wrap">
                    {
                        projectData.slice(24, 27).map((project) => (
                            <div key={project.id} className="bf-portfolio-3-item mb-80">
                                <div className="row align-items-center">
                                    {
                                        project.rightSide === true ?
                                            <>
                                                <div className="col-xl-5 order-xl-0 order-1">
                                                    <div className="bf-portfolio-3-content">
                                                        <h4 className="bf-portfolio-3-title"><Link href={`/portfolio-details/${project.id}`}>{project.title}</Link></h4>
                                                        <span className="mb-50">{project.description}</span>
                                                        <Link href={`/portfolio-details/${project.id}`} className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center">
                                                            <span>
                                                                <span className="text-1">View project</span>
                                                                <span className="text-2">View project</span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-7 order-xl-1 order-0">
                                                    <div className="bf-portfolio-3-thumb item-1 text-end">
                                                        <Image width={936} height={583} src={project.image} alt="portfolio" />
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="col-xl-7">
                                                    <div className="bf-portfolio-3-thumb item-2">
                                                        <Image width={936} height={583} src={project.image} alt="portfolio" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-5">
                                                    <div className="bf-portfolio-3-content pl-200">
                                                        <h4 className="bf-portfolio-3-title"><Link href={`/portfolio-details/${project.id}`}>{project.title}</Link></h4>
                                                        <span className="mb-50">{project.description}</span>
                                                        <Link href={`/portfolio-details/${project.id}`} className="tp-btn tp-btn-border tp-btn-xl d-inline-flex align-items-center">
                                                            <span>
                                                                <span className="text-1">View project</span>
                                                                <span className="text-2">View project</span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeSixPortfolio;