"use client";
import React, { createContext, useState } from "react";
import { AppContextType } from "@/types/custom-dt";

// Define default context value
const defaultContextValue: AppContextType = {
    openOffcanvas: false,
    setOpenOffcanvas: () => { },
    toggleOffcanvas: () => { },
    openSearch: false,
    setOpenSearch: () => { },
    toggleSearch: () => { },
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [openOffcanvas, setOpenOffcanvas] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const contextValue: AppContextType = {
        openOffcanvas,
        setOpenOffcanvas,
        toggleOffcanvas: () => setOpenOffcanvas(prev => !prev),
        openSearch,
        setOpenSearch,
        toggleSearch: () => setOpenSearch(prev => !prev),
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;