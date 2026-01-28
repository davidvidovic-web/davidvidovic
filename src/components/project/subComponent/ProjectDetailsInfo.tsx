import { projectDt } from "@/types/project-dt";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectDetailsInfoProps {
    portfolio: projectDt;
}

const ProjectDetailsInfo = ({ portfolio }: ProjectDetailsInfoProps) => {
    return (
        <div className="tp-project-details-left-info mb-30">
            {portfolio.client && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Client</h5>
                    <span>{portfolio.client}</span>
                </div>
            )}
            {portfolio.websiteUrl && (
                <div className="tp-project-details-left-content mb-35">
                    <Link
                        href={portfolio.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tp-project-visit-link d-inline-flex align-items-center"
                    >
                        <span>Visit Website</span>
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            )}
            {portfolio.role && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Role in project</h5>
                    <span>{portfolio.role}</span>
                </div>
            )}
            {portfolio.services && portfolio.services.length > 0 && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Services</h5>
                    {portfolio.services.map((service, index) => (
                        <span key={index}>{service}</span>
                    ))}
                </div>
            )}
            {portfolio.technologies && portfolio.technologies.length > 0 && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Technologies</h5>
                    {portfolio.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            )}
            {portfolio.year && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Year</h5>
                    <span>{portfolio.year}</span>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailsInfo;