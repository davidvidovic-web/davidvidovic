"use client"
import projectsData from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';

const HomeTwoProject = () => {
    // Display only projects from index 4 to 7
    const displayProjectData = projectsData.slice(4, 8);

    return (
        <div className="tp-project-area pt-160 pb-130 tp-white-bg">
            <div className="container-fluid container-1710">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-project-2-wrap des-portfolio-wrap">
                            {displayProjectData.map((project) => (
                                <div
                                    key={project.id}
                                    className="tp-project-2-item p-relative mb-30 des-portfolio-panel"
                                    data-cursor="View<br>Details"
                                >
                                    <Link href={`/portfolio-details/${project.id}`} className="cursor-hide">
                                        <div className="tp-project-2-thumb">
                                            <Image width={1686} height={793} className="img-fluid w-100 h-auto"
                                                src={project.image} alt={project.title} />
                                        </div>
                                        <div className="tp-project-2-content d-flex justify-content-between align-items-end">
                                            <div className="tp-project-2-tittle-wrap mr-30">
                                                <div className="tp-project-2-cetagory mb-10">
                                                    {project?.categories?.map((cat, idx) => (
                                                        <span key={idx}>{cat}</span>
                                                    ))}
                                                </div>
                                                <h3 className="tp-project-2-tittle">{project.title}</h3>
                                            </div>
                                            <span className="tp-project-2-dates d-inline-block mb-10">{project.year}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTwoProject;
