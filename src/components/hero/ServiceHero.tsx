import Image from "next/image";

const ServiceHero = () => {
    return (
        <div className="bf-service-hero-area bf-service-hero-spacing 
        fix bg-position p-relative bf-hero-anime-area" style={{backgroundImage:`url(assets/img/update/service/main/bg.jpg)`}}>
            <h2 className="bf-service-hero-bottom-title bf-item-anime-inner marque">Innovate</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="bf-service-hero-content">
                            <span className="bf-service-hero-subtitle d-inline-block mb-10">Our services</span>
                            <h2 className="bf-service-hero-title">We turn ideas into visual masterpieces</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bf-service-hero-gif pt-145">
                            <Image width={422} height={228} src="https://html.aqlova.com/videos/bfolio/service.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;