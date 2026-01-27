"use client"
import OffCanvasPanelTwo from '@/components/offcanvus/OffCanvasPanelTwo';
import useGlobalContext from '@/hooks/useContext';
import NavMenus from '../subComponents/NavMenus';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { SearchIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const HeaderTwo = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const { toggleSearch } = useGlobalContext();

    const { theme, setTheme } = useTheme();

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <header>
                <div className="tp-header-area tp-header-3-wrap mt-20 tp-transparent tp-header-spacing">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="tp-header-logo">
                                    <Link className="logo-dark d-none" href="/">
                                        <Image width={138} height={32} src="/assets/img/logo/logo-2.png" alt="Logo Dark" />
                                    </Link>
                                    <Link className="logo-white" href="/">
                                        <Image width={138} height={32} src="/assets/img/logo/logo.png" alt="Logo White" />
                                    </Link>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="tp-header-right d-flex justify-content-end">
                                    <button onClick={toggleSearch} className="tp-header-search tp-search-click">
                                        <SearchIcon />
                                    </button>
                                    <div className="tp-dark-switch-wrap ml-30">
                                        <button onClick={handleToggleTheme} className="tp-dark-switch p-relative">
                                            <i className="moon fa-light fa-moon"></i>
                                            <i className="sun fa-light fa-sun-bright"></i>
                                        </button>
                                    </div>
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-header-menu-btn tp-offcanvas-open-btn ml-30">
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
                   <NavMenus/>
                </nav>
            </header>

            {/* off canvas */}
            <OffCanvasPanelTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default HeaderTwo;