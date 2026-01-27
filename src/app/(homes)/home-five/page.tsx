import HomeFiveMain from '@/pages/homes/home-five/HomeFiveMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home-5 - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <HomeFiveMain />
    );
};

export default page;