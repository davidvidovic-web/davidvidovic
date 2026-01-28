"use client";
import OffCanvasPanel from "@/components/offcanvus/OffCanvasPanel";
import useStickyHeader from "@/hooks/useStickyHeader";
import useGlobalContext from "@/hooks/useContext";
import NavMenus from "../subComponents/NavMenus";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { SearchIcon } from '@/svg';
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

interface headerProps {
  spacingCls?: string;
  customCls?: string;
  wrapCustomCls?: string;
}
const CommonHeader: React.FC<headerProps> = ({
  spacingCls = "",
  customCls = "",
  wrapCustomCls = "",
}) => {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const { toggleSearch } = useGlobalContext();
  const isSticky = useStickyHeader(20);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(element, true, "top 100px");
        } else {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: element, offsetY: 100 },
            ease: "power2.inOut"
          });
        }
      }
    } else {
      router.push('/#contact');
    }
  };

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-area tp-transparent ${wrapCustomCls} ${spacingCls} 
                tp-header-spacing ${isSticky ? "header-sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="tp-header-logo">
                <Link className="logo-dark d-none" href="/">
                  <Image
                    width={40}
                    height={36}
                    src="/assets/img/logo/logo-dark.png"
                    alt="Logo Dark"
                  />
                </Link>
                <Link className="logo-white" href="/">
                  <Image
                    width={40}
                    height={36}
                    src="/assets/img/logo/logo-light.webp"
                    alt="Logo White"
                  />
                </Link>
              </div>
              <div className={`tp-main-menu ${customCls} d-none d-xl-block`}>
                <nav className="tp-mobile-menu-active">
                  <NavMenus />
                </nav>
              </div>
              <div className="tp-header-right-wrapper">
                  {/* <button onClick={toggleSearch} className="tp-header-search tp-search-click">
                                        <SearchIcon />
                                    </button> */}
                  <div className="tp-header-right d-flex">
                    <div className="tp-dark-switch-wrap ml-15">
                      <button
                        onClick={handleToggleTheme}
                        className="tp-dark-switch p-relative"
                      >
                        <i className="moon fa-light fa-moon"></i>
                        <i className="sun fa-light fa-sun-bright"></i>
                      </button>
                    </div>
                    <Link
                      href="/#contact"
                      onClick={handleContactClick}
                      className="tp-btn d-none d-md-inline-flex align-items-center ml-15"
                    >
                      <span>
                        <span className="text-1">{`Let's`} Talk</span>
                        <span className="text-2">{`Let's`} Talk</span>
                      </span>
                    </Link>
                    <button
                      onClick={() => setOpenOffCanvas(true)}
                      className="tp-header-menu-btn tp-menu-bar ml-10"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <OffCanvasPanel
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default CommonHeader;
