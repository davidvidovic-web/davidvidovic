export interface AppContextType {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOffcanvas: () => void;
  toggleSearch: () => void;
  openSearch: boolean;
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

//common image DT
export interface ImageDT {
  id: number;
  imgSrc: string;
}

// Home Award Data Type Definition
export interface awardDT {
  title: string,
  subtitle: string;
  image: string;
  link?: string;
}

// Home blog Data Type Definition
export interface blogDt {
  id: number;
  category: string,
  date: string | { month: string, day: string },
  title: string,
  image?: string,
  link?: string;
  type?:string;
  videoUrl?: string | undefined;
  authorImg?: string;
  authorName?: string;
  desc?: string;
  thumbs?: string[];
}

//define interface for PageParams props
export interface PageParamsProps {
  params: Promise<{ id: number; slug?: string }>;
}

// Fetch the data based on the provided 'id' prop
export interface IdProps {
  id: number | string;
};