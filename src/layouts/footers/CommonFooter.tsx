"use client"
import { getCurrentYear } from '@/utils/getCurrentYear';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const CommonFooter = ({ bgColor = "", wrapClass = "tp-footer-2-wrap", footerSpacingCls = "" }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <footer className={`${footerSpacingCls}`}>
            <div className={`tp-footer-area ${wrapClass} grey-bg pt-155`} style={{ backgroundColor: theme === "dark" ? "#151515" : bgColor }}>
                <div className="container">
                    <div className="tp-footer-middle mb-30">
                        <div className="row">
                            <div className="col-xxl-5 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Stay connected</h5>
                                    <Link className="tp-footer-email" href="mailto:help@gmail.com">help@gmail.com</Link>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget mb-40">
                                    <h5 className="tp-footer-tittle mb-15">London</h5>
                                    <Link className="tp-footer-link" href="#">Germany 785 15h Street<br /> Office 478 Berlin</Link>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget ml-40  p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-15">Contact</h5>
                                    <div>
                                        <Link className="tp-footer-link" href="tel:+999236542654">+999 23654 2654</Link>
                                    </div>
                                    <div>
                                        <Link className="tp-footer-link" href="mailto:bfolio@help.com">bfolio@help.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                <div className="tp-footer-widget ml-80 p-relative mb-40">
                                    <h5 className="tp-footer-tittle mb-30">Social media</h5>
                                    <div className="tp-footer-social mb-70 d-flex">
                                        <span><Link href="#"><i className="fa-brands fa-instagram"></i></Link></span>
                                        <span><Link href="#"><i className="fa-brands fa-dribbble"></i></Link></span>
                                        <span><Link href="#"><i className="fa-brands fa-behance"></i></Link></span>
                                        <span><Link href="#"><i className="fa-brands fa-youtube"></i></Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="tp-hero-bigtext pt-40">
                                    <h2 className="d-flex">Bf <span className="p-relative shape-2">o
                                        <svg width="121" height="59" viewBox="0 0 121 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M73.7057 0.781014L120.09 58.3117L67.9817 23.5732L0.309197 28.2302L73.7057 0.781014Z" fill="currentColor" />
                                        </svg>
                                    </span> lio <span className="shape">@</span></h2>
                                </div>
                                <div className="tp-footer-copyright pb-15 text-center">
                                    <p>© {getCurrentYear()} <Link href="#">Bfolio.</Link> All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CommonFooter;