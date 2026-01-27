"use client"
import SearchForm from '@/components/form/SearchForm';
import useGlobalContext from '@/hooks/useContext';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const SearchArea = () => {
    const { openSearch, toggleSearch } = useGlobalContext();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            <div onClick={toggleSearch} className={`tp-search-body-overlay ${openSearch ? "active" : ""}`}></div>
            <div className={`tp-search-form-toggle ${openSearch ? "active" : ""}`}>
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-lg-12">
                            <div className="tp-search-top d-flex justify-content-between align-items-center">
                                <div className="cm-search-logo">
                                    <div className="tp-header-logo">
                                        {
                                            theme === "dark" ?
                                                <>
                                                    <Link className="logo-dark d-none" href="/"><Image width={138} height={32} src="/assets/img/logo/logo-2.png" alt="logo" /></Link>
                                                </>
                                                :
                                                <>
                                                    <Link className="logo-white" href="/"><Image width={138} height={32} src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                                </>
                                        }
                                    </div>
                                </div>
                                <button onClick={toggleSearch} className="tp-search-close">
                                    <i className="fa-light fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="tp-search-form">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchArea;