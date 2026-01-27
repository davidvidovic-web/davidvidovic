"use client";

import { useEffect } from 'react';
import cursorAnimation from '../utils/cursorAnimation';

type CursorConfig = {
  bgColor?: 'white' | 'black' | 'custom' | string;
};

export const useCustomCursor = (config: CursorConfig = {}) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Handle background color and classes
    if (config.bgColor) {
      document.body.style.backgroundColor = `${config.bgColor}`;
    } 
    // Add cursor elements to DOM
    const cursorHtml = `
      <div class="tp-cursor"></div>
      <div class="tp-cursor-effect"></div>
    `;
    document.body.insertAdjacentHTML('beforeend', cursorHtml);

    // Initialize animation after a small delay to ensure DOM is ready
    setTimeout(() => {
      cursorAnimation();
    }, 50);

    // Cleanup function
    return () => {
      // Remove cursor elements
      document.querySelectorAll('.tp-cursor, .tp-cursor-effect').forEach(el => el.remove());
      
      // Remove background classes if they exist
      ["cursor-white-bg", "cursor-black-bg"].forEach(className => {
        document.body.classList.remove(className);
      });
      
      
      // Reset background color if it was set
      if (config.bgColor) {
        document.body.style.backgroundColor = '';
      }
    };
  }, [config.bgColor]);
};

