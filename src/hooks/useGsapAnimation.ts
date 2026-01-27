"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

// Award Hover Reveal animation
export const useImageHoverReveal = () => {
  useEffect(() => {
    // Only run this effect on client side
    if (typeof window === 'undefined') return;

    const hoverItems = document.querySelectorAll<HTMLElement>(".hover-reveal-item");

    const moveImage = (e: MouseEvent, item: HTMLElement) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Using children[1] as in your original version
      const image = item.children[1] as HTMLElement;
      if (image) {
        image.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Properly typed event listener
    const handleMouseMove = (e: Event) => {
      moveImage(e as MouseEvent, e.currentTarget as HTMLElement);
    };

    hoverItems.forEach((item) => {
      item.addEventListener("mousemove", handleMouseMove as EventListener);
    });

    return () => {
      hoverItems.forEach((item) => {
        item.removeEventListener("mousemove", handleMouseMove as EventListener);
      });
    };
  }, []);
};

// home award animation
export const homeAwardAnimation = () => {
  const aw = gsap.matchMedia();
  aw.add("(min-width: 991px)", () => {
    const awardItems = document.querySelectorAll('.design-award-item');
    awardItems.forEach(function (div) {
      div.addEventListener('mouseenter', function () {
        gsap.to(div, {
          width: '100%',
          duration: 2,
          ease: 'expo.out'
        });
      });
      div.addEventListener('mouseleave', function () {
        gsap.to(div, {
          width: '70%',
          duration: 2,
          ease: 'expo.out'
        });
      });
    })
  });
};

// project animation
export const projectAnimation = () => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 767px)", () => {
    const panels = document.querySelectorAll<HTMLDivElement>(".des-portfolio-panel");

    panels.forEach((panel) => {
      // Initial panel state
      gsap.set(panel, {
        scale: 0.5,
        rotateZ: -20,
        transformOrigin: "center center",
        zIndex: 1,
      });

      // Animate panel
      gsap.to(panel, {
        scale: 1,
        rotateZ: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: panel,
          start: "top 90%",
          end: "top 0",
          scrub: 1,
          markers: false,
        },
      });

      const thumb = panel.querySelector<HTMLDivElement>(".tp-project-2-thumb");
      const img = thumb?.querySelector<HTMLImageElement>(".img");

      if (thumb && img) {
        // Initial img state
        gsap.set(img, {
          scale: 0.7,
          rotateZ: 0,
          transformOrigin: "center center",
          willChange: "transform",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });

        // Animate thumb
        gsap.to(thumb, {
          scale: 1.8,
          rotateZ: 10,
          transformOrigin: "center center",
          willChange: "transform",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });

        // Animate img rotation
        gsap.to(img, {
          rotateZ: -10,
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 0",
            scrub: true,
            markers: false,
          },
        });
      }
    });
  });
};

// home three title character split animation
export const revealTextAnim = () => {
  const splitTypes = document.querySelectorAll(".reveal-text");

  splitTypes.forEach((char) => {
    const text = new SplitType(char as HTMLElement, { types: "words,chars" });

    gsap.fromTo(
      text.chars,
      { className: "char" },
      {
        className: "char revealed",
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false
        },
        stagger: 0.05,
      }
    );
  });
};

//home five hero video animation
export const heroVideoAnimation = () => {
  const videoWrap = document.querySelector<HTMLDivElement>(".bf-hero-2-video-wrap");
  const video = document.querySelector<HTMLDivElement>(".bf-hero-2-video");

  if (!videoWrap || !video) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoWrap,
        start: "top top",
        end: "bottom+=1000 top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(video, {
      width: "100vw",
      height: "100vh",
      bottom: 0,
      left: 0,
      borderRadius: 0,
      ease: "power2.out",
    }, 0);
  });
}

// moving-text
export const movingText = () => {
  gsap.utils.toArray<HTMLDivElement>('.moving-text').forEach((section, index) => {
    const w = section.querySelector<HTMLDivElement>('.wrapper-text');
    if (!w) return;

    const widthDiff = section.offsetWidth - w.scrollWidth;
    const [x, xEnd] = (index % 2) ? [widthDiff, 0] : [0, widthDiff];

    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.1,
      }
    });
  });
}

// 36 .bf-portfolio-vp-rotate-wrap
export const portfolioAnimation = () => {
  const mm = gsap.matchMedia();
  if (document.querySelectorAll<HTMLDivElement>('.bf-portfolio-vp-rotate-wrap')) {
    mm.add("(min-width: 1200px)", () => {
      document.querySelectorAll<HTMLDivElement>('.bf-portfolio-vp-rotate-wrap').forEach(item => {
        const leftItem = item.querySelector<HTMLDivElement>('.bf-portfolio-vp-rotate-item-1');
        const rightItem = item.querySelector<HTMLDivElement>('.bf-portfolio-vp-rotate-item-2');
        gsap.set(leftItem, { x: -300, y: 200, rotate: 30, opacity: 0.6, ease: "none" });
        gsap.set(rightItem, { x: 300, y: 200, rotate: -30, opacity: 0.6, ease: "none" });

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          }
        });
        tl.to([leftItem, rightItem], {
          x: 0, y: 0, rotate: 0, opacity: 1, ease: "none"
        })
          .to(leftItem, { x: -300, y: -200, rotate: -30, opacity: 0.6 })
          .to(rightItem, { x: 300, y: -200, rotate: 30, opacity: 0.6 }, "<");
      });
    });
  }
}

// Portfolio Animation
export const homeFourPortfolioAnim = () => {
  let device_width = window.innerWidth;
  if (device_width > 767) {
    const portfolioArea = document.querySelector<HTMLDivElement>(".bf-portfolio-sticky-area");
    const portfolioText = document.querySelector<HTMLDivElement>(".bf-portfolio-text-sticky");

    if (portfolioArea && portfolioText) {
      let portfolioline = gsap.timeline({
        scrollTrigger: {
          trigger: portfolioArea,
          start: "top center-=200",
          pin: portfolioText,
          end: "bottom bottom+=10",
          markers: false,
          pinSpacing: false,
          scrub: 1,
        }
      });

      portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
      portfolioline.to(portfolioText, { scale: 0.6, duration: 1 });
      portfolioline.to(portfolioText, { scale: 0.6, duration: 1 }, "+=2");

      gsap.to(portfolioText, {
        scrollTrigger: {
          trigger: portfolioArea,
          start: "top center-=100",
          end: "bottom bottom+=10",
          scrub: 1
        },
      });
    }
  }
}

// Home Four Portfolio Animation
export const homeFourPortfolioAnimTwo = () => {
  if (typeof window === "undefined") return;
  const projects = Array.from(
    document.querySelectorAll<HTMLElement>(".project-item.project-style-3.hover-play")
  );

  if (projects.length === 0) return;

  // Base setup
  projects.forEach((project) => {
    project.style.perspective = "1500px";
    project.style.transformStyle = "preserve-3d";
    project.style.overflow = "visible";
  });

  const updateTransform = () => {
    const windowHeight = window.innerHeight;

    projects.forEach((project) => {
      const inner = project.querySelector<HTMLElement>(".project-item-inner");
      if (!inner) return;

      const img = inner.querySelector<HTMLImageElement>(
        ".bf-portfolio-post-thumbnail img"
      );

      // Mobile reset
      if (window.innerWidth < 1024) {
        inner.style.transform = "none";
        inner.style.transition = "none";
        if (img) {
          img.style.transform = "none";
          img.style.transition = "none";
        }
        return;
      }

      // Animation calculation
      const rect = project.getBoundingClientRect();
      let percent =
        (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      percent = Math.max(-1, Math.min(percent, 1));

      const rotateX = 30 * -percent + 0.756;
      const scale = 0.996976 - 0.105 * Math.abs(percent);

      // Apply 3D effect
      inner.style.transform = `rotateX(${rotateX.toFixed(
        3
      )}deg) scale3d(${scale.toFixed(6)}, ${scale.toFixed(6)}, 1)`;
      inner.style.transition =
        "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
      inner.style.transformStyle = "preserve-3d";
      inner.style.willChange = "transform, opacity";

      // Apply image movement
      if (img) {
        const translateY = 20 * percent;
        img.style.transform = `translateY(${translateY.toFixed(2)}px)`;
        img.style.transition =
          "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
        img.style.willChange = "transform";
      }
    });
  };

  // Run initially
  updateTransform();

  // Scroll/resize handling with rAF
  let ticking = false;
  const handleScrollOrResize = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateTransform();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScrollOrResize);
  window.addEventListener("resize", handleScrollOrResize);

  // Cleanup
  return () => {
    window.removeEventListener("scroll", handleScrollOrResize);
    window.removeEventListener("resize", handleScrollOrResize);
  };
};

//Home 6 scroll-based horizontal marquee movement.
export const homeSixScrollMarqueeAnim = () => {
  const mm = gsap.matchMedia();
  const animeItems = document.querySelectorAll<HTMLFormElement>('.bf-item-anime');
  const animeMdItems = document.querySelectorAll<HTMLFormElement>('.bf-item-anime-md');
  const animeInnerItems = document.querySelectorAll<HTMLFormElement>('.bf-item-anime-inner');

  if (animeItems.length > 0) {
    mm.add("(min-width: 1200px)", () => {
      gsap.set('.bf-item-anime.marque', {
        x: '-23%'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.bf-hero-anime-area',
          start: '-100 10%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
        .to('.bf-item-anime.marque', {
          x: '100%'
        });
    });
  }

  if (animeMdItems.length > 0) {
    mm.add("(min-width: 1200px)", () => {
      gsap.set('.bf-item-anime-md.marque', {
        x: '40%'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.bf-hero-anime-area',
          start: '-100 20%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
        .to('.bf-item-anime-md.marque', {
          x: '-100%'
        });
    });
  }

  if (animeInnerItems.length > 0) {
    mm.add("(min-width: 1200px)", () => {
      gsap.set('.bf-item-anime-inner.marque', {
        x: '-8%'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.bf-hero-anime-area',
          start: '0 10%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
        .to('.bf-item-anime-inner.marque', {
          x: '50%'
        });
    });
  }
}
//home six portfolio animation
export const homeSixPortfolioAnim = () => {
  if (document.querySelector('.bf-portfolio-3-item')) {
    const pw = gsap.matchMedia();
    pw.add("(min-width: 991px)", () => {
      gsap.set('.bf-portfolio-3-thumb.item-1', { x: 400, rotate: 10, });
      gsap.set('.bf-portfolio-3-thumb.item-2', { x: -400, rotate: -10, });
      document.querySelectorAll('.bf-portfolio-3-item').forEach(item => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 100%',
            end: 'bottom center',
            scrub: 1,
          }
        });
        tl.to(item.querySelector('.bf-portfolio-3-thumb.item-1'), { x: 0, rotate: 0 })
          .to(item.querySelector('.bf-portfolio-3-thumb.item-2'), { x: 0, rotate: 0 }, 0);
      });
    });
  }
};
//title scroll animation
export const homeSixTitleScrollAnim = () => {
  gsap.matchMedia().add("(min-width: 991px)", () => {
    document.querySelectorAll(".title-box").forEach((box) => {
      const rightElements = box.querySelectorAll('.tp-text-right-scroll');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: "top 100%",
          end: "bottom top",
          scrub: true,
          markers: false,
        }
      });
      if (rightElements.length) {
        tl.fromTo(rightElements, { xPercent: 50 }, { xPercent: -20, ease: "power1.out" }, 0);
      }
    });
  })
}

// tp-instagram-area
export const homeSixInstagramAnim = () => {
  const mm = gsap.matchMedia();
  const instagramItems = document.querySelectorAll<HTMLFormElement>('.bf-instagram-area');
  if (instagramItems.length > 0) {
    mm.add("(min-width: 1200px)", () => {
      let tp_instagram_3 = gsap.timeline({
        // put duration as a timeline default instead of inside scrollTrigger
        defaults: { duration: 3 },
        scrollTrigger: {
          trigger: ".bf-instagram-area",
          start: "top 30%",
          pin: true,
          markers: false,
          scrub: 1,
          pinSpacing: false,
          end: "bottom 100%",
        }
      });
      tp_instagram_3.to(".bf-instagram-thumb img", {
        width: "580px",
        height: "580px",
        borderRadius: "10px",
      });

    });
  }
}

export const initPortfolioRevealingSlider = (): void => {
  // Use HTMLElement instead of HTMLFormElement
  const slides = document.querySelectorAll<HTMLElement>(".tp-portfolio-revealing-slide");
  const controls = document.querySelectorAll<HTMLElement>(".tp-portfolio-revealing-slider-control");
  const numOfSlides = slides.length;
  const slidingAT = 1300;
  let slidingBlocked = false;

  if (!slides.length) return;

  slides.forEach((el, index) => {
    const i = index + 1;
    el.classList.add(`tp-portfolio-revealing-slide-${i}`);
    el.dataset.slide = String(i);
  });

  slides[0].classList.add("s-active");

  controls.forEach((el) => {
    el.addEventListener("click", controlClickHandler as EventListener);
  });

  window.addEventListener("wheel", (e: WheelEvent) => {
    if (slidingBlocked) return;
    if (e.deltaY > 0) changeSlide(true);
    else if (e.deltaY < 0) changeSlide(false);
  });

  function controlClickHandler(this: HTMLElement, _e: Event) {
    if (slidingBlocked) return;
    const isRight = this.classList.contains("m-right");
    changeSlide(isRight, this);
  }

  function changeSlide(isRight: boolean, controlEl?: HTMLElement) {
    slidingBlocked = true;

    const curActive = document.querySelector<HTMLElement>(".tp-portfolio-revealing-slide.s-active");
    if (!curActive) {
      console.warn("No active slide found.");
      slidingBlocked = false;
      return;
    }

    let index = Number(curActive.dataset.slide);
    isRight ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;

    const newActive = document.querySelector<HTMLElement>(
      `.tp-portfolio-revealing-slide-${index}`
    );
    if (!newActive) {
      slidingBlocked = false;
      return;
    }

    if (controlEl) controlEl.classList.add("a-rotation");

    curActive.classList.remove("s-active", "s-active-prev");
    document.querySelector(".tp-portfolio-revealing-slide.s-prev")?.classList.remove("s-prev");

    newActive.classList.add("s-active");
    if (!isRight) newActive.classList.add("s-active-prev");

    let prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;
    document
      .querySelector(`.tp-portfolio-revealing-slide-${prevIndex}`)
      ?.classList.add("s-prev");

    const direction = isRight ? 1 : -1;
    const currentHeading = curActive.querySelector<HTMLElement>(
      ".tp-portfolio-revealing-slide-heading"
    );
    const nextHeading = newActive.querySelector<HTMLElement>(
      ".tp-portfolio-revealing-slide-heading"
    );

    if (currentHeading && nextHeading) {
      gsap
        .timeline()
        .to(
          currentHeading,
          {
            scaleX: 2,
            xPercent: 20 * direction,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .fromTo(
          nextHeading,
          { scaleX: 2, xPercent: -10 * direction },
          { scaleX: 1, xPercent: 0, duration: 1, ease: "power3.inOut" },
          0
        );
    }

    setTimeout(() => {
      if (controlEl) controlEl.classList.remove("a-rotation");
      slidingBlocked = false;
    }, slidingAT * 0.75);
  }
};

// service hero marque animation
export const serviceTitleMarqueAnim = () => {
  const mm = gsap.matchMedia();
  const marqueItems = document.querySelectorAll<HTMLFormElement>('.bf-item-anime-inner');
  if (marqueItems.length > 0) {
    mm.add("(min-width: 1200px)", () => {
      gsap.set('.bf-item-anime-inner.marque', {
        x: '-8%'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '.bf-hero-anime-area',
          start: '0 10%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
        .to('.bf-item-anime-inner.marque', {
          x: '50%'
        });
    });
  }
}