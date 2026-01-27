"use client"
import { projectAnimation } from '@/hooks/useGsapAnimation';
import projectsData from '@/data/projectData';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const ProjectDetailsProject = () => {
    // Display a subset of project data (projects 5 to 8)
    const displayProjectData = projectsData.slice(4, 8);

    // Apply GSAP animations when the component mounts
    useGSAP(() => {
        const timer = setTimeout(() => {
            projectAnimation()
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <div className="tp-project-area pb-130 tp-white-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-project-2-wrap des-portfolio-wrap">
                            {displayProjectData.map((project) => (
                                <div
                                    key={project.id}
                                    className="tp-project-2-item p-relative mb-30 des-portfolio-panel"
                                >
                                    <div className="tp-project-2-thumb">
                                        <Image width={1326} height={624} className="img-fluid w-100 h-auto" src={project.image} alt={project.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsProject;
