import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const FooterOneCopyright = () => {
    return (
        <>
            <div className="tp-footer-copyright-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        <div className="tp-footer-copyright">
                            <p>© {getCurrentYear()} <Link href="#">Bfolio.</Link> All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <div className="tp-footer-scroll text-sm-end mb-15">
                            <Link href="#">Scroll to top</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterOneCopyright;