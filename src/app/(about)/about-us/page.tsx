import AboutUsMain from '@/pages/abouts/about-us/AboutUsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <AboutUsMain />
    );   
};

export default page;