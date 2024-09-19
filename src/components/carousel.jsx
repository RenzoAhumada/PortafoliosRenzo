import { useState } from "react";
import fotoCruzEHijos from './images/cruzEHijos.JPG';
import fotoCruzEHijosMobile from './images/cruzEHijosMobile.JPG'

const Carousel = () => {
  const images = [
    fotoCruzEHijos,
    fotoCruzEHijosMobile,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative h-64 overflow-hidden rounded-lg">
        <img
          alt="Carousel content"
          className="object-cover object-center w-full h-full"
          src={images[currentImage]}
        />
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={prevImage}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;

