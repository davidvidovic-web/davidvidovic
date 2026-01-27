import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
    id: number;
    image: string;
    link: string;
}

const projectItems: ProjectItem[] = [
    {
        id: 1,
        image: "/assets/img/update/portfolio/port-4/portfolio.jpg",
        link: "/portfolio-details",
    },
    {
        id: 2,
        image: "/assets/img/update/portfolio/port-4/portfolio-2.jpg",
        link: "/portfolio-details",
    },
    {
        id: 3,
        image: "/assets/img/update/portfolio/port-4/portfolio-3.jpg",
        link: "/portfolio-details",
    },
];

const ServiceProject = () => {
    return (
        <section className="tp-project-area pt-150 pb-130">
            <div className="container">
                {/* Title Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bf-portfolio-4-title-wrap mb-60 text-center">
                            <h2 className="bf-portfolio-4-title">
                                We’re a creative agency helping brands unlock their potential
                                and build trust through powerful visuals
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-project-2-wrap des-portfolio-wrap">
                            {projectItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="tp-project-2-item p-relative mb-30 des-portfolio-panel"
                                    data-cursor="View<br>Details"
                                >
                                    <Link href={item.link} className="cursor-hide">
                                        <div className="tp-project-2-thumb">
                                            <Image
                                                width={1326}
                                                height={603}
                                                className="img-fluid w-100 h-auto" 
                                                src={item.image}
                                                alt={`Project ${item.id}`}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceProject;
