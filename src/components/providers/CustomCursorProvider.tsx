"use client";
import { ReactNode } from "react";
import { useCustomCursor } from "@/hooks/useCustomCursor";

export default function CustomCursorProvider({ children, bgColor }: { children: ReactNode, bgColor?: string }) {
    useCustomCursor({ bgColor: bgColor });
    return <>{children}</>;
}
