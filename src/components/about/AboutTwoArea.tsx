import { AboutUsIcon } from "@/svg";
import Image from "next/image";

const AboutTwoArea = () => {
    return (
        <div className="bf-about-area bf-about-us-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-about-us-hero">
                            <h2 className="bf-about-us-title mb-30">Fueling Minds<br /> Inspiring Designs..</h2>
                            <div className="bf-about-us-dec-wrap">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <span className="bf-about-us-subtitle">About Us
                                           <AboutUsIcon/>
                                        </span>
                                    </div>
                                    <div className="col-lg-7 col-md-8">
                                        <p className="bf-about-us-dec">An independent web design and branding agency
                                            in Manchester set up in 2012 who care, build relationships,
                                            have industry experience, and win awards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bf-about-us-gif text-center pt-40">
                                <Image className="w-100 h-auto"  width={730} height={395} src="https://html.aqlova.com/videos/bfolio/about.gif" alt="about gif image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwoArea;