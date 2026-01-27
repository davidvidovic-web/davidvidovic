import AboutMain from '@/pages/abouts/about/AboutMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <AboutMain />
    );   
};

export default page;