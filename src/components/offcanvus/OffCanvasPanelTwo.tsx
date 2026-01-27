import { CloseIcon, CloseIconTwo, DribbbleIconThree, InstragramIconFour, TwitorIconThree } from '@/svg';
import MobileMenus from '@/layouts/subComponents/MobileMenus';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvasPanelTwo: React.FC<IProps> = (
    {
        openOffcanvas,
        setOpenOffcanvas
    }) => {

    return (
        <div className={`tp-offcanvas-2-area p-relative ${openOffcanvas ? "opened" : ""}`}>
            <div className="tp-offcanvas-2-bg is-left left-box"></div>
            <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
            <div className="tp-offcanvas-2-wrapper">
                <div className="tp-offcanvas-2-left left-box">
                    <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
                        <div className="tp-offcanvas-2-logo">
                            <Link href="/">
                                <Image className="logo-1" width={150} height={35} src="/assets/img/logo/logo-2.png" alt="logo" />
                                <Image className="logo-2" width={150} height={35} src="/assets/img/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-close d-md-none text-end">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                                <span className="texts">
                                    <span>close</span>
                                </span>
                                <span className="d-inline-block">
                                    <span>
                                       <CloseIconTwo/>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-menu counter-row">
                        <nav>
                            <MobileMenus/>
                        </nav>
                    </div>
                </div>
                <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
                    <div className="tp-offcanvas-2-close text-end">
                        <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                            <span className="texts"><span>close</span></span>
                            <span className="d-inline-block">
                                <span>
                                    <CloseIcon />
                                </span>
                            </span>
                        </button>
                    </div>
                    <div className="tp-offcanvas-2-right-info-box mt-160">
                        <h4 className="tp-offcanvas-2-right-info-title">Get In Touch</h4>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Phone</label>
                            <Link className="underline-white" href="tel:42345678910">+4 (234) 567 8910</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Email</label>
                            <Link className="underline-white" href="mailto:hello@gmail.com">hello@gmail.com</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Address</label>
                            <Link className="underline-white" href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                602 Elgin St. Celina, Delaware <br /> 1009
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-15">Follow us</label>
                            <div className="tp-offcanvas-2-right-social">
                                <Link href="#">
                                    <DribbbleIconThree />
                                </Link>{" "}
                                <Link href="#">
                                    <TwitorIconThree />
                                </Link>{" "}
                                <Link href="#">
                                    <InstragramIconFour />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasPanelTwo;