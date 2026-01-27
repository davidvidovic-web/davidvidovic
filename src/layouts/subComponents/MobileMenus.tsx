
import menuData from '@/data/menuData';
import { useState } from 'react';
import Link from 'next/link';

const MobileMenus = () => {
  const [activeMenus, setActiveMenus] = useState<number[]>([]);
  const [submenuDisplay, setSubmenuDisplay] = useState<{ [key: number]: boolean }>({});
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setSubmenuDisplay(prev => ({
      ...prev,
      [index]: !prev[index],
    }));

    setActiveMenus(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
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
            <Link href={item.href} onClick={() => item.subItems && toggleMenu(index)}>
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
                      <Link href={subItem.href}>{subItem.title}</Link>
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
