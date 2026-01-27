import PortfolioInteractiveHover from '@/pages/portfolios/portfolio-interactive-hover/PortfolioInteractiveWithHover';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio Interactive Hover - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <PortfolioInteractiveHover/>
    );
};

export default page;