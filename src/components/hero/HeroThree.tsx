import Image from "next/image";
import EmailForm from "../form/EmailForm";
import { TextCircleIcon } from "@/svg";

const HeroThree = () => {
  return (
    <div className="tp-hero-area tp-hero-spacing">
      <div className="container p-relative z-index-1">
        <Image
          className="tp-hero-3-shape w-100 h-auto"
          width={1350}
          height={880}
          src="/assets/img/hero/hero-3/line-bg.png"
          alt="Line Background"
          priority
          quality={75}
        />
        <div className="row">
          <div className="col-lg-10">
            <div className="tp-hero-3-content mb-60 mb-25">
              <div className="tp-hero-3-thumb mb-35">
                {/* <Image width={160} height={126} src="/assets/img/hero/hero-3/thumb.jpg" alt="Hero Thumb" /> */}
              </div>
              <h2 className="tp-hero-3-tittle">David Vidović</h2>
            </div>
          </div>
          <div className="col-lg-2 text-lg-end order-lg-1 order-3 d-flex justify-content-center">
            <div className="tp-hero-3-text-rotate mb-20 mt-40 p-relative d-inline-block">
              <span className="tp-live-anim-spin d-inline-block ">
                <TextCircleIcon />
              </span>
              {/* <Image
                width={62}
                height={62}
                className="tp-hero-3-icon s"
                src="/assets/img/hero/hero-3/shape.png"
                alt="Shape Icon"
              /> */}
            </div>
          </div>
          <div className="col-lg-7 order-lg-2 order-2">
            <div className="tp-hero-3-form mb-20">
              <p>
                Web developer with 8 years of experience. I transform complex
                digital challenges into clear, functional solutions. Every
                project starts with understanding your goals and the needs of
                your audience, ensuring the final product is both effective and
                purposeful.
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-lg-3 order-4">
            <div className="tp-hero-3-para-2 mt-10 mb-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
