import PortfolioDetailsMain from '@/pages/portfolios/portfolio-details/PortfolioDetailsMain';
import { PageParamsProps } from '@/types/custom-dt';
import projectData from '@/data/projectData';
import { getProjectContent } from '@/utils/getProjectContent';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { slug } = resolvedParams;
    const property = slug ? projectData.find((item) => item.slug === slug || item.id == Number(slug)) : undefined;
    return {
        title: property?.title ? `${property.title} | Portfolio` : "Portfolio Details",
        description: property?.overview || `View ${property?.title} project details`,
    };
}

export default async function PortfolioDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { slug } = resolvedParams;
    
    // Get project content from markdown file
    const projectContent = slug ? getProjectContent(slug) : null;

    return (
        <PortfolioDetailsMain id={slug || ''} projectContent={projectContent} />
    );
}

export async function generateStaticParams() {
    // Generate static paths for all projects with slugs
    return projectData
        .filter(project => project.slug)
        .map((project) => ({
            slug: project.slug as string,
        }));
}
