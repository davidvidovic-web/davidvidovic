"use client"
import { FooterArrowIcon } from '@/svg';
import React from 'react';

const FooterSearchForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <>
            <form onClick={handleSubmit} action="#" className="p-relative">
                <input className="tp-input" type="text" placeholder="Enter your email" />
                <button type="submit">
                    <FooterArrowIcon />
                </button>
            </form>
        </>
    );
};

export default FooterSearchForm;