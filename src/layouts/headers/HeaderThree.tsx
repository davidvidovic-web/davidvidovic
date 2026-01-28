"use client";
import OffCanvasPanelTwo from "@/components/offcanvus/OffCanvasPanelTwo";
import useStickyHeader from "@/hooks/useStickyHeader";
import NavMenus from "../subComponents/NavMenus";
import useGlobalContext from "@/hooks/useContext";
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollToPlugin);

const HeaderThree = () => {
  const { openOffcanvas, setOpenOffcanvas } = useGlobalContext();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { isSticky, isHiding } = useStickyHeader(20);
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
          className={`tp-header-area fix tp-header-3-wrap bf-header-style-2 mt-20 tp-transparent tp-header-spacing ${
            isSticky ? "header-sticky" : ""
          } ${isHiding ? "header-hiding" : ""}`}
        >
          <div className="container-fluid container-1750">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="tp-header-logo">
                  <Link className="logo-dark d-none" href="/">
                    <Image
                      width={138}
                      height={32}
                      src="/assets/img/logo/logo-light.webp"
                      alt="logo"
                    />
                  </Link>
                  <Link className="logo-white" href="/">
                    <Image
                      width={138}
                      height={32}
                      src="/assets/img/logo/logo-dark.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="tp-header-right d-flex justify-content-end">
                  <div className="tp-dark-switch-wrap ml-30">
                    <button
                      onClick={handleToggleTheme}
                      className="tp-dark-switch p-relative"
                    >
                      <Moon className="moon" size={20} />
                      <Sun className="sun" size={20} />
                    </button>
                  </div>
                  <Link
                    href="/#contact"
                    onClick={handleContactClick}
                    className="tp-btn d-none d-md-inline-flex align-items-center ml-30"
                  >
                    <span>
                      <span className="text-1">Let’s Talk</span>
                      <span className="text-2">Let’s Talk</span>
                    </span>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenOffcanvas(true);
                    }}
                    className="tp-header-menu-btn tp-offcanvas-open-btn ml-20"
                    type="button"
                    aria-label="Open menu"
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
        <nav className="tp-mobile-menu-active d-none">
          <NavMenus />
        </nav>
      </header>

      {/* off canvas */}
      <OffCanvasPanelTwo
        openOffcanvas={openOffcanvas}
        setOpenOffcanvas={setOpenOffcanvas}
      />
      {/* off canvas */}
    </>
  );
};

export default HeaderThree;
