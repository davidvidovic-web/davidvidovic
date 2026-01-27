"use client";

import Link from "next/link";
import menuData from "@/data/menuData";

const NavMenus = () => {
  return (
    <ul>
      {menuData.map((item, index) => (
        <li
          key={index}
          className={`${item.subItems ? "has-dropdown" : ""} ${item.static ? "position-static" : ""
            }`}
        >
          {/* Main Menu */}
          <Link href={item.href}>
            <span className="explore-text" data-text={item.title}>
              {item.title}
            </span>
          </Link>

          {/* Mega Menu (Home) */}
          {item.static && item.subItems && (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {item.subItems.map((subItem: any, subIndex) => (
                      <div className="col homemenu" key={subIndex}>
                        <div
                          className={`homemenu-thumb-wrap mb-20 ${subItem.comingSoon ? "comeing-soon" : ""
                            }`}
                        >
                          {subItem.update && (
                            <span className="update">NEW</span>
                          )}
                          <div className="homemenu-thumb fix">
                            <Link href={subItem.href}>
                              <img src={subItem.image} alt={subItem.title} />
                            </Link>
                          </div>

                          {/* Home Light/Dark buttons */}
                          {!subItem.comingSoon && (
                            <div className="homemenu-btn">
                              {subItem.href && (
                                <Link
                                  href={subItem.href}
                                  className="tp-btn bf-btn-white d-inline-flex align-items-center"
                                >
                                  <span>
                                    <span className="text-1">View Demo</span>
                                    <span className="text-2">View Demo</span>
                                  </span>
                                </Link>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            <Link href={subItem.href}>{subItem.title}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Dropdown Menus */}
          {!item.static && item.subItems && (
            <ul className="tp-submenu submenu">
              {item.subItems.map((subItem: any, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
