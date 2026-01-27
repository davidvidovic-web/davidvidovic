import PortFolioSingleCard from './subComponent/PortFolioSingleCard';
import projectData from '@/data/projectData';
import Link from 'next/link';

const HomeThreeProject = () => {
    // Display only projects with IDs 9 to 12 (index 8 to 11)
    const displayProjectData = projectData.slice(8, 12);

    return (
        <div className="tp-project-area pt-50 pb-145">
            <div className="container">
                <div className="row gx-100">
                    <div className="col-12">
                        <h2 className="tp-project-tittle reveal-text text-center mb-60">
                            Featured work©
                        </h2>
                    </div>

                    {displayProjectData.map((project, idx) => (
                        <PortFolioSingleCard key={idx} project={project} />
                    ))}

                    <div className="col-12">
                        <div className="tp-project-btn text-center">
                            <Link href="/portfolio" className="tp-btn tp-btn-xl d-inline-flex align-items-center">
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
    );
};

export default HomeThreeProject;
