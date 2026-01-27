
// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

import { heroVideoAnimation, homeAwardAnimation, homeFourPortfolioAnim, homeFourPortfolioAnimTwo, homeSixInstagramAnim, homeSixPortfolioAnim, homeSixScrollMarqueeAnim, homeSixTitleScrollAnim, movingText, portfolioAnimation, projectAnimation, revealTextAnim, serviceTitleMarqueAnim } from "@/hooks/useGsapAnimation";

export const animationConfig: Record<string, (() => void)[]> = {
    //home animation
    "/": [revealTextAnim, homeAwardAnimation],
    //home two animation
    "/home-two": [projectAnimation],
    //home two animation
    "/home-three": [revealTextAnim],
    //home four animation
    "/home-four": [homeFourPortfolioAnim, homeFourPortfolioAnimTwo, homeAwardAnimation, revealTextAnim],
    //home five animation
    "/home-five": [heroVideoAnimation, movingText, homeAwardAnimation, portfolioAnimation, revealTextAnim],
    //home six animation
    "/home-six": [homeSixScrollMarqueeAnim, revealTextAnim, homeSixTitleScrollAnim,
        homeSixPortfolioAnim, homeAwardAnimation, homeSixInstagramAnim],
    //About Us animation
    "/about-us": [revealTextAnim,homeAwardAnimation, homeSixInstagramAnim],
    //Service animation
    "/service": [serviceTitleMarqueAnim, projectAnimation],
};