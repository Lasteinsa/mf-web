import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { carouselData } from "../../../../constants/carousel-data";

const Carousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const nextSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  const prevSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselData.length) % carouselData.length,
    );
    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="interface"
      className="bg-bg-dark relative overflow-hidden py-24"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold md:text-5xl"
          >
            {t("carousel.title_1")}
            <span className="bg-linear-to-r from-neutral-500 to-white bg-clip-text text-transparent">
              {t("carousel.title_2")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            {t("carousel.description")}
          </motion.p>
        </div>

        <div className="relative mx-auto flex h-[550px] w-full max-w-5xl items-center justify-center md:h-[650px]">
          {carouselData.map((item, index) => {
            let position = "hidden";
            let zIndex = 0;

            if (index === currentIndex) {
              position = "center";
              zIndex = 10;
            } else if (
              index ===
              (currentIndex - 1 + carouselData.length) % carouselData.length
            ) {
              position = "left";
              zIndex = 5;
            } else if (index === (currentIndex + 1) % carouselData.length) {
              position = "right";
              zIndex = 5;
            }

            const variants = {
              center: {
                x: "0%",
                scale: 1,
                opacity: 1,
                filter: "brightness(100%) blur(0px)",
              },
              left: {
                x: "-75%",
                scale: 0.85,
                opacity: 0.6,
                filter: "brightness(40%) blur(2px)",
              },
              right: {
                x: "75%",
                scale: 0.85,
                opacity: 0.6,
                filter: "brightness(40%) blur(2px)",
              },
              hidden: {
                x: "0%",
                scale: 0.5,
                opacity: 0,
                filter: "brightness(0%) blur(10px)",
              },
            };

            return (
              <motion.div
                key={index}
                className="absolute aspect-[9/19] w-[220px] cursor-pointer rounded-[2.5rem] border-neutral-800 bg-slate-50 p-2 md:w-[280px]"
                variants={variants}
                initial="hidden"
                animate={position}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{ zIndex }}
                onClick={() => {
                  if (position === "left") prevSlide();
                  else if (position === "right") nextSlide();
                }}
              >
                <img
                  src={item.image}
                  alt={`App screenshot ${index + 1}`}
                  className="h-full w-full rounded-[2rem] object-cover"
                  draggable="false"
                  loading="lazy"
                />
              </motion.div>
            );
          })}

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-full bg-slate-900/10 p-3 text-slate-900 backdrop-blur-md transition-colors hover:bg-slate-900/20 md:left-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-20 -translate-y-1/2 rounded-full bg-slate-900/10 p-3 text-slate-900 backdrop-blur-md transition-colors hover:bg-slate-900/20 md:right-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Active Caption */}
        <div className="mt-8 flex h-8 justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium tracking-wide text-slate-900/90"
            >
              {t(carouselData[currentIndex].labelKey)}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
          {carouselData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "w-6 bg-white" : "bg-slate-900/30 hover:bg-white/50"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
