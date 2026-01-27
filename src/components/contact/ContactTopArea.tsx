import { TextCircleIcon } from '@/svg';
import Image from 'next/image'
import Link from 'next/link';

const ContactTopArea = () => {
    return (
        <div className="tp-contact-top-spacing">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-9">
                        <div className="tp-contact-top-content mb-65">
                            <span className="tp-contact-top-subtittle mb-15 d-inline-block">
                                Contact me
                            </span>
                            <h2 className="tp-contact-top-tittle">
                                Let’s talk{" "}
                                <Image
                                    width={190}
                                    height={90}
                                    src="/assets/img/contact/thumb.jpg"
                                    alt="Contact Thumbnail"
                                    className="inline-block"
                                />
                                <br />
                                about your project
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 text-lg-end">
                        <div className="tp-hero-3-text-rotate mb-60 p-relative d-inline-block">
                            <span className="tp-live-anim-spin d-inline-block">
                                <TextCircleIcon />
                            </span>
                            <Image
                                width={62} height={62}
                                src="/assets/img/hero/hero-3/shape.png"
                                alt="Hero Shape"
                                className="tp-hero-3-icon s"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-contact-top-email">
                            <span>Email Me:</span>
                            <h4>
                                <Link
                                    href="mailto:hello@bfolio.com"
                                    className="common-underline"
                                >
                                    hello@bfolio.com
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="tp-contact-top-para">
                            <p>
                                Interested in working with me? Submit your
                                <br /> project inquiry using the form below.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tp-contact-category-wrap pt-135">
                            <h5 className="mb-30">{`I'm`} interested in...</h5>
                            <div className="tp-contact-category">
                                {[
                                    "Branding",
                                    "Web Design",
                                    "App Design",
                                    "Logo",
                                    "Digital Marketing",
                                    "Android Development",
                                    "iOS Development",
                                    "Design Concept",
                                    "Other",
                                ].map((label, index) => (
                                    <label htmlFor={`id${index + 1}`} key={index}>
                                        <input id={`id${index + 1}`} type="checkbox" />
                                        <span>{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactTopArea;
