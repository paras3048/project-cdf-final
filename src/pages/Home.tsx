import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import { Check, Quote } from 'lucide-react';

export default function Home() {
  const galleryImages = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
    "/images/gallery/7.png",
    "/images/gallery/8.png",
    "/images/gallery/9.png",
    "/images/gallery/10.png",
    "/images/gallery/11.png",
    "/images/gallery/12.png",
    "/images/gallery/13.png",
    "/images/gallery/14.png",
    "/images/gallery/15.png",
    "/images/gallery/16.png",
    "/images/gallery/17.png",
    "/images/gallery/18.png"
  ];

  return (
    <div className="w-full">
      <div className="w-full h-screen">
        <Slideshow />
      </div>

      {/* Welcome Section */}
      <div className="text-center py-20 px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">WELCOME TO CDF MAC CHAPTER</h1>
          <p className="text-xl text-gray-600 mb-8">Empowering Change, One Dream at a Time</p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-gray-600 text-lg leading-relaxed text-left">
                At the Connecting Dreams Foundation (CDF), Maharaja Agrasen College Chapter, we believe in transforming lives through sustainable development, innovation, and the power of young minds. We are committed to bridging the gap between challenges and solutions, enabling communities to achieve their dreams while creating opportunities for students to make a lasting impact.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/home/1.jpg"
                alt="Students collaborating"
                className="rounded-lg shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group aspect-square">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Size Images Section */}
      <div className="w-full">
        <img 
          src="/images/fullsize/1.png" 
          alt="Full-size image 1" 
          className="w-full h-auto object-cover"
        />
        <div className="h-4"></div> {/* Minor gap */}
        <img 
          src="/images/fullsize/2.png" 
          alt="Full-size image 2" 
          className="w-full h-auto object-cover"
        />
      </div>
      import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  "/images/logo/2.png",
  "/images/logo/3.png",
  "/images/logo/4.png",
  "/images/logo/5.png",
  "/images/logo/6.png",
  "/images/logo/7.png",
  "/images/logo/8.png",
  "/images/logo/9.png",
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveIndex((current) => (current + 1) % totalTestimonials);

    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };

  const previousTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setActiveIndex(
      (current) =>
        (current - 1 + totalTestimonials) % totalTestimonials
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };

  // Automatically change testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalTestimonials);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalTestimonials]);

  const getIndex = (offset: number) => {
    return (
      (activeIndex + offset + totalTestimonials) %
      totalTestimonials
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f8f6] py-20 md:py-24">

      {/* =========================================================
          BACKGROUND DESIGN
      ========================================================= */}

      {/* Purple contour-line pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#d8c7ef"
            strokeWidth="2"
          >
            <path d="M-100 120 C100 20 230 40 350 170 C470 300 570 290 700 170 C830 50 970 40 1100 160 C1230 280 1370 260 1540 130" />
            <path d="M-120 160 C80 60 210 80 330 210 C450 340 550 330 680 210 C810 90 950 80 1080 200 C1210 320 1350 300 1520 170" />
            <path d="M-130 205 C70 105 200 125 320 255 C440 385 540 375 670 255 C800 135 940 125 1070 245 C1200 365 1340 345 1510 215" />
            <path d="M-140 250 C60 150 190 170 310 300 C430 430 530 420 660 300 C790 180 930 170 1060 290 C1190 410 1330 390 1500 260" />

            <path d="M-120 590 C80 490 220 510 340 630 C460 750 580 740 700 620 C820 500 960 490 1080 610 C1200 730 1340 710 1540 580" />
            <path d="M-100 635 C100 535 240 555 360 675 C480 795 600 785 720 665 C840 545 980 535 1100 655 C1220 775 1360 755 1560 625" />
            <path d="M-80 680 C120 580 260 600 380 720 C500 840 620 830 740 710 C860 590 1000 580 1120 700 C1240 820 1380 800 1580 670" />
          </g>
        </svg>
      </div>

      {/* Blue abstract shape */}
      <div
        className="
          absolute
          -top-24
          right-[-100px]
          md:right-[-60px]
          w-[430px]
          md:w-[600px]
          h-[300px]
          md:h-[390px]
          bg-[#318bc1]
          rotate-[12deg]
          rounded-[35%_5%_30%_10%]
          pointer-events-none
        "
      />

      {/* Green abstract shape */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-[-100px]
          md:left-[-40px]
          w-[480px]
          md:w-[650px]
          h-[300px]
          md:h-[390px]
          bg-[#8bc21f]
          rotate-[-8deg]
          rounded-[10%_35%_5%_30%]
          pointer-events-none
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-semibold
              text-gray-900
              tracking-tight
            "
          >
            Testimonials
          </h2>

          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-[#5c438c]" />

        </div>

        {/* =======================================================
            CAROUSEL
        ======================================================= */}

        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousTestimonial}
            disabled={isAnimating}
            aria-label="Previous testimonial"
            className="
              absolute
              left-0
              md:left-2
              lg:left-6
              xl:left-10
              z-30

              flex
              items-center
              justify-center

              w-10
              h-10
              md:w-12
              md:h-12

              rounded-full
              bg-white

              border
              border-gray-200

              shadow-md

              text-gray-700

              transition-all
              duration-300

              hover:scale-110
              hover:shadow-lg
              hover:bg-gray-50

              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-full
              min-h-[430px]
              md:min-h-[560px]
            "
          >

            {/* ===================================================
                LEFT / PREVIOUS CARD
            =================================================== */}

            <div
              className="
                hidden
                lg:block

                absolute
                left-[4%]
                xl:left-[7%]

                w-[290px]
                xl:w-[320px]

                transition-all
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                opacity-55
                scale-[0.82]

                z-10
              "
            >
              <img
                src={testimonials[getIndex(-1)]}
                alt="Previous testimonial"
                className="
                  w-full
                  h-auto
                  block
                  rounded-2xl
                  shadow-lg
                "
              />
            </div>

            {/* ===================================================
                CENTER / ACTIVE CARD
            =================================================== */}

            <div
              key={activeIndex}
              className="
                relative
                w-[82vw]
                max-w-[430px]
                md:w-[430px]
                lg:w-[450px]

                z-20

                animate-[testimonialPop_900ms_cubic-bezier(0.22,1,0.36,1)]

                drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={testimonials[activeIndex]}
                alt={`Testimonial ${activeIndex + 1}`}
                className="
                  w-full
                  h-auto
                  block
                  rounded-2xl
                "
              />
            </div>

            {/* ===================================================
                RIGHT / NEXT CARD
            =================================================== */}

            <div
              className="
                hidden
                lg:block

                absolute
                right-[4%]
                xl:right-[7%]

                w-[290px]
                xl:w-[320px]

                transition-all
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                opacity-55
                scale-[0.82]

                z-10
              "
            >
              <img
                src={testimonials[getIndex(1)]}
                alt="Next testimonial"
                className="
                  w-full
                  h-auto
                  block
                  rounded-2xl
                  shadow-lg
                "
              />
            </div>

          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextTestimonial}
            disabled={isAnimating}
            aria-label="Next testimonial"
            className="
              absolute
              right-0
              md:right-2
              lg:right-6
              xl:right-10
              z-30

              flex
              items-center
              justify-center

              w-10
              h-10
              md:w-12
              md:h-12

              rounded-full
              bg-white

              border
              border-gray-200

              shadow-md

              text-gray-700

              transition-all
              duration-300

              hover:scale-110
              hover:shadow-lg
              hover:bg-gray-50

              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

        </div>

        {/* =======================================================
            DOT INDICATORS
        ======================================================= */}

        <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">

          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (!isAnimating) {
                  setActiveIndex(index);
                }
              }}
              aria-label={`Show testimonial ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-500

                ${
                  activeIndex === index
                    ? "w-8 bg-[#5c438c]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}

        </div>

      </div>

      {/* =========================================================
          ANIMATION
      ========================================================= */}

      <style>{`
        @keyframes testimonialPop {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(20px);
          }

          45% {
            opacity: 1;
            transform: scale(1.04) translateY(-5px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default TestimonialSection;
    </div>
  );
}
