
import PortfolioRevealingSlider from '@/pages/portfolios/portfolio-revealing-slider/portfolioRevealingSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio Revealing Slider - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <PortfolioRevealingSlider  />
    );
};

export default page;