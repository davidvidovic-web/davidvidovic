import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./heading.css";

const AnimatedHeader: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Custom split function to split text into characters
    const splitText = (selector: string, type: "chars" | "words" = "chars") => {
      const element = document.querySelector(selector);
      if (!element) return;

      const text = element.textContent || "";
      element.textContent = ""; // Clear the text

      if (type === "chars") {
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          element.appendChild(span);
        });
      } else if (type === "words") {
        text.split(" ").forEach((word) => {
          const span = document.createElement("span");
          span.textContent = word + " "; // Keep the spaces
          element.appendChild(span);
        });
      }
    };

    // Apply custom split function
    splitText("#title", "chars");

    gsap.set(".gsap-reveal-class", { visibility: "visible" });

    // Animation for title (characters)
    gsap.from("#title span", {
      duration: 3,
      opacity: 0,
      stagger: { from: "random", each: 0.08 },
    });
  }, []);

  return (
    <div className="container">
      <div className="min-vh-100">
        <h1 id="title" className="gsap-reveal-class">
          David Vidović
        </h1>
      </div>
    </div>
  );
};

export default AnimatedHeader;
