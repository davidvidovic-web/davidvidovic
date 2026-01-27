export interface projectDt {
    id: number,
    title: string,
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
    overview?: string;
    mainDescription?: string;
    websiteUrl?: string;
    detailsImage?: string;
}