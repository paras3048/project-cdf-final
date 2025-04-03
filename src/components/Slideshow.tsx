// Import necessary React hooks
import React, { useState, useEffect } from 'react';

// Define slide data structure
const slides = [
  {
    image: "/images/slides/1.jpg",
    title: "A Student-Run Incubator for Social Impact",
    description: "Innovating for a better tomorrow"
  },
  {
    image: "/images/slides/1.png",
    title: "Driving Change",
    description: "Creating sustainable solutions"
  },
  {
    image: "/images/slides/3.jpg",
    title: "Building the Future",
    description: "Together we achieve more"
  }
];

export default function Slideshow() {
  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to automatically advance slides
  useEffect(() => {
    // Set up automatic slide transition
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    // Main slideshow container
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Map through slides and render each one */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Individual slide container */}
          <div className="relative w-full h-full">
            {/* Slide background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Slide content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                {/* Slide title */}
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                {/* Slide description */}
                <p className="text-lg md:text-xl lg:text-2xl drop-shadow-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}