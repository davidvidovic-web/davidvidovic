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
        href: "#",
        static: true,
        subItems: [
            {
                title: "Minimal Portfolio",
                href: "/",
                image: "/assets/img/update/menu/home-1.jpg",
            },
            {
                title: "Video Production",
                href: "/home-five",
                image: "/assets/img/update/menu/home-4.jpg",
                update: true,
            },
            {
                title: "Digital Studio",
                href: "/home-four",
                image: "/assets/img/update/menu/home-2.jpg",
                update: true,
            },
            {
                title: "Creative Agency",
                href: "/home-six",
                image: "/assets/img/update/menu/home-3.jpg",
                update: true,
            },
            {
                title: "Creative Portfolio",
                href: "/home-two",
                image: "/assets/img/update/menu/home-5.jpg",
            },
            {
                title: "Personal Portfolio",
                href: "/home-three",
                image: "/assets/img/update/menu/home-6.jpg",
            },
            {
                title: "Interactive Hover",
                href: "/portfolio-interactive-with-hover",
                image: "/assets/img/update/menu/home-7.jpg",
                update: true,
            },
            {
                title: "Interactive Scroll",
                href: "/portfolio-interactive-with-scroll",
                image: "/assets/img/update/menu/home-8.jpg",
                update: true,
            },
            {
                title: "Portfolio Slicer",
                href: "/portfolio-mix-slicer",
                image: "/assets/img/update/menu/home-9.jpg",
                update: true,
            },
            {
                title: "Portfolio Revealing",
                href: "/portfolio-revealing-slider",
                image: "/assets/img/update/menu/home-10.jpg",
                update: true,
            },
            {
                title: "Coming Soon",
                href: "#",
                image: "/assets/img/update/menu/comeing-soon.jpg",
                comingSoon: true,
            },
            {
                title: "Coming Soon",
                href: "#",
                image: "/assets/img/update/menu/comeing-soon.jpg",
                comingSoon: true,
            },
        ],
    },
    {
        title: "About",
        href: "#",
        subItems: [
            { title: "About Me", href: "/about-me" },
            { title: "About Us", href: "/about-us" },
        ],
    },
    {
        title: "Pages",
        href: "#",
        subItems: [
            { title: "Service", href: "/service" },
            { title: "Portfolio", href: "/portfolio" },
            { title: "Portfolio Details", href: "/portfolio-details" },
            { title: "Blog", href: "/blog" },
            { title: "Blog Standard", href: "/blog-standard" },
            { title: "Blog Details", href: "/blog-details" },
            { title: "Blog Details Sidebar", href: "/blog-details-sidebar" },
        ],
    },
    {
        title: "Contact",
        href: "#",
        subItems: [
            { title: "Contact", href: "/contact" },
            { title: "Contact Us", href: "/contact-us" },
        ],
    },
];

export default menuData;
