import { LocationIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <div className="tp-about-area tp-about-spacing p-relative pb-170">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="tp-about-details mr-100 mb-30">
                            <h2 className="tp-about-details-tittle">
                                Hi, I’m Orion Smith, a web designer with 12
                                years of experience crafting modern, high-
                                performing websites that help businesses
                                stand out.{" "}
                                <span>
                                    My passion lies in creating digital
                                    experiences that are not only visually
                                    stunning but also user-friendly and
                                    results-driven.
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-about-details-thumb mb-40">
                            <Image className='w-100 h-auto' width={420} height={450} src="/assets/img/about/thumb.jpg" alt="About Orion Smith" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tp-about-bottom d-flex justify-content-between align-items-center pt-40">
                            <Link
                                href="/contact"
                                className="tp-btn tp-btn-border d-inline-flex align-items-center mb-20"
                            >
                                <span>
                                    <span className="text-1">
                                        Contact Me
                                    </span>
                                    <span className="text-2">
                                        Contact Me
                                    </span>
                                </span>
                            </Link>
                            <div className="tp-about-bottom-border mb-20"></div>
                            <span className="tp-about-bottom-location mb-20">
                                <LocationIcon />{" "}
                                Based in Australia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
