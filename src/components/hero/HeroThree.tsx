import Image from 'next/image';
import EmailForm from '../form/EmailForm';
import { TextCircleIcon } from '@/svg';

const HeroThree = () => {
    return (
        <div className="tp-hero-area tp-hero-spacing">
            <div className="container p-relative z-index-1">
                <Image className="tp-hero-3-shape w-100 h-auto"
                    width={1350} height={880} src="/assets/img/hero/hero-3/line-bg.png" alt="Line Background" />
                <div className="row">
                    <div className="col-lg-10">
                        <div className="tp-hero-3-content mb-60 mb-25">
                            <div className="tp-hero-3-thumb mb-35">
                                <Image width={160} height={126} src="/assets/img/hero/hero-3/thumb.jpg" alt="Hero Thumb" />
                            </div>
                            <h2 className="tp-hero-3-tittle">
                                Driven by imagination and innovation,<br /> I’m growing as a web designer every day.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-2 text-lg-end">
                        <div className="tp-hero-3-text-rotate mb-20 p-relative d-inline-block">
                            <span className="tp-live-anim-spin d-inline-block">
                                <TextCircleIcon />
                            </span>
                            <Image width={62} height={62} className="tp-hero-3-icon s" src="/assets/img/hero/hero-3/shape.png" alt="Shape Icon" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-hero-3-form mb-20">
                            <p className="tp-hero-3-para">
                                Be the first to get it for only $5 <br /> just leave your email below!
                            </p>
                            <EmailForm />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="tp-hero-3-para-2 mt-10 mb-30">
                            <p>
                                As a freelancer, I’m driven by a passion for crafting eye-catching designs that leave a lasting impact. With<br />
                                every project, I aim to blend creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroThree;
