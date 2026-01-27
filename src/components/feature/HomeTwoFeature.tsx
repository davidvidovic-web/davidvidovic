import { FeatureIcon, FeatureIconTwo, FeatureIconThree } from '@/svg/FeatureIcons';

// ===== Feature Data =====
const featureData = [
    {
        icon: <FeatureIcon />,
        title: 'Human centered approach',
    },
    {
        icon: <FeatureIconTwo />,
        title: 'Pixel perfect execution',
    },
    {
        icon: <FeatureIconThree />,
        title: 'Problem solving mindset',
    },
];

const HomeTwoFeature = () => {
    return (
        <div className="tp-feature-area fix tp-white-bg">
            <div className="container">
                <div className="tp-feature-border">
                    <div className="row">
                        {featureData.map((feature, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                <div className="tp-feature-item d-flex align-items-center mb-30">
                                    <span className="tp-feature-icon mr-20">{feature.icon}</span>
                                    <p className="tp-feature-tittle mb-0">{feature.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTwoFeature;
