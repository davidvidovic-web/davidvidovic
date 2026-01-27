
export const ArrowIcon = ({ direction = "right" }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={direction == "right" ? "M1 8H15" : "M15 8H1"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d={direction == "right" ? "M8 1L15 8L8 15" : "M8 1L1 8L8 15"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const BackToTopArrowIcon = () => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    );
};
export const FooterArrowIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const PaginationArrowIcon = ({ direction = "right" }) => {
    return (
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={direction == "right" ? "M1 11L6 6L1 1" : "M6 11L1 6L6 1"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const AwardArrowIcon = ({ strokeColor = "currentColor" }) => {
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.48535 25.4558L25.4559 8.48525" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.48535 8.48511H25.4559V25.4557" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const CommentArrowIcon = () => {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 9L9 1M9 1V9M9 1L1 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ServiceArrowIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1H13V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const AboutUsIcon = () => {
    return (
        <svg className="ml-20" width="81" height="9" viewBox="0 0 81 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="80" height="1" fill="currentColor" />
            <path d="M77 7.96366L80.5 4.48183L77 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const BannerArrowIcon = () => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8924 59.5V40.9324C39.8924 40.6563 39.6686 40.4324 39.3924 40.4324H20.3922C20.116 40.4324 19.8922 40.2086 19.8922 39.9324V20.6081C19.8922 20.332 19.6683 20.1081 19.3922 20.1081H11.0405C10.5957 20.1081 10.3723 19.5709 10.686 19.2555L28.9902 0.852602C29.3039 0.537233 29.0805 0 28.6357 0H0.5C0.223858 0 0 0.223859 0 0.500002V40.2229C0 40.3569 0.0538138 40.4854 0.149367 40.5794L19.7462 59.8565C19.8397 59.9484 19.9657 60 20.0969 60H39.3924C39.6686 60 39.8924 59.7761 39.8924 59.5Z" fill="white" />
            <path d="M59.3912 0H32.4042C31.9653 0 31.7393 0.52506 32.0411 0.843767L49.6868 19.4806C49.9886 19.7993 49.7626 20.3243 49.3237 20.3243H40.6072C40.331 20.3243 40.1072 20.5482 40.1072 20.8243V39.8893C40.1072 40.0288 40.1655 40.1619 40.268 40.2566L59.052 57.6034C59.3723 57.8991 59.8912 57.672 59.8912 57.236V0.5C59.8912 0.223858 59.6674 0 59.3912 0Z" fill="white" />
        </svg>
    )
}

export const ServiceStepArrowIcon = () => (
    <svg
        width="66"
        height="27"
        viewBox="0 0 66 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 13.5L64.9286 13.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M52.4277 1L64.9277 13.5L52.4277 26"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);