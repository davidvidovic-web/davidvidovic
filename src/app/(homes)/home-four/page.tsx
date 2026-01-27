import HomeFourMain from '@/pages/homes/home-four/HomeFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home-4 - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <HomeFourMain />
    );
};

export default page;