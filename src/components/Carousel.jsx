import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/appereance-personalization-screen.jpg",
  "/assets/audio-engine-screen.jpg",
  "/assets/bulk-embed-screen.jpg",
  "/assets/customize-navigation-screen.jpg",
  "/assets/customize-navigation.jpg",
  "/assets/lyrics-provider-screen.jpg",
  "/assets/lyrics-screen.jpg",
  "/assets/radial-layout-screen.jpg",
  "/assets/settings-screen.jpg"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  const nextSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => { isAnimating.current = false; }, 600); // 600ms matches the framer-motion transition duration
  };

  const prevSlide = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => { isAnimating.current = false; }, 600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="interface" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            A Glance at{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-500 to-white">
              Perfection
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Immerse yourself in a beautiful, highly customizable interface built for modern audiophiles.
          </motion.p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[550px] md:h-[650px] flex items-center justify-center">
          {images.map((img, index) => {
            let position = "hidden";
            let zIndex = 0;
            
            if (index === currentIndex) {
              position = "center";
              zIndex = 10;
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
              position = "left";
              zIndex = 5;
            } else if (index === (currentIndex + 1) % images.length) {
              position = "right";
              zIndex = 5;
            }

            const variants = {
              center: { x: "0%", scale: 1, opacity: 1, filter: "brightness(100%) blur(0px)" },
              left: { x: "-75%", scale: 0.85, opacity: 0.6, filter: "brightness(40%) blur(2px)" },
              right: { x: "75%", scale: 0.85, opacity: 0.6, filter: "brightness(40%) blur(2px)" },
              hidden: { x: "0%", scale: 0.5, opacity: 0, filter: "brightness(0%) blur(10px)" },
            };

            return (
              <motion.div
                key={index}
                className="absolute w-[220px] md:w-[280px] aspect-[9/19] rounded-[2.5rem] bg-black p-2 border-2 border-neutral-800 shadow-2xl cursor-pointer"
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
                  src={img}
                  alt={`App screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-[2rem]"
                  draggable="false"
                />
              </motion.div>
            );
          })}

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2 flex-wrap max-w-md mx-auto">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
