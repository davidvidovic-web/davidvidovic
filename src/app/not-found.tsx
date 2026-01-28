import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "david - 404 Not Found Page",
};

export default function NotFound() {
    return (
        <div className="page-not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: 'clamp(120px, 20vw, 200px)', fontWeight: '700', margin: '0', lineHeight: '1' }}>404</h1>
            <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', margin: '30px 0 40px', maxWidth: '600px' }}>
                Oops! Looks like this page went on vacation and forgot to leave a forwarding address.
            </p>
            <Link href="/" className="tp-btn d-inline-flex align-items-center">
                <span>
                    <span className="text-1">Take Me Home</span>
                    <span className="text-2">Take Me Home</span>
                </span>
            </Link>
        </div>
    )
}