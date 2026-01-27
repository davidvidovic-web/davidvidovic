import React from "react";

export const TextCircleIcon = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="circlePath"
          d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
        />
      </defs>
      <text
        fill="black"
        fillOpacity="0.5"
        fontSize="15"
        fontWeight="500"
        letterSpacing="1.5"
      >
        <textPath href="#circlePath" startOffset="0%">
          WORDPRESS THEMES PLUGINS APPS
        </textPath>
      </text>
    </svg>
  );
};
