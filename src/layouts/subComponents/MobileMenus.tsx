
import menuData from '@/data/menuData';
import { useState } from 'react';
import Link from 'next/link';
import useGlobalContext from '@/hooks/useContext';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollToPlugin);

const MobileMenus = () => {
  const [activeMenus, setActiveMenus] = useState<number[]>([]);
  const [submenuDisplay, setSubmenuDisplay] = useState<{ [key: number]: boolean }>({});
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const { setOpenOffcanvas } = useGlobalContext();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = (index: number) => {
    setSubmenuDisplay(prev => ({
      ...prev,
      [index]: !prev[index],
    }));

    setActiveMenus(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hasSubItems: boolean, index: number) => {
    // If item has subItems, just toggle the dropdown
    if (hasSubItems) {
      e.preventDefault();
      toggleMenu(index);
      return;
    }
    
    // For items without subItems, handle navigation
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.substring(2); // Remove '/#'
      
      // Close offcanvas first
      setOpenOffcanvas(false);
      
      // If we're on homepage, scroll to section
      if (pathname === '/') {
        // Wait for offcanvas to close, then scroll using ScrollSmoother
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const smoother = ScrollSmoother.get();
            if (smoother) {
              // Use ScrollSmoother's scrollTo method (element, smooth, position)
              smoother.scrollTo(element, true, "top 100px");
            } else {
              // Fallback to GSAP scrollTo
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: element, offsetY: 100 },
                ease: "power2.inOut"
              });
            }
          }
        }, 350);
      } else {
        // Navigate to homepage with hash
        router.push(href);
      }
    } else if (href === '/') {
      // Home link - just close offcanvas and navigate
      setOpenOffcanvas(false);
    } else {
      // Other links - close offcanvas
      setOpenOffcanvas(false);
    }
  };

  return (
    <ul className="mobile-menu">
      {menuData.map((item, index) => {
        const isActive = activeMenus.includes(index);
        const isHovered = hoveredMenu === index || hoveredMenu === null;

        return (
          <li
            key={index}
            className={`has-dropdown ${item.subItems ? '' : 'no-dropdown'} ${
              item.static ? 'p-static' : ''
            } ${isActive ? 'active' : ''} ${isHovered ? 'is-active' : ''}`}
            onMouseEnter={() => setHoveredMenu(index)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {/* Main menu link */}
            <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href, !!item.subItems, index)}>
              <span className="explore-text" data-text={item.title}>
                {item.title}
              </span>
            </Link>

            {/* Sub menu */}
            {item.subItems && (
              <>
                <ul
                  className="tp-submenu submenu"
                  style={{ display: submenuDisplay[index] ? 'block' : 'none' }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        href={subItem.href} 
                        onClick={(e) => {
                          if (subItem.href.startsWith('/#')) {
                            e.preventDefault();
                            const hash = subItem.href.substring(2);
                            setOpenOffcanvas(false);
                            
                            // If we're on homepage, scroll to section
                            if (pathname === '/') {
                              setTimeout(() => {
                                const element = document.getElementById(hash);
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
                              }, 350);
                            } else {
                              // Navigate to homepage with hash
                              router.push(subItem.href);
                            }
                          } else {
                            setOpenOffcanvas(false);
                          }
                        }}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Toggle button */}
                <button
                  className="tp-menu-close"
                  onClick={() => toggleMenu(index)}
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenus;
