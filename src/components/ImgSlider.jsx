import React, { useState } from "react";

const ImgSlider = () => {
  // List of images
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e22ff753131197.596c4c560ae3b.jpg",
    "https://th.bing.com/th/id/OIP.QPL0IrzYgnlKeKV6cKugIgHaK-?rs=1&pid=ImgDetMain",
    "https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2015/12/The-Hallow.jpg"
  ];

  // Current index of the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to handle Next and Previous clicks
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length); // Loop back to start
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length // Loop back to end
    );
  };

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Display the current image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
