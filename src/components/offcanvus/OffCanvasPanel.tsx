import { BehanceIcon, CloseIcon, DribbbleIcon, InstragramIcon, YoutubeIcon } from '@/svg';
import PhotoProviderWrapper from '@/provider/PhotoProviderWrapper';
import MobileMenus from '@/layouts/subComponents/MobileMenus';
import { PhotoView } from 'react-photo-view';
import { ImageDT } from '@/types/custom-dt';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const galleryImages: ImageDT[] = [
    { id: 1, imgSrc: "/assets/img/offcanvas/offcanvas-1.jpg" },
    { id: 2, imgSrc: "/assets/img/offcanvas/offcanvas-2.jpg" },
    { id: 3, imgSrc: "/assets/img/offcanvas/offcanvas-3.jpg" },
    { id: 4, imgSrc: "/assets/img/offcanvas/offcanvas-4.jpg" }
];

// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvasPanel: React.FC<IProps> = (
    {
        openOffcanvas,
        setOpenOffcanvas
    }) => {

    return (
        <>
            <div className="tp-offcanvas-area">
                <div className={`tp-offcanvas ${openOffcanvas ? "opened" : ""}`}>
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-header-logo">
                            <Link className="logo-dark d-none" href="/"><Image width={138} height={32} src="/assets/img/logo/logo-2.png" alt="logo dark" /></Link>
                            <Link className="logo-white" href="/"><Image width={138} height={32} src="/assets/img/logo/logo.png" alt="logo white" /></Link>
                        </div>
                        <div className="tp-offcanvas-close-btn">
                            <button onClick={() => setOpenOffcanvas(false)} className="close-btn">
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-content d-none d-xl-block">
                        <h3 className="tp-offcanvas-title">Hello There!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                    <div className="tp-offcanvas-menu dropdown-style d-xl-none">
                        <nav>
                            <MobileMenus/>
                        </nav>
                    </div>
                    <div className="tp-offcanvas-gallery d-none d-xl-block">
                        <div className="row gx-2">
                            <PhotoProviderWrapper>
                                {galleryImages.map((image: ImageDT) => (
                                    <div className="col-md-3 col-3" key={image.id}>
                                        <div className="tp-offcanvas-gallery-img fix">
                                            <PhotoView src={image.imgSrc}>
                                                <Image width={82} height={82} src={image.imgSrc} alt={`gallery image${image.id}`} />
                                            </PhotoView>
                                        </div>
                                    </div>
                                ))}
                            </PhotoProviderWrapper>
                        </div>
                    </div>
                    <div className="tp-offcanvas-contact">
                        <h3 className="tp-offcanvas-title sm">Information</h3>
                        <ul>
                            <li><Link href="tel:1245654">+ 4 20 7700 1007</Link></li>
                            <li><Link href="mailto:hello@aleric.com">hello@aleric.com</Link></li>
                            <li><Link href="#">Avenue de Roma 158b, Lisboa</Link></li>
                        </ul>
                    </div>
                    <div className="tp-offcanvas-social">
                        <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                        <ul>
                            <li>
                                <Link href="#"><InstragramIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><DribbbleIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><BehanceIcon /></Link>
                            </li>
                            <li>
                                <Link href="#"><YoutubeIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay ${openOffcanvas ? "apply" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;