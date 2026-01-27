import { BannerArrowIcon } from "@/svg";

const AboutUsBanner = () => {
    return (
        <div className="bf-banner-area bf-banner-spacing bg-position" style={{ backgroundImage: `url(assets/img/update/banner/banner.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="bf-banner-subtitle mb-40 mt-100">
                            <span>Check quote</span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bf-banner-content mb-40">
                            <span className="d-inline-block mb-40">
                             <BannerArrowIcon/>
                            </span>
                            <h4 className="bf-banner-title mb-45">“Working with Bfolio was different. They
                                didn’t just give us a new logo or a clean
                                website, they gave us a brand we
                                can grow with.</h4>
                            <div className="bf-banner-author-info">
                                <h5 className="mb-0">Harun Or Rashid</h5>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;