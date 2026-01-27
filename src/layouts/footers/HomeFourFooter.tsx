import { getCurrentYear } from "@/utils/getCurrentYear";
import Image from "next/image";
import Link from "next/link";

const HomeFourFooter = () => {
    return (
        <footer>
            <div className="des-footer-wrap bg-position" style={{ backgroundImage: `url(/assets/img/update/footer/bg.jpg)` }}>
                <div className="container-fluid">
                    <div className="des-footer-area des-footer-bg text-center">
                        <div className="des-footer-top d-flex align-items-center justify-content-between">
                            <span>Creative Design Agency</span>
                            <div className="des-footer-logo">
                                <Link href="/"><Image width={140} height={32} src="/assets/img/logo/logo-2.png" alt="logo" /></Link>
                            </div>
                            <span>Based in London</span>
                        </div>
                        <div className="des-footer-middle">
                            <span>Contact us and let’s bring your vision to life</span>
                            <h3 className="des-footer-title"><Link className="text-scale-anim" href="/contact">Contact Us</Link></h3>
                        </div>
                        <div className="des-footer-bottom d-flex align-items-center justify-content-between">
                            <span>Powered by Aqlova</span>
                            <div className="des-footer-bottom-social text-center">
                                <Link href="#">Twitter</Link>{" "}
                                <Link href="#">Instagram</Link>{" "}
                                <Link href="#">Behance</Link>{" "}
                                <Link href="#">Dribbble</Link>
                            </div>
                            <span>Copyright © {getCurrentYear()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HomeFourFooter;