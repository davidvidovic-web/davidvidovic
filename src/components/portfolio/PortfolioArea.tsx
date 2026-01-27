"use client"
import PortFolioSingleCard from '../project/subComponent/PortFolioSingleCard';
import { revealTextAnim } from '@/hooks/useGsapAnimation';
import projectData from '@/data/projectData';
import { useGSAP } from '@gsap/react';

const PortfolioArea = () => {
    // Display only projects with IDs 9 to 12 (index 8 to 11)
    const displayProjectData = projectData.slice(8, 16);

    // GSAP animation for revealing text
    useGSAP(() => {
        const timer = setTimeout(() => {
            revealTextAnim();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <div className="tp-project-area tp-project-spacing pt-160 pb-75">
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
                </div>
            </div>
        </div>
    );
};

export default PortfolioArea;