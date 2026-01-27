import AnimatedCounterTwo from "../shared/Counter/AnimatedCounterTwo";
import Image from "next/image";

const aboutStatsData = [
    {
        percentage: 98,
        text: (<>Clients Satisfied and <br /> Repeating</>),
        suffix:"%"
    },
    {
        percentage: 125,
        text: (<>Projects Completed in <br /> 24 Countries</>),
        suffix:"+"
    },
];

const HomeSixAbout = () => {
    return (
        <div className="bf-about-area pt-140 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bf-about-3-subtile mb-20">
                            <span>About us</span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="bf-about-3-title-wrap mb-20">
                            <h2 className="bf-about-3-title reveal-text">An independent web design and
                                branding agency in Manchester set up
                                2010 who care, build relationships, have
                                industry experience, and win awards.</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-5">
                        <div className="bf-about-3-thumb mb-30">
                            <Image width={256} height={266} src="/assets/img/update/about/abour-3/thumb.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-7">
                        <div className="bf-about-3-thumb-2 pt-60 ml-50 mb-30">
                            <Image width={306} height={400} src="/assets/img/update/about/abour-3/thumb-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bf-about-3-info-wrap pt-90 ml-35">
                            <div className="bf-about-3-avatar">
                                <Image width={140} height={54} className="mb-15" src="/assets/img/update/about/abour-3/avatar.png" alt="" />
                                <p>Driven by a passion for innovation, we specialize in
                                    delivering top-quality design solutions</p>
                            </div>
                            <div className="bf-about-3-count-wrap">
                                <div className="row">
                                    {aboutStatsData.map((item, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="bf-about-3-count-item mb-30">
                                                    <AnimatedCounterTwo cls="bf-about-3-count-title" min={0} max={item.percentage} suffix={item.suffix}/>                 
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSixAbout;