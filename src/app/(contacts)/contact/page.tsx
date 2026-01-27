import ContactMain from '@/pages/contacts/contact/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <ContactMain />
    );
};

export default page;