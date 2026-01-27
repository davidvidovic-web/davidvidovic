import HomeThreeMain from '@/pages/homes/home-three/HomeThreeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home-3 - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <HomeThreeMain />
    );
};

export default page;