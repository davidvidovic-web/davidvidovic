import Image from 'next/image';
import Link from 'next/link';

const HeroTwo = () => {
    return (
        <div className="tp-hero-area tp-hero-2-spacing p-relative">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-12">
                        <div className="tp-hero-2-tittle-wrap mb-35">
                            <h2 className="tp-hero-2-tittle"><span>Bringing ideas</span> to life through design</h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-hero-2-content mb-30">
                            <p className="mb-35">Two Hands exists to make small teams<br />
                                look like big deals, without the bloated<br />
                                agency fees.</p>
                            <div className="tp-about-btn">
                                <Link href="/about-me" className="tp-btn d-inline-flex align-items-center mr-20 mb-10">
                                    <span>
                                        <span className="text-1">About me</span>
                                        <span className="text-2">About me</span>
                                    </span>
                                </Link>
                                <Link href="/portfolio" className="tp-btn tp-btn-border mb-10 d-inline-flex align-items-center">
                                    <span>
                                        <span className="text-1">Discover Work</span>
                                        <span className="text-2">Discover Work</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-hero-video tp-hero-2-video text-lg-end mb-30">
                            <video loop muted autoPlay>
                                <source src="https://html.aqlova.com/videos/bfolio/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-circle tp-hero-circle-2 d-none">
                <Image className="circle-1" width={150} height={150} src="/assets/img/hero/hero-bg-1.svg" alt="hero background" />
                <Image className="circle-2" width={150} height={150} src="/assets/img/hero/hero-bg-2.svg" alt="hero background" />
            </div>
        </div>
    );
};

export default HeroTwo;