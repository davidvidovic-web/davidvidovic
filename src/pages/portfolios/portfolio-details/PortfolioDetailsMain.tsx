import ProjectDetailsOverview from '@/components/project/subComponent/ProjectDetailsOverview';
import ProjectDetailsInfo from '@/components/project/subComponent/ProjectDetailsInfo';
import ProjectDetailsCounter from '@/components/counter/ProjectDetailsCounter';
import ProjectDetailsProject from '@/components/project/ProjectDetailsProject';
import ScrollSmoothProvider from '@/components/providers/ScrollSmoothProvider';
import CustomCursorProvider from '@/components/providers/CustomCursorProvider';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/shared/Search/SearchArea';
import CommonFooter from '@/layouts/footers/CommonFooter';
import CommonHeader from '@/layouts/headers/CommonHeader';
import projectData from '@/data/projectData';
import { IdProps } from '@/types/custom-dt';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioDetailsMain = ({ id }: IdProps) => {
    // Find the portfolio that matches the given ID
    const portfolio = projectData.find((project) => project.id == id);
    
    return (
            <ScrollSmoothProvider>
                <CustomCursorProvider>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <CommonHeader spacingCls="mt-20" customCls="tp-main-menu-2" />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <div className="tp-project-area tp-project-details-spacing pt-160 pb-130">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                {/* project details left info */}
                                                <ProjectDetailsInfo />
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="tp-project-details-right-info mb-30">
                                                    <span className="tp-project-details-subtittle d-block mb-10">{portfolio?.title}</span>
                                                    <h2 className="tp-project-details-tittle mb-25"><span>As a relatively new plugin,</span> it’s
                                                        still expanding its feature set
                                                        and may occasionally</h2>
                                                    <p className="tp-project-details-para mb-40">It’s designed to replace multiple plugins by offering a complete suite  of widgets and templates focused on
                                                        e-commerce functionality. It has 50+ Elementor Widgets, including product grids, quick view, wishlist
                                                        comparison, sale notifications, variation swatches, and more. With 50+  Built-in pre-made templates
                                                        and 10+ important modules, you will get a  full experience of building WooCommerce</p>
                                                    <Link href="#" className="tp-btn tp-btn-xl d-none d-md-inline-flex align-items-center">
                                                        <span>
                                                            <span className="text-1">View website</span>
                                                            <span className="text-2">View website</span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="pt-70 pb-95">
                                                    <div className="tp-project-details-thumb fix">
                                                        <Image data-speed=".8" width={1326} height={603} className="img-fluid w-100 h-auto"
                                                            src="/assets/img/portfolio/details/thumb.jpg" alt="thumb" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <ProjectDetailsOverview />
                                                <div className="tp-project-details-overview-box">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="tp-project-details-overview-left">
                                                                <h2 className="tp-project-details-overview-title">Results</h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <ProjectDetailsCounter />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* -- Related Projects -- */}
                                <ProjectDetailsProject />
                            </main>
                            <CommonFooter />
                        </div>
                    </div>
                </CustomCursorProvider>
            </ScrollSmoothProvider>
    );
};

export default PortfolioDetailsMain;