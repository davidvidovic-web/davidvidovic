"use client";

import CustomCursorProvider from "@/components/providers/CustomCursorProvider";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface ThemeCursorProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeCursorProvider dynamically sets the cursor background color
 * based on the current route and active theme.
 */
const ThemeCursorProvider: React.FC<ThemeCursorProviderProps> = ({ children }) => {
  const { theme } = useTheme();
  const currentPath = usePathname();

  // Background colors for specific routes
  const homeFourBackground = "#f8f8f9";
  const genericHomeBackground = "#f5f5f5";

  // Determine background color based on route
  let routeBackgroundColor = "";
  if (currentPath === "/home-four") {
    routeBackgroundColor = homeFourBackground;
  } else if (currentPath === "/home-five") {
    routeBackgroundColor = genericHomeBackground;
  } else if (currentPath === "/home-six") {
    routeBackgroundColor = genericHomeBackground;
  } else if (currentPath === "/about-us") {
    routeBackgroundColor = genericHomeBackground;
  } else if (currentPath === "/service") {
    routeBackgroundColor = genericHomeBackground;
  } else if (currentPath === "/contact-us") {
    routeBackgroundColor = genericHomeBackground;
  }

  // Make background color dynamic based on theme
  const cursorBackgroundColor = theme === "light" ? routeBackgroundColor : "";

  return (
    <CustomCursorProvider bgColor={cursorBackgroundColor}>
      {children}
    </CustomCursorProvider>
  );
};

export default ThemeCursorProvider;
