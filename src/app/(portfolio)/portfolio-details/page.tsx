import PortfolioDetailsMain from '@/pages/portfolios/portfolio-details/PortfolioDetailsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Property Details - Bhumi Real Estate React NextJs Template",
};


const page = () => {
    return (
       <PortfolioDetailsMain id={1} />
    );
};

export default page;