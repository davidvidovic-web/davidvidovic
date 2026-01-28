export interface HomeSubItem {
    title: string;
    href: string;
    image: string;
    update?: boolean;
    darkHref?: string;
    lightHref?: string;
    comingSoon?: boolean;
}

export interface SubMenuItem {
    title: string;
    href: string;
}

export interface MenuItem {
    title: string;
    href: string;
    static?: boolean;
    subItems?: (HomeSubItem | SubMenuItem)[];
}

const menuData: MenuItem[] = [
    {
        title: "Home",
        href: "/",
        static: false,
    },
    {
        title: "Featured",
        href: "/#portfolio",
        static: false,
    },
    {
        title: "Services",
        href: "/#services",
        static: false,
    },
    {
        title: "Other projects",
        href: "/#awards",
        static: false,
    },
    {
        title: "Experience",
        href: "/#experience",
        static: false,
    },
    {
        title: "Testimonials",
        href: "/#testimonials",
        static: false,
    },
    {
        title: "FAQ",
        href: "/#faq",
        static: false,
    },
    {
        title: "Contact",
        href: "/#contact",
        static: false,
    },
];

export default menuData;
