import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Bfolio - 404 Not Found Page",
};

export default function NotFound() {
    return (
        <div className="page-not-found">
            <Image className="image" width={650} height={400}  src="/assets/img/404/page_not_found.svg" alt="Page Not Found"/>
            <h1 className="title">This Page Does Not Exist</h1>
            <p className="text">
                Sorry, the page you are looking for could not be found. {`It's`} just an
                accident that was not intentional.
            </p>
            <div className="tp-blog-btn text-sm-end mb-45">
                <Link href="/" className="tp-btn d-inline-flex align-items-center">
                    <span>
                        <span className="text-1">Back To Home</span>
                        <span className="text-2">Back To Home</span>
                    </span>
                </Link>
            </div>
        </div>
    )
}