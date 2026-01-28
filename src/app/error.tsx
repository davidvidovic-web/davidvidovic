'use client'
import Link from "next/link";
import { useEffect } from "react";
import { getCurrentDay } from "@/utils/getCurrentDay";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div className="page-not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: 'clamp(100px, 15vw, 160px)', fontWeight: '700', margin: '0', lineHeight: '1' }}>Oops!</h1>
            <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', margin: '30px 0 40px', maxWidth: '600px' }}>
                Something broke. Even developers make mistakes... especially on {getCurrentDay()}s.
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