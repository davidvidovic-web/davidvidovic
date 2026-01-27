import PortfolioMixSlicer from '@/pages/portfolios/portfolio-mix-slicer/PortfolioMixSlicer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio Mix Slicer - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <PortfolioMixSlicer/>
    );
};

export default page;