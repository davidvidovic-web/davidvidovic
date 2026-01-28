export interface projectDt {
    id: number,
    title: string,
    slug?: string,
    image: string,
    logo?: string,
    backgroundColor?: string,
    textColor?: string,
    category?: string,
    categories?: string[];
    year?: string;
    color?: string;
    colorCodeTwo?: string
    description?: string;
    rightSide?:boolean;
    isActive?:boolean;
    // Details page fields
    client?: string;
    role?: string;
    services?: string[];
    technologies?: string[];
    objective?: string;
    process?: string;
    results?: string;
    counters?: CounterMetric[];
    overview?: string;
    mainDescription?: string;
    websiteUrl?: string;
    detailsImage?: string;
}

export interface CounterMetric {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}