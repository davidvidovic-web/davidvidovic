import projectData from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';

const HomeProject = () => {
    // Display only the first four projects
    const displayProjectData = projectData.slice(0, 4);

    return (
        <>
            <div className="tp-project-area pt-55 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-project-tittle-wrap mb-40">
                                <div className="tp-project-subtittle d-flex justify-content-between mb-30">
                                    <span>Featured work©</span>
                                    <span>Creative Development</span>
                                </div>
                                <h2 className="tp-project-tittle reveal-text text-center">Featured work©</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-section-border"></div>
                <div className="tp-project-thumb-wrap pt-85">
                    <div className="container">
                        <div className="row gx-100">
                            {displayProjectData.map((project) => (
                                <div key={project.id} className="col-lg-6 col-md-6">
                                    <div className="tp-project-item tp-btn-switch-hover mb-60">
                                        <div className="tp-project-thumb p-relative fix mb-25" data-cursor="View<br>Details">
                                            <Link className="cursor-hide" href={`/portfolio-details/${project.id}`}>
                                                <Image
                                                    width={613}
                                                    height={613}
                                                    className="w-100 img-fluid w-100 h-auto"
                                                    src={project.image}
                                                    alt={project.title}
                                                />
                                                <span className="tp-project-brand">{project.category}</span>
                                            </Link>
                                        </div>
                                        <div className="tp-project-content d-flex justify-content-between flex-wrap">
                                            <h5 className="tp-project-item-tittle mr-10">
                                                <Link className="tp-btn-switch" href={`/portfolio-details/${project.id}`}>
                                                    <span>
                                                        <span className="text-1">{project.title}</span>
                                                        <span className="text-2">{project.title}</span>
                                                    </span>
                                                </Link>
                                            </h5>
                                            <span className="tp-project-dates">{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-12">
                                <div className="tp-project-btn text-center">
                                    <Link href="/portfolio" className="tp-btn d-inline-flex align-items-center">
                                        <span>
                                            <span className="text-1">View all Showcases</span>
                                            <span className="text-2">View all Showcases</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProject;