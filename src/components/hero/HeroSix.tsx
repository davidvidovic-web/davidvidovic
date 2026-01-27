import Image from "next/image";
import Link from "next/link";

const HeroSix = () => {
    return (
        <div className="bf-hero-area bf-hero-3-spacing bf-hero-anime-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-hero-3-wrap">
                            <div className="bf-hero-3-title">
                                <span className="bf-item-anime-md marque d-inline-block">Craft</span>{" "}
                                <div className="bf-hero-3-title-video d-none d-xl-inline-block">
                                    <video loop muted autoPlay playsInline>
                                        <source src="https://html.aqlova.com/videos/bfolio/video-4.mp4" type="video/mp4" />
                                    </video>
                                </div>{" "}
                                <span className="bf-item-anime marque d-inline-block">CREATIVE</span>
                                <div className="spacing pr-140 d-inline-block p-relative">
                                    <span className="bf-item-anime-md marque d-inline-block">experien­ces</span>
                                    <Image width={290} height={290} className="bf-hero-3-thumb d-none d-xl-inline-block"
                                        src="/assets/img/update/hero/hero-3/thumb-2.jpg" alt="hero thumb" />
                                </div>
                                <span className="bf-item-anime marque d-inline-block">that</span>
                                <div className="spacing pr-35 d-inline-block p-relative">
                                    <span className="bf-item-anime-md marque d-inline-block">Shape</span>
                                    <Image width={240} height={160} className="bf-hero-3-thumb-2 d-none d-xl-inline-block"
                                        src="/assets/img/update/hero/hero-3/thumb.jpg" alt="hero thumb" />
                                </div>
                                <span className="bf-item-anime marque d-inline-block">TOMMOROW.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-3">
                        <div className="bf-rounded-btn-wrap text-md-end mt-50 mr-185 mb-30">
                            <div className="btn_wrapper d-inline-block">
                                <Link href="/about-me" className="bf-btn-rounded btn-item">
                                    Discover<br /> Work
                                    <i className="bf-btn-circle-dot"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-9">
                        <div className="bf-hero-3-dec mb-30">
                            <p>Bfolio is a strategic design partner to bold<br />
                                digital brands. We join your team, co-build<br />
                                your thing, and help bring it to the world.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid container-1860">
                <div className="bf-hero-3-video-wrap pt-125">
                    <video loop muted autoPlay playsInline>
                        <source src="https://html.aqlova.com/videos/bfolio/video-3.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default HeroSix;