import projectData from '@/data/projectData';
import { AwardArrowIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';


const HomeFivePorfolioArea = () => {
    //display portfolio data
    const displayPortfolioData = projectData.slice(16, 20);

    return (
        <div className="bf-portfolio-area bf-portfolio-vp-lg-spacing pt-120 pb-40">
            <div className="container-fluid container-1830">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-portfolio-title-wrap text-center">
                            <h2 className="bf-portfolio-vp-maintitle">work</h2>
                        </div>
                    </div>
                </div>
                {
                    displayPortfolioData.map((project) => (
                        <div className="bf-portfolio-vp-rotate-wrap" key={project.id}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="bf-portfolio-vp-item bf-portfolio-vp-rotate-item-1 mb-120">
                                        <Link href={`/portfolio-details/${project.id}`} className="bf-portfolio-vp-inner"
                                            style={{ backgroundColor: `${project.color}` }}>
                                            <span className="bf-portfolio-vp-icon">
                                                <AwardArrowIcon strokeColor='black' />
                                            </span>
                                            <div className="bf-portfolio-vp-content">
                                                <div className="bf-portfolio-vp-tag mb-10">
                                                    {
                                                        project?.categories?.map((category, index) => (
                                                            <span key={index}>{category}</span>
                                                        ))
                                                    }
                                                </div>
                                                <h2 className="bf-portfolio-vp-title mb-0">CINEMATIC</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="bf-portfolio-vp-item bf-portfolio-vp-rotate-item-2 mb-120">
                                        <Link href={`/portfolio-details/${project.id}`}
                                            className="bf-portfolio-vp-inner bf-portfolio-vp-thumb"
                                            style={{ backgroundColor: `${project.colorCodeTwo ? project.colorCodeTwo : project.color}` }}>
                                            <Image width={868} height={510} src={project.image} alt="portfolio image" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeFivePorfolioArea;