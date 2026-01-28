import { projectDt } from '@/types/project-dt';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PortFolioSingleCardProps {
    project: projectDt;
}

const PortFolioSingleCard: React.FC<PortFolioSingleCardProps> = ({ project }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <Link 
                className="cursor-hide" 
                href={`/portfolio/${project.slug || project.id}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
                <div className="tp-project-item tp-btn-switch-hover mb-60">
                    <div className="tp-project-thumb p-relative fix mb-25" data-cursor="Explore">
                        <Image width={613} height={613} className="img-fluid w-100 h-auto" src={project.image} alt={project.title} />
                    </div>
                    <div className="tp-project-content d-flex justify-content-between flex-wrap">
                        <h5 className="tp-project-item-tittle mr-10">
                            <span className="tp-btn-switch">
                                <span>
                                    <span className="text-1">{project.title}</span>
                                    <span className="text-2">{project.title}</span>
                                </span>
                            </span>
                        </h5>
                        <span className="tp-project-dates">{project.year}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PortFolioSingleCard;