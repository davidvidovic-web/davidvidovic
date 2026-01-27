import PortfolioDetailsMain from '@/pages/portfolios/portfolio-details/PortfolioDetailsMain';
import { PageParamsProps } from '@/types/custom-dt';
import projectData from '@/data/projectData';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const property = projectData.find((item) => item.id == Number(id));
    return {
        title: property?.title ? property.title : "Portfolio Details",
    };
}

export default async function PortfolioDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <PortfolioDetailsMain id={id} />
    );
}