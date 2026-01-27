import { Autoplay, FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

//brand slide swiper functionality 
export const textMarqueeSwiperParams: SwiperOptions = {
    modules: [Autoplay, FreeMode],
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    allowTouchMove: false,
    spaceBetween: 80,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// 24. tp-portfolio-mix-slider
export const portfolioMixSlider: SwiperOptions = {
  modules: [Navigation, Pagination, Mousewheel],
  direction: "horizontal",
  speed: 1200,
  loop: false,
  mousewheel: true,
  navigation: {
    nextEl: ".tp-portfolio-mix-button-next",
    prevEl: ".tp-portfolio-mix-button-prev",
  },
  pagination: {
    el: ".tp-portfolio-mix-pagination",
    clickable: true,
  },
};