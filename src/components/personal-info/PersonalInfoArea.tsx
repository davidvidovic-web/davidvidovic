import SkillProgressBar from './subComponents/SkillProgressBar';
import ExperienceInfo from './subComponents/ExperienceInfo';
import CapsuleItems from './subComponents/CapsuleItems';
import { EditIcon, StarIcon } from '@/svg';
import LampIcon from '@/svg/LampIcon';
import Image from 'next/image';
import Link from 'next/link';

const PersonalInfoArea = () => {
    return (
        <div className="ab-personal-info__area pb-90">
            <div className="container">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="tp-personal-info-pin">
                            <div className="ab-personal-info__left-box mr-100 mb-30">
                                <div
                                    className="tp-about-wrapper tp-about-capsule-wrapper p-relative"
                                    data-tp-throwable-scene="true"
                                >
                                    <div className="ab-personal-info__left-content">
                                        <h4 className="ab-personal-info__left-content-title mb-15">
                                            <span>
                                                <EditIcon />
                                            </span>
                                            Personal Info
                                        </h4>
                                        <p>
                                            Perceived end knowledge certainly day <br />
                                            sweetness why cordially.
                                        </p>
                                        <Link className="emails" href="mailto:example@gmail.com">
                                            example@gmail.com
                                        </Link>
                                        <Link className="contact" href="tel:+4912345678">
                                            <span>
                                                <Image width={34} height={35} src="/assets/img/about/whatapp.png" alt="WhatsApp" />
                                            </span>{' '}
                                            +491 234 5678
                                        </Link>
                                    </div>
                                    {/* capsule items */}
                                    <CapsuleItems />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="ab-personal-info__right-wrap">
                            <div className="ab-personal-info__skill mb-110">
                                <h4 className="ab-personal-info__left-content-title">
                                    <span>
                                        <LampIcon />
                                    </span>
                                    Skillsets
                                </h4>
                                {/* skill progress */}
                                <SkillProgressBar />
                            </div>

                            <div
                                className="ab-personal-info__exprience mb-30 wow tpfadeLeft"
                                data-wow-duration=".9s"
                                data-wow-delay=".5s"
                            >
                                <h4 className="ab-personal-info__left-content-title mb-35">
                                    <span>
                                        <StarIcon />
                                    </span>{' '}
                                    Experience
                                </h4>
                                {/* Experience information */}
                                <ExperienceInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoArea;
