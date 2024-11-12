import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: (direction) => ({ opacity: 0, x: direction === 1 ? 300 : -300 }),
  visible: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction === 1 ? -300 : 300 }),
};

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <AnimatePresence custom={direction}>
        <motion.img
          key={images[currentImage]}
          src={images[currentImage]}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={direction}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={prevSlide}
      >
        Anterior
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={nextSlide}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Carousel;


