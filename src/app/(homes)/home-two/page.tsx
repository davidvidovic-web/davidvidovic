import HomeTwoMain from '@/pages/homes/home-two/HomeTwoMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home-2 - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <HomeTwoMain />
    );
};

export default page;