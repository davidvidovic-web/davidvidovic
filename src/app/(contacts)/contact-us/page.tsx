
import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us - Personal Portfolio NextJs Template",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;