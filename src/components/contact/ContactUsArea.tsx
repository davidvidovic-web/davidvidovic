import ContactUsForm from "../form/ContactUsForm";
import Image from "next/image";

const ContactUsArea = () => {
    return (
        <div className="bf-contact-area bf-about-us-spacing">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="bf-contact-us-content-wrap mb-30">
                            <h2 className="bf-contact-us-title mb-70">get in touch</h2>
                            <span className="bf-contact-us-dec ml-110 d-inline-block mb-45">Have a project in mind? Reach out to<br />
                                us, and we’ll discuss the best way to<br />
                                move forward.</span>
                            <div className="bf-contact-us-shape">
                                <Image width={520} height={312} priority src="/assets/img/update/contact/shape.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bf-contact-us-form mb-30">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsArea;