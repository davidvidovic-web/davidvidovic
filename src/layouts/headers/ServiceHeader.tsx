"use client"
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import useGlobalContext from "@/hooks/useContext";
import useStickyHeader from "@/hooks/useStickyHeader";
import NavMenus from "../subComponents/NavMenus";
import { useTheme } from "next-themes";
import { SearchIcon } from "@/svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceHeader = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const { toggleSearch } = useGlobalContext();
    const { theme, setTheme } = useTheme();
    const isSticky = useStickyHeader(20);

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <header>
                <div id="header-sticky" className={`tp-header-area bf-header-3-style bf-header-service-style bf-header-white tp-header-2-spacing mt-20 tp-transparent tp-header-spacing ${isSticky ? 'header-sticky' : ''}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="tp-header-logo">
                                    <Link className="logo-dark d-none" href="/">
                                        <Image width={138} height={32} src="/assets/img/logo/logo.png" alt="logo" />
                                    </Link>
                                    <Link className="logo-white" href="/">
                                        <Image width={138} height={32} src="/assets/img/logo/logo-2.png" alt="logo"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-xl-block">
                                <div className="tp-main-menu tp-main-menu-2 text-end mr-85">
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenus />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-8 col-6">
                                <div className="tp-header-right d-flex justify-content-end">
                                    <button onClick={toggleSearch} className="tp-header-search tp-search-click">
                                        <SearchIcon />
                                    </button>
                                    <div className="tp-dark-switch-wrap ml-30">
                                        <button onClick={handleToggleTheme} className="tp-dark-switch tp-white-switch p-relative">
                                            <i className="moon fa-light fa-moon"></i>
                                            <i className="sun fa-light fa-sun-bright"></i>
                                        </button>
                                    </div>
                                    <Link href="/contact" className="tp-btn bf-btn-white d-none d-md-inline-flex align-items-center ml-30">
                                        <span>
                                            <span className="text-1">Let’s Talk</span>
                                            <span className="text-2">Let’s Talk</span>
                                        </span>
                                    </Link>
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-header-menu-btn tp-menu-bar ml-10">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- tp-header-area-end -- */}

            </header>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default ServiceHeader;