import Link from "next/link";

const instagramInnerImages = [
  "/assets/img/update/instagram/insta-inner-1.jpg",
  "/assets/img/update/instagram/insta-inner-2.jpg",
  "/assets/img/update/instagram/insta-inner-3.jpg",
  "/assets/img/update/instagram/insta-inner-4.jpg",
  "/assets/img/update/instagram/insta-inner-5.jpg",
  "/assets/img/update/instagram/insta-inner-6.jpg",
  "/assets/img/update/instagram/insta-inner-7.jpg",
];

const HomeSixInstagram = ({ customCls = "" }) => {
  return (
    <div className={`bf-instagram-area ${customCls} bf-instagram-ptb text-center`}>
      <div className="bf-instagram-thumb-wrap p-relative">
        {/* Mapped Instagram Inner Images */}
        {instagramInnerImages.map((src, index) => (
          <div
            key={index}
            className={`bf-instagram-thumb-inner-${index + 1} d-none d-xl-block`}
          >
            <img src={src} alt={`Instagram inner ${index + 1}`} />
          </div>
        ))}

        {/* Instagram Icon */}
        <div className="bf-instagram-thumb-inner-8 d-none d-xl-block">
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>

        {/* Main Instagram Image */}
        <div className="bf-instagram-thumb">
          <img src="/assets/img/update/instagram/insta-1.jpg" alt="Instagram main" />
        </div>

        {/* Instagram Content */}
        <div className="bf-instagram-content-wrap text-start">
          <div className="bf-instagram-title-box">
            <span className="bf-instagram-subtitle">INSTAGRAM</span>
            <h4 className="bf-instagram-title">@likoagency</h4>
          </div>
          <div className="bf-instagram-content">
            <p>
              Become a part of our stories! <br />
              Join the adventure.
            </p>
            <Link href="#" className="tp-btn d-inline-flex align-items-center">
              <span>
                <span className="text-1">Follow Us</span>
                <span className="text-2">Follow Us</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSixInstagram;
