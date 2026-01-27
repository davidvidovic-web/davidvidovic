import { getCurrentYear } from "@/utils/getCurrentYear";
import { getCurrentDay } from "@/utils/getCurrentDay";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail, Briefcase } from "lucide-react";

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer-area pb-75">
        <div className="container p-relative z-index-1">
          <Image
            className="tp-hero-3-shape w-100 h-auto"
            width={1350}
            height={880}
            src="/assets/img/hero/hero-3/line-bg.png"
            alt="ling bg"
          />
          <div className="row">
            <div className="col-12">
              <div className="tp-footer-3-content-wrap text-center">
                <h2 className="tp-footer-3-tittle mb-110">Let's connect</h2>
                <div className="tp-footer-social mb-35 d-flex justify-content-center align-items-center">
                  <span>
                    <Link href="https://www.linkedin.com/in/david-vidovic/">
                      <Linkedin size={24} />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://www.upwork.com/freelancers/~0163d597d928e1e526">
                      {/* <Briefcase size={24} /> */}
                      <Image
                        className="upwork-icon"
                        width={24}
                        height={24}
                        src="/assets/img/footer/upwork.svg"
                        alt="upwork"
                      />
                    </Link>
                  </span>
                  <span>
                    <Link href="https://github.com/davidvidovic-web">
                      <Github size={24} />
                    </Link>
                  </span>
                  <span>
                    <Link href="mailto:mail@davidvidovic.com">
                      <Mail size={24} />
                    </Link>
                  </span>
                  {/* <Link
                    href="/contact"
                    className="tp-btn d-flex justify-content-center lh-1"
                  >
                    <span>
                      <span className="text-1">Get in Touch</span>
                      <span className="text-2">Get in Touch</span>
                    </span>
                  </Link> */}
                </div>
                <h5 className="tp-footer-3-subtittle mb-30">
                  Have a beautiful {getCurrentDay()}!
                </h5>

                <div className="tp-footer-3-copyright">
                  <p>© {getCurrentYear()} David Vidovic. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
