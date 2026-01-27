import Link from "next/link";
import DotGrid from "@/components/ui/DotGrid";

const HERO_LINKS = [
  "Digital Studio",
  "Branding and Identity",
  "Social Media Marketing",
  "SEO Optimization",
];

const SCROLLING_WORDS = ["WEB", "SITES", "AND", "APPS", "DEV"];

const HeroFour = () => {
  return (
    <section
      className="bf-hero-area bf-hero-spacing z-index-1"
      style={{ position: "relative" }}
    >
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
    </section>

    //   <div className="container-fluid container-1650" style={{ position: "relative", zIndex: 1 }}>
    //     {/* ======= Top Section ======= */}
    //     <div className="bf-hero-top">
    //       <div className="row">
    //         {/* Video Column */}
    //         <div className="col-lg-6 col-md-6">
    //           <div className="bf-hero-video mb-30 ml-150">
    //             <video loop muted autoPlay playsInline preload="none">
    //               <source
    //                 src="https://html.aqlova.com/videos/bfolio/video-4.mp4"
    //                 type="video/mp4"
    //               />
    //             </video>
    //           </div>
    //         </div>

    //         {/* Hero Right Links */}
    //         <div className="col-lg-6 col-md-6">
    //           <div className="bf-hero-right-content mb-30">
    //             <ul>
    //               {HERO_LINKS.map((text) => (
    //                 <li key={text}>
    //                   <Link href="#">
    //                     <span className="explore-text" data-text={text}>
    //                       {text}
    //                     </span>
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* ======= Bottom Section ======= */}
    //     <div className="row align-items-end">
    //       {/* Left Content */}
    //       <div className="col-lg-4">
    //         <div className="bf-hero-bottom-content ml-150 mb-30">
    //           <p className="mb-30">
    //             Elevating Brands Through
    //             <br />
    //             Smart, Human - Centered
    //             <br />
    //             Design
    //           </p>
    //           <Link
    //             href="/contact"
    //             className="tp-btn tp-btn-xl bf-btn-red d-inline-flex align-items-center"
    //           >
    //             <span>
    //               <span className="text-1">Discover Work</span>
    //               <span className="text-2">Discover Work</span>
    //             </span>
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Scrolling Words */}
    //       <div className="col-lg-8">
    //         <div className="bf-hero-bottom-title-wrap mb-30">
    //           <div className="bf-hero-scrolling-words">
    //             <ul>
    //               {SCROLLING_WORDS.map((word, index) => (
    //                 <li key={`${word}-${index}`}>{word}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default HeroFour;
