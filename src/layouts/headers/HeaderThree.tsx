"use client"
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import NavMenus from "../subComponents/NavMenus";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderThree = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const { theme, setTheme } = useTheme();
    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <header>
                <div className="tp-header-area fix tp-header-3-wrap bf-header-style-2 mt-20 tp-transparent tp-header-spacing">
                    <div className="container-fluid container-1750">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="tp-header-logo">
                                    <Link className="logo-dark d-none" href="/"><Image width={138} height={32} src="/assets/img/logo/logo-2.png" alt="logo" /></Link>
                                    <Link className="logo-white" href="/"><Image width={138} height={32} src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-header-right d-flex justify-content-end">
                                    <div className="tp-dark-switch-wrap ml-30">
                                        <button onClick={handleToggleTheme} className="tp-dark-switch p-relative">
                                            <i className="moon fa-light fa-moon"></i>
                                            <i className="sun fa-light fa-sun-bright"></i>
                                        </button>
                                    </div>
                                    <Link href="/contact" className="tp-btn d-none d-md-inline-flex align-items-center ml-30">
                                        <span>
                                            <span className="text-1">Let’s Talk</span>
                                            <span className="text-2">Let’s Talk</span>
                                        </span>
                                    </Link>
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-header-menu-btn tp-offcanvas-open-btn ml-20">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="tp-mobile-menu-active d-none">
                    <NavMenus />
                </nav>
            </header>

            {/* off canvas */}
            <OffCanvasPanelTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default HeaderThree;