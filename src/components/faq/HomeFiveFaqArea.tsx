import Link from "next/link";

const HomeFiveFaqArea = () => {
  return (
    <div className="bf-faq-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="bf-faq-title-wrap mb-30">
              <h2 className="tp-section-tittle bf-section-title-2 reveal-text text-uppercase mb-30">
                What I get asked often
              </h2>
              {/* <Link
                href="/contact"
                className="tp-btn tp-btn-border d-inline-flex align-items-center"
              >
                <span>
                  <span className="text-1">Get in Touch</span>
                  <span className="text-2">Get in Touch</span>
                </span>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-faq-wrap bf-faq-wrap mb-30">
              <div className="tp-faq-accordion" id="general_faqaccordiontwo">
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_one-1">
                    <button
                      className="tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_one-1"
                      aria-expanded="true"
                      aria-controls="order__collapse_one-1"
                    >
                      Do you work exclusively with WordPress, or do you use
                      other frameworks as well?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_one-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="order_one-1"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        WordPress is my main focus, but I also work with React
                        and Next.js depending on project needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_two-2">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_two-2"
                      aria-expanded="false"
                      aria-controls="order__collapse_two-2"
                    >
                      What’s included in the pricing (e.g., revisions, source
                      files)?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_two-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_two-2"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        My pricing includes everything needed to get your
                        website fully up and running: the complete build,
                        responsive layouts, basic SEO setup, and the essential
                        integrations we agree on. You also get a set number of
                        revisions, so we can fine-tune the final result. All
                        source files, theme files, and code are included, and
                        the website is fully yours once the project is finished.
                        If you need extra features or ongoing support, I can
                        provide those as optional add-ons.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2
                    className="accordion-header p-relative"
                    id="order_three-3"
                  >
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_three-3"
                      aria-expanded="false"
                      aria-controls="order__collapse_three-3"
                    >
                      How long does it typically take to build a website?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_three-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_three-3"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        This really depends on the scope of a project. A simple
                        site can be done in a couple of weeks, while larger
                        custom builds take longer. Once I know the requirements,
                        I give a detailed effort estimate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_four-4">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_four-4"
                      aria-expanded="false"
                      aria-controls="order__collapse_four-4"
                    >
                      Will I get updates or previews during the design process?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_four-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_four-4"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        Yes. I share regular updates and previews as the project
                        moves forward, so you always know what’s happening.
                        You’ll see the key stages as they’re completed, and you
                        can give feedback along the way. My goal is to keep the
                        process transparent and make sure the final result
                        matches what you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_five-5">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_five-5"
                      aria-expanded="false"
                      aria-controls="order__collapse_five-5"
                    >
                      What does your development process look like from start to
                      launch?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_five-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_five-5"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        We define the goals, create the structure and design,
                        build the site, test everything, and then launch.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_six-6">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_six-6"
                      aria-expanded="false"
                      aria-controls="order__collapse_six-6"
                    >
                      Do you provide ongoing maintenance and support after
                      launch?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_six-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_six-6"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        Yes, I offer maintenance packages that include regular
                        updates, security monitoring, backups, and technical
                        support. Whether you need monthly maintenance or
                        occasional fixes, I can tailor a plan that fits your
                        needs and ensures your website stays secure and
                        up-to-date.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2
                    className="accordion-header p-relative"
                    id="order_seven-7"
                  >
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_seven-7"
                      aria-expanded="false"
                      aria-controls="order__collapse_seven-7"
                    >
                      What are your pricing models for different types of
                      projects?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_seven-7"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_seven-7"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        I offer fixed-price quotes for clearly defined projects
                        and hourly or monthly options for ongoing work. Once I
                        understand the scope, I share a clear estimate with no
                        surprises.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2
                    className="accordion-header p-relative"
                    id="order_eight-8"
                  >
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_eight-8"
                      aria-expanded="false"
                      aria-controls="order__collapse_eight-8"
                    >
                      Can you integrate third-party services, APIs, or custom
                      features into my site?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_eight-8"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_eight-8"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        Yes. Whether it’s payment systems, external APIs,
                        headless CMS setups, or custom functionality, I can
                        integrate it smoothly into your website.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_nine-9">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_nine-9"
                      aria-expanded="false"
                      aria-controls="order__collapse_nine-9"
                    >
                      What if I need changes or new features after the project
                      is complete?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_nine-9"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_nine-9"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        I'm always available for additional work after launch.
                        Whether you need small tweaks, new features, or a
                        complete redesign, just reach out and I'll provide a
                        quote. Many clients work with me on retainer for ongoing
                        development needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2 className="accordion-header p-relative" id="order_ten-10">
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_ten-10"
                      aria-expanded="false"
                      aria-controls="order__collapse_ten-10"
                    >
                      Will my website be mobile-friendly and responsive?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_ten-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_ten-10"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        Definitely! Every website I build is fully responsive
                        and optimized for all devices—smartphones, tablets, and
                        desktops. I test extensively across different screen
                        sizes and browsers to ensure a consistent, high-quality
                        experience for all your visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-15">
                  <h2
                    className="accordion-header p-relative"
                    id="order_eleven-11"
                  >
                    <button
                      className="collapsed tp-faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#order__collapse_eleven-11"
                      aria-expanded="false"
                      aria-controls="order__collapse_eleven-11"
                    >
                      Do you handle website hosting, speed optimization, and
                      security setup?
                      <span className="accordion-btn"></span>
                    </button>
                  </h2>
                  <div
                    id="order__collapse_eleven-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="order_eleven-11"
                    data-bs-parent="#general_faqaccordiontwo"
                  >
                    <div className="accordion-body tp-faq-details-para">
                      <p>
                        Yes. I can set up reliable hosting, optimize
                        performance, improve Core Web Vitals, configure
                        caching/CDN, and secure the site against common issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFiveFaqArea;
