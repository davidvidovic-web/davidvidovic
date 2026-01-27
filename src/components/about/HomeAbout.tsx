import { brandData, experienceData } from '@/data/aboutData';
import ShapeIcon from '@/svg/ShapeIcons';
import Image from 'next/image';
import Link from 'next/link';

const HomeAbout = () => {
    return (
        <>
            <div className="tp-about-area pt-160 pb-155">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-lg-3 text-center text-lg-start">
                            <div className="tp-about-circale d-inline-block p-relative mb-30">
                                <Image className="tp-live-anim-spin"
                                    width={144} height={144}
                                    src="/assets/img/about/awares-text.png" alt="text image" />
                                <span><ShapeIcon /></span>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tp-about-content ml-80 mb-20">
                                <h2 className="tp-section-tittle reveal-text mb-50">
                                    <span className="spacing"></span> Helping brand achieve digital mastery of creative innovation and strategic planning
                                </h2>
                                <div className="tp-about-btn">
                                    <Link href="/about-me" className="tp-btn d-inline-flex align-items-center mr-20 mb-10">
                                        <span>
                                            <span className="text-1">About me</span>
                                            <span className="text-2">About me</span>
                                        </span>
                                    </Link>
                                    <Link href="/portfolio" className="tp-btn tp-btn-border mb-10 d-inline-flex align-items-center">
                                        <span>
                                            <span className="text-1">Discover Our Work</span>
                                            <span className="text-2">Discover Our Work</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {experienceData.map((exp, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="tp-about-exp-item p-relative mb-30">
                                    <span className="tp-about-exp-date mb-15 d-inline-block">{exp.date}</span>
                                    <span className="tp-about-exp-count">{exp.count}</span>
                                    <div className="tp-about-exp-tittle-wrap">
                                        <h2
                                            className="tp-about-exp-tittle mb-50"
                                            dangerouslySetInnerHTML={{ __html: exp.title }}
                                        />
                                        <div className="tp-about-exp-meta d-flex">
                                            {exp.meta.map((m, i) => (
                                                <span key={i}>{m}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="tp-about-brands-wrap pt-40">
                                <p className="tp-about-para mb-40">Trusted by these amazing companies</p>
                                <div className="tp-about-brands">
                                    {brandData.map((brand, index) => (
                                        <Link href="#" key={index}>
                                            <Image style={{ width: "100%", height: "auto" }} className="img-fluid w-100 h-auto" width={100} height={24} src={brand} alt={`brand ${index + 1}`} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tp-section-border"></div>
        </>
    );
};

export default HomeAbout;
