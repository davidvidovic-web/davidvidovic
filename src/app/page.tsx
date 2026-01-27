import HomeFourMain from "@/pages/homes/home-four/HomeFourMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "David Vidovic - Web Developer | Full Stack Developer Portfolio",
    description: "Professional web developer specializing in modern web technologies. Explore my portfolio showcasing full-stack development projects, web applications, and innovative solutions.",
    keywords: ["web developer", "full stack developer", "JavaScript", "React", "Next.js", "TypeScript", "Node.js", "frontend developer", "backend developer", "portfolio", "web design", "web development", "software engineer"],
    openGraph: {
        title: "David Vidovic - Web Developer Portfolio",
        description: "Professional web developer specializing in modern web technologies and full-stack development.",
        url: "https://davidvidovic.com",
        siteName: "David Vidovic",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "David Vidovic - Web Developer",
        description: "Professional web developer portfolio",
    },
};

export default function Home() {
  return (
    <HomeFourMain />
  );
}
