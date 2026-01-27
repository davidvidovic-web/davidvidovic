import { BrandStrategyIcon, SpiralIcon, UiUxDesignIcon } from "@/svg/CategoriesIcon";
import Image from "next/image";

const ServiceAbout = () => {
    return (
        <div className="bf-about-4-area pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bf-about-4-content mr-110">
                            <span className="mb-35 d-inline-block">
                                <SpiralIcon />
                            </span>
                            <h2 className="bf-about-4-title mb-145">A creative agency built
                                for next-generation
                                brands</h2>
                            <div className="row gx-20">
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-4-item mb-20">
                                        <span className="bf-about-4-icon mb-55 d-inline-block">
                                            <BrandStrategyIcon />
                                        </span>
                                        <h3 className="bf-about-4-item-title mb-10">Brand strategy</h3>
                                        <p className="bf-about-4-dec">Brand identity design a
                                            the have to successes
                                            whether you breath</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="bf-about-4-item mb-20">
                                        <span className="bf-about-4-icon mb-55 d-inline-block">
                                            <UiUxDesignIcon />
                                        </span>
                                        <h3 className="bf-about-4-item-title mb-10">Ui/Ux Design</h3>
                                        <p className="bf-about-4-dec">Brand identity design a
                                            the have to successes
                                            whether you breath</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bf-about-4-thumb mb-30">
                            <Image className="w-100 h-auto" width={645} height={720} src="/assets/img/update/about/about-4/thumb.jpg" alt="about thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;