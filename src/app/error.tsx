'use client'
import Image from "next/image";
import { useEffect } from "react";

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
        <div className="page-not-found">
            <Image className="image" width={650} height={400} src="/assets/img/error/fixing-bugs.png" alt="error image" />
            <h1 className="title">Something went wrong</h1>
            <p className="text">
                {error?.message}
            </p>
            <div className="tp-blog-btn text-sm-end mb-45">
                {/* Reset button */}
                <button onClick={() => reset()} className="tp-btn d-inline-flex align-items-center">
                    <span>
                        <span className="text-1">Try again</span>
                        <span className="text-2">Try again</span>
                    </span>
                </button>
            </div>
        </div>
    )
}