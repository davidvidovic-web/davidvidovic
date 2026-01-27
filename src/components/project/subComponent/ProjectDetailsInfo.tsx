import { projectDt } from "@/types/project-dt";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectDetailsInfoProps {
    portfolio: projectDt;
}

const ProjectDetailsInfo = ({ portfolio }: ProjectDetailsInfoProps) => {
    return (
        <div className="tp-project-details-left-info mb-30">
            {portfolio.websiteUrl && (
                <div className="tp-project-details-left-content mb-35">
                    <Link
                        href={portfolio.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tp-btn tp-btn-border d-inline-flex align-items-center justify-content-center w-100"
                        style={{ gap: '8px' }}
                    >
                        <span>Visit Website</span>
                        <ExternalLink size={18} />
                    </Link>
                </div>
            )}
            {portfolio.client && (
                <div className="tp-project-details-left-content mb-35">
                    <h5 className="tp-project-details-left-title">Client</h5>
                    <span>{portfolio.client}</span>
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