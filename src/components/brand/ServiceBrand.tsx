import Image from "next/image";

const ServiceBrand = () => {
    return (
        <div className="bf-brands-area pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bf-brands-wrap">
                            <div className="bf-brands-item-wrap">
                                <div className="row gx-5">
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={105} height={32} src="/assets/img/update/brands/logo.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={114} height={32} src="/assets/img/update/brands/logo-2.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={128} height={30} src="/assets/img/update/brands/logo-3.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={107} height={26} src="/assets/img/update/brands/logo-4.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={125} height={28} src="/assets/img/update/brands/logo-5.png" alt="brand" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                                        <div className="bf-brands-item mb-5">
                                            <Image width={116} height={27} src="/assets/img/update/brands/logo-6.png" alt="brand" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBrand;