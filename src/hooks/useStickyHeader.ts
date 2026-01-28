
'use client';

import { useState, useEffect, useRef } from 'react';

const useStickyHeader = (offset = 20) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // At the top: header visible in natural state
      // Scrolling down: hide header
      // Scrolling up: show sticky header
      if (currentScrollY <= offset) {
        setIsSticky(false);
        setIsHiding(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsHiding(false);
        setIsSticky(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (isSticky) {
          setIsHiding(true);
          // Give animation time to complete before removing sticky
          setTimeout(() => {
            setIsSticky(false);
            setIsHiding(false);
          }, 500); // Match animation duration
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, isSticky]);

  return { isSticky, isHiding };
};

export default useStickyHeader;