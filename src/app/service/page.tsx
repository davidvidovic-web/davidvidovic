import ServiceMain from '@/pages/service/ServiceMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Service - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <ServiceMain />
    );
};

export default page;