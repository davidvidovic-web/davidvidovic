import PortfolioMain from '@/pages/portfolios/portfolio/PortfolioMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <PortfolioMain/>
    );
};

export default page;