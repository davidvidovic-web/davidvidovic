"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// capsule data
const capsules = [
    { text: "Frontend" },
    { text: "Brand strategy" },
    { text: "Design solutions" },
    { text: "Phototyping" },
    { text: "Consulting" },
    { text: "Design Audit" },
    { text: "UI/UX Design" },
    { text: "Testing" },
];

const CapsuleItems = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="tp-about-capsule-item-wrapper">
            {capsules.map((cap, index) => (
                <p key={index}>
                    <span className={`tp-about-capsule-item ${theme === "dark" ? "tp-about-capsule-item-dark" : ""}`}>
                        {cap.text}
                    </span>
                </p>
            ))}
        </div>
    );
};

export default CapsuleItems;
