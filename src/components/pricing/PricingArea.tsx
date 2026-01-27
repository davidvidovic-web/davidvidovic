import { PricingShape } from '@/svg';
import Link from 'next/link';

// Pricing item type
interface PricingDt {
    title: string;
    price: string;
    desc: string;
    link: string;
}

// Pricing data
const pricingData: PricingDt[] = [
    {
        title: 'Envato landing page',
        price: '$1,999',
        desc: `Transform your concepts into captivating digital experiences
           with bespoke single-page website meticulously designed
           and developed in Themeforest.`,
        link: '/contact',
    },
    {
        title: 'Full portfolio website',
        price: '$1,999',
        desc: `Take your online experience to the next level with a multi-page
           Themeforest website, expertly tailored to your specific needs,
           from functionality to design aesthetics.`,
        link: '/contact',
    },
];

const PricingArea = () => {
    return (
        <div className="tp-pricing-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-50">
                            <h2 className="tp-section-tittle">Let’s work together</h2>
                        </div>
                    </div>

                    {pricingData.map((item, idx) => (
                        <div className="col-lg-6" key={idx}>
                            <div className="tp-pricing-item mb-30 p-relative z-index-2">
                                <span className="tp-pricing-shape">
                                    <PricingShape />
                                </span>
                                <h4 className="tp-pricing-tittle mb-15">
                                    {item.title} <span>{item.price}</span>
                                </h4>
                                <p className="mb-30">{item.desc}</p>
                                <Link
                                    className="tp-btn tp-btn-xl tp-btn-border d-inline-flex align-items-center"
                                    href={item.link}
                                >
                                    <span>
                                        <span className="text-1">Discover Work</span>
                                        <span className="text-2">Discover Work</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingArea;
