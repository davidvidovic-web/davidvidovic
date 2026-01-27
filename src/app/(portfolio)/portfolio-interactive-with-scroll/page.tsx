
import PortfolioInteractiveScroll from '@/pages/portfolios/portfolio-interactive-scroll/PortfolioInteractiveScroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio Interactive Scroll - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <PortfolioInteractiveScroll/>
    );
};

export default page;