import Image from 'next/image';

const HeroOne = () => {
    return (
        <div className="tp-hero-area tp-hero-spacing p-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-hero-tittle-wrap mb-25">
                            <h2 className="tp-hero-tittle"><span>Creating bold visual</span> narratives that inspire and engage.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-hero-video text-lg-end mb-30">
                            <video loop muted autoPlay>
                                <source src="https://html.aqlova.com/videos/bfolio/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tp-hero-cetagory d-flex fix">
                            <div className="animate-right d-flex align-items-center">
                                <span>Design</span>
                                <span>Branding</span>
                            </div>
                            <div className="animate-right d-flex align-items-center">
                                <span>Development</span>
                                <span>Branding</span>
                            </div>
                            <div className="animate-right d-flex align-items-center">
                                <span>Portfolio</span>
                                <span>Agency</span>
                            </div>
                            <div className="animate-right d-flex align-items-center">
                                <span>Portfolio</span>
                                <span>Agency</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="tp-hero-bigtext">
                            <h2 className="d-flex">Bf <span className="p-relative shape-2">o
                                <svg width="121" height="59" viewBox="0 0 121 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M73.7057 0.781014L120.09 58.3117L67.9817 23.5732L0.309197 28.2302L73.7057 0.781014Z" fill="currentColor" />
                                </svg>
                            </span> lio <span className="shape">@</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-circle d-none">
                <Image className="circle-1" width={150} height={150} src="/assets/img/hero/hero-bg-1.svg" alt="hero background" />
                <Image className="circle-2" width={150} height={150} src="/assets/img/hero/hero-bg-2.svg" alt="hero background" />
            </div>
        </div>
    );
};

export default HeroOne;