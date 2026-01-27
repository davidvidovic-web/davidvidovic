import FooterOneCopyright from './subComponent/FooterOneCopyright';
import FooterSearchForm from './subComponent/FooterSearchForm';
import Image from 'next/image';
import Link from 'next/link';

const FooterOne = ({ customCls = "", wrapClass = "" }) => {
    return (
        <footer className={`${wrapClass}`}>
            <div className={`tp-footer-area ${customCls} tp-black-bg pt-110`}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 col-md-8">
                            <div className="tp-footer-tittle-wrap p-relative mb-50">
                                <Image width={76} height={80} className="tp-footer-shape d-none d-lg-block" src="/assets/img/footer/shape.png" alt="shape" />
                                <h2 className="tp-footer-top-tittle">Let’s create <span>something</span> together special</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <div className="tp-footer-social mb-70 d-flex justify-content-md-end">
                                <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
                                <span><Link href="#"><i className="fa-brands fa-dribbble"></i></Link></span>
                                <span><Link href="#"><i className="fa-brands fa-behance"></i></Link></span>
                                <span><Link href="#"><i className="fa-brands fa-youtube"></i></Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-middle mb-30">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">London</h5>
                                    <Link className="tp-footer-link" href="#">Germany 785 15h Street<br /> Office 478 Berlin</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="tp-footer-widget tp-footer-border p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Contact</h5>
                                    <div>
                                        <Link className="tp-footer-link" href="tel:+999236542654">+999 23654 2654</Link>
                                    </div>
                                    <div>
                                        <Link className="tp-footer-link" href="mailto:bfolio@help.com">bfolio@help.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="tp-footer-widget tp-footer-subscribe-form mb-40">
                                    <FooterSearchForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer copyright */}
                    <FooterOneCopyright />
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;